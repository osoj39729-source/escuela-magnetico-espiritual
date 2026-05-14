import fitz
import os

books = [
    "estatutos y reglamentos.pdf",
    "LEY DE LAS MEDIUMIDADES EN GENERAL.pdf",
    "laudode rigor.pdf"
]

for book in books:
    path = os.path.join("01_BIBLIOTECA_DOCTRINAL", book)
    doc = fitz.open(path)
    text = ""
    for page in doc:
        text += page.get_text()
    
    if len(text.strip()) > 1000:
        print(f"[OK] {book} has {len(text)} chars of direct text.")
        with open(path.replace(".pdf", ".txt"), "w", encoding="utf-8") as f:
            f.write(text)
    else:
        print(f"[OCR NEEDED] {book} is scanned.")
