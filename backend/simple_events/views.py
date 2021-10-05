from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from .serializers import *
from .create_serializers import *
from .models import *
import json
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
import random
from rest_framework.pagination import PageNumberPagination
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from datetime import datetime

class ParticipantView(viewsets.ModelViewSet):
    serializer_class = ParticipantSerializer
    queryset = Participant.objects.all()

class EventView(viewsets.ModelViewSet):
    serializer_class = Event_Full_Serializer
    queryset = Event.objects.all()

class Simple_Event_View(viewsets.ModelViewSet):
    serializer_class = Event_Simple_Serializer
    queryset = Event.objects.all()


class Model_User_View(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = Model_User_Serializer
    queryset = User.objects.all()

class Model_Event_View(viewsets.ModelViewSet):
    serializer_class = Model_Event_Serializer
    queryset = Event.objects.all()

class Model_Participant_View(viewsets.ModelViewSet):
    serializer_class = Model_Participant_Serializer
    queryset = Participant.objects.all()

class Model_Ticket_View(viewsets.ModelViewSet):
    serializer_class = Model_Ticket_Serializer
    queryset = Ticket.objects.all()