from django.contrib import admin
from .models import Service, Project, QuoteRequest, Inquiry

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'icon_name', 'order', 'created_at')
    list_filter = ('category',)
    search_fields = ('title', 'short_desc')
    ordering = ('order', 'title')


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'project_type', 'location', 'year', 'area_sqft', 'is_featured')
    list_filter = ('category', 'project_type', 'is_featured')
    search_fields = ('title', 'location', 'description')
    ordering = ('order', '-created_at')


@admin.register(QuoteRequest)
class QuoteRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'service_type', 'project_type', 'finish_tier', 'estimated_area', 'created_at')
    list_filter = ('service_type', 'project_type', 'finish_tier')
    search_fields = ('name', 'email', 'phone', 'message')
    readonly_fields = ('created_at',)


@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'subject', 'created_at')
    search_fields = ('name', 'email', 'phone', 'message', 'subject')
    readonly_fields = ('created_at',)
