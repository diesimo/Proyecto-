from django.urls import path, include
from . import views
from rest_framework import routers

router =routers.DefaultRouter()


router.register('aplicacionesZonas', views.ZonasView)
router.register('aplicacionUsuarios',views.UsuariosView)



urlpatterns = [
    
   path ('', include(router.urls))
]
