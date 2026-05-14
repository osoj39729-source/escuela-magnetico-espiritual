
import os

file_path = r'F:\trincado\src\data\contents\filosof-a-austera-racional_content.ts'

if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Estrategia: Reparar saltos de línea literales dentro de los valores de las entradas
    # Una entrada empieza con   " y termina con ", o " (seguido de opcional coma)
    # Vamos a usar una lógica de buffer para unir líneas que no terminan correctamente
    lines = content.splitlines()
    new_lines = []
    buffer = ""
    
    for line in lines:
        if line.strip().startswith('export') or line.strip() in ['{', '}', '};', '];', '[']:
            if buffer:
                new_lines.append(buffer)
                buffer = ""
            new_lines.append(line)
            continue
            
        if not buffer:
            if line.strip().startswith('"'):
                # Podría ser el inicio de una entrada
                # Si termina en ", o " es una línea completa
                if line.strip().endswith('",') or line.strip().endswith('"'):
                    new_lines.append(line)
                else:
                    # Es una línea rota, empezar buffer
                    buffer = line
            else:
                # Es una línea suelta, añadir a la anterior si hay algo en buffer
                new_lines.append(line)
        else:
            # Tenemos algo en el buffer, unir con escape \n
            buffer += " \\n " + line.strip()
            if buffer.strip().endswith('",') or buffer.strip().endswith('"'):
                new_lines.append(buffer)
                buffer = ""
    
    if buffer:
        new_lines.append(buffer)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))
    print("Reparación de saltos de línea literales completada.")
else:
    print("Archivo FAR no encontrado.")
