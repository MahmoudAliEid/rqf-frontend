import { motion } from "framer-motion";
import { ArrowDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-secondary/50 to-white pt-20 dark:from-secondary/10 dark:to-background"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1MCAyMDBMMTA1IDEwMEwxNTAgMEwxOTUgMTAwTDE1MCAyMDBaTTUwIDIwMEw1IDEwMEw1MCAwTDk1IDEwMEw1MCAyMDBaIiBmaWxsPSIjNENBRjUwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container-custom relative z-10 flex h-full items-center">
        <div className="grid gap-12 pb-20 pt-10 md:grid-cols-2 md:pb-32 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              نجعل من حديقتك تحفة فنية خضراء
            </span>
            <h1 className="mb-6 text-shimmer">
              حلول متكاملة <br />
              <span className="text-primary">للمساحات الخضراء</span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
              نقدم خدمات احترافية في تصميم وتنسيق الحدائق وتركيب شبكات الري
              وصيانة المساحات الخضراء بأعلى معايير الجودة.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary
               text-white"
                onClick={() => (window.location.href = "#contact")}
              >
                <Phone className="h-4 w-4" /> تواصل معنا
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => (window.location.href = "#services")}
                className="gap-2"
              >
                <span>استكشف خدماتنا</span>
                <ArrowDown className="h-4 w-4" />
                <span className="absolute -z-10 h-0.5 w-full bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/1469196/pexels-photo-1469196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 right-10 rounded-xl bg-white p-4 shadow-lg dark:bg-card">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L5 8v9c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V8l-7-6zm3 15h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">خدمة احترافية</p>
                  <p className="text-sm text-muted-foreground">بضمان 100%</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-6 top-20 rounded-xl bg-white p-4 shadow-lg dark:bg-card">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14h-2v-2h2v2zm0-4h-2V9h2v4z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">خبرة 15+ عام</p>
                  <p className="text-sm text-muted-foreground">في المجال</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center justify-center"
        aria-label="انتقل إلى الأسفل"
      >
        <span className="mb-2 text-sm text-muted-foreground">اكتشف المزيد</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};

export default Hero;
