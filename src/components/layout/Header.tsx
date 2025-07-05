import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutDashboardIcon, LogInIcon, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [valueToken] = useLocalStorage("token", "");
  const { t } = useTranslation();

  const navItems = [
    { nameKey: "nav.home", href: "/#home" },
    { nameKey: "nav.about", href: "/#about" },
    { nameKey: "nav.services", href: "/#services" },
    { nameKey: "nav.team", href: "/#team" },
    { nameKey: "nav.why_us", href: "/#why-us" },
    { nameKey: "nav.contact", href: "/#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
          className="flex items-center pt-1 gap-2"
          aria-label="الشعار"
        >
          <img
            src="/Ragaf-logo.png"
            alt="Ragaf Consulting Co. Logo"
            className="h-20 py-1 object-contain drop-shadow-md"
            style={{ maxWidth: 120 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="ml-8 last:ml-0"
                onClick={() => {
                  closeMenu();
                }}
              >
                <a
                  href={item.href}
                  className={`relative  text-sm font-medium  py-2 px-4 rounded-md hover:bg-primary transition-all duration-500 hover:text-white`}
                  onClick={closeMenu}
                >
                  {t(item.nameKey)}
                  <span className="absolute -bottom-1 right-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <a href="/#contact" className="hidden md:block">
            <Button className="flex items-center gap-2 bg-primary text-white">
              <Phone className="h-4 w-4" />
              <span>{t("nav.contact")}</span>
            </Button>
          </a>
          {valueToken ? (
            <Link to="/admin/consultants">
              <Button className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:shadow-2xl border-0">
                <LayoutDashboardIcon className="h-4 w-4 drop-shadow-glow" />
                <span className="font-bold tracking-wide drop-shadow-glow">
                  {t("auth.dashboard")}
                </span>
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button
                variant={"outline"}
                className="hidden md:flex items-center gap-2 text-primary border-primary hover:bg-primary hover:text-white transition-all duration-500"
              >
                <LogInIcon className="h-4 w-4" />
                <span>{t("auth.login")}</span>
              </Button>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? t("common.close_menu") : t("common.open_menu")}
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
              <ul className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="block text-lg font-medium hover:text-primary"
                      onClick={closeMenu}
                    >
                      {t(item.nameKey)}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <a href="/#contact">
                    <Button className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      <span>{t("nav.contact")}</span>
                    </Button>
                  </a>
                </motion.li>
                {valueToken ? (
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: (navItems.length + 1) * 0.1 }}
                  >
                    <Link to="/admin/consultants">
                      <Button className="w-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:shadow-2xl border-0">
                        <LayoutDashboardIcon className="h-4 w-4 drop-shadow-glow" />
                        <span className="font-bold tracking-wide drop-shadow-glow">
                          {t("auth.dashboard")}
                        </span>
                      </Button>
                    </Link>
                  </motion.li>
                ) : (
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: (navItems.length + 1) * 0.1 }}
                  >
                    <Link to="/login">
                      <Button className="w-full bg-primary text-white">
                        {t("auth.login")}
                      </Button>
                    </Link>
                  </motion.li>
                )}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
