from django.db import models

# Create your models here.
class Audio(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False, default='Untitled')
    audio_file = models.FileField(upload_to='audio_files/')

    def __str__(self):
        return self.title