from django.db import models

class Service(models.Model):
    CATEGORY_CHOICES = [
        ('interior', 'Interior Design'),
        ('construction', 'Construction'),
    ]

    title = models.CharField(max_length=200)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    short_desc = models.TextField()
    icon_name = models.CharField(max_length=50, default='Layers')
    features = models.JSONField(default=list, blank=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', 'title']

    def __str__(self):
        return f"[{self.get_category_display()}] {self.title}"


class Project(models.Model):
    CATEGORY_CHOICES = [
        ('interior', 'Interior Design'),
        ('construction', 'Construction'),
    ]
    PROJECT_TYPE_CHOICES = [
        ('residential', 'Residential'),
        ('commercial', 'Commercial'),
    ]

    title = models.CharField(max_length=250)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    project_type = models.CharField(max_length=20, choices=PROJECT_TYPE_CHOICES)
    location = models.CharField(max_length=200)
    year = models.CharField(max_length=10, default='2024')
    image_url = models.URLField(max_length=500)
    description = models.TextField()
    area_sqft = models.PositiveIntegerField(help_text="Area in Sq. Ft.", default=2500)
    duration = models.CharField(max_length=50, default="6 Months")
    client_type = models.CharField(max_length=100, default="Private Client")
    is_featured = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return f"{self.title} ({self.get_category_display()} - {self.get_project_type_display()})"


class QuoteRequest(models.Model):
    SERVICE_CHOICES = [
        ('interior', 'Interior Design'),
        ('construction', 'Construction'),
        ('both', 'Turnkey (Interior + Construction)'),
    ]
    PROJECT_TYPE_CHOICES = [
        ('residential', 'Residential'),
        ('commercial', 'Commercial'),
    ]

    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    service_type = models.CharField(max_length=20, choices=SERVICE_CHOICES)
    project_type = models.CharField(max_length=20, choices=PROJECT_TYPE_CHOICES)
    estimated_area = models.PositiveIntegerField(default=1500)
    finish_tier = models.CharField(max_length=50, default='Premium')
    estimated_budget = models.CharField(max_length=100, blank=True)
    timeline = models.CharField(max_length=100, blank=True)
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Quote from {self.name} - {self.service_type} ({self.created_at.strftime('%Y-%m-%d')})"


class Inquiry(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    subject = models.CharField(max_length=200, default='General Consultation')
    service_interest = models.CharField(max_length=100, default='Interior & Construction')
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Inquiries'
        ordering = ['-created_at']

    def __str__(self):
        return f"Inquiry from {self.name} - {self.subject}"
