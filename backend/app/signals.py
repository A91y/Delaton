from django.db.models.signals import pre_save
from django.dispatch import receiver
import math
from .models import Blog


@receiver(pre_save, sender=Blog)
def calculate_read_time(sender, instance, *args, **kwargs):
    # Estimate read time based on average reading speed (words per minute)
    words_per_minute = 200 
    word_count = len(instance.content.split())
    instance.read_time = math.ceil(word_count / words_per_minute)
