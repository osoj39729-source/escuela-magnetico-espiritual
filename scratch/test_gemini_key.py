import requests
import json

key = "AIzaSyCtJ_6EHvUl9oSHMNzbPzZfiGqowpJsgHM"
url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={key}"

payload = {
    "contents": [{
        "parts": [{"text": "Hola, ¿quién eres?"}]
    }]
}

headers = {
    "Content-Type": "application/json"
}

try:
    response = requests.post(url, headers=headers, data=json.dumps(payload))
    print(f"Status: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Error: {e}")
