#!/usr/bin/python3
"""THis that prints a square"""


class Square:
    """This is a function that creates private instance"""
    def __init__(self, size=0):
        self.__size = size

    """This is a function that retrieves size"""
    @property
    def size(self):
        return self.__size

    """This function sets the size attribute"""
    @size.setter
    def size(self, value):
        if type(value) is not int:
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")

    """This function returns the square area"""
    def area(self):
        return self.__size ** 2

    """This function prints the square in place of '#'"""
    def my_print(self):
        if self.__size == 0:
            print()
        else:
            for _ in range(self.__size):
                print("#" * self.__size)
