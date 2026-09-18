from rest_framework import serializers
from .models import Service, Project, QuoteRequest, Inquiry

class ServiceSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)

    class Meta:
        model = Service
        fields = ['id', 'title', 'category', 'category_display', 'short_desc', 'icon_name', 'features', 'order']


class ProjectSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    project_type_display = serializers.CharField(source='get_project_type_display', read_only=True)

    class Meta:
        model = Project
        fields = [
            'id', 'title', 'category', 'category_display', 'project_type', 
            'project_type_display', 'location', 'year', 'image_url', 
            'description', 'area_sqft', 'duration', 'client_type', 'is_featured', 'order'
        ]


class QuoteRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuoteRequest
        fields = '__all__'
        read_only_fields = ['id', 'created_at']


class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = '__all__'
        read_only_fields = ['id', 'created_at']
