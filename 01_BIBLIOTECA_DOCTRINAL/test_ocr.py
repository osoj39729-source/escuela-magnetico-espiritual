import fitz
import easyocr
import os
import cv2
import numpy as np

def run_ocr(start_page=0, end_page=None):
    # Initialize the EasyOCR reader
    print("Initializing EasyOCR...")
    reader = easyocr.Reader(['es'])

    pdf_path = "Tercera-Etapa.pdf"
    txt_path = "Tercera-Etapa_test.txt"

    doc = fitz.open(pdf_path)
    
    if end_page is None:
        end_page = len(doc)
        
    print(f"Processing pages {start_page} to {end_page - 1}")

    with open(txt_path, 'w', encoding='utf-8') as f:
        for page_num in range(start_page, end_page):
            print(f"Processing page {page_num + 1}/{len(doc)}...")
            page = doc[page_num]
            
            # Render page to an image
            pix = page.get_pixmap(dpi=150)
            
            # Convert pixmap to numpy array for easyocr
            img = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width, pix.n)
            
            # If image has alpha channel, remove it
            if pix.n == 4:
                img = cv2.cvtColor(img, cv2.COLOR_RGBA2RGB)
                
            # Extract text
            results = reader.readtext(img, detail=0, paragraph=True)
            
            text = "\n".join(results)
            f.write(text + "\n\n--- PAGE BREAK ---\n\n")
            f.flush()

    print("OCR complete.")

if __name__ == "__main__":
    # Test on first 3 pages
    run_ocr(0, 3)
