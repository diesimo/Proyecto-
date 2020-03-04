from django.shortcuts import render
from rest_framework import viewsets
from .models import Cliente, Empleados
from .serializers import ClienteSerializer, EmpleadosSerializer

class ClienteView(viewsets.ModelViewSet):
    
    #Aqui se esta pidiendo que se traiga todo
    queryset=Cliente.objects.all()
    serializer_class = ClienteSerializer
# Create your views here.

class EmpleadosView(viewsets.ModelViewSet):
    queryset=Empleados.objects.all()
    serializer_class=EmpleadosSerializer
