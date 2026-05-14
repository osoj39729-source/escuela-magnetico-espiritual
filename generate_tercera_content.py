import os
import json
import re

CHUNKS_FILE = "01_BIBLIOTECA_DOCTRINAL/Tercera-Etapa-chunks.txt"
OUTPUT_FILE = "src/data/contents/tercera-etapa_content.ts"

def generate_content():
    if not os.path.exists(CHUNKS_FILE):
        print("Chunks file not found.")
        return
        
    with open(CHUNKS_FILE, 'r', encoding='utf-8') as f:
        full_text = f.read()
        
    # Split by === [N] Title ===
    sections = re.split(r'===\s*\[\d+\]\s*(.*?)\s*===', full_text)
    
    content = {}
    # sections[0] is the text before the first header
    for i in range(1, len(sections), 2):
        title = sections[i].strip()
        body = sections[i+1].strip()
        if title:
            content[title] = body
            
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write("export const CONTENT: Record<string, string> = ")
        f.write(json.dumps(content, ensure_ascii=False, indent=2))
        f.write(";\n")
        
    print(f"Generated {OUTPUT_FILE} with {len(content)} themes.")

if __name__ == "__main__":
    generate_content()
