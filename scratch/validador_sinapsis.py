import os
import json
import re
import unicodedata

# Simular exactamente la normalización atómica extrema de geminiService.ts
def normalize(s):
    s = str(s)
    s = unicodedata.normalize('NFD', s)
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    s = re.sub(r'[^a-zA-Z0-9]', '', s)
    return s.lower()

def validador():
    library_path = r'F:\trincado\src\data\library.ts'
    json_dir = r'F:\trincado\public\data\contents'
    
    with open(library_path, 'r', encoding='utf-8') as f:
        lib_content = f.read()
        
    # Extraer la estructura de libros usando expresiones regulares
    book_matches = re.finditer(r'"id":\s*"([^"]+)",[\s\S]*?"index":\s*\[(.*?)\]', lib_content, re.IGNORECASE)
    
    total_links = 0
    broken_links = 0
    
    print("==================================================")
    print("INICIANDO VALIDACIÓN ATÓMICA DE SÍNAPSIS DOCTRINAL")
    print("==================================================\n")
    
    for match in book_matches:
        book_id = match.group(1)
        index_str = match.group(2)
        
        # Extraer los títulos de los capítulos
        chapters = re.findall(r'"([^"]+)"', index_str)
        
        json_path = os.path.join(json_dir, f"{book_id}_content.json")
        if not os.path.exists(json_path):
            print(f"[ALERTA CRÍTICA] Archivo de datos no encontrado: {book_id}")
            continue
            
        with open(json_path, 'r', encoding='utf-8') as f:
            try:
                # Leer el JSON (asegurándonos de quitar el BOM invisible si existe)
                content = f.read().replace('\ufeff', '')
                content_obj = json.loads(content)
            except Exception as e:
                print(f"[ALERTA CRÍTICA] JSON Corrupto: {book_id} -> {e}")
                continue
                
        # Crear un mapa de las llaves del JSON ya normalizadas atómicamente
        json_keys_normalized = {normalize(k): k for k in content_obj.keys()}
        
        # Auditar cada sínapsis del índice contra la base de datos
        for chapter in chapters:
            total_links += 1
            norm_chapter = normalize(chapter)
            
            # Verificación Atómica
            if norm_chapter not in json_keys_normalized:
                # Si falla la verificación atómica, probamos si el sistema RAG podría rescatarlo por el prefijo numérico
                num_prefix = chapter.split(':')[0].strip()
                prefix_salvage = False
                if num_prefix.isdigit():
                    prefix_match = [k for k in content_obj.keys() if k.startswith(num_prefix + ':')]
                    if prefix_match:
                        prefix_salvage = True
                
                if not prefix_salvage:
                    print(f"❌ SÍNAPSIS ROTA IRREPARABLE en [{book_id}]:")
                    print(f"   Índice exige: '{chapter}'")
                    print(f"   Búsqueda atómica: '{norm_chapter}' no existe.")
                    broken_links += 1
                
    print(f"\n==================================================")
    print(f"RESUMEN DE AUDITORÍA:")
    print(f"Total de Átomos (Sínapsis) Validados: {total_links}")
    print(f"Sínapsis Totalmente Rotas: {broken_links}")
    print("==================================================")
    
    if broken_links == 0:
        print("ESTADO: PERFECCIÓN ESTRUCTURAL LOGRADA.")

if __name__ == '__main__':
    validador()
