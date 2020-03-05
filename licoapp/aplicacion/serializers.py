from rest_framework import serializers
from .models import Zonas, Usuarios, Proveedores, Productos



class ZonasSerializer(serializers.ModelSerializer):
    class Meta:
        model=Zonas
        fields='__all__'


class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model=Usuarios
        fields='__all__'

class ProvedorSerializer(serializers.ModelSerializer):
    class Meta:
        model=Proveedores
        fields='__all__'

class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model=Productos
        fields='__all__'
        