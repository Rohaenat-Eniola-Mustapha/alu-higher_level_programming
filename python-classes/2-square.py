#!/usr/bin/python3
"""This function is to validate size as an instance"""


class Square:
    def __init__(self, size=0):
        """This function checks whether the provided is an integer"""
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size

    def area(self):
        return self.__size ** 2
