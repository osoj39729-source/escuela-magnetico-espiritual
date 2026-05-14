import re
import os
import json
import codecs

INPUT = "scratch/texts/[1library.co]_discurso_obispo_strossmayer.txt"
LIBRARY_FILE = "src/data/library.ts"
GRADE_FILE = "src/data/grades/grade1.ts"

NOISE_PATTERNS = [
    re.compile(r'^P á g i n a \| \d+$'),
    re.compile(r'^Discurso del Obispo Strossmayer \| Joaqu[íi]n Trincado$'),
    re.compile(r'^\d+$'),
]

def is_noise(line):
    line = line.strip()
    if not line:
        return True
    for p in NOISE_PATTERNS:
        if p.match(line):
            return True
    return False

def is_header(line):
    # A line is a header if it is all uppercase, 
    # has no lowercase letters, and length between 4 and 100 characters.
    line = line.strip()
    if not line:
        return False
        
    if line.isupper() and 4 <= len(line) <= 100:
        return True
    return False

def clean_text(text):
    return text.strip()

def main():
    if not os.path.exists(INPUT):
        print(f"File {INPUT} not found.")
        return

    with codecs.open(INPUT, encoding='utf-8', errors='replace') as f:
        raw_lines = f.readlines()

    chunks = []
    current_header = "INTRODUCCIÓN"
    current_body = []
    chunk_num = 0

    i = 0
    while i < len(raw_lines):
        line = raw_lines[i].strip()
        
        if is_noise(line):
            i += 1
            continue

        if is_header(line):
            # Sometimes a header is split across two lines, let's look ahead
            header_text = line
            next_i = i + 1
            while next_i < len(raw_lines) and is_header(raw_lines[next_i].strip()):
                header_text += " " + raw_lines[next_i].strip()
                next_i += 1
                
            # Guardar chunk anterior
            if current_body:
                body_text = clean_text(' '.join(current_body))
                if body_text:
                    chunks.append({
                        'num': chunk_num,
                        'header': current_header,
                        'body': body_text
                    })
                    chunk_num += 1
            current_header = header_text
            current_body = []
            i = next_i
        else:
            current_body.append(line)
            i += 1

    # Último chunk
    if current_body:
        body_text = clean_text(' '.join(current_body))
        if body_text:
            chunks.append({'num': chunk_num, 'header': current_header, 'body': body_text})

    print(f"Total de secciones extraídas: {len(chunks)}")
    
    # 1. Update library.ts
    with codecs.open(LIBRARY_FILE, "r", "utf-8") as f:
        library_text = f.read()
        
    block_start = library_text.find('"id": "-1library-co--discurso-obispo-strossmayer"')
    if block_start == -1:
        print("Could not find book in library.ts")
    else:
        index_start = library_text.find('"index": [', block_start)
        index_end = library_text.find(']', index_start)
        
        index_str = ""
        for idx, c in enumerate(chunks):
            escaped_header = c['header'].replace('"', '\\"')
            index_str += f'\n        "{c["num"]}: {escaped_header}"'
            if idx < len(chunks) - 1:
                index_str += ","
        
        new_index = '"index": [' + index_str + '\n      ]'
        new_library_text = library_text[:index_start] + new_index + library_text[index_end + 1:]
        
        with codecs.open(LIBRARY_FILE, "w", "utf-8") as f:
            f.write(new_library_text)
            
    # 2. Update grade1.ts
    with codecs.open(GRADE_FILE, "r", "utf-8", errors="replace") as f:
        grade_text = f.read()
        
    formatted_themes = "themes: [\n"
    for idx, c in enumerate(chunks):
        title = f"{c['num']}: {c['header']}"
        js_string = json.dumps(title, ensure_ascii=False)
        formatted_themes += f"    {js_string}"
        if idx < len(chunks) - 1:
            formatted_themes += ",\n"
        else:
            formatted_themes += "\n"
    formatted_themes += "  ]"
    
    new_grade = re.sub(r'themes:\s*\[.*?\]', formatted_themes, grade_text, flags=re.DOTALL)
    new_grade = re.sub(r'lessonsCount:\s*\d+', f'lessonsCount: {len(chunks)}', new_grade)
    
    with codecs.open(GRADE_FILE, "w", "utf-8") as f:
        f.write(new_grade)
        
    print("Done formatting Strossmayer.")
    for c in chunks[:10]:
        print(f"  [{c['num']}] {c['header']}")

if __name__ == "__main__":
    main()
