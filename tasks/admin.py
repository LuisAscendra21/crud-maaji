from django.contrib import admin
from .models import Task

# añadiendo modelos
admin.site.register(Task)
