#!usr/bin/python3
import urllib.request

url = 'https://alu-intranet.hbtn.io/status'

with urllib.request.urlopen(url) as response:
    body_response = response.read()
    body_type = type(body_response)
    body_content = body_response
    body_utf8_content = body_response.decode('utf-8')

print("Body response:")
print("    - type:", body_type)
print("    - content:", body_content)
print("    - utf8 content:", body_utf8_content)
