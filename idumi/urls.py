from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('news', include('NewsApp.urls')),
    path('', views.home, name="home"),
]
