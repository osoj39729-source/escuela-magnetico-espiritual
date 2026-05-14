
import re
import os
import glob

def sanitize_line(line):
    stripped = line.strip()
    if not stripped.startswith('"'):
        return line
        
    # Encontrar la primera y la última comilla
    first_q = line.find('"')
    last_q = line.rfind('"')
    
    if first_q == -1 or last_q == -1 or first_q == last_q:
        return line
        
    indent = line[:first_q]
    content = line[first_q+1 : last_q]
    suffix = line[last_q+1:]
    
    # REGLA DE ORO: Si el contenido termina en \, es un escape accidental de la comilla de cierre
    if content.endswith('\\'):
        content = content[:-1]
        
    # Ahora, manejamos si es un Key-Value o un Valor simple
    if '": "' in content:
        parts = content.rsplit('": "', 1)
        key, value = parts
        # Limpiar y re-escapar
        clean_key = key.replace('\\"', '"').replace('"', '\\"')
        clean_value = value.replace('\\"', '"').replace('"', '\\"')
        return f'{indent}"{clean_key}": "{clean_value}"{suffix}'
    else:
        # Valor simple (índice o contenido plano)
        clean_content = content.replace('\\"', '"').replace('"', '\\"')
        return f'{indent}"{clean_content}"{suffix}'

def process_file(file_path):
    print(f"Normalizando: {file_path}")
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    new_lines = []
    for line in lines:
        if line.strip().startswith('export') or line.strip() in ['{', '}', '};', '];', '[']:
            new_lines.append(line)
        else:
            new_lines.append(sanitize_line(line))
            
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

# Ejecutar en library.ts
process_file(r'F:\trincado\src\data\library.ts')

# Ejecutar en contenidos
for cf in glob.glob(r'F:\trincado\src\data\contents\*_content.ts'):
    process_file(cf)

print("Normalización terminada.")
