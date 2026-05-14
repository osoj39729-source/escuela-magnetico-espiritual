
import os

file_path = r'F:\trincado\src\data\contents\filosof-a-austera-racional_content.ts'

if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    total = len(lines)
    for i, line in enumerate(lines):
        stripped = line.strip()
        # Si la línea es una entrada de objeto y no tiene coma, y la siguiente es otra entrada, añadir coma
        if stripped.startswith('"') and not stripped.endswith(',') and not stripped.endswith('{'):
            # Verificar si la siguiente línea (ignorando vacías) empieza con una comilla
            next_line_idx = i + 1
            is_last = True
            while next_line_idx < total:
                if lines[next_line_idx].strip():
                    if lines[next_line_idx].strip().startswith('"'):
                        is_last = False
                    break
                next_line_idx += 1
            
            if not is_last:
                # Añadir la coma faltante
                line = line.rstrip() + ',\n'
        
        new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print("Sutura de comas completada en FAR content.")
else:
    print("Archivo no encontrado.")
