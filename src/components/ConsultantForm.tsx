import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useMutation,useQueryClient ,useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

function ConsultantForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { id?: string }) {
  const location = useLocation();
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [issa, setIsSubmitting] = useState(false);
  const { t } = useTranslation();
  const [consultantData, setconsultantData] = useState({
    name: "",
    description: "",
    ar_name: "",
    ar_description: "",
    specialization: "",
    experience_years: 0,
    ar_education: "",
    email: "",
    phone: "",
    linkedin: "",
    education:'',
    certifications: [] as string[],
    languages: [] as string[],
    images: [] as File[]
  });

  // Available options for dropdowns
  const availableLanguages = [
    "Arabic", "English", "French", "German", "Spanish", "Italian", "Portuguese", "Russian", "Chinese", "Japanese"
  ];

  const availableCertifications = [
    "PMP", 
    "MBA", 
    "CPA", 
    "Certified Strategy & Business Planning Professional",
    "Certified Balance Score Card Management System Professional",
    "ISO 9001", 
    "Six Sigma", 
    "ITIL", 
    "Scrum Master", 
    "PMI-ACP", 
    "CISSP", 
    "AWS Certified",
    "KPI",
    "Change Management Leadership, Innovation & Strategy Program – GE",
    "CIPD",
    "IPMA-HR",
    "Insurance Foundation Diploma (Institute of Banking, Riyadh)"
  ];

  const { data: consultant } = useQuery(
    props.id
      ? {
          queryKey: ["consultant", props.id],
          queryFn: async () => {
            const response = await fetch(
              `${import.meta.env.VITE_BACKEND_URL}/api/consultant/${props.id}`,
              {
                method: "GET",
              }
            );
            if (!response.ok) {
              throw new Error(`${t("create_consultant.error")}`);
            }
            return response.json();
          },
          enabled: !!props.id,
        }
      : {
          queryKey: ["consultant", null],
          queryFn: async () => null,
          enabled: false,
        }
  );

  useEffect(() => {
    if (consultant && props.id) {
      setconsultantData({
        name: consultant.name || "",
        description: consultant.description || "",
        ar_name: consultant.ar_name || "",
        ar_description: consultant.ar_description || "",
        specialization: consultant.specialization || "",
        experience_years: consultant.experience_years || 0,
        email: consultant.email || "",
        phone: consultant.phone || "",
        linkedin: consultant.linkedin || "",
        education: consultant.education || "",
        ar_education: consultant.ar_education || "",
        certifications: consultant.certifications || [],
        languages: consultant.languages || [],
        images: consultant.image ? [
          // Convert image URL to File object placeholder
          new File([], consultant.image.split("/").pop() || "image.jpg", { type: "image/jpeg" })
        ] : [],
      });
    }
  }, [consultant, props.id]);


  
  const { toast } = useToast();
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({

    mutationFn: async (consultantData: { 
      name: string; 
      ar_name: string; 
      description: string; 
      ar_description: string; 
      specialization: string;
      experience_years: number;
      email: string;
      phone: string;
       education?: string;
       ar_education?: string;
      linkedin: string;
      certifications: string[];
      languages: string[];
      images: File[] 
    }) => {
      setIsSubmitting(true);
      const formData = new FormData();
      formData.append("name", consultantData.name);
      formData.append("ar_name", consultantData.ar_name);
      formData.append("description", consultantData.description);
      formData.append("ar_description", consultantData.ar_description);
      formData.append("specialization", consultantData.specialization);
      formData.append("experience_years", consultantData.experience_years.toString());
      formData.append("email", consultantData.email);
      formData.append("phone", consultantData.phone);
      formData.append("linkedin", consultantData.linkedin);
      formData.append("education", consultantData.education || "");
      formData.append("ar_education", consultantData.ar_education || "");
      formData.append("certifications", JSON.stringify(consultantData.certifications));
      formData.append("languages", JSON.stringify(consultantData.languages));

      consultantData.images.forEach((file) => {
        formData.append("images", file);
      });

      const url = props.id
        ? `${import.meta.env.VITE_BACKEND_URL}/api/consultant/${props.id}`
        : `${import.meta.env.VITE_BACKEND_URL}/api/create-consultant`;

      const method = props.id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`${props.id ? t("edit_consultant.error") : t("create_consultant.error")}`);
      }
      return response.json();
    },
    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["consultants"] });
        if (props.id) {
          queryClient.invalidateQueries({ queryKey: ["consultant", props.id] });
        }
        toast({
          title: "نجاح",
          description: `${props.id ? t("edit_consultant.success") : t("create_consultant.success")}`,
          variant: "default",
        });
        navigate("/admin/consultants");
      }, 1000);
    },
    onError: () => {
      setIsSubmitting(false);
      toast({
        title: "خطأ",
        description: `${props.id ? t("edit_consultant.error") : t("create_consultant.error")}`,
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setconsultantData((prevData) => ({
      ...prevData,
      [name]: name === 'experience_years' ? parseInt(value) || 0 : value,
    }));
  };

  const addLanguage = (language: string) => {
    if (language && !consultantData.languages.includes(language)) {
      setconsultantData((prevData) => ({
        ...prevData,
        languages: [...prevData.languages, language]
      }));
    }
  };

  const removeLanguage = (languageToRemove: string) => {
    setconsultantData((prevData) => ({
      ...prevData,
      languages: prevData.languages.filter(lang => lang !== languageToRemove)
    }));
  };

  const addCertification = (certification: string) => {
    if (certification && !consultantData.certifications.includes(certification)) {
      setconsultantData((prevData) => ({
        ...prevData,
        certifications: [...prevData.certifications, certification]
      }));
    }
  };

  const removeCertification = (certificationToRemove: string) => {
    setconsultantData((prevData) => ({
      ...prevData,
      certifications: prevData.certifications.filter(cert => cert !== certificationToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  mutation.mutate(consultantData);


  };

  useEffect(() => {
    if (location.pathname === "/login") {
      setIsLoginPage(true);
    }
  }, [location.pathname]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const fadeElements = document.querySelectorAll(".fade-up");
    fadeElements.forEach((el) => observer.observe(el));
    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-up");
    fadeElements.forEach((el) => {
      el.classList.add("visible");
    });
    return () => {
      fadeElements.forEach((el) => {
        el.classList.remove("visible");
      });
    };
  }, [isLoginPage]);

  return (
    <div
      className={cn(
        "flex flex-col gap-6 w-full min-h-screen mt-12 items-center justify-center px-2 sm:px-4 bg-transparent",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl fade-up p-2 sm:p-4 md:p-6 lg:p-8">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            {props.id ? t("edit_consultant.title") : t("create_consultant.title")}
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm md:text-base">
            {props.id ? t("edit_consultant.form_description") : t("create_consultant.form_description")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* Basic Information */}
              <div className="grid gap-2">
                <Label htmlFor="name">{t('create_consultant.name')}</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t('create_consultant.name_placeholder')}
                  required
                  name="name"
                  value={consultantData.name}
                  onChange={handleInputChange}
                  className="fade-up"
                  autoComplete="name"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="ar_name">{t('create_consultant.ar_name')}</Label>
                <Input
                  id="ar_name"
                  type="text"
                  placeholder={t('create_consultant.ar_name_placeholder')}
                  required
                  name="ar_name"
                  value={consultantData.ar_name}
                  onChange={handleInputChange}
                  className="fade-up"
                />
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">{t('create_consultant.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('create_consultant.email_placeholder')}
                    name="email"
                    value={consultantData.email}
                    onChange={handleInputChange}
                    className="fade-up"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">{t('create_consultant.phone')}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t('create_consultant.phone_placeholder')}
                    name="phone"
                    value={consultantData.phone}
                    onChange={handleInputChange}
                    className="fade-up"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="linkedin">{t('create_consultant.linkedin')}</Label>
                <Input
                  id="linkedin"
                  type="url"
                  placeholder={t('create_consultant.linkedin_placeholder')}
                  name="linkedin"
                  value={consultantData.linkedin}
                  onChange={handleInputChange}
                  className="fade-up"
                />
              </div>

              {/* Professional Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="specialization">{t('create_consultant.specialization')}</Label>
                  <Input
                    id="specialization"
                    type="text"
                    placeholder={t('create_consultant.specialization_placeholder')}
                    name="specialization"
                    value={consultantData.specialization}
                    onChange={handleInputChange}
                    className="fade-up"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="experience_years">{t('create_consultant.experience_years')}</Label>
                  <Input
                    id="experience_years"
                    type="number"
                    min="0"
                    placeholder={t('create_consultant.experience_years_placeholder')}
                    name="experience_years"
                    value={consultantData.experience_years}
                    onChange={handleInputChange}
                    className="fade-up"
                  />
                </div>
              </div>

              {/* Descriptions */}
              <div className="grid gap-2">
                <Label htmlFor="description">{t('create_consultant.description')}</Label>
                <Textarea
                  id="description"
                  required
                  name="description"
                  value={consultantData.description}
                  onChange={handleInputChange}
                  className="fade-up min-h-[100px]"
                  placeholder={t('create_consultant.description_placeholder')}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="ar_description">{t('create_consultant.ar_description')}</Label>
                <Textarea
                  id="ar_description"
                  required
                  name="ar_description"
                  value={consultantData.ar_description}
                  onChange={handleInputChange}
                  className="fade-up min-h-[100px]"
                  placeholder={t('create_consultant.ar_description_placeholder')}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="education">{t('create_consultant.education')}</Label>
                <Textarea
                  id="education"
                  required
                  name="education"
                  value={consultantData.education}
                  onChange={handleInputChange}
                  className="fade-up min-h-[100px]"
                  placeholder={t('create_consultant.education_placeholder')}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="education">{t('create_consultant.ar_education')}</Label>
                <Textarea
                  id="ar_education"
                  required
                  name="ar_education"
                  value={consultantData.ar_education}
                  onChange={handleInputChange}
                  className="fade-up min-h-[100px]"
                  placeholder={t('create_consultant.ar_education_placeholder')}
                />
              </div>

              {/* Languages Multi-select */}
              <div className="grid gap-2">
                <Label>{t('create_consultant.languages')}</Label>
                <div className="space-y-2">
                  <Select onValueChange={addLanguage}>
                    <SelectTrigger className="fade-up">
                      <SelectValue placeholder={t('create_consultant.select_language')} />
                    </SelectTrigger>
                    <SelectContent>
                      {availableLanguages
                        .filter(lang => !consultantData.languages.includes(lang))
                        .map((language) => (
                          <SelectItem key={language} value={language}>
                            {language}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  
                  {consultantData.languages.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {consultantData.languages.map((language) => (
                        <Badge key={language} variant="secondary" className="flex items-center gap-1">
                          {language}
                          <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => removeLanguage(language)}
                          />
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Certifications Multi-select */}
              <div className="grid gap-2">
                <Label>{t('create_consultant.certifications')}</Label>
                <div className="space-y-2">
                  <Select onValueChange={addCertification}>
                    <SelectTrigger className="fade-up">
                      <SelectValue placeholder={t('create_consultant.select_certification')} />
                    </SelectTrigger>
                    <SelectContent>
                      {availableCertifications
                        .filter(cert => !consultantData.certifications.includes(cert))
                        .map((certification) => (
                          <SelectItem key={certification} value={certification}>
                            {certification}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  
                  {consultantData.certifications.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {consultantData.certifications.map((certification) => (
                        <Badge key={certification} variant="secondary" className="flex items-center gap-1">
                          {certification}
                          <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => removeCertification(certification)}
                          />
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Image Upload */}
              <div className="grid w-full items-center gap-2.5">
                <Label htmlFor="images">{t('create_consultant.images')}</Label>
                <Input
                  id="images"
                  type="file"
                  accept="image/*"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const files = e.target.files;
                    if (files) {
                      const filesArray: File[] = Array.from(files);
                      setconsultantData((prevData) => ({
                        ...prevData,
                        images: filesArray
                      }));
                    }
                  }}
                  className="fade-up"
                />
                
                <Button
                  type="submit"
                  className={`w-full my-4 text-base md:text-lg ${
                    issa
                      ? "bg-secondary-foreground dark:bg-secondary "
                      : "bg-primary"
                  }`}
                  disabled={issa}>
                  {issa
                    ? (props.id ? t("edit_consultant.updating_consultant") : t("create_consultant.saving_consultant"))
                    : (props.id ? t("edit_consultant.update_consultant") : t("create_consultant.save_new_consultant"))
                  }
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default ConsultantForm;
