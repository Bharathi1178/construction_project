from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Service, Project, QuoteRequest, Inquiry
from .serializers import ServiceSerializer, ProjectSerializer, QuoteRequestSerializer, InquirySerializer

class ServiceListView(generics.ListAPIView):
    serializer_class = ServiceSerializer

    def get_queryset(self):
        queryset = Service.objects.all()
        category = self.request.query_params.get('category')
        if category and category.lower() != 'all':
            queryset = queryset.filter(category=category.lower())
        return queryset


class ProjectListView(generics.ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        queryset = Project.objects.all()
        category = self.request.query_params.get('category')
        project_type = self.request.query_params.get('project_type')
        featured = self.request.query_params.get('featured')

        if category and category.lower() != 'all':
            queryset = queryset.filter(category=category.lower())
        if project_type and project_type.lower() != 'all':
            queryset = queryset.filter(project_type=project_type.lower())
        if featured and featured.lower() == 'true':
            queryset = queryset.filter(is_featured=True)
            
        return queryset


class ProjectDetailView(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class QuoteCreateView(generics.CreateAPIView):
    queryset = QuoteRequest.objects.all()
    serializer_class = QuoteRequestSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        # Calculate instant rough estimation based on params
        area = int(request.data.get('estimated_area', 1500) or 1500)
        service = request.data.get('service_type', 'both')
        tier = request.data.get('finish_tier', 'Premium')

        rates = {
            'Standard': {'interior': 85, 'construction': 140, 'both': 210},
            'Premium': {'interior': 130, 'construction': 195, 'both': 305},
            'Luxury Haute': {'interior': 220, 'construction': 310, 'both': 490},
        }
        selected_tier = rates.get(tier, rates['Premium'])
        rate_per_sqft = selected_tier.get(service, selected_tier['both'])
        estimated_min = area * rate_per_sqft
        estimated_max = int(estimated_min * 1.25)

        headers = self.get_success_headers(serializer.data)
        response_data = serializer.data
        response_data['estimate_summary'] = {
            'rate_per_sqft': rate_per_sqft,
            'estimated_range': f"${estimated_min:,.0f} - ${estimated_max:,.0f}",
            'estimated_min': estimated_min,
            'estimated_max': estimated_max,
            'currency': 'USD',
            'timeline_weeks': '8-16 Weeks' if area < 2500 else '16-32 Weeks',
            'notes': 'Indicative range based on selected tier and architectural specifications.'
        }
        return Response(response_data, status=status.HTTP_201_CREATED, headers=headers)


class InquiryCreateView(generics.CreateAPIView):
    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer


class CompanyInfoView(APIView):
    def get(self, request):
        data = {
            "name": "VASTU & STRUX",
            "tagline": "Architectural Interiors & Structural Construction",
            "concept": "Complete project solution from concept and blueprint to turnkey execution.",
            "stats": [
                {"label": "Years of Excellence", "value": "18+", "desc": "Founded in 2008"},
                {"label": "Executed Projects", "value": "340+", "desc": "Residential & Commercial"},
                {"label": "Design Awards", "value": "24", "desc": "International Recognition"},
                {"label": "Client Retention", "value": "99%", "desc": "Satisfied Homeowners & Developers"},
                {"label": "Sq. Ft. Built & Styled", "value": "2.8M+", "desc": "Across Major Metros"}
            ],
            "pillars": [
                {
                    "title": "Professional Expertise",
                    "desc": "Licensed structural engineers, RIBA-certified interior architects, and dedicated site master builders."
                },
                {
                    "title": "Quality Materials",
                    "desc": "Direct sourcing of Italian marbles, FSC-certified hardwoods, corrosion-resistant steel, and ultra-high-grade concrete."
                },
                {
                    "title": "Transparent Pricing",
                    "desc": "Detailed BOQ (Bill of Quantities), itemized cost breakdowns, and zero hidden surcharge policies."
                },
                {
                    "title": "On-Time Execution",
                    "desc": "Milestone-driven project scheduling with weekly progress reporting and guaranteed handover SLA."
                },
                {
                    "title": "End-to-End Management",
                    "desc": "Single point of accountability from civil excavation and structural framing to bespoke interior styling."
                },
                {
                    "title": "Customer-Focused Approach",
                    "desc": "Tailored spaces sculpted to your lifestyle, spatial workflow, acoustic comfort, and aesthetic aspirations."
                }
            ],
            "process": [
                {"step": "01", "title": "Consultation", "desc": "Comprehensive site assessment, lifestyle audit, and spatial requirement discovery session."},
                {"step": "02", "title": "Planning & Design", "desc": "3D architectural visualizations, moodboards, spatial layouts, and structural engineering drafts."},
                {"step": "03", "title": "Estimation", "desc": "Transparent bill of quantities (BOQ), material selection matrix, and milestone timeline commit."},
                {"step": "04", "title": "Approval", "desc": "Municipal permit clearance, architectural sign-off, and material procurement finalization."},
                {"step": "05", "title": "Execution", "desc": "Precision civil construction, MEP integration, drywall, bespoke cabinetry, and luxury finishes."},
                {"step": "06", "title": "Final Handover", "desc": "Quality audit inspection, deep cleaning, warranty issuance, and ceremonial key delivery."}
            ]
        }
        return Response(data)
