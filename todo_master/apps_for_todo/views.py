from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import CreateAPIView, RetrieveAPIView, UpdateAPIView
from rest_framework.mixins import ListModelMixin, DestroyModelMixin
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.renderers import JSONRenderer, AdminRenderer, BrowsableAPIRenderer
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.permissions import IsAdminUser, BasePermission



from .filters import ProjectFilter, TODOFilter
from .models import Project, TODO
from .serializers import ProjectModelSerializer, TODOModelSerializer


class DevelopersOnly(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_staff

#class ProjectLimitOffsetPagination(LimitOffsetPagination):
#    default_limit = 10


class ProjectCustomViewSet(ListModelMixin, CreateAPIView, DestroyModelMixin, RetrieveAPIView, UpdateAPIView,
                           GenericViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    renderer_class = [JSONRenderer, BrowsableAPIRenderer]
    filterset_class = ProjectFilter
    #pagination_class = ProjectLimitOffsetPagination


#class TODOLimitOffsetPagination(LimitOffsetPagination):
#    default_limit = 20





class TODOModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer
    renderer_class = [JSONRenderer, BrowsableAPIRenderer]
    filterset_class = TODOFilter
    #pagination_class = TODOLimitOffsetPagination

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.status = False
        instance.save()
        return Response(status=status.HTTP_204_NO_CONTENT)