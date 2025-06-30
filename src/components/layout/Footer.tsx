import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary/50 pt-16 dark:bg-secondary/10">
      <div className="container-custom">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                security="true"
                src="/logo_professionals.png"
                alt="الشعار"
                className="h-32 w-h-32 object-cover"
              />
            </div>
            <p className="text-muted-foreground">
              نقدم خدمات متكاملة في تصميم وتنسيق وصيانة الحدائق وتركيب شبكات
              الري وتنسيق الزهور للمناسبات بأعلى معايير الجودة.
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
            <h4 className="mb-4 text-xl font-bold">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  خدماتنا
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  أعمالنا
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xl font-bold">خدماتنا</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  صيانة الحدائق
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  تنسيق الورود والاحتفالات
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  تركيب شبكات الري
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="inline-flex items-center text-muted-foreground hover:text-primary"
                >
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                  تصميم الحدائق
                </a>
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
            &copy; {currentYear} شركة المحترفون الزراعية. جميع الحقوق محفوظة.
          </p>
          <p className="text-sm text-muted-foreground">
            تصميم وتطوير بواسطة{" "}
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
