from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from simple_events import views

router = routers.DefaultRouter()
router.register('participants', views.ParticipantView)
router.register('event', views.EventView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/createUser/', views.Create_User_View.as_view()),
    path('api/createEvent/', views.Create_Event_View.as_view()),
    path('api/createParticipant/', views.Create_Participant_View.as_view())
]
