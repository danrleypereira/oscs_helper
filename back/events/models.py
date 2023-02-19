from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    startDate = models.DateTimeField(null=True)
    endDate = models.DateTimeField(null=True)

