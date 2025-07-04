import { motion } from "framer-motion";
import { ArrowUpRight, Flower, Droplets, Sprout } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "خدمات صيانة الحدائق الدورية",
    description:
      "نوفر عقود صيانة دورية للحفاظ على جمال الحدائق المنفذة، تشمل متابعة مستمرة، ومعالجة أي مشاكل كالحشرات أو التلف مع ضمان كامل للمزروعات حسب نوع العقد ومدته، يُستثنى من الضمان انقطاع الري.",
    icon: <Sprout className="h-6 w-6" />,
    color: "bg-green-500/10 text-green-500",
    image:
      "https://images.pexels.com/photos/2132252/pexels-photo-2132252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "خدمات تنسيق الورود والاحتفالات",
    description:
      "بلون الزمرد الخلاب ورونق الورود الجذابة، نجهز احتفالاتكم ونقوم بتغليف الهدايا وتنسيق المناسبات للفنادق والشركات من خلال باقات ورد مميزة تعد على يد منسقين محترفين وبأعلى جودة وإتقان.",
    icon: <Flower className="h-6 w-6" />,
    color: "bg-purple-500/10 text-purple-500",
    image:
      "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "تركيب جميع أنواع شبكات الري",
    description:
      "تركيب شبكات الري الاتوماتيك والعادي وزراعة الأسطح بنظام الهيدروبونيك لتوفير ٩٠٪ من المياة.",
    icon: <Droplets className="h-6 w-6" />,
    color: "bg-blue-500/10 text-blue-500",
    image:
      "https://images.pexels.com/photos/358572/pexels-photo-358572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section
      id="services"
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
            خدماتنا
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            نقدم مجموعة متكاملة من الخدمات الاستشارية الإدارية عالية الجودة
            لتلبية احتياجات عملائنا
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:bg-card h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 right-4">
                    <div className={`rounded-full ${service.color} p-3`}>
                      {service.icon}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-base leading-relaxed h-[120px] w-full">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <a
                    href="#contact"
                    className="group inline-flex items-center text-sm font-medium text-primary"
                  >
                    طلب الخدمة
                    <ArrowUpRight className="mr-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
