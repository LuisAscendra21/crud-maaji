#Desde aqui vamos a selecionar los campos que queremos mostrar desde el lado dle cliente
from rest_framework import serializers
from .models import Task

class TaksSerializer(serializers.ModelSerializer):
    class Meta:
        #fields = ('id', 'nombre', 'apellido', 'telefono', 'correo')
        model = Task
        fields = '__all__'