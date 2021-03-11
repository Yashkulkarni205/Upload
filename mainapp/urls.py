from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('upload/',views.upload,name='upload'),
    path('view/',views.view,name='view'),
    path('delete/<int:pk>/',views.delete,name='delete')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)