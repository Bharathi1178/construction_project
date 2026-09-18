from django.urls import path
from .views import (
    ServiceListView, 
    ProjectListView, 
    ProjectDetailView, 
    QuoteCreateView, 
    InquiryCreateView, 
    CompanyInfoView
)

urlpatterns = [
    path('services/', ServiceListView.as_view(), name='services-list'),
    path('projects/', ProjectListView.as_view(), name='projects-list'),
    path('projects/<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),
    path('quotes/', QuoteCreateView.as_view(), name='quote-create'),
    path('inquiries/', InquiryCreateView.as_view(), name='inquiry-create'),
    path('company-info/', CompanyInfoView.as_view(), name='company-info'),
]
