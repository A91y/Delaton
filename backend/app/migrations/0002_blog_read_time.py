# Generated by Django 5.0.6 on 2024-06-01 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='read_time',
            field=models.IntegerField(default=0),
        ),
    ]
