"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { LogOutIcon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const [, , removeValue] = useLocalStorage("token", "");
  const [, setStoreLang] = useLocalStorage("lang", "");
  const { i18n, t } = useTranslation();

  const [lang, setLang] = useState(i18n.language);
  type NavItem = { name: string; href: string; items?: NavItem[] };
  const navItems = t("admin_header.nav_items", {
    returnObjects: true,
  }) as NavItem[];

  // Function to switch language
  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.removeAttribute("dir");
    }
    setLang(lang);
    setStoreLang(lang);
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const logout = () => {
    removeValue();
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-card/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center py-2 gap-2"
          aria-label="الشعار"
        >
          <img
            src="/Ragaf-logo.png"
            alt="الشعار"
            crossOrigin="anonymous"
            className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-cover py-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center">
            {navItems.map((item: NavItem, index: number) =>
              index === 0 && item.items ? (
                <li key={index} className="ml-3 lg:ml-6">
                  <Select
                    onValueChange={(value) => {
                      const selected = item.items?.find(
                        (subItem) => subItem.href === value
                      );
                      if (selected) {
                        closeMenu();
                        navigate(selected.href);
                      }
                    }}
                  >
                    <SelectTrigger className="w-[140px] lg:w-[180px] text-sm lg:text-base">
                      <SelectValue placeholder={item.name} />
                    </SelectTrigger>
                    <SelectContent>
                      {item.items.map((subItem: NavItem, subIndex: number) => (
                        <SelectItem key={subIndex} value={subItem.href} className="text-sm lg:text-base">
                          {subItem.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </li>
              ) : (
                <li key={index} className="ml-3 lg:ml-6">
                  <Link
                    to={item.href}
                    className="text-sm lg:text-lg font-medium text-gray-800 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            className="hidden lg:flex items-center gap-2 bg-destructive hover:bg-destructive/30 text-white text-sm"
            onClick={logout}
          >
            <LogOutIcon className="h-4 w-4" />
            {t("admin_header.logout")}
          </Button>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="sm"
              className={`text-xs sm:text-sm px-2 sm:px-3 ${lang === "ar" ? "bg-primary text-white" : ""}`}
              onClick={() => {
                setLang("ar");
                switchLanguage("ar");
              }}
            >
              العربية
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`text-xs sm:text-sm px-2 sm:px-3 ${lang === "en" ? "bg-primary text-white" : ""}`}
              onClick={() => {
                setLang("en");
                switchLanguage("en");
              }}
            >
              English
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden bg-white/95 dark:bg-card/95 backdrop-blur-sm"
          >
            <nav className="container-custom pb-6 pt-4">
              <ul className="space-y-2">
                {navItems.map((item: NavItem, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-200 dark:border-gray-700 pb-2"
                  >
                    <Link
                      to={item.href}
                      className="block text-base font-medium hover:text-primary py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.2 }}
                  className="pt-4"
                >
                  <Button
                    className="w-full bg-destructive hover:bg-destructive/30 text-white"
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                  >
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    {t("admin_header.logout")}
                  </Button>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default AdminHeader;
