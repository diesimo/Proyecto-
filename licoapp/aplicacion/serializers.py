from rest_framework import serializers
from .models import Zonas, Usuarios



class ZonasSerializer(serializers.ModelSerializer):
    class Meta:
        model=Zonas
        fields='__all__'


class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model=Usuarios
        fields='__all__'