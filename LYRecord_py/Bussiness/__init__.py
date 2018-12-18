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
from CommonPackage.Tools import LogginMange,MongodbManage



def init_mongodb(log):
    try:
        mongo_conn = MongodbManage(path='Config/config.ini')
        log.info('连接Mongo服务器成功!')
        return mongo_conn
    except Exception as e:
        error_msg = '连接Mongo服务器异常:{0}!'.format(e)
        raise RuntimeError(error_msg)

def create_app():
    """
    注册url蓝图
    :return:
    """
    app = Flask(__name__)
    log = LogginMange('LYRecord', 'LYRecord_logger')
    from .userSvc import userSvc as userSvc_blueprint
    from .loginSvc import loginSvc as loginSvc_blueprint
    app.register_blueprint(userSvc_blueprint)
    app.register_blueprint(loginSvc_blueprint)
    # 开启CSRF保护
    CsrfProtect(app)
    return app