
from django.urls import path, include
from . import views
from rest_framework import routers

router =routers.DefaultRouter()
router.register('aplicacionCliente', views.ClienteView)
router.register('aplicacionEmpleado', views.EmpleadosView)



urlpatterns = [
    
   path ('', include(router.urls))
]
