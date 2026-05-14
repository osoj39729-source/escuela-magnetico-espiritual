import requests
import json
import os

keys = [
    "AIzaSyCtJ_6EHvUl9oSHMNzbPzZfiGqowpJsgHM",
    "AIzaSyBSFberBbG5M5LJgUhNOPYQuNEITo6J7z0",
    "AIzaSyCYvfwfbtHG4MWBRHnwRBdqnWd86AsEkgQ",
    "AIzaSyALY4a0n2D7p4vLalq2W66gkiRLY7dmSxA",
    "AIzaSyBRrG1fHbc5KuBIEZrZXhWJXKsE9-k-FUY"
]

for i, key in enumerate(keys):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={key}"
    payload = {"contents": [{"parts": [{"text": "Hola"}]}]}
    headers = {"Content-Type": "application/json"}
    
    try:
        response = requests.post(url, headers=headers, data=json.dumps(payload))
        print(f"Key {i+1} ({key[:8]}...): Status {response.status_code}")
        if response.status_code != 200:
            print(f"  Error: {response.text[:200]}")
    except Exception as e:
        print(f"Key {i+1}: Error {e}")
