import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { 
  Search, 
  Mail, 
  Phone, 
  Linkedin, 
  User, 
  AlertCircle,
  Users,
  Filter,
  X
} from 'lucide-react';


interface Consultant {
  id: string;
  name: string;
  ar_name: string;
  description: string;
  ar_description: string;
  images?: string[];
  specialization?: string;
  experience_years?: number;
  email?: string;
  phone?: string;
  linkedin?: string;
  certifications?: string[];
  education?: string;
  ar_education?: string;
  languages?: string[];
  created_at: string;
  updated_at: string;
}

const OurTeam: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState<string>('all');

  // Fetch consultants using React Query
  const { 
    data: consultants = [], 
    isLoading: loading, 
    error
  } = useQuery<Consultant[]>({
    queryKey: ['consultants'],
    queryFn: async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/all-consultants`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch consultants');
        }
        
        const data = await response.json();
        return data || [];
      } catch (err) {
        console.error('Error fetching consultants:', err);
        // Return mock data for development/demo purposes when API fails
        return [
          {
            id: '1',
            name: 'Dr. Ahmed Al-Rashid',
            ar_name: 'د. أحمد الراشد',
            description: 'Senior Strategic Management Consultant with 15+ years of experience in organizational development and business transformation.',
            ar_description: 'مستشار إدارة استراتيجية أول مع أكثر من 15 عامًا من الخبرة في التطوير التنظيمي وتحويل الأعمال.',
            image: '/green(5).jpeg',
            specialization: 'Strategic Management',
            experience_years: 15,
            email: 'ahmed.rashid@rqf-consulting.com',
            phone: '+966 79 1234567',
            linkedin: 'https://linkedin.com/in/ahmed-rashid',
            certifications: ['PMP', 'Six Sigma Black Belt', 'Certified Management Consultant'],
            education: 'PhD in Strategic Management, MBA in Business Administration',
            ar_education: 'دكتوراه في الإدارة الاستراتيجية، ماجستير إدارة الأعمال',
            languages: ['Arabic', 'English', 'French'],
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          {
            id: '2',
            name: 'Sarah Johnson',
            ar_name: 'سارة جونسون',
            description: 'Digital Transformation Expert specializing in technology integration and digital strategy development.',
            ar_description: 'خبيرة التحول الرقمي متخصصة في تكامل التكنولوجيا وتطوير الاستراتيجية الرقمية.',
            image: '/green(6).jpeg',
            specialization: 'Digital Transformation',
            experience_years: 12,
            email: 'sarah.johnson@rqf-consulting.com',
            phone: '+966 79 2345678',
            linkedin: 'https://linkedin.com/in/sarah-johnson',
            certifications: ['TOGAF', 'ITIL', 'Agile Certified Practitioner'],
            education: 'Master of Information Technology, Bachelor of Computer Science',
            ar_education: 'ماجستير تقنية المعلومات، بكالوريوس علوم الحاسب',
            languages: ['English', 'Arabic', 'German'],
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          {
            id: '3',
            name: 'Mohammad Hassan',
            ar_name: 'محمد حسان',
            description: 'Business Process Optimization Specialist with expertise in operational excellence and lean management.',
            ar_description: 'أخصائي تحسين العمليات التجارية مع خبرة في التميز التشغيلي والإدارة المرنة.',
            image: '/green(7).jpeg',
            specialization: 'Process Optimization',
            experience_years: 10,
            email: 'mohammad.hassan@rqf-consulting.com',
            phone: '+966 79 3456789',
            linkedin: 'https://linkedin.com/in/mohammad-hassan',
            certifications: ['Lean Six Sigma', 'Business Process Management', 'ISO 9001 Lead Auditor'],
            education: 'MBA in Operations Management, Bachelor of Industrial Engineering',
            ar_education: 'ماجستير إدارة العمليات، بكالوريوس الهندسة الصناعية',
            languages: ['Arabic', 'English'],
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          {
            id: '4',
            name: 'Dr. Fatima Al-Zahra',
            ar_name: 'د. فاطمة الزهراء',
            description: 'Organizational Development Consultant focused on culture transformation and leadership development.',
            ar_description: 'مستشارة التطوير التنظيمي مع التركيز على تحويل الثقافة وتطوير القيادة.',
            image: '/green(8).jpeg',
            specialization: 'Organizational Development',
            experience_years: 18,
            email: 'fatima.alzahra@rqf-consulting.com',
            phone: '+966 79 4567890',
            linkedin: 'https://linkedin.com/in/fatima-alzahra',
            certifications: ['Certified Executive Coach', 'Change Management', 'Leadership Development'],
            education: 'PhD in Organizational Psychology, Master of Human Resources',
            ar_education: 'دكتوراه في علم النفس التنظيمي، ماجستير الموارد البشرية',
            languages: ['Arabic', 'English', 'Spanish'],
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          },
          {
            id: '5',
            name: 'Dr. Khalid Al-Mansouri',
            ar_name: 'د. خالد المنصوري',
            description: 'Medical Device Licensing Specialist with extensive experience in SFDA regulations and compliance procedures.',
            ar_description: 'أخصائي ترخيص الأجهزة الطبية مع خبرة واسعة في لوائح هيئة الغذاء والدواء وإجراءات الامتثال.',
            image: '/green(9).jpeg',
            specialization: 'Medical Device Licensing',
            experience_years: 12,  
            email: 'khalid.mansouri@rqf-consulting.com',
            phone: '+966 79 5678901',
            linkedin: 'https://linkedin.com/in/khalid-mansouri',
            certifications: ['SFDA Certified', 'Medical Device Regulation', 'Quality Assurance'],
            education: 'Doctor of Pharmacy, Master of Regulatory Affairs',
            ar_education: 'دكتوراه في الصيدلة، ماجستير الشؤون التنظيمية',
            languages: ['Arabic', 'English'],
            created_at: '2024-01-01',  
            updated_at: '2024-01-01'
          },
          {
            id: '6',
            name: 'Layla Abdulrahman',
            ar_name: 'ليلى عبدالرحمن',
            description: 'HR Strategy Consultant specializing in building motivating work environments and developing comprehensive HR policies.',
            ar_description: 'مستشارة استراتيجية الموارد البشرية متخصصة في بناء بيئات عمل محفزة وتطوير سياسات الموارد البشرية الشاملة.',
            image: '/green(10).jpeg',
            specialization: 'HR Strategy & Operations',
            experience_years: 14,
            email: 'layla.abdulrahman@rqf-consulting.com', 
            phone: '+966 79 6789012',
            linkedin: 'https://linkedin.com/in/layla-abdulrahman',
            certifications: ['SHRM-CP', 'Organizational Psychology', 'Leadership Development'],
            education: 'Master of Human Resources Management, Bachelor of Psychology',
            ar_education: 'ماجستير إدارة الموارد البشرية، بكالوريوس علم النفس',
            languages: ['Arabic', 'English', 'French'],
            created_at: '2024-01-01',
            updated_at: '2024-01-01'
          }
        ];
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
    retryDelay: 1000,
  });

  // Filter consultants based on search term and selected field
  const filteredConsultants = useMemo(() => {
    let filtered = consultants;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(consultant => 
        consultant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        consultant.ar_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        consultant.specialization?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        consultant.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        consultant.ar_description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by field/specialization
    if (selectedField !== 'all') {
      filtered = filtered.filter(consultant => 
        consultant.specialization?.toLowerCase() === selectedField.toLowerCase()
      );
    }

    return filtered;
  }, [consultants, searchTerm, selectedField]);

  const handleContactConsultant = (consultant: Consultant) => {
    if (consultant.email) {
      window.open(`mailto:${consultant.email}`, '_blank');
    }
  };

  const handleBookConsultation = (consultant: Consultant) => {
    // Handle booking consultation - could open a modal, navigate to booking form, etc.
    console.log(`Booking consultation with: ${consultant.name}`);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedField('all');
  };

  // const uniqueSpecializations = Array.from(
  //   new Set(consultants.map(c => c.specialization).filter(Boolean))
  // );

  const {data:uniqueSpecializations}=useQuery({
    queryKey: ['uniqueSpecializations'],
    queryFn: async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/specializations`);
        if (!response.ok) {
          throw new Error('Failed to fetch unique specializations');
        }
        const data = await response.json();
        return data || [];
      } catch (err) {
        console.error('Error fetching unique specializations:', err);
        return [];
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
    retryDelay: 1000,
  });

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50" dir={isArabic ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-8 w-32 mx-auto mb-4" />
            <Skeleton className="h-12 w-96 mx-auto mb-6" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <Skeleton className="h-48 w-full rounded-lg mb-4" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-4" />
                  <Skeleton className="h-10 w-full mb-2" />
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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            <Users className="w-4 h-4 mr-2 ml-2" />
            {t('our_team.title')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('our_team.subtitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('our_team.description')}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder={t('our_team.search_placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-10 py-3 text-lg"
              />
            </div>
            
            <Select value={selectedField} onValueChange={setSelectedField}>
              <SelectTrigger className="w-full md:w-64 py-3">
                <Filter className="w-4 h-4 mr-2 ml-2" />
                <SelectValue placeholder={t('our_team.filter_by_field')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('our_team.all_fields')}</SelectItem>
                {uniqueSpecializations &&
                  (uniqueSpecializations as string[]).map((spec: string) => (
                  spec ? (
                    <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                  ) : null
                  ))}
              </SelectContent>
            </Select>

            {(searchTerm || selectedField !== 'all') && (
              <Button
                onClick={clearFilters}
                variant="outline"
                className="py-3 px-6"
              >
                <X className="w-4 h-4 mr-2 ml-2" />
                {t('our_team.clear_filters')}
              </Button>
            )}
          </div>
        </div>

        {/* Error State */}
        {error && (
          <Alert className="mb-8 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-700">
              {error instanceof Error ? error.message : t('our_team.error_loading')}
            </AlertDescription>
          </Alert>
        )}

        {/* Team Grid */}
        {filteredConsultants.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredConsultants.map((consultant) => (
              <Card 
                key={consultant.id} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    {consultant.images ? (
                      <img 
                        src={consultant.images[0]} 
                        alt={isArabic ? consultant.ar_name : consultant.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <User className="w-16 h-16 text-white" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg leading-tight mb-1">
                        {isArabic ? consultant.ar_name : consultant.name}
                      </h3>
                      {consultant.specialization && (
                        <p className="text-blue-200 text-sm">
                          {consultant.specialization}
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                      {isArabic ? consultant.ar_description : consultant.description}
                    </CardDescription>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      {consultant.experience_years && (
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {consultant.experience_years} {t('our_team.years_experience')}
                        </span>
                      )}
                    </div>

                    {consultant.education && (
                      <div className="text-sm text-gray-600">
                        <p className="font-medium text-gray-700 mb-1">{t('our_team.education')}:</p>
                        <p className="leading-relaxed">
                          {isArabic ? consultant.ar_education || consultant.education : consultant.education}
                        </p>
                      </div>
                    )}

                    {consultant.certifications && consultant.certifications.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {consultant.certifications.slice(0, 2).map((cert) => (
                          <Badge key={cert} variant="secondary" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                        {consultant.certifications.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{consultant.certifications.length - 2}
                          </Badge>
                        )}
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <Button 
                        onClick={() => handleContactConsultant(consultant)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold"
                        disabled={!consultant.email}
                      >
                        <Mail className="w-4 h-4 mr-2 ml-2" />
                        {t('our_team.contact_consultant')}
                      </Button>
                      
                      <Button 
                        onClick={() => handleBookConsultation(consultant)}
                        variant="outline" 
                        className="w-full border-gray-300 hover:bg-gray-50"
                      >
                        <Phone className="w-4 h-4 mr-2 ml-2" />
                        {t('our_team.book_consultation')}
                      </Button>
                    </div>

                    {consultant.linkedin && (
                      <div className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(consultant.linkedin, '_blank')}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Linkedin className="w-4 h-4 mr-2 ml-2" />
                          {t('our_team.linkedin')}
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('our_team.no_consultants')}
            </h3>
            <p className="text-gray-600 mb-4">
              {t('dashboard.try_different_search')}
            </p>
            <Button onClick={clearFilters} variant="outline">
              {t('our_team.clear_filters')}
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            {t('hero.cta_button')}
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            {t('hero.team_commitment')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8"
            >
              <Mail className="w-5 h-5 mr-2 ml-2" />
              {t('contact')}

            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8"
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

export default OurTeam;
