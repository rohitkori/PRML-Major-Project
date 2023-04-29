from django.urls import path,include
from .views import AudioViewSet, Predict
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'audio', AudioViewSet)

urlpatterns =  [
    path(r'',include(router.urls)), 
    path('predict/', Predict.as_view(), name = 'predictor'),
]
