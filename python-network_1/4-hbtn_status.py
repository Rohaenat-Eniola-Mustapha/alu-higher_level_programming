#!/usr/bin/python3
import requests

url = 'https://alu-intranet.hbtn.io/status'

response = requests.get(url)
body_type = str(type(response.text))
body_content = response.text

print("Body response:")
print("\t- type:", body_type)
print("\t- content:", body_content)
