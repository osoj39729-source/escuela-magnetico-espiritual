"""
Script para limpiar, segmentar y extraer el índice del Reglamento Interno
a partir del texto OCR.
"""

import re

INPUT = "Reglamento-Interno-E.M.E.delaC_.U.-1.txt"
OUTPUT_CHUNKS = "Reglamento-chunks.txt"
OUTPUT_INDEX  = "Reglamento-index.txt"

# Patrones que indican un encabezado de sección
HEADER_PATTERNS = [
    re.compile(r"^(CAP[IÍ]TULO|ART[IÍ]CULO|PARTE|T[IÍ]TULO|SECCI[OÓ]N)\s+([IVXLC]+\b|\d+)", re.IGNORECASE),
]

NOISE_PATTERNS = [
    re.compile(r'^--- PAGE BREAK ---$'),
    re.compile(r'^\d+$'),               # números de página solos
    re.compile(r'^\d[\d\s]{2,30}$'),    # líneas de solo números (índices OCR)
    re.compile(r'^[_\-=]{3,}$'),        # separadores decorativos
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
    line = line.strip()
    for p in HEADER_PATTERNS:
        if p.match(line):
            return True
    # Líneas completamente en mayúsculas de 5 a 100 chars
    if line.isupper() and 5 <= len(line) <= 100:
        return True
    return False

def clean_text(text):
    replacements = {
        'p': 'pá', 'á': 'á',
    }
    for k, v in replacements.items():
        text = text.replace(k, v)
    return text

def main():
    if not os.path.exists(INPUT):
        print(f"File {INPUT} not found yet. Waiting...")
        return

    with open(INPUT, encoding='utf-8', errors='replace') as f:
        raw_lines = f.readlines()

    chunks = []
    current_header = "INTRODUCCIÓN"
    current_body = []
    chunk_num = 0

    for line in raw_lines:
        line = line.rstrip('\n\r')

        if is_noise(line):
            continue

        stripped = line.strip()

        if is_header(stripped):
            # Guardar chunk anterior
            if current_body:
                body_text = clean_text(' '.join(current_body).strip())
                if body_text:
                    chunks.append({
                        'num': chunk_num,
                        'header': current_header,
                        'body': body_text
                    })
                    chunk_num += 1
            current_header = stripped
            current_body = []
        else:
            current_body.append(stripped)

    # Último chunk
    if current_body:
        body_text = clean_text(' '.join(current_body).strip())
        if body_text:
            chunks.append({'num': chunk_num, 'header': current_header, 'body': body_text})

    print(f"Total de secciones extraídas: {len(chunks)}")

    # Escribir chunks
    with open(OUTPUT_CHUNKS, 'w', encoding='utf-8') as f:
        for c in chunks:
            f.write(f"=== [{c['num']}] {c['header']} ===\n")
            f.write(c['body'] + "\n\n")

    # Escribir índice listo para library.ts
    with open(OUTPUT_INDEX, 'w', encoding='utf-8') as f:
        f.write('  {\n')
        f.write('    "id": "reglamento-interno-e.m.e.delac-.u.-1",\n')
        f.write('    "title": "Reglamento Interno E.M.E. de la C.U.",\n')
        f.write('    "pdfUrl": "/biblioteca/Reglamento-Interno-E.M.E.delaC_.U.-1.pdf",\n')
        f.write('    "index": [\n')
        for c in chunks:
            header_clean = c['header'].replace('"', '\\"')
            f.write(f'      "{c["num"]}: {header_clean}",\n')
        f.write('    ]\n')
        f.write('  }')

    print(f"Chunks escritos en: {OUTPUT_CHUNKS}")
    print(f"Índice escrito en:  {OUTPUT_INDEX}")
    print("\nPrimeras 20 secciones encontradas:")
    for c in chunks[:20]:
        print(f"  [{c['num']}] {c['header'][:70]}")

if __name__ == "__main__":
    import os
    main()
