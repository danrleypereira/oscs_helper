from django.urls import path
from django.conf.urls import include
from django.contrib.auth.models import User

from .models import Event

from . import views

from rest_framework import routers, serializers, viewsets
from rest_framework.response import Response

class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ['title', 'description', 'startDate', 'endDate']

class EventViewSet(viewsets.ViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer(queryset, many=True)

    def list(self, request):
        return Response(self.serializer_class.data)

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'events', EventViewSet)


urlpatterns = [
    path('', views.index, name='index'),
    path('', include(router.urls)),
]