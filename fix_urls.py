import os

with open("src/data/library.ts", "r", encoding="utf-8", errors="replace") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "FILOSOF" in line and "AUSTERA RACIONAL.pdf" in line:
        lines[i] = '    "pdfUrl": "/biblioteca/FILOSOFÍA AUSTERA RACIONAL.pdf",\n'
    elif "JES" in line and "HOMBRE Y NO DIOS.pdf" in line:
        lines[i] = '    "pdfUrl": "/biblioteca/JESÚS HOMBRE Y NO DIOS.pdf",\n'
    elif "LA REVOLUCI" in line and "XICO.pdf" in line:
        lines[i] = '    "pdfUrl": "/biblioteca/LA REVOLUCIÓN DE MÉXICO.pdf",\n'

with open("src/data/library.ts", "w", encoding="utf-8") as f:
    f.writelines(lines)
