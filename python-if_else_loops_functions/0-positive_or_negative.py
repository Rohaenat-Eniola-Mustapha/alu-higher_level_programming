#!/usr/bin/python3
import random
number = random.randint(-10, 10)
if number > 0:
    num = "is positive"
elif number < 0:
    num = "is negative"
else:
    num = "is zero"
print("{:d}".format(number), num)
