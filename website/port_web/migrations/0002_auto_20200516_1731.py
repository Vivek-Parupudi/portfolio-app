# Generated by Django 3.0.6 on 2020-05-16 22:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('port_web', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='image',
        ),
        migrations.RemoveField(
            model_name='project',
            name='show',
        ),
    ]
