#!/bin/bash
mongo -u admin -p pass --eval "db.getSiblingDB('npc').createUser({user: 'npc', pwd: 'pass', roles: ['readWrite']})"