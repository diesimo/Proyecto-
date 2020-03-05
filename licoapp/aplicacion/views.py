from django.shortcuts import render
from rest_framework import viewsets
from .models import Zonas, Usuarios, Proveedores, Productos
from .serializers import ZonasSerializer, UsuariosSerializer, ProvedorSerializer, ProductosSerializer





class ZonasView(viewsets.ModelViewSet):
    queryset=Zonas.objects.all()
    serializer_class=ZonasSerializer

class UsuariosView(viewsets.ModelViewSet):
    queryset=Usuarios.objects.all()
    serializer_class=UsuariosSerializer

class ProveedoresView(viewsets.ModelViewSet):
    queryset=Proveedores.objects.all()
    serializer_class=ProvedorSerializer

class ProductosView(viewsets.ModelViewSet):
    queryset=Productos.objects.all()
    serializer_class=ProductosSerializer