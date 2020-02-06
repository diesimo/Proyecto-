from django.contrib import admin
#Se importan todos los modelos de la clase modelos
from .models import *
from django.contrib.auth.admin import UserAdmin


#Aqui cambiamos la forma en como se despliega la interfaz de adminitacion 
#se crean clases en base a lo que queremos modificar
class AdminTablaCliente(admin.ModelAdmin):
    list_display=['nombre','apellido','cedula', 'fecha','tlf','email','membresia']
    search_fields=['nombre','apellido','cedula','membresia']
    
   

class AdminZonas(admin.ModelAdmin):
    list_display=['id_zonas','zona','horas']
    search_fields=['zona']

#Aqui estamos registrando los modelos que queremos que se nos modelen
#en la interfaz de Django
admin.site.register(ID_Zonas,AdminZonas)
admin.site.register(Tabla_Cliente,AdminTablaCliente)