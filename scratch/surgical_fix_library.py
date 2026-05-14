
import re
import os

file_path = r'F:\trincado\src\data\library.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def fix_string(match):
    full_match = match.group(0)
    # Check if it's a key-value pair "key": "value"
    kv_match = re.match(r'^(\s*"[^"]+"):\s*"(.*)"(,?)$', full_match)
    if kv_match:
        key_part, value_content, suffix = kv_match.groups()
        # Escape quotes in value_content
        fixed_value = value_content.replace('"', '\\"')
        return f'{key_part}: "{fixed_value}"{suffix}'
    
    # Check if it's an array element "value",
    array_match = re.match(r'^(\s*)"(.*)"(,?)$', full_match)
    if array_match:
        indent, value_content, suffix = array_match.groups()
        # Escape quotes in value_content
        fixed_value = value_content.replace('"', '\\"')
        return f'{indent}"{fixed_value}"{suffix}'
    
    return full_match

# This is tricky because a single line might have multiple strings or be part of a multi-line thing.
# But library.ts is mostly one-string-per-line.

lines = content.splitlines()
new_lines = []
for line in lines:
    # Try to match the common patterns
    # Pattern 1: Indent + "key": "value",
    # Pattern 2: Indent + "value",
    # Pattern 3: Indent + "value"
    
    if line.strip().startswith('"') and (line.strip().endswith(',') or line.strip().endswith('"')):
        # It's likely a string line
        if ':' in line and not line.strip().startswith('['):
            # Key-Value pair?
            parts = line.split(':', 1)
            if len(parts) == 2:
                key_part = parts[0]
                value_part = parts[1].strip()
                if value_part.startswith('"'):
                    # Value is a string
                    # Strip the outer quotes and comma
                    v_content = value_part[1:]
                    suffix = ""
                    if v_content.endswith(','):
                        v_content = v_content[:-1].strip()
                        suffix = ","
                    if v_content.endswith('"'):
                        v_content = v_content[:-1]
                    
                    fixed_v = v_content.replace('\\"', '"').replace('"', '\\"')
                    new_lines.append(f'{key_part}: "{fixed_v}"{suffix}')
                    continue
        else:
            # Array element?
            indent = line[:line.find('"')]
            v_part = line.strip()
            if v_part.startswith('"'):
                v_content = v_part[1:]
                suffix = ""
                if v_content.endswith(','):
                    v_content = v_content[:-1].strip()
                    suffix = ","
                if v_content.endswith('"'):
                    v_content = v_content[:-1]
                
                fixed_v = v_content.replace('\\"', '"').replace('"', '\\"')
                new_lines.append(f'{indent}"{fixed_v}"{suffix}')
                continue
                
    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))
