import { motion } from "framer-motion";
import { Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سنقوم بالرد عليك في أقرب وقت ممكن",
    });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-secondary/30 dark:bg-secondary/5"
    >
      <div className="container-custom">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section mx-auto"
          >
            تواصل معنا
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            نحن دائماً سعداء بالتواصل معكم للإجابة على استفساراتكم وتقديم
            خدماتنا
          </motion.p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg bg-white p-6 shadow-sm dark:bg-card"
          >
            <h3 className="mb-6 text-2xl font-bold">ارسل لنا رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    الاسم
                  </label>
                  <Input id="name" placeholder="الاسم الكامل" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    رقم الجوال
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="05XXXXXXXX"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  البريد الإلكتروني
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  الموضوع
                </label>
                <Input id="subject" placeholder="موضوع الرسالة" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  الرسالة
                </label>
                <Textarea
                  id="message"
                  placeholder="اكتب رسالتك هنا..."
                  rows={5}
                  required
                  className="resize-none"
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="ml-2 h-4 w-4" />
                إرسال
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between gap-6"
          >
            <div className="mb-6">
              <h3 className="mb-6 text-2xl font-bold">معلومات التواصل</h3>
              <p className="mb-8 text-muted-foreground">
                يمكنكم التواصل معنا من خلال وسائل الاتصال التالية، وسنقوم بالرد
                عليكم في أقرب وقت ممكن.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">رقم الجوال</h4>
                    <p dir="ltr" className="text-muted-foreground">
                      +966 55 564 6203 & +966 55 558 6777
                    </p>
                  </div>
                </li>
                {/* <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">البريد الإلكتروني</h4>
                    <p className="text-muted-foreground">info@almuhtarifoon.com</p>
                  </div>
                </li> */}
                {/* <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">العنوان</h4>
                    <p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">ساعات العمل</h4>
                    <p className="text-muted-foreground">السبت - الخميس: 8:00 ص - 8:00 م</p>
                  </div>
                </li> */}
              </ul>
            </div>

            <div className="overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463876.9969042474!2d46.54243424589615!3d24.725578140829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع الشركة"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
