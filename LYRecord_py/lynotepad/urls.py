from django.urls import path
from . import views
from django.views.generic.base import TemplateView


app_name = 'lynotepad'
urlpatterns = [
    # path('', views.index, name='index'),
    path(r'', TemplateView.as_view(template_name="index.html")),
]