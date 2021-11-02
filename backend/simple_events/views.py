from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, permissions, status
from .serializers import *
from .create_serializers import *
from .models import *
import json
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, action
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

    @action(methods=['DELETE',], detail=False)
    def delete_bulk(self, request, *args, **kwargs):
        pks = request.query_params.get('pks', None)
        if not pks:
            return Response(status=status.HTTP_404_NOT_FOUND)
        for pk in pks.split(','):
            get_object_or_404(Ticket, id=int(pk)).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(methods=['PUT',], detail=False)
    def multiple_update_or_create(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instances = []  # This variable is used to save the modified object and return it to the front end
        for item in request.data:  # Traverse each object dictionary in the list
            instance = Ticket.objects.filter(id=int(item['id']))
            print(instance.exists())
            if instance:
                print('exists')
                serializer = super().get_serializer(instance[0], data=item, partial=partial)
                serializer.is_valid(raise_exception=True)
                serializer.save()
                instances.append(serializer.data)  # Add data to the list
            else:
                print('not exists')
                serializer = super().get_serializer(data=item)
                serializer.is_valid(raise_exception=True)
                serializer.save()
                instances.append(serializer.data)
            # Construct a serialized object. Note that partial=True means local update is allowed
            # Because we rewritten get earlier_ The serializer method is used to judge many=True.
            # But there is no need to judge many=True here, so the get of the parent class must be called_ Serializer method
        return Response(instances)
