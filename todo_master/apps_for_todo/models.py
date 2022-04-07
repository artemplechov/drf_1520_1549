from django.db import models



# Create your models here.
from todo_master.users.models import User


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
