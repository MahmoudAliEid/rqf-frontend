import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useTranslation } from "react-i18next";
import { GlobalTable } from "../data-table/GlobalTable";

type Consultant = { images: string[]; id: string, name: string, ar_name: string, description: string, ar_description: string };

const ConsultantsList = () => {
  const { toast } = useToast();
  const [token] = useLocalStorage("token", "");
  const { t } = useTranslation();
  
  const { isPending, error, data } = useQuery<Consultant[]>({
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
        <p className="text-gray-500">{t("dashboard.loading")}</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex min-h-[100svh] items-center justify-center bg-secondary/30 dark:bg-secondary/5">
        <p className="text-red-500">{t("dashboard.get_item_error")}</p>
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
            {t("dashboard.welcome")}
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            {t("dashboard.manage_consultants")}
          </p>
        </CardHeader>
        <Card className="w-full max-w-full p-2 sm:p-4 md:p-8 lg:p-12 xl:p-20 mx-auto">
          <CardContent className="p-0 sm:p-2">
            {!data || data.length === 0 ? (
              <div className="flex items-center justify-center h-64 text-center">
                <p className="text-gray-500 text-lg">
                  {t("dashboard.no_items")}
                </p>
              </div>
            ) : (
              <GlobalTable data={data} pageName="consultant" />
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ConsultantsList;
