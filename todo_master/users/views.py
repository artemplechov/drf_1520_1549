from rest_framework.generics import UpdateAPIView, RetrieveAPIView
from rest_framework.mixins import ListModelMixin
from rest_framework.renderers import JSONRenderer, AdminRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from .models import User
from .serializers import UserModelSerializer


#class UserModelViewSet(ModelViewSet):
#    queryset = User.objects.all()
#    serializer_class = UserModelSerializer

class UserCustomViewSet(ListModelMixin,RetrieveAPIView,UpdateAPIView,GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    renderer_class = [JSONRenderer,BrowsableAPIRenderer]


