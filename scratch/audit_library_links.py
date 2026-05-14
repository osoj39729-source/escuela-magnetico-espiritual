import os
import re

# Path to public/biblioteca
lib_path = "public/biblioteca"
files_on_disk = os.listdir(lib_path)

print(f"Files in {lib_path}: {len(files_on_disk)}")

# Reading src/data/library.ts
with open("src/data/library.ts", "r", encoding="utf-8") as f:
    content = f.read()

pdf_urls = re.findall(r'"pdfUrl":\s*"([^"]+)"', content)

missing = []
case_mismatch = []

for url in pdf_urls:
    filename = url.replace("/biblioteca/", "")
    if filename in files_on_disk:
        continue
    
    found = False
    for f in files_on_disk:
        if f.lower() == filename.lower():
            case_mismatch.append((filename, f))
            found = True
            break
    
    if not found:
        missing.append(filename)

print("\n--- AUDIT RESULTS ---")
if not missing and not case_mismatch:
    print("SUCCESS: All PDF links are PERFECT.")
else:
    if missing:
        print(f"ERROR: MISSING FILES ({len(missing)}):")
        for m in missing: print(f"  - {m}")
    if case_mismatch:
        print(f"WARNING: CASE MISMATCHES ({len(case_mismatch)}):")
        for m, f in case_mismatch: print(f"  - Config: '{m}' | Disk: '{f}'")
