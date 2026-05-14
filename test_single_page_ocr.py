import fitz
import easyocr
import numpy as np
import cv2

reader = easyocr.Reader(['es'], gpu=False)
doc = fitz.open("01_BIBLIOTECA_DOCTRINAL/Tercera-Etapa.pdf")
page = doc[10] # Page 11
pix = page.get_pixmap(dpi=150)
img = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width, pix.n)
if pix.n == 4:
    img = cv2.cvtColor(img, cv2.COLOR_RGBA2RGB)
results = reader.readtext(img, detail=0, paragraph=True)
print("OCR Result for page 11:")
print("\n".join(results))
