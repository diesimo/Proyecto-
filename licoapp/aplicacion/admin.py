from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin

class AdminTablaCliente(admin.ModelAdmin):
    list_display=['nombre','apellido','cedula', 'fecha','tlf','email','membresia']
    search_fields=['nombre','apellido','cedula','membresia']
    
   

class AdminDirecciones(admin.ModelAdmin):
    list_display=['id_direct','zona']
    search_fields=['zona']


admin.site.register(ID_Direcciones,AdminDirecciones)
admin.site.register(Tabla_Cliente,AdminTablaCliente)