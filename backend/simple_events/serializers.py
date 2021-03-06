from rest_framework import serializers
from .models import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import json
from .token import *
from .create_serializers import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','email', 'first_name', 'last_name']

class ParticipantSerializer(serializers.ModelSerializer):

    client = UserSerializer()

    class Meta:
        model = Participant
        fields = ['name', 'email', 'isGuest', 'client']

class Event_Simple_Serializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = ['id','name', 'date', 'poster']

class Ticket_Simple_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['name', 'price']

class Event_Full_Serializer(serializers.ModelSerializer):

    participants = ParticipantSerializer(many=True)
    creator      = UserSerializer()
    tickets      = Model_Ticket_Serializer(many=True)

    class Meta:
        model = Event
        fields = ['id','creator', 'name', 'date', 'participants', 'tickets', 'poster']

