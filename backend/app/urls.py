from django.urls import path
from . import views

urlpatterns = [
    path('profile/sign/', views.ProfileLoginOrRegisterView.as_view(), name='profile-sign'),
    path('profile/<str:user_address>/update/', views.ProfileUpdateView.as_view(), name='profile-update'),
]
