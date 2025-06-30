import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Edit2Icon, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Product = { images: string[]; id: string ,name : string,ar_name: string, description: string,ar_description:string};

const ConsultantsList = () => {
  const { toast } = useToast();
  const [token] = useLocalStorage("token", "");
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const {i18n, t } = useTranslation();
  const navigate = useNavigate();
  const { isPending, error, data } = useQuery<Product[]>({
    queryKey: ["consultants"],
    queryFn: async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/all-consultants`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error("API Error:", errorText);
          toast({
            title: "خطأ",
            description: t("dashboard.get_item_error"),
            variant: "destructive",
          });
          throw new Error(`HTTP ${response.status}: Failed to fetch consultants`);
        }
        
        const result = await response.json();
        return Array.isArray(result) ? result : [];
      } catch (error) {
        console.error("Fetch error:", error);
        throw error;
      }
    },
    enabled: !!token, // Only run query if token exists
    retry: 2,
    retryDelay: 1000,
  });

  const { mutate: deleteImage } = useMutation({
    mutationFn: async (id: string) => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/delete-consultant/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Delete error:", errorText);
          throw new Error(`HTTP ${response.status}: Failed to delete consultant`);
        }
        
        return response.json();
      } catch (error) {
        console.error("Delete consultant error:", error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["consultants"] });
      toast({
        title: "نجاح",
        description: t("dashboard.delete_success"),
        variant: "default",
      });
    },

    onError: (error) => {
      console.error("Delete mutation error:", error);
      toast({
        title: "خطأ",
        description: t("dashboard.delete_error"),
        variant: "destructive",
      });
    },
  });

  const handleDelete = (id: string) => {
    if (!id) {
      console.error("No consultant ID provided for deletion");
      toast({
        title: "خطأ",
        description: "معرف المستشار غير صحيح",
        variant: "destructive",
      });
      return;
    }
    
    console.log("Deleting consultant with ID:", id);
    deleteImage(id);
  };

  useEffect(() => {
    if (!token) {
      toast({
        title: "خطأ",
        description: t("dashboard.login_required"),
        variant: "destructive",
      });
      // Use a more React-friendly navigation method
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }
  }, [token, toast, t]);

  if (isPending) {
    return (
      <div className="flex min-h-[100svh] items-center justify-center bg-secondary/30 dark:bg-secondary/5">
        <p className="text-gray-500">{
          t("dashboard.loading")
          }</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex min-h-[100svh] items-center justify-center bg-secondary/30 dark:bg-secondary/5">
        <p className="text-red-500">
          {
            t("dashboard.get_item_error")
          }

        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[120svh] items-center justify-center bg-secondary/30 dark:bg-secondary/5 px-2 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl">
        <CardHeader className="text-center mt-10 md:mt-20 lg:mt-32">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          {
            t("dashboard.welcome")
          }
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            {
              t("dashboard.manage_consultants")
            }
          </p>
        </CardHeader>
        <Card className="w-full max-w-full p-2 sm:p-4 md:p-8 lg:p-12 xl:p-20 mx-auto">
          <div className="p-0 sm:p-2">
            <CardContent className="grid grid-cols-1 gap-2 h-[60vh] md:h-[70vh] overflow-y-scroll">
              {!data || data.length === 0 ? (
                <div className="flex items-center justify-center h-full text-center">
                  <p className="text-gray-500 text-lg">
                    {t("dashboard.no_items")}
                  </p>
                </div>
              ) : (
                data.map((product, index) => (
                <div
                  key={product.id}
                  className="flex flex-col sm:flex-row justify-between items-center p-2 border-b gap-4 sm:gap-8 bg-white/80 dark:bg-background/80 rounded-lg shadow-sm">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center w-full sm:w-auto">
                    <Avatar className="w-20 h-20 md:w-24 md:h-24">
                      <AvatarImage
                        src={product.images[0]}
                        className="object-cover w-full h-full"
                        alt={`صورة ${index + 1}`}
                        loading="lazy"
                      />
                      <AvatarFallback>
                        <span className="text-gray-500">صورة {index + 1}</span>
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center sm:text-right">
                      <h3 className="text-lg md:text-xl font-semibold">
                       {
                        i18n.language === "ar" ? product.ar_name : product.name || "منتج بدون اسم"
                       }
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base">
                        {i18n.language === "ar" ? product.ar_description : product.description || "لا يوجد وصف"}
                      </p>
                    </div>
                  </div>
                  <div className="flex  justify-between gap-2">
                  <Button
                    size="icon"
                    variant="destructive"
                    onClick={() => setDeleteTarget(product.id)}
                    className="bg-destructive hover:bg-destructive/50 text-white   mt-2 sm:mt-0">
                    <Trash2 className="w-8 h-8 " />
                  </Button>
                  {/* button to edit product */}
                  <Button 
                  size='icon'
                  variant={"default"}
                  onClick={
                    ()=>{
                      // Navigate to edit consultant page
                      navigate(`/admin/edit-consultant/${product.id}`);
                    }
                  }>
                    <Edit2Icon  className="w-8 h-8 "/>
                  </Button>
                  </div>
                  
                </div>
                ))
              )}
            </CardContent>
          </div>
        </Card>
        {deleteTarget && (
          <DeleteModal
            onClose={() => setDeleteTarget(null)}
            onDelete={() => {
              handleDelete(deleteTarget);
              setDeleteTarget(null);
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default ConsultantsList;

const DeleteModal = ({
  onClose,
  onDelete,
}: {

  onClose: () => void;
  onDelete: () => void;
}) => {
  const { t } = useTranslation();
  return (
    <Dialog
      open={true}
      onOpenChange={onClose}>
      <DialogContent
        className="flex flex-col items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto p-4 sm:p-6 md:p-8"
        style={{
          minWidth: "0",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "fixed",
        }}>
        <h2 className="text-lg md:text-xl  text-left font-semibold">
        {
          t("dashboard.dilog_title")
        }
        </h2>
        <DialogHeader className="w-full text-center">
          <p className="mt-2 text-gray-500 text-right text-sm md:text-base">
            {
              t("dashboard.confirm_delete")
            }
          </p>
        </DialogHeader>
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 w-full">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1 py-2">
            <X className="h-4 w-4" />
            {t("dashboard.cancel")}
          </Button>
          <Button
            variant="destructive"
            onClick={onDelete}
            className="flex-1 py-2">
            <Trash2 className="h-4 w-4" />
            {t("dashboard.delete")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
