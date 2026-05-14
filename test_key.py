import requests
import os

def test_gemini():
    # Load key from .env
    key = ""
    if os.path.exists(".env"):
        with open(".env", "r") as f:
            for line in f:
                if line.startswith("VITE_GEMINI_KEY_1="):
                    key = line.split("=")[1].strip()
                    break
    
    if not key:
        print("No key found in .env")
        return

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={key}"
    payload = {
        "contents": [{
            "parts": [{"text": "Saluda brevemente como el Maestro Joaquin Trincado"}]
        }]
    }
    
    print(f"Testing Gemini 2.5 Flash with key: {key[:8]}...")
    try:
        response = requests.post(url, json=payload)
        if response.status_code == 200:
            data = response.json()
            text = data['candidates'][0]['content']['parts'][0]['text']
            print("SUCCESS!")
            print(f"Maestro: {text}")
        else:
            print(f"FAILED! Status: {response.status_code}")
            print(f"Error: {response.text}")
    except Exception as e:
        print(f"Error making request: {e}")

if __name__ == "__main__":
    test_gemini()
