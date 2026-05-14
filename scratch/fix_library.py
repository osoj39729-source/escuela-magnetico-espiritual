
import re
import sys

file_path = r'F:\trincado\src\data\library.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Match the pattern of a string in an array: "content",
    match = re.match(r'^(\s+")(.+)(",\s*)$', line)
    if match:
        prefix, content, suffix = match.groups()
        # Escape any double quotes inside 'content' that aren't already escaped
        # but be careful with the outer quotes.
        # Actually, replace any " with \"
        fixed_content = content.replace('"', '\\"')
        new_lines.append(f'{prefix}{fixed_content}{suffix}')
    else:
        new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
