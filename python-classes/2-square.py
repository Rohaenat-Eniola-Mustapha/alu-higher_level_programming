#!/usr/bin/python3
"""This function is to validate size as an instance"""


class Square:
    """This function checks whether the provided is an integer"""
    def __init__(self, size=0):
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size
