# Generated by Django 3.0.3 on 2020-02-08 23:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('aplicacion', '0002_tabla_empleados'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Tabla_Cliente',
            new_name='Cliente',
        ),
        migrations.RenameModel(
            old_name='Tabla_Empleados',
            new_name='Empleados',
        ),
        migrations.RenameModel(
            old_name='ID_Zonas',
            new_name='Zonas',
        ),
    ]