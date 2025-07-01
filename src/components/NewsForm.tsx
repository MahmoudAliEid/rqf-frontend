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
import MdEditor from "@uiw/react-md-editor";

function BlogForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const location = useLocation();
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [issa, setIsSubmitting] = useState(false);
  const { i18n,t } = useTranslation();
  const [blogData, setblogData] = useState({
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
    mutationFn: async (blogData: { name: string; ar_name: string; description: string; ar_description: string; images: File[] }) => {
      setIsSubmitting(true);
      const formData= new FormData()
      formData.append("title",blogData.name)
        formData.append("ar_title",blogData.ar_name)
        formData.append("content",blogData.description)
        formData.append("ar_content",blogData.ar_description)
          
        // Append each file individually
        blogData.images.forEach((file) => {
          formData.append(`images`, file);
        });

        console.log('form data', formData)
        
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/create-blog`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error(`{t("create_blog.error")}`);
      }
      return response.json();
    },
    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["blogs"] }).then(() => {
          toast({
            title: "نجاح",
            description: `${t("create_blog.success")}`,
            variant: "default",
          });
          navigate("/admin/news");
        });
      }, 3000);
    },
    onError: () => {
      setIsSubmitting(false);
      toast({
        title: "خطأ",
        description: `${t("create_blog.error")}`,
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setblogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  mutation.mutate(blogData);


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
  const isRTL = i18n.dir() === "rtl";

  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:gap-6 w-full min-h-screen pt-4 sm:pt-8 md:pt-12 lg:pt-16 pb-8 items-center justify-start px-4 sm:px-6 md:px-8 lg:px-12 bg-transparent",
        className
      )}
      {...props}>
      <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl fade-up p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <CardHeader className="space-y-2 sm:space-y-3 md:space-y-4 pb-4 sm:pb-6">
          <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">
            {t("create_blog.title")}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-lg text-center text-muted-foreground">
            {t("create_blog.form_description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid gap-4 sm:gap-6">
              <div className="grid gap-2 sm:gap-3">
                <Label htmlFor="name" className="text-sm sm:text-base font-medium">{t('create_blog.name')}</Label>
                <Input
                  id="name"
                  type="name"
                  placeholder={t('create_blog.name_placeholder')}
                  required
                  name="name"
                  value={blogData.name}
                  onChange={handleInputChange}
                  className="fade-up h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                  autoComplete="name"
                  autoFocus
                  autoCorrect="off"
                  autoCapitalize="off"
                />
              </div>
              <div className="grid gap-2 sm:gap-3">
                <Label htmlFor="ar_name" className="text-sm sm:text-base font-medium">{t('create_blog.ar_name')}</Label>
                <Input
                  id="ar_name"
                  type="ar_name"
                  placeholder={t('create_blog.ar_name_placeholder')}
                  required
                  name="ar_name"
                  value={blogData.ar_name}
                  onChange={handleInputChange}
                  className="fade-up h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                  autoComplete="ar_name"
                  autoCorrect="off"
                  autoCapitalize="off"
                />
              </div>
              <div className="grid gap-2 sm:gap-3">
                <Label htmlFor="description" className="text-sm sm:text-base font-medium"> 
                  {t('create_blog.description')}
                </Label>
                 <MdEditor
                 value={blogData.description}
                  direction={isRTL ? "rtl" : "ltr"}
                  onChange={(value) => {
                    setblogData((prevData) => ({
                      ...prevData,
                      description: value || "",
                    }));
                  }}
                  id={"description_ar"}
                  preview="edit"
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    fontSize: "14px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                   
                  height={250}
                  textareaProps={{
                    placeholder: t("create_blog.description_placeholder"),
                    required: true,
                    style: {
                      direction: isRTL ? "rtl" : "ltr",
                      textAlign: isRTL ? "right" : "left",
                      fontSize: "14px",
                      padding: "12px",
                    },
                  }}
                  previewOptions={{
                    disallowedElements: ["style"],
                  }}
                />
              
              </div>
              <div className="grid gap-2 sm:gap-3">
                <Label htmlFor="ar-description" className="text-sm sm:text-base font-medium"> {
                  t('create_blog.ar_description')
                  }</Label>
                
                <MdEditor
                  value={blogData.ar_description}
                  direction={isRTL ? "rtl" : "ltr"}
                  onChange={(value) => {
                    setblogData((prevData) => ({
                      ...prevData,
                      ar_description: value || "",
                    }));
                  }}
                  id={"ar_description"}
                  preview="edit"
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    fontSize: "14px",
                    backgroundColor: "#fff",
                    color: "#000",    
                  }}
                  
                  height={250}
                  textareaProps={{
                    placeholder: t("create_blog.ar_description_placeholder"),
                    required: true,
                    style: {
                      direction: isRTL ? "rtl" : "ltr",
                      textAlign: isRTL ? "right" : "left",
                      fontSize: "14px",
                      padding: "12px",
                    },
                  }}
                  previewOptions={{
                    disallowedElements: ["style"],
                  }}
                />  
              </div>
          
              {/* upload image */}
              <div className="grid w-full items-center gap-2 sm:gap-3">
 
                <Label htmlFor="images" className="text-sm sm:text-base font-medium">{
                  t('create_blog.images')
}</Label>
                <Input
                  id="images"
                  type="file"
                  accept="image/*"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const files = e.target.files;
                    if (files) {
                      const filesArray: File[] = Array.from(files);
                      setblogData((prevData) => ({
                        ...prevData,
                        images: filesArray
                      }));
                    }
                  }}
                  multiple
                  className="fade-up h-10 sm:h-11 md:h-12 text-sm sm:text-base file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/80"
                  autoComplete="images"
                  autoCorrect="off"
                  autoCapitalize="off"
                  placeholder="اختر الصور"
                />
                <Button
                  type="submit"
                  className={`w-full mt-4 sm:mt-6 h-11 sm:h-12 md:h-13 text-sm sm:text-base md:text-lg font-medium ${
                    issa
                      ? "bg-secondary-foreground dark:bg-secondary "
                      : "bg-primary hover:bg-primary/90"
                  } transition-colors duration-200`}
                  disabled={issa}>
                  {issa
                    ? t("create_blog.saving_blog")
                    : t("create_blog.save_new_blog")
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
export default BlogForm;
