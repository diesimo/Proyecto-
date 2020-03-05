from django.urls import path, include
from . import views
from rest_framework import routers

router =routers.DefaultRouter()


router.register('aplicacionesZonas', views.ZonasView)
router.register('aplicacionUsuarios',views.UsuariosView)
router.register('aplicacionProveedores',views.ProveedoresView)
router.register('aplicacionProductos',views.ProductosView)



urlpatterns = [
    
   path ('', include(router.urls))
]
