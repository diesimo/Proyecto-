from django.db import models

class ID_Direcciones(models.Model): 
    id_direct = models.CharField('ID Direccion',max_length=5,primary_key=True)
    zona=models.CharField('Zona',max_length=30)
    def __str__(self):
        return self.id_direct

class Tabla_Cliente(models.Model):
    id_cliente=models.AutoField(primary_key=True)
    nombre=models.CharField('Nombre',max_length=30)
    apellido=models.CharField('Apellido',max_length=30)
    zona=models.OneToOneField(ID_Direcciones,on_delete=models.CASCADE)
    cedula=models.CharField('Cedula', max_length=12)
    email=models.CharField('Email',max_length=30)
    fecha=models.DateField('Fecha de Nacimiento')
    tlf=models.CharField('Telefono',max_length=12)
    membresia=models.BooleanField('Membresia',default=False)
    
    