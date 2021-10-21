from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from simple_events import views, stripe_views
from rest_framework_simplejwt.views import TokenRefreshView
from .token import MyTokenObtainPairView


router = routers.DefaultRouter()
router.register('participants', views.ParticipantView)
router.register('event', views.EventView)
router.register('filterEvents', views.Simple_Event_View, basename='filter_events')

routerCreate = routers.SimpleRouter()
routerCreate.register('user', views.Model_User_View, basename='create_user')
routerCreate.register('event', views.Model_Event_View, basename='create_event')
routerCreate.register('participant', views.Model_Participant_View, basename='create_participant')
routerCreate.register('ticket', views.Model_Ticket_View, basename='create_ticket')


urlpatterns = [
    path('', include(router.urls)),
    path('models/', include(routerCreate.urls)),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('tickets/create/', views.Create_Tickets),

    path('test/payment/', stripe_views.test_payment)

]
