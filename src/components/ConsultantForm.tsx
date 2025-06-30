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
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useMutation,useQueryClient  } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ConsultantForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const location = useLocation();
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [issa, setIsSubmitting] = useState(false);
  const { t } = useTranslation();
  const [consultantData, setconsultantData] = useState({
    name: "",
    description: "",
    ar_name: "",
    ar_description: "",
    categoryId: "",
    images: [] as File[]
  });


  
  const { toast } = useToast();
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (consultantData: { name: string; ar_name: string; description: string; ar_description: string; images: File[] }) => {
      setIsSubmitting(true);
      const formData= new FormData()
      formData.append("name",consultantData.name)
        formData.append("ar_name",consultantData.ar_name)
        formData.append("description",consultantData.description)
        formData.append("ar_description",consultantData.ar_description)
          
        // Append each file individually
        consultantData.images.forEach((file) => {
          formData.append(`images`, file);
        });
        console.log('form data', formData)

        console.log('form data', formData)
        
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/create-consultant`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error(`{t("create_consultant.error")}`);
      }
      return response.json();
    },
    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["consultants"] }).then(() => {
          toast({
            title: "نجاح",
            description: `${t("create_consultant.success")}`,
            variant: "default",
          });
          navigate("/admin/consultants");
        });
      }, 3000);
    },
    onError: () => {
      setIsSubmitting(false);
      toast({
        title: "خطأ",
        description: `${t("create_consultant.error")}`,
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setconsultantData((prevData) => ({
      ...prevData,
      [name]: value,
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
      {...props}>
      <Card className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl fade-up p-2 sm:p-4 md:p-6 lg:p-8">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl md:text-3xl">
            {t("create_consultant.title")}
          </CardTitle>
          <CardDescription className="text-sm md:text-base">
            {t("create_consultant.form_description")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">{t('create_consultant.name')}</Label>
                <Input
                  id="name"
                  type="name"
                  placeholder={t('create_consultant.name_placeholder')}
                  required
                  name="name"
                  value={consultantData.name}
                  onChange={handleInputChange}
                  className="fade-up"
                  autoComplete="name"
                  autoFocus
                  autoCorrect="off"
                  autoCapitalize="off"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="ar_name">{t('create_consultant.ar_name')}</Label>
                <Input
                  id="ar_name"
                  type="ar_name"
                  placeholder={t('create_consultant.ar_name_placeholder')}
                  required
                  name="ar_name"
                  value={consultantData.ar_name}
                  onChange={handleInputChange}
                  className="fade-up"
                  autoComplete="ar_name"
                  autoFocus
                  autoCorrect="off"
                  autoCapitalize="off"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description"> 
                  {t('create_consultant.description')}
                </Label>
                <Input
                  id="description"
                  required
                  name="description"
                  value={consultantData.description}
                  onChange={handleInputChange}
                  className="fade-up pr-10"
                  autoComplete="current-description"
                  autoCorrect="off"
                  autoCapitalize="off"
                  placeholder={
                    t('create_consultant.description_placeholder')}
                /> 
              </div>
              <div className="grid gap-2">
                <Label htmlFor="ar-description"> {
                  t('create_consultant.ar_description')
                  }</Label>
                <Input
                  id="ar_description"
                  required
                  name="ar_description"
                  value={consultantData.ar_description}
                  onChange={handleInputChange}
                  className="fade-up pr-10"
                  autoComplete="current-ar_description"
                  autoCorrect="off"
                  autoCapitalize="off"
                  placeholder={
                    t('create_consultant.ar_description_placeholder')
                  }
                /> 
              </div>
          
              {/* upload image */}
              <div className="grid w-full items-center gap-2.5">
 
                <Label htmlFor="images">{
                  t('create_consultant.images')
}</Label>
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
                  multiple
                  className="fade-up"
                  autoComplete="images"
                  autoFocus
                  autoCorrect="off"
                  autoCapitalize="off"
                  placeholder="اختر الصور"
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
                    ? t("create_consultant.saving_consultant")
                    : t("create_consultant.save_new_consultant")
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
