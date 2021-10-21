from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.utils.translation import ugettext_lazy as _

from .managers import *

def user_directory_path(instance, filename):
    return 'images/{0}/'.format(filename)

class User(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)

    USERNAME_FIELD  = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = CustomUserManager()

    def __str__(self):
        return self.email

class Event(models.Model):
    creator         = models.ForeignKey(User, on_delete=models.CASCADE, related_name='events_created', blank=False)
    name            = models.CharField(max_length=32, blank=False)
    date            = models.DateTimeField(verbose_name='date')

    poster          = models.ImageField(upload_to='images', default='images/placeholder.png')

    def __str__(self):
        return f'{self.name}'

class Ticket(models.Model):
    event           = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='tickets')
    name            = models.CharField(max_length=15)
    price           = models.DecimalField(verbose_name='price', decimal_places=2, max_digits=6)
    amount          = models.IntegerField(verbose_name='amount', default=100)
    description     = models.CharField(max_length=100, default='', blank=True, null=True)
    isAvailable     = models.BooleanField(verbose_name='is_available', default=True)

    def __str__(self):
        return f'{self.name} - {self.event.name}'

class Participant(models.Model):
    client          = models.ForeignKey(User, on_delete=models.CASCADE, related_name='events_participating', blank=True, null=True)
    name            = models.CharField(max_length=32, blank=True)
    email           = models.EmailField(max_length = 254, blank=True)
    event           = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='participants')
    ticket          = models.ForeignKey(Ticket, on_delete=models.CASCADE, related_name='participants')
    isGuest         = models.BooleanField(verbose_name='is_guest', default=True)
