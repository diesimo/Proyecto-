from django.shortcuts import render
from rest_framework import viewsets
from .models import Zonas, Usuarios
from .serializers import ZonasSerializer, UsuariosSerializer





class ZonasView(viewsets.ModelViewSet):
    queryset=Zonas.objects.all()
    serializer_class=ZonasSerializer

class UsuariosView(viewsets.ModelViewSet):
    queryset=Usuarios.objects.all()
    serializer_class=UsuariosSerializer