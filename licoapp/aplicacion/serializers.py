from rest_framework import serializers
from .models import Cliente, Empleados

#Cliente Serializer 
class ClienteSerializer(serializers.ModelSerializer):
    class Meta: 
        model= Cliente
        fields ='__all__'

#Empleado
class EmpleadosSerializer(serializers.ModelSerializer):
      class Meta:
          model=Empleados
          fields ='__all__'
