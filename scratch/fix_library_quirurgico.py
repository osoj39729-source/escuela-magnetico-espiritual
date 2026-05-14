
import os

def fix_library_final(path):
    with open(path, 'r', encoding='utf-8', errors='replace') as f:
        lines = f.readlines()
    
    new_lines = []
    for line in lines:
        # Reemplazar comillas angulares que TS rechaza en strings
        line = line.replace('«', '\\"').replace('»', '\\"')
        
        # Corregir la fusión accidental de cierres
        if '\\n' in line and (line.strip().endswith(']') or line.strip().endswith('},')):
            parts = line.split('\\n')
            for p in parts:
                if p.strip():
                    new_lines.append(p + '\n')
        else:
            new_lines.append(line)
            
    # Segunda pasada: Limpieza de caracteres invisibles o inválidos
    final_content = "".join(new_lines)
    # Reemplazar cualquier carácter de control no deseado excepto \n \r \t
    import re
    # final_content = re.sub(r'[^\x00-\x7F]+', ' ', final_content) # Esto borraría acentos, NO.
    
    # Escribir con codificación limpia
    with open(path, 'w', encoding='utf-8') as f:
        f.write(final_content)

fix_library_final(r'F:\trincado\src\data\library.ts')
print("LIBRARY.TS NORMALIZADO.")
