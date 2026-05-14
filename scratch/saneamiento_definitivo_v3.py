
import os
import glob

def repair_and_sanitize(file_path):
    print(f"Reparando estructura y saneando: {file_path}")
    with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    
    lines = content.splitlines()
    new_lines = []
    buffer = ""
    
    # FASE 1: Unificar líneas rotas
    for line in lines:
        if line.strip().startswith('export') or line.strip() in ['{', '}', '};', '];', '[']:
            if buffer:
                new_lines.append(buffer)
                buffer = ""
            new_lines.append(line)
            continue
            
        if line.strip().startswith('"'):
            if buffer:
                new_lines.append(buffer)
            buffer = line
        else:
            if buffer:
                # Unir con escape de nueva línea
                buffer += "\\n" + line.strip()
            else:
                new_lines.append(line)
    if buffer:
        new_lines.append(buffer)
        
    # FASE 2: Sanear comillas internas en las líneas unificadas
    final_lines = []
    for line in new_lines:
        stripped = line.strip()
        if stripped.startswith('"'):
            # Encontrar el separador de objeto ": "
            # Usamos una técnica robusta: el divisor es la última secuencia ": " que divide dos bloques entre comillas
            if '": "' in line:
                first_q = line.find('"')
                last_q = line.rfind('"')
                indent = line[:first_q]
                suffix = line[last_q+1:]
                
                # Extraer lo que hay entre las comillas exteriores
                inner = line[first_q+1:last_q]
                # Separar por el divisor real ": "
                parts = inner.split('": "', 1)
                key = parts[0]
                value = parts[1]
                
                # Limpiar y re-escapar
                clean_key = key.replace('\\"', '"').replace('"', '\\"')
                clean_value = value.replace('\\"', '"').replace('"', '\\"')
                
                final_lines.append(f'{indent}"{clean_key}": "{clean_value}"{suffix}\n')
            else:
                # Es un elemento de array o una línea de datos simple
                first_q = line.find('"')
                last_q = line.rfind('"')
                if first_q != -1 and last_q != -1 and first_q != last_q:
                    indent = line[:first_q]
                    inner = line[first_q+1:last_q]
                    suffix = line[last_q+1:]
                    clean_inner = inner.replace('\\"', '"').replace('"', '\\"')
                    final_lines.append(f'{indent}"{clean_inner}"{suffix}\n')
                else:
                    final_lines.append(line + '\n')
        else:
            final_lines.append(line + '\n')
            
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(final_lines)

# Aplicar a TODOS los archivos de datos
for cf in glob.glob(r'F:\trincado\src\data\contents\*_content.ts'):
    repair_and_sanitize(cf)
repair_and_sanitize(r'F:\trincado\src\data\library.ts')

print("SANEAMIENTO ESTRUCTURAL COMPLETADO.")
