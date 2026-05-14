import fitz
import easyocr
import os
import sys
import cv2
import numpy as np

def run_ocr(pdf_path):
    # Initialize the EasyOCR reader WITH GPU
    print("Initializing EasyOCR...")
    reader = easyocr.Reader(['es'])

    txt_path = pdf_path.replace('.pdf', '.txt')

    doc = fitz.open(pdf_path)
    end_page = len(doc)
        
    print(f"Processing {end_page} pages...")

    with open(txt_path, 'w', encoding='utf-8') as f:
        for page_num in range(end_page):
            print(f"Processing page {page_num + 1}/{len(doc)}...", flush=True)
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
    if len(sys.argv) > 1:
        run_ocr(sys.argv[1])
    else:
        print("Usage: python run_ocr.py <pdf_file>")

