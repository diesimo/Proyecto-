# Generated by Django 3.0.3 on 2020-03-05 05:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('aplicacion', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='productos',
            old_name='id_prove',
            new_name='nom_prove',
        ),
    ]