
import os
import re

file_path = r'F:\trincado\src\data\contents\filosof-a-austera-racional_content.ts'

if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    for line in lines:
        stripped = line.strip()
        # Identificar líneas de datos:   "key": "value", o "key": "value"
        if stripped.startswith('"') and (stripped.endswith('",') or stripped.endswith('"')):
            # Encontrar el primer y último quote
            first_q = line.find('"')
            last_q = line.rfind('"')
            content = line[first_q+1:last_q]
            suffix = line[last_q+1:]
            indent = line[:first_q]

            if '": "' in content:
                # Separar por el separador real del objeto
                parts = content.split('": "', 1)
                key = parts[0]
                value = parts[1]
                # Escapar comillas internas
                clean_key = key.replace('\\"', '"').replace('"', '\\"')
                clean_value = value.replace('\\"', '"').replace('"', '\\"')
                new_lines.append(f'{indent}"{clean_key}": "{clean_value}"{suffix}')
            else:
                # Línea sin separador (posiblemente corrupta o valor simple)
                clean_content = content.replace('\\"', '"').replace('"', '\\"')
                new_lines.append(f'{indent}"{clean_content}"{suffix}')
        else:
            # Líneas de estructura (export, {}, etc)
            new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print("Saneamiento de alta densidad completado en FAR.")
else:
    print("FAR no encontrado.")
