import unittest
from models.base import Base

class TestBase(unittest.TestCase):

    def test_id_auto_increment(self):
        base1 = Base()
        base2 = Base()
        base3 = Base()

        self.assertEqual(base1.id, 1)
        self.assertEqual(base2.id, 2)
        self.assertEqual(base3.id, 3)

    def test_id_manual_assignment(self):
        base1 = Base(10)
        base2 = Base(20)

        self.assertEqual(base1.id, 10)
        self.assertEqual(base2.id, 20)

    def test_to_json_string_empty_list(self):
        self.assertEqual(Base.to_json_string([]), "[]")

    def test_to_json_string_non_empty_list(self):
        base1 = Base(1)
        base2 = Base(2)
        expected_output = '[{"id": 1}, {"id": 2}]'
        self.assertEqual(Base.to_json_string([base1, base2]), expected_output)

    # Add more test cases for other methods...

if __name__ == '__main__':
    unittest.main()
