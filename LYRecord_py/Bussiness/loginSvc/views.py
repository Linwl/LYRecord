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
from flask import render_template,request,session
from CommonPackage.Tools import HttpRequestTools,JsonHelper,DesTools

@loginSvc.route('/', methods=['GET'])
def index():
    log= session.get('log')
    try:
        log.info('随心记服务启动!')
        return render_template('index.html')
    except Exception as e:
        error_msg = '加载首页异常:{0}!'.format(e)
        log.error(error_msg)
        return error_msg

@loginSvc.route('/LoginSvc/Register', methods=['POST'])
def Register():
    try:
        if request.method == 'POST':
            data = JsonHelper.decode(request.data)
            account = data.get('account')
            password = data.get('password')
            password = DesTools.encrypt(password)
            params = dict(
                UserName=account,
                Password=password
            )
            login_url = url + 'LoginRegAPI/Login'
            log.info('向数据服务接口发送了请求!URL为:{0}!'.format(login_url))
            res = HttpRequestTools.http_get(url=login_url, params=params, timeout=7)
            return res
        else:
            raise RuntimeError('错误的请求!')
    except Exception as e:
        error_msg = '登录异常:{0}!'.format(e)
        log.error(error_msg)
        return error_msg