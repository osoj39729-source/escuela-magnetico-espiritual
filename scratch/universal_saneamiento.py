
import re
import os
import glob

def sanitize_json_file(file_path):
    print(f"Saneando: {file_path}")
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    for line in lines:
        # Detectar si es una línea de exportación o apertura/cierre de objeto
        if line.strip().startswith('export') or line.strip() in ['{', '}', '};', '];', '[']:
            new_lines.append(line)
            continue
            
        # Intentar detectar el patrón "Clave": "Valor"
        # Buscamos el ": " que divide la clave del valor. 
        # En estos archivos suele ser ": " precedido por una comilla y seguido por otra.
        kv_match = re.match(r'^(\s*)"(.*)":\s*"(.*)"(,?)$', line)
        if kv_match:
            indent, key, value, suffix = kv_match.groups()
            # Escapar comillas internas en clave y valor (si no están escapadas)
            fixed_key = key.replace('\\"', '"').replace('"', '\\"')
            fixed_value = value.replace('\\"', '"').replace('"', '\\"')
            new_lines.append(f'{indent}"{fixed_key}": "{fixed_value}"{suffix}\n')
            continue
            
        # Intentar detectar el patrón de elemento de array "Valor"
        a_match = re.match(r'^(\s*)"(.*)"(,?)$', line)
        if a_match:
            indent, content, suffix = a_match.groups()
            fixed_content = content.replace('\\"', '"').replace('"', '\\"')
            new_lines.append(f'{indent}"{fixed_content}"{suffix}\n')
            continue
            
        new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

# Sanear library.ts
sanitize_json_file(r'F:\trincado\src\data\library.ts')

# Sanear todos los archivos de contenido
content_files = glob.glob(r'F:\trincado\src\data\contents\*_content.ts')
for cf in content_files:
    sanitize_json_file(cf)

print("Saneamiento universal completado.")
