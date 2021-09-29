from django.contrib import admin
from .models import *

class UserAdmin(admin.ModelAdmin):
    model = User

class ParticipantAdmin(admin.ModelAdmin):
    fields = ['name', 'email', 'client', 'event', 'isGuest']

class EventAdmin(admin.ModelAdmin):
    fields = ['date', 'price', 'name', 'creator']

class TicketAdmin(admin.ModelAdmin):
    fields = ['event','name','price']

admin.site.register(User, UserAdmin)
admin.site.register(Participant, ParticipantAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Ticket, TicketAdmin)