
import os
import re
import glob

def atomic_multi_line_fix(path):
    print(f"Aplicando Saneamiento Atómico Multi-línea a: {path}")
    with open(path, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    
    # 1. Extraer el cuerpo del objeto
    start_idx = content.find('{')
    end_idx = content.rfind('}')
    if start_idx == -1 or end_idx == -1: return
        
    header = content[:start_idx+1]
    body = content[start_idx+1:end_idx]
    footer = content[end_idx:]
    
    # 2. Parser de estados para escapar saltos de línea INTERNOS pero mantener los EXTERNOS
    new_body = ""
    i = 0
    in_string = False
    while i < len(body):
        char = body[i]
        if char == '"':
            # Verificar si está escapada
            is_escaped = False
            j = i - 1
            while j >= 0 and body[j] == '\\':
                is_escaped = not is_escaped
                j -= 1
            if not is_escaped:
                in_string = not in_string
            new_body += '"'
        elif char == '\n':
            if in_string:
                new_body += '\\n' # Escapar si está dentro de un string
            else:
                new_body += '\n'   # Mantener si es estructural (entre entradas)
        elif char == '\r':
            pass # Limpieza de retornos de carro
        else:
            new_body += char
        i += 1

    # 3. Procesar línea por línea para escapes de comillas internas
    lines = new_body.splitlines()
    final_lines = []
    for line in lines:
        stripped = line.strip()
        # Una línea válida de entrada debe tener ": "
        if stripped.startswith('"') and '": "' in line:
            parts = line.rsplit('": "', 1)
            indent = line[:line.find('"')]
            key = parts[0].strip().strip('"')
            value_with_suffix = parts[1]
            
            last_q = value_with_suffix.rfind('"')
            if last_q != -1:
                value = value_with_suffix[:last_q]
                suffix = value_with_suffix[last_q+1:]
                
                # Limpiar clave y valor: primero quitar escapes previos y luego aplicar nuevos
                clean_key = key.replace('\\"', '"').replace('"', '\\"')
                clean_value = value.replace('\\"', '"').replace('"', '\\"')
                final_lines.append(f'{indent}"{clean_key}": "{clean_value}"{suffix}\n')
            else:
                final_lines.append(line + '\n')
        else:
            final_lines.append(line + '\n')
            
    # Escribir con UTF-8 con BOM (utf-8-sig) para asegurar compatibilidad Windows/Vite
    with open(path, 'w', encoding='utf-8-sig') as f:
        f.write(header + "".join(final_lines) + footer)

# Aplicar a todos
for cf in glob.glob(r'F:\trincado\src\data\contents\*_content.ts'):
    atomic_multi_line_fix(cf)
atomic_multi_line_fix(r'F:\trincado\src\data\library.ts')
print("SANEAMIENTO ATÓMICO MULTI-LÍNEA COMPLETADO CON ÉXITO.")
