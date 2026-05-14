import fitz
import sys

pdf_path = "01_BIBLIOTECA_DOCTRINAL/Tercera-Etapa.pdf"
doc = fitz.open(pdf_path)
text = ""
for page in doc:
    text += page.get_text()

if len(text.strip()) > 100:
    print(f"Direct text extraction successful! Extracted {len(text)} characters.")
    with open("01_BIBLIOTECA_DOCTRINAL/Tercera-Etapa_direct.txt", "w", encoding="utf-8") as f:
        f.write(text)
else:
    print("Direct text extraction failed or text is too short. PDF is likely scanned images.")
