import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import AdminHeader from "./AdminHeader";
import Footer from "./Footer";
import { I18nextProvider } from "react-i18next";
import i18next from "@/utils/i18n";
import Navbar from "./Navbar";


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const isAdminPath = currentPath.startsWith("/admin");
  const [value] = useLocalStorage("token", "");
   const [lang,setLang] = useLocalStorage("lang", "ar"); // Default to Arabic
  useEffect(() => {
    
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.removeAttribute("dir");
    }
  }, [lang]);
  const dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", dir);

  useEffect(() => {
    // If not authenticated and on admin path, redirect to login
    if ((!value || value === "") && isAdminPath) {
      navigate("/login", { replace: true });
    }
    // If authenticated and on login page, redirect to dashboard
    if (value && value !== "" && currentPath === "/login") {
      navigate("/admin/consultant", { replace: true });
    }
  }, [value, isAdminPath, currentPath, navigate]);

  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setLang(lng);
      document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lng;
    };

    i18next.on("languageChanged", handleLanguageChanged);

    return () => {
      i18next.off("languageChanged", handleLanguageChanged);
    };
  }, [
    setLang,
  ]);

  return (
        <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>

          <I18nextProvider i18n={i18next}>
    <div className="flex min-h-screen flex-col">
      {value && isAdminPath ? <AdminHeader /> : <Navbar />}
      <main className="flex-grow">{children}</main>
      {value && isAdminPath ? null : <Footer />}
    </div>
    </I18nextProvider>
        </html>

  );
};

export default Layout;
