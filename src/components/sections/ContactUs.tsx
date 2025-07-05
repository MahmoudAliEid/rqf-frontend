import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin, Clock, MessageSquare, Calendar, Stethoscope } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  serviceType: string;
}

interface MedicalLicensingFormData {
  companyName: string;
  legalRepresentative: string;
  email: string;
  phone: string;
  deviceType: string;
  hasDocuments: string;
  additionalInfo: string;
}

interface ConsultationBookingFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  preferredDate: string;
  preferredTime: string;
  consultationType: string;
  consultant: string;
  urgency: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const { toast } = useToast();

  // State for different forms
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: '', email: '', phone: '', company: '', subject: '', message: '', serviceType: ''
  });
  
  const [medicalForm, setMedicalForm] = useState<MedicalLicensingFormData>({
    companyName: '', legalRepresentative: '', email: '', phone: '', deviceType: '', hasDocuments: '', additionalInfo: ''
  });
  
  const [consultationForm, setConsultationForm] = useState<ConsultationBookingFormData>({
    name: '', email: '', phone: '', company: '', preferredDate: '', preferredTime: '', consultationType: '', consultant: '', urgency: '', message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (templateParams: Record<string, unknown>, formType: string) => {
    try {
      setIsSubmitting(true);
      
      // For demo purposes, we'll simulate email sending
      // In production, configure EmailJS properly
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Log the form data (replace with actual EmailJS integration)
      console.log('Form submission:', { templateParams, formType });
      
      // Uncomment when EmailJS is configured:
      // const emailjs = await import('@emailjs/browser');
      // const result = await emailjs.send(
      //   'your_service_id',
      //   'your_template_id',
      //   {
      //     ...templateParams,
      //     to_email: 'info@ragafconsulting.com',
      //     form_type: formType
      //   },
      //   'your_public_key'
      // );
      
      toast({
        title: isArabic ? "تم الإرسال بنجاح" : "Success",
        description: isArabic 
          ? "تم إرسال طلبك بنجاح! سنتواصل معك قريباً." 
          : "Your request has been sent successfully! We will contact you soon.",
      });
      
      return true;
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: isArabic ? "خطأ" : "Error",
        description: isArabic 
          ? "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى." 
          : "An error occurred while sending. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await sendEmail({
      from_name: contactForm.name,
      from_email: contactForm.email,
      phone: contactForm.phone,
      company: contactForm.company,
      subject: contactForm.subject,
      message: contactForm.message,
      service_type: contactForm.serviceType
    }, 'contact');
    
    if (success) {
      setContactForm({ name: '', email: '', phone: '', company: '', subject: '', message: '', serviceType: '' });
    }
  };

  const handleMedicalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await sendEmail({
      company_name: medicalForm.companyName,
      legal_representative: medicalForm.legalRepresentative,
      from_email: medicalForm.email,
      phone: medicalForm.phone,
      device_type: medicalForm.deviceType,
      has_documents: medicalForm.hasDocuments,
      additional_info: medicalForm.additionalInfo
    }, 'medical_licensing');
    
    if (success) {
      setMedicalForm({ companyName: '', legalRepresentative: '', email: '', phone: '', deviceType: '', hasDocuments: '', additionalInfo: '' });
    }
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await sendEmail({
      from_name: consultationForm.name,
      from_email: consultationForm.email,
      phone: consultationForm.phone,
      company: consultationForm.company,
      preferred_date: consultationForm.preferredDate,
      preferred_time: consultationForm.preferredTime,
      consultation_type: consultationForm.consultationType,
      consultant: consultationForm.consultant,
      urgency: consultationForm.urgency,
      message: consultationForm.message
    }, 'consultation_booking');
    
    if (success) {
      setConsultationForm({ name: '', email: '', phone: '', company: '', preferredDate: '', preferredTime: '', consultationType: '', consultant: '', urgency: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-primary/5" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
          >
            {t("contact_us.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t("contact_us.subtitle")}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{isArabic ? "البريد الإلكتروني" : "Email"}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-2">{t("contact_us.info.email")}</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`mailto:${t("contact_us.info.email")}`}>
                    {isArabic ? "إرسال بريد إلكتروني" : "Send Email"}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">{isArabic ? "الهاتف" : "Phone"}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-2">{t("contact_us.info.phone")}</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`tel:${t("contact_us.info.phone")}`}>
                    {isArabic ? "اتصال" : "Call Now"}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{isArabic ? "ساعات العمل" : "Working Hours"}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{t("contact_us.info.working_hours")}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Forms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Tabs defaultValue="contact" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                {isArabic ? "تواصل عام" : "General Contact"}
              </TabsTrigger>
              <TabsTrigger value="consultation" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {isArabic ? "حجز استشارة" : "Book Consultation"}
              </TabsTrigger>
              <TabsTrigger value="medical" className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                {isArabic ? "ترخيص طبي" : "Medical Licensing"}
              </TabsTrigger>
            </TabsList>

            {/* General Contact Form */}
            <TabsContent value="contact">
              <Card>
                <CardHeader>
                  <CardTitle>{t("contact_us.form_title")}</CardTitle>
                  <CardDescription>{t("contact_us.contact_description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("contact_us.form.name")}</Label>
                        <Input
                          id="name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                          placeholder={t("contact_us.form.name_placeholder")}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("contact_us.form.email")}</Label>
                        <Input
                          id="email"
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                          placeholder={t("contact_us.form.email_placeholder")}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("contact_us.form.phone")}</Label>
                        <Input
                          id="phone"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                          placeholder={t("contact_us.form.phone_placeholder")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">{t("contact_us.form.company")}</Label>
                        <Input
                          id="company"
                          value={contactForm.company}
                          onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                          placeholder={t("contact_us.form.company_placeholder")}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="subject">{t("contact_us.form.subject")}</Label>
                        <Input
                          id="subject"
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                          placeholder={t("contact_us.form.subject_placeholder")}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="serviceType">{t("contact_us.form.service_type")}</Label>
                        <Select value={contactForm.serviceType} onValueChange={(value) => setContactForm({...contactForm, serviceType: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder={t("contact_us.form.service_type_placeholder")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consultation">{t("contact_us.form.consultation_request")}</SelectItem>
                            <SelectItem value="general">{t("contact_us.form.general_inquiry")}</SelectItem>
                            <SelectItem value="medical">{t("contact_us.form.medical_device_licensing")}</SelectItem>
                            <SelectItem value="hr">{t("contact_us.form.hr_strategy")}</SelectItem>
                            <SelectItem value="process">{t("contact_us.form.business_process")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("contact_us.form.message")}</Label>
                      <Textarea
                        id="message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        placeholder={t("contact_us.form.message_placeholder")}
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          {t("contact_us.form.sending")}
                        </>
                      ) : (
                        <>
                          <Send className={`w-4 h-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                          {t("contact_us.form.send")}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Consultation Booking Form */}
            <TabsContent value="consultation">
              <Card>
                <CardHeader>
                  <CardTitle>{t("consultation_booking.title")}</CardTitle>
                  <CardDescription>{t("consultation_booking.subtitle")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleConsultationSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cons-name">{t("contact_us.form.name")}</Label>
                        <Input
                          id="cons-name"
                          value={consultationForm.name}
                          onChange={(e) => setConsultationForm({...consultationForm, name: e.target.value})}
                          placeholder={t("contact_us.form.name_placeholder")}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cons-email">{t("contact_us.form.email")}</Label>
                        <Input
                          id="cons-email"
                          type="email"
                          value={consultationForm.email}
                          onChange={(e) => setConsultationForm({...consultationForm, email: e.target.value})}
                          placeholder={t("contact_us.form.email_placeholder")}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cons-phone">{t("contact_us.form.phone")}</Label>
                        <Input
                          id="cons-phone"
                          value={consultationForm.phone}
                          onChange={(e) => setConsultationForm({...consultationForm, phone: e.target.value})}
                          placeholder={t("contact_us.form.phone_placeholder")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cons-company">{t("contact_us.form.company")}</Label>
                        <Input
                          id="cons-company"
                          value={consultationForm.company}
                          onChange={(e) => setConsultationForm({...consultationForm, company: e.target.value})}
                          placeholder={t("contact_us.form.company_placeholder")}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="preferred-date">{t("consultation_booking.form.preferred_date")}</Label>
                        <Input
                          id="preferred-date"
                          type="date"
                          value={consultationForm.preferredDate}
                          onChange={(e) => setConsultationForm({...consultationForm, preferredDate: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferred-time">{t("consultation_booking.form.preferred_time")}</Label>
                        <Input
                          id="preferred-time"
                          type="time"
                          value={consultationForm.preferredTime}
                          onChange={(e) => setConsultationForm({...consultationForm, preferredTime: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>{t("consultation_booking.form.consultation_type")}</Label>
                      <RadioGroup
                        value={consultationForm.consultationType}
                        onValueChange={(value) => setConsultationForm({...consultationForm, consultationType: value})}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="online" id="online" />
                          <Label htmlFor="online">{t("consultation_booking.form.online")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="in-person" id="in-person" />
                          <Label htmlFor="in-person">{t("consultation_booking.form.in_person")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone-call" />
                          <Label htmlFor="phone-call">{t("consultation_booking.form.phone")}</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="consultant">{t("consultation_booking.form.consultant")}</Label>
                        <Select value={consultationForm.consultant} onValueChange={(value) => setConsultationForm({...consultationForm, consultant: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder={t("consultation_booking.form.consultant_placeholder")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">{t("consultation_booking.form.any_consultant")}</SelectItem>
                            <SelectItem value="consultant1">{isArabic ? "د. أحمد علي" : "Dr. Ahmed Ali"}</SelectItem>
                            <SelectItem value="consultant2">{isArabic ? "د. فاطمة محمد" : "Dr. Fatima Mohammed"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="urgency">{t("consultation_booking.form.urgency")}</Label>
                        <Select value={consultationForm.urgency} onValueChange={(value) => setConsultationForm({...consultationForm, urgency: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder={t("consultation_booking.form.urgency_placeholder")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">{t("consultation_booking.form.low")}</SelectItem>
                            <SelectItem value="medium">{t("consultation_booking.form.medium")}</SelectItem>
                            <SelectItem value="high">{t("consultation_booking.form.high")}</SelectItem>
                            <SelectItem value="urgent">{t("consultation_booking.form.urgent")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cons-message">{t("contact_us.form.message")}</Label>
                      <Textarea
                        id="cons-message"
                        value={consultationForm.message}
                        onChange={(e) => setConsultationForm({...consultationForm, message: e.target.value})}
                        placeholder={t("contact_us.form.message_placeholder")}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          {t("consultation_booking.form.booking")}
                        </>
                      ) : (
                        <>
                          <Calendar className={`w-4 h-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                          {t("consultation_booking.form.book")}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Medical Licensing Form */}
            <TabsContent value="medical">
              <Card>
                <CardHeader>
                  <CardTitle>{t("medical_licensing.title")}</CardTitle>
                  <CardDescription>{t("medical_licensing.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleMedicalSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-name">{t("medical_licensing.form.company_name")}</Label>
                        <Input
                          id="company-name"
                          value={medicalForm.companyName}
                          onChange={(e) => setMedicalForm({...medicalForm, companyName: e.target.value})}
                          placeholder={t("medical_licensing.form.company_name_placeholder")}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="legal-rep">{t("medical_licensing.form.legal_representative")}</Label>
                        <Input
                          id="legal-rep"
                          value={medicalForm.legalRepresentative}
                          onChange={(e) => setMedicalForm({...medicalForm, legalRepresentative: e.target.value})}
                          placeholder={t("medical_licensing.form.legal_representative_placeholder")}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="med-email">{t("medical_licensing.form.email")}</Label>
                        <Input
                          id="med-email"
                          type="email"
                          value={medicalForm.email}
                          onChange={(e) => setMedicalForm({...medicalForm, email: e.target.value})}
                          placeholder={t("medical_licensing.form.email_placeholder")}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="med-phone">{t("medical_licensing.form.phone")}</Label>
                        <Input
                          id="med-phone"
                          value={medicalForm.phone}
                          onChange={(e) => setMedicalForm({...medicalForm, phone: e.target.value})}
                          placeholder={t("medical_licensing.form.phone_placeholder")}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="device-type">{t("medical_licensing.form.device_type")}</Label>
                      <Textarea
                        id="device-type"
                        value={medicalForm.deviceType}
                        onChange={(e) => setMedicalForm({...medicalForm, deviceType: e.target.value})}
                        placeholder={t("medical_licensing.form.device_type_placeholder")}
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>{t("medical_licensing.form.has_documents")}</Label>
                      <RadioGroup
                        value={medicalForm.hasDocuments}
                        onValueChange={(value) => setMedicalForm({...medicalForm, hasDocuments: value})}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="yes-docs" />
                          <Label htmlFor="yes-docs">{t("medical_licensing.form.yes")}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="no-docs" />
                          <Label htmlFor="no-docs">{t("medical_licensing.form.no")}</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additional-info">{t("medical_licensing.form.additional_info")}</Label>
                      <Textarea
                        id="additional-info"
                        value={medicalForm.additionalInfo}
                        onChange={(e) => setMedicalForm({...medicalForm, additionalInfo: e.target.value})}
                        placeholder={t("medical_licensing.form.additional_info_placeholder")}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          {t("medical_licensing.form.submitting")}
                        </>
                      ) : (
                        <>
                          <Stethoscope className={`w-4 h-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                          {t("medical_licensing.form.submit")}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {t("contact_us.info.address")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463876.9969042474!2d46.54243424589615!3d24.725578140829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t("contact_us.info.address")}
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
