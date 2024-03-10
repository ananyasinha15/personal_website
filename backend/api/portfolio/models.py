from django.db import models

class Education(models.Model):
    school = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    years = models.CharField(max_length=25)
    description = models.TextField()
    ordinal = models.IntegerField()

class Experience(models.Model):
    company = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    years = models.DurationField()
    description = models.TextField()
    ordinal = models.IntegerField()

class Projects(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    ordinal = models.IntegerField()
