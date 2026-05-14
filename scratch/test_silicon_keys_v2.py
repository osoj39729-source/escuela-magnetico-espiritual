import requests
import json

new_keys = [
    "sk-tbkdevkcpeqqfrdtbjbsxfckzkjmwtutawxsienulcivxdwy",
    "sk-zaperarhciloswocbbywhagqyliorcmezggichozbfsvebhl",
    "sk-kdfyimjprptznegstptunlqkezomvhtdswhpuilxxinapdxg",
    "sk-lulxincoupipojpssuwttotjpdxchpslaokupaqdatldnyij",
    "sk-zaerlkjnkdlusskiudvvcpdjgmvobjwocdwetbvvutpyizcf"
]

# Usando .com como está en geminiService.ts
url = "https://api.siliconflow.com/v1/chat/completions"

for i, key in enumerate(new_keys):
    payload = {
        "model": "Qwen/Qwen2.5-7B-Instruct",
        "messages": [{"role": "user", "content": "Hola"}]
    }
    headers = {
        "Authorization": f"Bearer {key}",
        "Content-Type": "application/json"
    }
    
    try:
        response = requests.post(url, headers=headers, data=json.dumps(payload))
        print(f"SiliconFlow Key {i+1} ({key[:8]}...): Status {response.status_code}")
        if response.status_code != 200:
            print(f"  Error: {response.text[:200]}")
        else:
            print(f"  Success!")
    except Exception as e:
        print(f"SiliconFlow Key {i+1}: Error {e}")
