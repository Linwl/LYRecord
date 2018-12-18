#!usr/bin/env python
# coding=utf-8

"""
@company:广东浩迪创新科技有限公司
@version: ??
@author: linwl
@file: __init__.py.py
@time: 2018/12/18 10:47
@function：
"""

from flask import Flask
from CommonPackage.Tools import LogginMange

log = LogginMange('LYRecord','LYRecord_logger')

def create_app():
    """
    注册url蓝图
    :return:
    """
    app = Flask(__name__)
    from .userSvc import userSvc as userSvc_blueprint
    from .loginSvc import loginSvc as loginSvc_blueprint
    app.register_blueprint(userSvc_blueprint)
    app.register_blueprint(loginSvc_blueprint)
    return app