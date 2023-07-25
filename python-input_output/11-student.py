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
        if attrs is None or not isinstance(attrs, list):
            return self.__dict__
        return {attr: getattr(self, attr) for attr in attrs if hasattr(self, attr)}

    def reload_from_json(self, json):
        """This is an init function"""
        for key, value in json.items():
            setattr(self, key, value)
