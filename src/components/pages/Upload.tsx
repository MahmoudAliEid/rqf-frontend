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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import imageCompression from "browser-image-compression";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

export function Upload({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const location = useLocation();
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [token] = useLocalStorage("token", "");

  const { mutate: upLoadImages, isPending } = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/upload/images`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      if (!response.ok) {
        const responseMessage = await response.json();

        toast({
          title: "خطأ",
          description: `${responseMessage.message}`,
          variant: "destructive",
        });

        throw new Error("Failed to upload images");
      } else {
        queryClient.invalidateQueries({ queryKey: ["images"] });
      }
    },

    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["images"] }).then(() => {
          toast({
            title: "نجاح",
            description: "تم رفع الصور بنجاح",
            variant: "default",
          });
          navigate("/admin/consultant");
        });
      }, 3000);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("images", images);
    e.preventDefault();
    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image);
    });
    upLoadImages(formData);
  };

  // check if the current page is the login page
  useEffect(() => {
    if (location.pathname === "/login") {
      setIsLoginPage(true);
    }
  }, [location.pathname]);

  // Intersection Observer to add fade-up class when the element is in view
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

  // Cleanup function to remove the fade-up class when the component unmounts
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

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const compressedImages = await Promise.all(
        Array.from(files).map((file) =>
          imageCompression(file as File, {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
          })
        )
      );
      setImages(compressedImages);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-secondary/30 dark:bg-secondary/5 px-2 sm:px-4">
      <div
        className={cn(
          "flex flex-col gap-6 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto",
          className
        )}
        {...props}>
        <Card className="w-full fade-up p-2 sm:p-4 md:p-6 lg:p-8">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl md:text-3xl">
              رفع الصور
            </CardTitle>
            <CardDescription className="text-sm md:text-base">
              قم برفع الصور الخاصة بك لا يتجاوز حجم كل صورة 5 ميجابايت
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid w-full items-center gap-2.5">
                  <Label htmlFor="images">الصور</Label>
                  <Input
                    id="images"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    multiple
                    className="fade-up"
                    autoComplete="images"
                    autoFocus
                    autoCorrect="off"
                    autoCapitalize="off"
                    placeholder="اختر الصور"
                  />
                </div>
                <div className="grid gap-2">
                  <Button
                    type="submit"
                    className={`w-full my-4 text-base md:text-lg ${
                      isPending
                        ? "bg-secondary-foreground dark:bg-secondary "
                        : "bg-primary"
                    }`}
                    disabled={isPending}>
                    {isPending ? "جاري التحميل.." : "تحميل"}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
