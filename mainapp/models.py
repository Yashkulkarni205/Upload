from django.db import models

# Create your models here.
class Upload(models.Model):
    upload_file = models.FileField(verbose_name='file',upload_to='')

    def __str__(self):
        return self.upload_file.name