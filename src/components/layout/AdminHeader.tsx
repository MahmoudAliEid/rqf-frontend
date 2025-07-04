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
  const [_1, _, removeValue] = useLocalStorage("token", "");
  const [_2, setStoreLang] = useLocalStorage("lang", "");
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
      <div className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center py-1 gap-2"
          aria-label="الشعار"
        >
          <img
            src="/Ragaf-logo.png"
            alt="الشعار"
            crossOrigin="anonymous"
            className="h-32 w-32 object-cover py-1"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center">
            {navItems.map((item: NavItem, index: number) =>
              index === 0 && item.items ? (
                <li key={index} className="ml-6">
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
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={item.name} />
                    </SelectTrigger>
                    <SelectContent>
                      {item.items.map((subItem: NavItem, subIndex: number) => (
                        <SelectItem key={subIndex} value={subItem.href}>
                          {subItem.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </li>
              ) : (
                <li key={index} className="ml-6">
                  <Link
                    to={item.href}
                    className="text-lg font-medium text-gray-800 hover:text-primary"
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
        <div className="flex items-center gap-4">
          <Button
            className=" hidden md:flex items-center gap-2 bg-destructive hover:bg-destructive/30 text-white"
            onClick={logout}
          >
            <LogOutIcon className="h-5 w-5" />
            {t("admin_header.logout")}
          </Button>

          {/* Language Switcher */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className={`${lang === "ar" ? "bg-primary text-white" : ""}`}
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
              className={`${lang === "en" ? "bg-primary text-white" : ""}`}
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
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="overflow-hidden md:hidden"
          >
            <nav className="container-custom pb-6">
              <ul>
                {navItems.map((item: NavItem, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className="block text-lg font-medium hover:text-primary"
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
