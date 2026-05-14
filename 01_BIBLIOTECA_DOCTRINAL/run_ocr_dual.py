import fitz
import easyocr
import os
import sys
import cv2
import numpy as np
import multiprocessing

def process_chunk(gpu_id, pdf_path, start_page, end_page, output_path):
    os.environ["CUDA_VISIBLE_DEVICES"] = str(gpu_id)
    print(f"[GPU {gpu_id}] Inicializando para paginas {start_page+1}-{end_page}...")
    reader = easyocr.Reader(['es'], gpu=True)
    
    doc = fitz.open(pdf_path)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        for page_num in range(start_page, end_page):
            print(f"[GPU {gpu_id}] Procesando pagina {page_num + 1}/{end_page}...", flush=True)
            page = doc[page_num]
            # Usamos DPI 120 para no saturar los 3GB de VRAM
            pix = page.get_pixmap(dpi=120)
            img = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width, pix.n)
            if pix.n == 4:
                img = cv2.cvtColor(img, cv2.COLOR_RGBA2RGB)
            
            results = reader.readtext(img, detail=0, paragraph=True)
            text = "\n".join(results)
            f.write(text + "\n\n--- PAGE BREAK ---\n\n")
            f.flush()
    print(f"[GPU {gpu_id}] Chunk finalizado.")

if __name__ == "__main__":
    pdf_path = "01_BIBLIOTECA_DOCTRINAL/Tercera-Etapa.pdf"
    doc = fitz.open(pdf_path)
    total_pages = len(doc)
    mid = total_pages // 2
    
    out1 = "01_BIBLIOTECA_DOCTRINAL/Tercera-Etapa_part1.txt"
    out2 = "01_BIBLIOTECA_DOCTRINAL/Tercera-Etapa_part2.txt"
    final_out = "01_BIBLIOTECA_DOCTRINAL/Tercera-Etapa.txt"
    
    p1 = multiprocessing.Process(target=process_chunk, args=(0, pdf_path, 0, mid, out1))
    p2 = multiprocessing.Process(target=process_chunk, args=(1, pdf_path, mid, total_pages, out2))
    
    p1.start()
    p2.start()
    
    p1.join()
    p2.join()
    
    print("Combinando resultados...")
    with open(final_out, 'w', encoding='utf-8') as outfile:
        for f_in in [out1, out2]:
            with open(f_in, 'r', encoding='utf-8') as infile:
                outfile.write(infile.read())
                
    print("OCR DUAL COMPLETADO EXITOSAMENTE.")
