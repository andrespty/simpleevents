import stripe
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets, permissions, status
from django.conf import settings

stripe.api_key = settings.STRIPE_SECRET_KEY

@api_view(['POST'])
def test_payment(request):
    test_payment_intent = stripe.PaymentIntent.create(
        amount=1000, currency='usd',
        payment_method_types=['card'],
        receipt_email='andresholee@gmail.com'
    )
    return Response(status=status.HTTP_200_OK, data=test_payment_intent)

@api_view(['POST'])
def process_payment(request, data):

    payment = stripe.PaymentIntent.create(
        amount=data['amount'], currency='usd',
        payment_method_types=['card'],
        receipt_email=data['email']
    )
    return Response(status=status.HTTP_200_OK, data=payment)