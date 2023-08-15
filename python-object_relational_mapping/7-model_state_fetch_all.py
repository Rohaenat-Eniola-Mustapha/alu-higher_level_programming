#!/usr/bin/python3
""" A script that takes in the name of a state as an argument,
 lists all cities of that state, using the database hbtn_0e_4_usa
import 'sys' & 'MySQLdb'."""

import sys
import MySQLdb
import SQLAlchemy
import sqlalchemy
from sqlalchemy
from SQLAlchemy
"""I mported from the sql alchemy"""


if __name__ == "__main__":
    """imported MySQLAlchemy above"""
    db = MySQLdb.connect(user=sys.argv[1], passwd=sys.argv[2], db=sys.argv[3])
    m = db.cursor()
    m.execute("SELECT * FROM `cities` as `m` \
                INNER JOIN `states` as `s` \
                   ON `m`.`state_id` = `s`.`id` \
                ORDER BY `m`.`id`")
    print(", ".join([ct[2] for ct in m.fetchall() if ct[4] == sys.argv[4]]))
