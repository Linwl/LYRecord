#!usr/bin/env python
# coding=utf-8

"""
@company:广东浩迪创新科技有限公司
@version: ??
@author: linwl
@file: __init__.py.py
@time: 2018/12/18 15:10
@function：
"""

from flask import Blueprint

loginSvc = Blueprint('loginSvc',__name__,template_folder='../templates',static_folder='../html5')

from . import views