#!usr/bin/env python
# coding=utf-8

"""
@company:广东浩迪创新科技有限公司
@version: ??
@author: linwl
@file: views.py
@time: 2018/12/18 15:11
@function：
"""
from .import loginSvc
from Bussiness import log
from flask import render_template

@loginSvc.route('/', methods=['GET'])
def login():
    try:
        return render_template('index.html')
    except Exception as e:
        error_msg = '请求查询告警记录异常:{0}!'.format(e)
        log.error(error_msg)
        return error_msg