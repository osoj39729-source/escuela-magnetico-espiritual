import requests
import json

key = "AIzaSyCtJ_6EHvUl9oSHMNzbPzZfiGqowpJsgHM"
# Probando exactamente el nombre que pide el usuario
url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={key}"

payload = {
    "contents": [{
        "parts": [{"text": "Hola"}]
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
