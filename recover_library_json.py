import re
import os
import codecs

LIBRARY_FILE = "src/data/library.ts"
CONTENTS_DIR = "src/data/contents"

def recover_library():
    print("Iniciando recuperacion de library.ts...")
    
    with codecs.open(LIBRARY_FILE, "r", "utf-8") as f:
        library_content = f.read()
        
    recovered_count = 0
    
    # We will search for all book ids and update their index arrays
    book_ids = re.findall(r'"id":\s*"([^"]+)"', library_content)
    
    for book_id in book_ids:
        content_filename = f"{book_id}_content.ts"
        content_path = os.path.join(CONTENTS_DIR, content_filename)
        
        if not os.path.exists(content_path):
            continue
            
        with codecs.open(content_path, "r", "utf-8", errors="replace") as cf:
            content_text = cf.read()
            
        # Extract keys from the CONTENT dictionary
        keys = re.findall(r'^\s*"([^"]+)":\s*["`]', content_text, re.MULTILINE)
        if not keys:
            continue
            
        # Find where the index array starts for this book
        id_idx = library_content.find(f'"id": "{book_id}"')
        if id_idx == -1:
            continue
            
        index_key_idx = library_content.find('"index":', id_idx)
        if index_key_idx == -1:
            continue
            
        bracket_start = library_content.find('[', index_key_idx)
        if bracket_start == -1:
            continue
            
        # Find the matching closing bracket
        bracket_end = -1
        open_brackets = 0
        in_string = False
        escape = False
        for i in range(bracket_start, len(library_content)):
            c = library_content[i]
            if escape:
                escape = False
                continue
            if c == '\\':
                escape = True
                continue
            if c == '"':
                in_string = not in_string
                continue
            if not in_string:
                if c == '[':
                    open_brackets += 1
                elif c == ']':
                    open_brackets -= 1
                    if open_brackets == 0:
                        bracket_end = i
                        break
                        
        if bracket_end != -1:
            old_index_str = library_content[bracket_start:bracket_end+1]
            old_keys = re.findall(r'"([^"]+)"', old_index_str)
            
            if len(keys) != len(old_keys):
                print(f"  [RECUPERADO] {book_id}: de {len(old_keys)} a {len(keys)} temas!")
                recovered_count += 1
                
                # Formatear el nuevo index
                new_index_items = []
                for k in keys:
                    escaped_k = k.replace('"', '\\"')
                    new_index_items.append(f'      "{escaped_k}"')
                new_index_str = "[\n" + ",\n".join(new_index_items) + "\n    ]"
                
                # Reemplazar
                library_content = library_content[:bracket_start] + new_index_str + library_content[bracket_end+1:]
                
    if recovered_count > 0:
        with codecs.open(LIBRARY_FILE, "w", "utf-8") as f:
            f.write(library_content)
        print(f"Se recuperaron {recovered_count} libros en library.ts.")
    else:
        print("No hubo diferencias en la cantidad de llaves.")

if __name__ == "__main__":
    recover_library()
