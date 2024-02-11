from django.urls import path
from. import views

urlpatterns = [
    path("login/",views.login_view, name="api_login"),
    path("logout/",views.login_view, name="api_logout"),
    path("session/",views.login_view, name="api_session"),
    path("whoami/",views.login_view, name="api_whoami"),
    path("formfill",views.form_fill, name="api_formfill"),
    path('', views.home, name='home'),
]