import re
import os
import json
import codecs

LIBRARY_FILE = "src/data/library.ts"
GRADES_DIR = "src/data/grades"

GRADE_MAPPING = {
    1: "-1library-co--discurso-obispo-strossmayer",
    2: "buscando-a-dios-joaquin-trincado",
    3: "primer-rayo-de-luz",
    4: "el-espiritismo-estudiado",
    5: "filosof-a-austera-racional",
    6: "los-cinco-amores",
    7: "espiritismo-en-su-asiento",
    8: "ley-de-las-mediumidades-en-general",
    9: "profilaxis-de-la-vida",
    10: "los-extremos-se-tocan",
    11: "conocete-a-ti-mismo-1",
    12: "codigodeamoruniversaltomoi-1",
    13: "alfaqui-vademecum"
}

def extract_index_for_book(book_id, library_text):
    id_idx = library_text.find(f'"id": "{book_id}"')
    if id_idx == -1:
        return []
        
    index_key_idx = library_text.find('"index":', id_idx)
    if index_key_idx == -1:
        return []
        
    bracket_start = library_text.find('[', index_key_idx)
    if bracket_start == -1:
        return []
        
    bracket_end = -1
    open_brackets = 0
    in_string = False
    escape = False
    for i in range(bracket_start, len(library_text)):
        c = library_text[i]
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
        index_str = library_text[bracket_start:bracket_end+1]
        # Regex to find all string literals
        keys = re.findall(r'"([^"]+)"', index_str)
        return keys
    return []

def main():
    with codecs.open(LIBRARY_FILE, "r", "utf-8", errors="ignore") as f:
        library_text = f.read()

    for grade_num, book_id in GRADE_MAPPING.items():
        grade_file = os.path.join(GRADES_DIR, f"grade{grade_num}.ts")
        if not os.path.exists(grade_file):
            continue

        themes = extract_index_for_book(book_id, library_text)
        if not themes:
            print(f"No themes found for {book_id} in library.ts")
            continue

        with codecs.open(grade_file, "r", "utf-8", errors="replace") as f:
            grade_text = f.read()

        # Robustly replace the themes array in grade_text
        bracket_start = grade_text.find('themes:')
        if bracket_start != -1:
            bracket_start = grade_text.find('[', bracket_start)
            if bracket_start != -1:
                bracket_end = -1
                open_brackets = 0
                in_string = False
                escape = False
                for i in range(bracket_start, len(grade_text)):
                    c = grade_text[i]
                    if escape:
                        escape = False
                        continue
                    if c == '\\':
                        escape = True
                        continue
                    if c == '"' or c == "'":
                        if not in_string:
                            in_string = c
                        elif in_string == c:
                            in_string = False
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
                    formatted_themes = "[\n"
                    for idx, t in enumerate(themes):
                        js_string = json.dumps(t, ensure_ascii=False)
                        formatted_themes += f"    {js_string}"
                        if idx < len(themes) - 1:
                            formatted_themes += ",\n"
                        else:
                            formatted_themes += "\n"
                    formatted_themes += "  ]"
                    
                    new_grade = grade_text[:bracket_start] + formatted_themes + grade_text[bracket_end+1:]
                    new_grade = re.sub(r'lessonsCount:\s*\d+', f'lessonsCount: {len(themes)}', new_grade)
                    
                    with codecs.open(grade_file, "w", "utf-8") as f:
                        f.write(new_grade)
                    print(f"Updated grade{grade_num}.ts with {len(themes)} themes.")

if __name__ == "__main__":
    main()
