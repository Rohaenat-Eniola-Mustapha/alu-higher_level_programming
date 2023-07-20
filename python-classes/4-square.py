#!/usr/bin/python3
"""This module contains code for access & update attribute"""


class Square:
    """This function creates private instance"""
    def __init__(self, size=0):
        self.__size = size

    """This function retrieves size"""
    @property
    def size(self):
        return self.__size

    """This function sets private size attribute"""
    @size.setter
    def size(self, value):
        if type(value) is not int:
            raise TypeError("size is not an integer")
        if value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    """This function returns the current square area"""
    def area(self):
        return self.__size ** 2
