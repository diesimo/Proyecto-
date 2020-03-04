from django.db import models
#Aqui se modelan las fuentes unicas y definitivas de l informacion sobre nuestros Datos.
#Contienen campos y comportamientos esenciales de los datos que almacenamos

#Tabla Zonas
class Zonas(models.Model): 

    id_zonas = models.AutoField(primary_key=True)
    zona=models.CharField('Zona',max_length=30)
    horas=models.CharField('Hora',max_length=6)
    #jjaja
    def __str__(self):
        return self.zona


#Tabla Cliente
class Cliente(models.Model):
    id_cliente=models.AutoField('ID Cliente',max_length=5,primary_key=True)
    nombre=models.CharField('Nombre',max_length=30)
    apellido=models.CharField('Apellido',max_length=30)
    zona=models.ForeignKey(Zonas,on_delete=models.CASCADE) #clave
    cedula=models.CharField('Cedula', max_length=12)
    fecha=models.DateField('Fecha de Nacimiento')
    tlf=models.CharField('Telefono',max_length=12)
    membresia=models.BooleanField('Membresia',default=False)
    id_usuario=models.ForeignKey(Usuarios,on_delete=models.CASCADE)

    def __str__(self):
        return self.id_cliente

#Tabla Empleados

class Empleados(models.Model):

    id_empleado=models.AutoField('ID Empleado',max_length=5,primary_key=True)
    nombre=models.CharField('Nombre',max_length=30)
    apellido=models.CharField('Apellido',max_length=30)
    cedula=models.CharField('Cedula', max_length=12)
    fecha2=models.DateField('Fecha de Nacimiento')
    cuenta=models.CharField('Cuenta', max_length=20)
    id_usuario=models.ForeignKey(Usuarios,on_delete=models.CASCADE)

    def __str__(self):
        return self.id_empleado
    
#Tabla Zonas


    id_usuario=models.AutoField('ID Usuario',max_length=5,primary_key=True)
    password=models.CharField('Contraseña', max_length=12)
    nom_usu=models.ForeignKey(name,on_delete=models.CASCADE)

#Tabla Nombre de Usuario

class name(models.Model):

    nom_usu=models.CharField('Nombre',max_length=20)
    apellido=models.CharField('Apellido',max_length=20)

#Tabla de Productos

    id_pro=models.AutoField('ID Producto', max_length=5,primary_key=True)
    nom_pro=models.CharField('Nombre del Producto', max_length=30)
    descripcion=models.CharField('Descripcion',max_length=40)
    costo=models.CharField('Costo',max_length=10)
    tipo_pro=models.CharField('Tipo de Productos', max_length=15)
    stock=models.CharField('Stock',max_length=5)
    tipo_lico=models.ForeignKey(Licores,on_delete=models.CASCADE)


#Tabla de Licores

class Licores(models.Model):

    tipo_lico=models.CharField('Tipo de Licor',max_length=10)
    grados=models.CharField('Grados', max_length=5)
    region=models.CharField('Region',max_length=10)

#Tabla de Proveedores

class Proveedores(models.Model):

    id_prove=models.AutoField('ID de Proveedor',max_length=5,primary_key=True)
    rif=models.CharField('RIF',max_length=10)
    nom_prove=models.CharField('Nombre del Proveedor',max_length=20)
    direc=models.CharField('Direccion',max_length=30)

#Tabla Factura

class Factura(models.Model):
    
    id_fac=models.AutoField('ID Factura',max_length=15,primary_key=True)
    fecha_fac=models.DateField('Fecha de Factura')
    descuento=models.CharField('Descuento',max_length=10)
    monto_fac=models.CharField('Monto de la Factura',max_length=10)
    









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