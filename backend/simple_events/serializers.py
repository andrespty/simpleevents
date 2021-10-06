from rest_framework import serializers
from .models import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import json
from .token import *

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
        fields = ['name', 'date']

class Ticket_Simple_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['name', 'price']

class Event_Full_Serializer(serializers.ModelSerializer):

    participants = ParticipantSerializer(many=True)
    creator      = UserSerializer()
    tickets      = Ticket_Simple_Serializer(many=True)

    class Meta:
        model = Event
        fields = ['creator', 'name', 'date', 'participants', 'tickets']

