from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class User(AbstractUser):
    username = models.CharField(max_length=64, unique=True)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.EmailField(unique=True)

    def __str__(self):
        return f'{self.first_name}|{self.last_name}|{self.email}'


class Project(models.Model):
    name = models.CharField(max_length=64)
    link = models.URLField(null=True, blank=True)
    users = models.ManyToManyField(User)

    def __str__(self):
        return f'{self.name}'


class TODO(models.Model):
    project = models.ManyToManyField(Project)
    note = models.CharField(max_length=256)
    status = models.BooleanField()
    modify_time = models.DateTimeField()
    user = models.OneToOneField(User, on_delete=models.CASCADE)
