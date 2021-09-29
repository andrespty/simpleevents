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

class Create_User_View(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = Create_User_Serializer
 
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class Create_Event_View(APIView):
    serializer_class = Create_Event_Serializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class Create_Participant_View(APIView):
    serializer_class = Create_Participant_Serializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)