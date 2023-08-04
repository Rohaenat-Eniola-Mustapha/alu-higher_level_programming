#!/usr/bin/python3
import sys
import urllib.request

if len(sys.argv) < 2:
    print("Usage: {} <URL>".format(sys.argv[0]))
    sys.exit(1)

url = sys.argv[1]

with urllib.request.urlopen(url) as response:
    x_request_id = response.getheader('X-Request-Id')

if x_request_id:
    print(x_request_id)
