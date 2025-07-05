import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Eye, 
  Star, 
  Shield, 
  Lightbulb, 
  Handshake,
  Users,
  Award,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const AboutUs: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const values = [
    {
      icon: Star,
      key: 'excellence',
      color: 'text-yellow-600'
    },
    {
      icon: Shield,
      key: 'integrity',
      color: 'text-primary'
    },
    {
      icon: Lightbulb,
      key: 'innovation',
      color: 'text-primary'
    },
    {
      icon: Handshake,
      key: 'partnership',
      color: 'text-green-600'
    }
  ];

  const statistics = [
    {
      value: '15+',
      key: 'years_experience',
      icon: Award,
      color: 'text-primary'
    },
    {
      value: '200+',
      key: 'satisfied_clients',
      icon: Users,
      color: 'text-green-600'
    },
    {
      value: '500+',
      key: 'projects_completed',
      icon: CheckCircle,
      color: 'text-primary'
    },
    {
      value: '98%',
      key: 'success_rate',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  const whyChooseUsItems = [
    'expert_team',
    'proven_track',
    'tailored_solutions',
    'comprehensive_support'
  ];

  return (
    <section id='about' className="py-20 bg-gradient-to-br from-slate-50 via-white to-primary/5" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            {t('about')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('about_us.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about_us.subtitle')}
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-white">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">
                {t('about_us.mission.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700 text-center leading-relaxed text-lg">
                {t('about_us.mission.description')}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-white">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">
                {t('about_us.vision.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700 text-center leading-relaxed text-lg">
                {t('about_us.vision.description')}
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('about_us.values.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.key} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-7 h-7 ${value.color}`} />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {t(`about_us.values.${value.key}.title`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {t(`about_us.values.${value.key}.description`)}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 mb-16 text-white">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.key} className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80 font-medium">
                    {t(`about_us.statistics.${stat.key}`)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            {t('about_us.why_choose_us.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {whyChooseUsItems.map((item, index) => (
              <div key={item} className="flex items-center space-x-4 space-x-reverse p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <p className="text-gray-700 font-medium text-lg">
                  {t(`about_us.why_choose_us.${item}`)}
                </p>
              </div>
            ))}
          </div>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t('hero.cta_button')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
