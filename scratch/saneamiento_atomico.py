
import os
import re

def atomic_safety_fix(path):
    print(f"Aplicando Saneamiento Atómico a: {path}")
    with open(path, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    
    # 1. Extraer el cuerpo del objeto
    # Buscamos lo que hay entre el primer { y el último }
    start_idx = content.find('{')
    end_idx = content.rfind('}')
    if start_idx == -1 or end_idx == -1:
        print("No se encontró estructura de objeto.")
        return
        
    header = content[:start_idx+1]
    body = content[start_idx+1:end_idx]
    footer = content[end_idx:]
    
    # 2. Normalizar el cuerpo: Quitar saltos de línea reales y reemplazarlos por espacios o escapes temporales
    # Pero solo los que NO rompen la estructura de "ID": "Value"
    # En realidad, lo mejor es unir todo el body y luego procesar entradas
    body_flat = body.replace('\n', ' ').replace('\r', ' ')
    
    # 3. Identificar entradas. Cada entrada empieza con "XXXX: Titulo": "
    # Usaremos una regex para encontrar las claves
    # Patrón: " (números): (texto) ": "
    # Pero como los textos pueden ser complejos, usaremos el divisor ": "
    
    # Buscamos todas las ocurrencias de ": " que cierran una clave
    # Una clave termina en ": " y el valor empieza en "
    entries = []
    # Dividir por el divisor real de campos: ",  "
    # O mejor, buscar el patrón de cierre de línea: ", "
    # Pero las líneas pueden no tener coma.
    
    # Usaremos un parser de estados simple para el body
    new_body = ""
    i = 0
    in_string = False
    while i < len(body):
        char = body[i]
        if char == '"':
            # Es una comilla. ¿Está escapada?
            is_escaped = False
            j = i - 1
            while j >= 0 and body[j] == '\\':
                is_escaped = not is_escaped
                j -= 1
            
            if not is_escaped:
                # Comilla real. Cambiar estado.
                in_string = not in_string
                new_body += '"'
            else:
                # Comilla escapada. Mantener.
                new_body += '"'
        elif char == '\n' or char == '\r':
            if in_string:
                new_body += '\\n'
            else:
                new_body += char
        else:
            new_body += char
        i += 1

    # Ahora que los strings no tienen saltos de línea, procesamos línea por línea
    lines = new_body.splitlines()
    final_lines = []
    for line in lines:
        stripped = line.strip()
        if stripped.startswith('"') and '": "' in line:
            # Separar por el ÚLTIMO ": "
            parts = line.rsplit('": "', 1)
            indent = line[:line.find('"')]
            key = parts[0].strip().strip('"')
            value_with_suffix = parts[1]
            
            # El valor termina en la última comilla
            last_q = value_with_suffix.rfind('"')
            value = value_with_suffix[:last_q]
            suffix = value_with_suffix[last_q+1:]
            
            # Limpiar clave y valor de comillas internas
            clean_key = key.replace('\\"', '"').replace('"', '\\"')
            clean_value = value.replace('\\"', '"').replace('"', '\\"')
            
            final_lines.append(f'{indent}"{clean_key}": "{clean_value}"{suffix}\n')
        else:
            final_lines.append(line + '\n')
            
    with open(path, 'w', encoding='utf-8') as f:
        f.write(header + "".join(final_lines) + footer)

atomic_safety_fix(r'F:\trincado\src\data\contents\buscando-a-dios-joaquin-trincado_content.ts')
atomic_safety_fix(r'F:\trincado\src\data\contents\filosof-a-austera-racional_content.ts')
atomic_safety_fix(r'F:\trincado\src\data\library.ts')
print("SANEAMIENTO ATÓMICO COMPLETADO.")
