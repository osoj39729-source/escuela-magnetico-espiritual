
import re
import os

file_path = r'F:\trincado\src\data\library.ts'

if not os.path.exists(file_path):
    print("Archivo no encontrado")
    exit(1)

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Patrón: Espacios + " + número + : + texto + " + opcionalmente coma
    # Usamos una regex que capture el contenido entre las comillas externas
    match = re.search(r'^(\s+)"(\d+: .*)"(,?)$', line)
    if match:
        indent = match.group(1)
        content = match.group(2)
        comma = match.group(3)
        
        # Limpiar escapes previos y re-escapar todo lo interno
        # Queremos que todas las comillas dentro de 'content' sean \"
        fixed_content = content.replace('\\"', '"').replace('"', '\\"')
        new_lines.append(f'{indent}"{fixed_content}"{comma}\n')
    else:
        # Si no es un elemento de índice, lo dejamos igual para no romper los IDs o Títulos
        new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Saneamiento de library.ts completado con Rigor Murphy.")
