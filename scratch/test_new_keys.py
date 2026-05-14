import requests
import json

new_keys = [
    "AIzaSyBZFoiAiP2Pq_27tdJO_rNeJ3dJrP9QkRE",
    "AIzaSyBu9HVA2x_G-WdEielxoGvDTOotl7-qnK0",
    "AIzaSyDY3jGYYg4XAx2VgPITG7UgAaIWETqdB6k",
    "AIzaSyAEJH4lMElvcTybxWGFmefvyZlYjkGN6qY"
]

for i, key in enumerate(new_keys):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={key}"
    payload = {"contents": [{"parts": [{"text": "Hola"}]}]}
    headers = {"Content-Type": "application/json"}
    
    try:
        response = requests.post(url, headers=headers, data=json.dumps(payload))
        print(f"New Key {i+1} ({key[:8]}...): Status {response.status_code}")
        if response.status_code != 200:
            print(f"  Error: {response.text[:200]}")
        else:
            print(f"  Success!")
    except Exception as e:
        print(f"New Key {i+1}: Error {e}")
