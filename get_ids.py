import json
import re

with open('src/data/library.ts', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

ids = re.findall(r'"id":\s*"(.*?)"', text)
for id in ids:
    print(id)
