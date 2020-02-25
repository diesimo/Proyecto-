from rest_framework import serializers
from .models import Cliente

#Cliente Serializer 
class ClienteSerializer(serializers.ModelSerializer):
    class Meta: 
        model= Cliente
        fields ='__all__'