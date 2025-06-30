import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";




const About = () => {
  const {t}= useTranslation();
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-white dark:bg-background"
    >
      <div className="container-custom">
        

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <img
                src="/about.jpg"
                alt="فريق العمل"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

              <div className="absolute bottom-4 right-4 rounded-xl bg-white p-4 shadow-lg dark:bg-card">
                <div className="flex items-center gap-3">
                  <div className="text-primary"> مدينة الخليل – فلسطين</div>
                </div>
              </div>
            </div>

          
          </motion.div>
         

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
          
             <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section mx-auto"
          >
            {t("aboutpage.section1.title")}
          </motion.h2>

            <p className="mb-6 text-muted-foreground">
                         {t("aboutpage.section1.description")}

            </p>
             <p className="mb-6 text-muted-foreground">
                         {t("aboutpage.section1.q")}

            </p>

          

            <Button
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("services")?.offsetTop,
                  behavior: "smooth",
                })
              }
              className="w-fit"
            >
              تعرف على خدماتنا
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
