from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from simple_events import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('simple_events.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

