from django.db import models
#Aqui se modelan las fuentes unicas y definitivas de l informacion sobre nuestros Datos.
#Contienen campos y comportamientos esenciales de los datos que almacenamos

#Tabla Zonas
class ID_Zonas(models.Model): 

    id_zonas = models.CharField('ID Zonas',max_length=5,primary_key=True)
    zona=models.CharField('Zona',max_length=30)
    horas=models.CharField('Hora',max_length=6)
    #
    def __str__(self):
        return self.id_zonas

#Tabla Cliente
class Tabla_Cliente(models.Model):
    id_cliente=models.AutoField(primary_key=True)
    nombre=models.CharField('Nombre',max_length=30)
    apellido=models.CharField('Apellido',max_length=30)
    zona=models.OneToOneField(ID_Zonas,on_delete=models.CASCADE)
    cedula=models.CharField('Cedula', max_length=12)
    email=models.CharField('Email',max_length=30)
    fecha=models.DateField('Fecha de Nacimiento')
    tlf=models.CharField('Telefono',max_length=12)
    membresia=models.BooleanField('Membresia',default=False)

#Tabla 



#Especificando que realiza cada parate: 
    #'Field' para determinar los tipos de clases de campos, tipo el tipo de columna
   
    #'max-length' indica el maximo de caracterestes 

    #'OnetoOneField' nos idica relacion uno a uno, es similiar a la ForeignKey
        #se especifica con el ID Padre al inicio, y luego el 'on_delete' se usa para decirle
        # a Django que hacer con las instancias de modelo que depende de la isntancia modelo 
        #que elimine. Cascade: se elimina el objeto referenciado, tambien elimina el objeto
        #que tienen referencia a el (cuando elimina una publicación de blog, por ejemplo,
        #es posible que también desee eliminar los comentarios)
   
    #defdef __str__(self):
       # return self.ID_Zonas
            #Es un metodo general de python para convertir el objeto en cadena.
            #Es decir, anula el nombre predeterminado de los objetos y darle un nombre
            #mas amigable a la vista de la base de datos.