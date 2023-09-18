from rest_framework import viewsets
from .serializer    import TaksSerializer
from .models import Task

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaksSerializer
    queryset = Task.objects.all()
