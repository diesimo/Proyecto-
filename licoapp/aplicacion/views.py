from django.shortcuts import render
from rest_framework import viewsets
from .models import Cliente
from .serializers import ClienteSerializer

class ClienteView(viewsets.ModelViewSet):
    
    #Aqui se esta pidiendo que se traiga todo
    queryset=Cliente.objects.all()

    serializer_class = ClienteSerializer
# Create your views here.
