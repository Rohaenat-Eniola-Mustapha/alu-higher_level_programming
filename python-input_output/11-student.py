#!/usr/bin/python3
"""A module"""


class Student:
    """calling a class"""
    def __init__(self, first_name, last_name, age):
        """This is an init function"""
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self, attrs=None):
        """This is an init function"""
        if (type(attrs) == list and
                all(type(ele) == str for ele in attrs)):
            return {k: getattr(self, k) for k in attrs if hasattr(self, k)}
        return self.__dict__

    def reload_from_json(self, json):
        """This is an init function"""
        for key, value in json.items():
            setattr(self, key, value)
