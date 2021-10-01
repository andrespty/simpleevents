from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from simple_events import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('simple_events.urls')),
]

