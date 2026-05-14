
import re
import os

file_path = r'F:\trincado\src\data\library.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Capturar líneas que son elementos de array: [indent]"[contenido]"[coma]
    match = re.match(r'^(\s+)"(.*)"(,?)$', line)
    if match:
        indent, content, suffix = match.groups()
        
        # Si el contenido tiene ": " y empieza por una palabra de clave, es un objeto, no un elemento de array
        # Ej: "id": "...", "title": "..."
        if re.search(r'^[a-zA-Z]+":\s*"', content):
            new_lines.append(line)
        else:
            # Es un elemento de array. Escapar todas las comillas internas.
            fixed_content = content.replace('\\"', '"').replace('"', '\\"')
            new_lines.append(f'{indent}"{fixed_content}"{suffix}\n')
    else:
        new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Saneamiento total de library.ts completado.")
