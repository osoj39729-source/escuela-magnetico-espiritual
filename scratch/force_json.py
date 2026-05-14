import json
import os

def force_json_conversion():
    src_path = r'F:\trincado\src\data\contents\buscando-a-dios-joaquin-trincado_content.ts'
    dest_path = r'F:\trincado\public\data\contents\buscando-a-dios-joaquin-trincado_content.json'
    
    with open(src_path, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
        
    start_idx = content.find('{')
    end_idx = content.rfind('}')
    body = content[start_idx+1:end_idx]
    
    entries = {}
    lines = body.splitlines()
    for line in lines:
        if not line.strip(): continue
        if '": "' in line:
            # Separar por el divisor real
            parts = line.rsplit('": "', 1)
            key = parts[0].strip().strip('"')
            val = parts[1].strip()
            
            # Limpiar comillas y comas del final
            if val.endswith('",'):
                val = val[:-2]
            elif val.endswith('"'):
                val = val[:-1]
                
            # Decodificar escapes de TS a literales de Python
            val = val.replace('\\n', '\n').replace('\\"', '"')
            key = key.replace('\\"', '"')
            
            entries[key] = val
            
    # Guardar como JSON puro
    with open(dest_path, 'w', encoding='utf-8') as f:
        json.dump(entries, f, ensure_ascii=False, indent=2)
        
    # Eliminar el archivo TS problemático
    os.remove(src_path)
    print("Reconstrucción JSON de Buscando a Dios completada con éxito.")

if __name__ == '__main__':
    force_json_conversion()
