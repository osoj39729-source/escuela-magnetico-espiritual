
import os
import glob

def deep_sanitize(file_path):
    print(f"Saneamiento profundo: {file_path}")
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()

    new_lines = []
    for line in lines:
        stripped = line.strip()
        # Procesar solo líneas que son entradas de objeto
        if stripped.startswith('"') and (stripped.endswith('",') or stripped.endswith('"')):
            first_q = line.find('"')
            last_q = line.rfind('"')
            content = line[first_q+1:last_q]
            suffix = line[last_q+1:]
            indent = line[:first_q]

            if '": "' in content:
                parts = content.split('": "', 1)
                key = parts[0]
                value = parts[1]
                # Escapar comillas internas (doble replace para no re-escapar lo ya escapado)
                clean_key = key.replace('\\"', '"').replace('"', '\\"')
                clean_value = value.replace('\\"', '"').replace('"', '\\"')
                new_lines.append(f'{indent}"{clean_key}": "{clean_value}"{suffix}')
            else:
                clean_content = content.replace('\\"', '"').replace('"', '\\"')
                new_lines.append(f'{indent}"{clean_content}"{suffix}')
        else:
            new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

# Aplicar a todos los contenidos
for cf in glob.glob(r'F:\trincado\src\data\contents\*_content.ts'):
    deep_sanitize(cf)

# Aplicar también a library.ts por si acaso
deep_sanitize(r'F:\trincado\src\data\library.ts')

print("BIBLIOTECA TOTALMENTE SANEADA.")
