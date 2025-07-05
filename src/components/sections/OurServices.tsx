import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { 
  ArrowRight, 
  ArrowLeft, 
  Phone, 
  Mail, 
  ExternalLink,
  AlertCircle,
  Briefcase
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  ar_name: string;
  description: string;
  ar_description: string;
  images?: string[];
  created_at: string;
  updated_at: string;
}

const OurServices: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  // Fetch services using React Query
  const { 
    data: services , 
    isLoading: loading, 
    error
  } = useQuery<Service[]>({
    queryKey: ['services'],
    queryFn: async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/all-services`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        
        const data = await response.json();
        return data;
      } catch (err) {
        console.error('Error fetching services:', err);
        // Return mock data for development/demo purposes when API fails
        return [
          {
            id: '1',
            name: 'Strategic Planning & Management',
            ar_name: 'التخطيط الاستراتيجي والإدارة',
            description: 'Comprehensive strategic planning services to help your organization define its vision, mission, and strategic objectives.',
            ar_description: 'خدمات التخطيط الاستراتيجي الشاملة لمساعدة مؤسستك على تحديد رؤيتها ورسالتها وأهدافها الاستراتيجية.',
            image: '/green(1).jpeg',
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          {
            id: '2',
            name: 'Business Process Optimization',
            ar_name: 'تحسين العمليات التجارية',
            description: 'Analyze and optimize your business processes to improve efficiency, reduce costs, and enhance performance.',
            ar_description: 'تحليل وتحسين عملياتك التجارية لتحسين الكفاءة وتقليل التكاليف وتعزيز الأداء.',
            image: '/green(2).jpeg',
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          {
            id: '3',
            name: 'Organizational Development',
            ar_name: 'التطوير التنظيمي',
            description: 'Transform your organizational culture, structure, and capabilities to achieve sustainable growth.',
            ar_description: 'تحويل ثقافة مؤسستك وهيكلها وقدراتها لتحقيق نمو مستدام.',
            image: '/green(3).jpeg',
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          {
            id: '4',
            name: 'Digital Transformation',
            ar_name: 'التحول الرقمي',
            description: 'Guide your organization through digital transformation initiatives to stay competitive in the digital age.',
            ar_description: 'إرشاد مؤسستك من خلال مبادرات التحول الرقمي للبقاء تنافسية في العصر الرقمي.',
            image: '/green(4).jpeg',
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          {
            id: '5',
            name: 'Medical Device Licensing',
            ar_name: 'ترخيص الأجهزة الطبية',
            description: 'Professional SFDA licensing services for medical devices. We help foreign companies obtain licenses for their medical devices in Saudi Arabia efficiently.',
            ar_description: 'خدمات ترخيص احترافية من هيئة الغذاء والدواء للأجهزة الطبية. نساعد الشركات الأجنبية في الحصول على تراخيص لأجهزتها الطبية في المملكة العربية السعودية بكفاءة.',
            image: '/green(5).jpeg',
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          {
            id: '6',
            name: 'HR Strategy & Operations',
            ar_name: 'استراتيجية وعمليات الموارد البشرية',
            description: 'Build motivating work environments and develop comprehensive HR policies and procedures for organizational excellence.',
            ar_description: 'بناء بيئات عمل محفزة وتطوير سياسات وإجراءات شاملة للموارد البشرية لتحقيق التميز المؤسسي.',
            image: '/green(6).jpeg',
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          }
        ];
      }
    },
   
    retry: 2,
    retryDelay: 1000,
  });

  const handleRequestConsultation = (serviceName: string) => {
    // Handle consultation request - could open a modal, navigate to contact form, etc.
    console.log(`Consultation requested for: ${serviceName}`);
    // You can implement this based on your requirements
  };

  const handleContactExpert = () => {
    // Handle contact expert action
    window.open('mailto:info@rqf-consulting.com', '_blank');
  };

  if (loading) {
    return (
      <section className="py-20 bg-white" dir={isArabic ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-8 w-32 mx-auto mb-4" />
            <Skeleton className="h-12 w-96 mx-auto mb-6" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <Skeleton className="h-48 w-full rounded-lg mb-4" />
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-4" />
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section  id="services" className="py-20 bg-white" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            <Briefcase className="w-4 h-4 mr-2 ml-2" />
            {t('our_services.title')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('our_services.subtitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('our_services.description')}
          </p>
        </div>

        {/* Error State */}
        {error && (
          <Alert className="mb-8 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-700">
              {error instanceof Error ? error.message : t('dashboard.get_item_error')}
            </AlertDescription>
          </Alert>
        )}

        {/* Services Grid */}
        {(services && services.length > 0) ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <CardHeader className="p-0">
                  {service.images ? (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.images[0]} 
                        alt={isArabic ? service.ar_name : service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg leading-tight">
                          {isArabic ? service.ar_name : service.name}
                        </h3>
                      </div>
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Briefcase className="w-12 h-12 mx-auto mb-2" />
                        <h3 className="font-bold text-lg">
                          {isArabic ? service.ar_name : service.name}
                        </h3>
                      </div>
                    </div>
                  )}
                </CardHeader>
                
                <CardContent className="p-6 ">
                  <CardDescription className="text-gray-600 h-20 leading-relaxed mb-6 line-clamp-3">
                    {isArabic ? service.ar_description : service.description}
                  </CardDescription>
                  
                  <div className="space-y-3 h-20">
                    <Button 
                      onClick={() => handleRequestConsultation(isArabic ? service.ar_name : service.name)}
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold"
                    >
                      {t('our_services.request_consultation')}
                      {isArabic ? (
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      ) : (
                        <ArrowRight className="w-4 h-4 ml-2" />
                      )}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-300 hover:bg-gray-50"
                    >
                      {t('our_services.learn_more')}
                      <ExternalLink className="w-4 h-4 ml-2 mr-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('dashboard.no_items')}
            </h3>
            <p className="text-gray-600">
              {t('dashboard.try_different_search')}
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            {t('our_services.get_started')}
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {t('hero.team_commitment')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleContactExpert}
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-primary/5 font-semibold px-8"
            >
              <Mail className="w-5 h-5 mr-2 ml-2" />
              {t('our_services.contact_expert')}
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
            >
              <Phone className="w-5 h-5 mr-2 ml-2" />
              {t('hero.cta_button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
