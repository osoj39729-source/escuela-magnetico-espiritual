import re
import os
import codecs

LIBRARY_FILE = "src/data/library.ts"
CONTENTS_DIR = "src/data/contents"

def recover_library():
    print("Iniciando recuperacion de library.ts desde los archivos _content.ts...")
    
    with codecs.open(LIBRARY_FILE, "r", "utf-8") as f:
        library_content = f.read()
        
    # Buscar todos los bloques de libros en library.ts
    books = re.finditer(r'{\s*"id":\s*"([^"]+)",\s*"title":\s*"([^"]+)",\s*"pdfUrl":\s*"([^"]+)",\s*"index":\s*\[(.*?)\]\s*}', library_content, re.DOTALL)
    
    new_library_content = library_content
    recovered_count = 0
    
    for match in books:
        book_block = match.group(0)
        book_id = match.group(1)
        old_index = match.group(4)
        
        # Buscar el archivo content correspondiente
        content_filename = f"{book_id}_content.ts"
        content_path = os.path.join(CONTENTS_DIR, content_filename)
        
        if not os.path.exists(content_path):
            print(f"  [X] No se encontro: {content_filename}")
            continue
            
        with codecs.open(content_path, "r", "utf-8", errors="replace") as cf:
            content_text = cf.read()
            
        # Extraer las llaves del objeto CONTENT.
        # Las llaves son los strings antes de los dos puntos: "llave": "valor",
        # Buscamos todas las llaves en el diccionario.
        keys = re.findall(r'^\s*"([^"]+)":\s*["`]', content_text, re.MULTILINE)
        
        if not keys:
            print(f"  [!] No se pudieron extraer llaves de {content_filename} (probablemente vacio o malformado)")
            continue
            
        # Comparar si hay diferencias sustanciales en la cantidad
        old_keys = re.findall(r'"([^"]+)"', old_index)
        
        if len(keys) != len(old_keys):
            print(f"  [RECUPERADO] {book_id}: de {len(old_keys)} a {len(keys)} temas!")
            recovered_count += 1
            
            # Reconstruir el index para este libro
            new_index_str = ",\n".join([f'      "{k}"' for k in keys])
            new_book_block = re.sub(r'"index":\s*\[.*?\]', f'"index": [\n{new_index_str}\n    ]', book_block, flags=re.DOTALL)
            
            new_library_content = new_library_content.replace(book_block, new_book_block)
        else:
            # Aunque tengan el mismo número, las llaves podrían ser distintas, pero asumimos que estan bien
            pass
            
    if recovered_count > 0:
        with codecs.open(LIBRARY_FILE, "w", "utf-8") as f:
            f.write(new_library_content)
        print(f"Se recuperaron {recovered_count} libros en library.ts.")
    else:
        print("No hubo diferencias en la cantidad de llaves.")

if __name__ == "__main__":
    recover_library()
