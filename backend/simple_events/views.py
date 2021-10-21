from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from .serializers import *
from .create_serializers import *
from .models import *
import json
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import FormParser, MultiPartParser, JSONParser
import random
from rest_framework.pagination import PageNumberPagination
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from datetime import datetime
import io

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
    parser_classes = (FormParser, MultiPartParser, JSONParser)

class Model_Participant_View(viewsets.ModelViewSet):
    serializer_class = Model_Participant_Serializer
    queryset = Participant.objects.all()

class Model_Ticket_View(viewsets.ModelViewSet):
    serializer_class = Model_Ticket_Serializer
    queryset = Ticket.objects.all()

    # Create multiple instances when given a list of objects
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=isinstance(request.data,list))
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
