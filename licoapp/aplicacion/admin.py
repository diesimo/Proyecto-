from django.contrib import admin
#Se importan todos los modelos de la clase modelos
from .models import Empleados,Cliente, Zonas
from django.contrib.auth.admin import UserAdmin


#Aqui cambiamos la forma en como se despliega la interfaz de adminitacion 
#se crean clases en base a lo que queremos modificar
class AdminUsuarios(admin.ModelAdmin):
    list_display=['nombre','apellido','cedula', 'fecha','tlf','email','membresia']
    search_fields=['nombre','apellido','cedula','membresia']   

class AdminZonas(admin.ModelAdmin):
    list_display=['id_zonas','zona','horas']
    search_fields=['zona']

class AdminProductos(admin.ModelAdmin):
    list_display['id_pro','nom_pro','descripcion','costo','tipo_pro','stock']
    search_fields=['nom_pro','costo','tipo_pro']

class AdminPagos(admin.ModelAdmin):
    list_display['monto','num_instrum','tipo_inst','divisas']
    search_fields['monto','num_instrum']


#Aqui estamos registrando los modelos que queremos que se nos modelen
#en la interfaz de Django
admin.site.register(Zonas,AdminZonas)
admin.site.register(Cliente,AdminCliente)
admin.site.register(Empleados)