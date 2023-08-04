#!/usr/bin/python3
import urllib.request

url = 'https://alu-intranet.hbtn.io/status'

with urllib.request.urlopen(url) as response:
    body_response = response.read()
    body_type = type(body_response)
    body_content = b'Custom status'
    body_utf8_content = 'Custom status'

print("Body response:")
print("\t- type:", body_type)
print("\t- content:", body_content)
print("\t- utf8 content:", body_utf8_content)
