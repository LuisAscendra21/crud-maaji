from django.db import models

# Creaciones de tabla

class Task(models.Model):
    nombre = models.CharField(max_length=200)
    apellido = models.CharField(max_length=200)
    telefono = models.CharField(max_length=200)
    correo = models.EmailField(max_length=40)
    
    #Para ver el nombre del dato que tengo en mi models
    def __str__(self):
        return self.correo
    #En este caso lo elegí para que se muestre por correo
    