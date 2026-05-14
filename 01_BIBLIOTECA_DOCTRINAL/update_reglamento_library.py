import re
import json
import codecs

LIBRARY_FILE = "../src/data/library.ts"

with codecs.open(LIBRARY_FILE, "r", "utf-8") as f:
    library_text = f.read()

# We want to replace the index of "reglamento-interno-e-m-e-delac--u--1"
# First we read the index from our chunks
with codecs.open("Reglamento-chunks.txt", "r", "utf-8") as f:
    lines = f.readlines()

headers = []
for line in lines:
    m = re.match(r"^=== \[(\d+)\] (.*) ===$", line.strip())
    if m:
        headers.append(f'"{m.group(1)}: {m.group(2)}"')

index_str = ",\n      ".join(headers)

# Find the block for reglamento
block_start = library_text.find('"id": "reglamento-interno-e-m-e-delac--u--1"')
if block_start == -1:
    print("Could not find reglamento in library.ts")
else:
    # Find the "index": [ ... ] part inside this block
    index_start = library_text.find('"index": [', block_start)
    index_end = library_text.find(']', index_start)
    
    new_index = '"index": [\n      ' + index_str + '\n    ]'
    
    new_library_text = library_text[:index_start] + new_index + library_text[index_end + 1:]
    
    with codecs.open(LIBRARY_FILE, "w", "utf-8") as f:
        f.write(new_library_text)
        
    print("Reglamento Interno index updated in library.ts!")
