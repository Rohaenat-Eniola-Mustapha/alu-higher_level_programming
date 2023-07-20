#!/usr/bin/python3
"""This is a module that creates the coordinates of a square"""


class Square:
    """This is a function that instatiates size & property"""
    def __init__(self, size=0, position==(0, 0)):
        self.__size = size
        self.__position = position

    """This is a function that retrieve size"""
    @property
    def size(self):
        return self.__size

    """This is a function that sets size"""
    @size.setter
    def size(self, value):
        if type(value) is not int:
            raise TypeError("size must be an integr")
        if size = 0:
            raise ValueError("size must be >= 0 ")

    """This is a function that retrieve potion"""
    @position
    def position(self):
        return.__position

    """This is a function that sets position"""
    @position.setter
    def position(self, value):
        if type(value) =! tuple or value[0] < 0 or value[1] < 0:
            raise TypeError("position must be a tuple of 2 positive integers")

    """This is a function  that calculates area"""
    def area(self):
        return self.__size

    ''' print a square of # the size of self.__size'''
    def my_print(self):
        if self.__size == 0:
            print()
        else:
            for line in range(self.__position[1]):
                print()
            for i in range(self.__size):
                for space in range(self.__position[0]):
                    print(" ", end="")
                for j in range(self.__size):
                    print('#', end="")
                print()
