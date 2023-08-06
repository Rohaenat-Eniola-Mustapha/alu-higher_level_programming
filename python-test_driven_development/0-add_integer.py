#!/usr/bin/python3
''' write a function that adds 2 integers'''


def add_integer(a, b=98):
    '''a function that carries two arguements a and b'''
    if not isinstance(a, (int, float)):
        raise TypeError("a must be an integer")

    if not isinstance(b, (int, float)):
        raise TypeError("b must be an integer")

    a = int(a)
    b = int(b)

    return a + b
