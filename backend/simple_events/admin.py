from django.contrib import admin
from .models import *

class UserAdmin(admin.ModelAdmin):
    model = User

class ParticipantAdmin(admin.ModelAdmin):
    fields = ['name', 'email', 'client', 'event', 'isGuest', 'ticket']

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('creator', 'name')

class TicketAdmin(admin.ModelAdmin):
    fields = ['event','name','price']

admin.site.register(User, UserAdmin)
admin.site.register(Participant, ParticipantAdmin)
admin.site.register(Ticket, TicketAdmin)