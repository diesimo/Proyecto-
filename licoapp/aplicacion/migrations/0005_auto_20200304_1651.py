# Generated by Django 3.0.3 on 2020-03-04 20:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aplicacion', '0004_auto_20200304_1649'),
    ]

    operations = [
        migrations.AlterField(
            model_name='zonas',
            name='id_zonas',
            field=models.AutoField(max_length=5, primary_key=True, serialize=False, verbose_name='ID Zonas'),
        ),
    ]