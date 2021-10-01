from rest_framework import serializers
from .models import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import json
from .token import *

class Model_User_Serializer(serializers.ModelSerializer):
    password = serializers.CharField(min_length=8, write_only=True)
    token = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id','first_name','last_name', 'email', 'token', 'password' ]
        extra_kwargs = {'password': {'write_only':True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()

        return instance

    def get_token(self, obj):
        token = MyTokenObtainPairSerializer.get_token(obj)
        return {'access':f'{token.access_token}', 'refresh':f'{token}'}

class Model_Event_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance

class Model_Participant_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = '__all__'

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance

class Model_Ticket_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance
        