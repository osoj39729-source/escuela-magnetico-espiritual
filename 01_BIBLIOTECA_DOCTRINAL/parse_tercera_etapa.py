"""
Script para limpiar, segmentar y extraer el índice de la Tercera Etapa
a partir del texto OCR, produciendo un bloque listo para library.ts
"""

import re

INPUT = "Tercera-Etapa.txt"
OUTPUT_CHUNKS = "Tercera-Etapa-chunks.txt"
OUTPUT_INDEX  = "Tercera-Etapa-index.txt"

# Patrones que indican un encabezado de sección en este libro
HEADER_PATTERNS = [
    # Fechas exactas: "ENERO 4 DE 1916", "Marzo 3de 1916", etc.
    re.compile(r"^(ENERO|FEBRERO|MARZO|ABRIL|MAYO|JUNIO|JULIO|AGOSTO|SEPTIEMBRE|OCTUBRE|NOVIEMBRE|DICIEMBRE|Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre)\s+\d{1,2}.*?de\s+191[0-9]", re.IGNORECASE),
    # CONSEJO, COMENTARIO, SIGUE LA ACCIÓN, etc. — líneas en mayúsculas cortas
    re.compile(r'^(CONSEJO|COMENTARIO|INAUGURACI[OÓ]N|VISI[OÓ]N|AÑO DE \d{4}|SIGUE LA ACCI[OÓ]N|LA ACCI[OÓ]N DE LA JUSTICIA|ANUNCIO DE UN CATACLISMO|CATACLISMO|FEN[OÓ]MENO|GRANDES|INCENDIO|ITALIA|AUSTRIA|ESPA[NÑ]A|PORTUGAL|GRECIA|M[EÉ]XICO|CHINA|BOLIVIA|CALAMARCA)'),
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
    # Fechas
    if re.match(r'^(ENERO|FEBRERO|MARZO|ABRIL|MAYO|JUNIO|JULIO|AGOSTO|SEPTIEMBRE|OCTUBRE|NOVIEMBRE|DICIEMBRE)', line, re.IGNORECASE):
        if re.search(r'\d{4}', line):
            return True
    # Líneas completamente en mayúsculas de 5 a 80 chars
    if line.isupper() and 5 <= len(line) <= 80:
        return True
    # "AÑO DE 1916"
    if re.match(r'^A[ÑN]O DE \d{4}', line, re.IGNORECASE):
        return True
    return False

def clean_text(text):
    # Reemplaza caracteres OCR rotos comunes
    replacements = {
        'Elo�': 'Eloí', 'Elo¡': 'Eloí',
        'Hosanna a Elo': 'Hosanna a Eloí',
        'p�': 'pá', 'á': 'á',
    }
    for k, v in replacements.items():
        text = text.replace(k, v)
    return text

def main():
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
        f.write('    "id": "tercera-etapa",\n')
        f.write('    "title": "Tercera Etapa",\n')
        f.write('    "pdfUrl": "/biblioteca/Tercera-Etapa.pdf",\n')
        f.write('    "index": [\n')
        for c in chunks:
            # Usamos el número de chunk como referencia de posición
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
    main()
