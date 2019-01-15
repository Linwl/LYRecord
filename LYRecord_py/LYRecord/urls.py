#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @File  : urls.py
# @Author: Linwl
# @Date  : 2019/1/15
# @Desc  :

from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
]