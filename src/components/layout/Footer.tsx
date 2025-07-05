import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="relative bg-secondary/50 pt-16 dark:bg-secondary/10">
      <div className="container-custom">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center py-1 gap-2">
              <img
                src="/Ragaf-logo.png"
                alt="شركة رقف للاستشارات الإدارية"
                className="h-20 object-contain drop-shadow-md"
                style={{ maxWidth: 120 }}
              />
            </div>
            <p className="text-muted-foreground">
              {t("footer.about")}
            </p>
            {/* <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label="فيسبوك"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label="تويتر"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label="انستجرام"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xl font-bold">{t("footer.fastlink.title")}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  {t("footer.fastlink.home")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  {t("footer.fastlink.about")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  {t("footer.fastlink.services")}
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  {t("footer.fastlink.team")}
                </a>
              </li>
             
              <li>
                <a
                  href="#contact"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  {t("footer.fastlink.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xl font-bold">{t("footer.services.title")}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  {t("footer.services.strategic_consulting")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  {t("footer.services.business_development")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  {t("footer.services.project_management")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  {t("footer.services.medical_licensing")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  {t("footer.services.hr_development")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="mb-4 text-xl font-bold">{t("footer.contact.title")}</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <strong>{t("contact_us.form.email")}:</strong>
                <br />
                {t("footer.contact.email")}
              </li>
              <li className="text-muted-foreground">
                <strong>{t("contact_us.form.phone")}:</strong>
                <br />
                {t("footer.contact.phone")}
              </li>
              <li className="text-muted-foreground">
                <strong>{
t("footer.contact.addressTitle")
                  }</strong>
                <br />
                {t("footer.contact.address")}
              </li>
              <li className="text-muted-foreground">
                <strong>{
t("footer.contact.timeTitle")
                  }</strong>
                <br />
                {t("footer.contact.time")}
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          {/* <div>
            <h4 className="mb-4 text-xl font-bold">القائمة البريدية</h4>
            <p className="mb-4 text-muted-foreground">اشترك في القائمة البريدية للحصول على آخر العروض والأخبار</p>
            <div className="flex">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="flex-1 rounded-r-md border border-input bg-background px-3 py-2"
                aria-label="البريد الإلكتروني"
              />
              <Button className="rounded-r-none">اشتراك</Button>
            </div>
          </div> */}
        </div>

        <hr className="my-8 border-muted" />

        <div className="flex flex-col items-center justify-between gap-1 py-6 text-center md:flex-row md:text-right">
          <p className="text-muted-foreground">
            &copy; {currentYear} {t("footer.rights")}
          </p>
          <p className="text-sm text-muted-foreground">
          {t("footer.designed")}
            <a
              href="https://shimaamohamed.bio.link/"
              className="font-medium text-primary hover:underline"
            >
              SM
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
