import { motion } from 'framer-motion';
import { BadgeCheck, Clock, Heart, Zap } from 'lucide-react';

const reasons = [
  {
    title: 'خبرة واحترافية',
    description: 'فريق متخصص من المهندسين والفنيين ذوي الخبرة العالية في مجال تنسيق الحدائق وتركيب أنظمة الري.',
    icon: <BadgeCheck className="h-6 w-6" />,
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    title: 'جودة ممتازة',
    description: 'نستخدم أفضل أنواع النباتات والمعدات لضمان جودة خدماتنا وطول عمر المشاريع التي ننفذها.',
    icon: <Heart className="h-6 w-6" />,
    color: 'bg-red-500/10 text-red-500',
  },
  {
    title: 'سرعة في التنفيذ',
    description: 'نلتزم بجداول زمنية محددة لتنفيذ المشاريع بأسرع وقت ممكن مع الحفاظ على الجودة العالية.',
    icon: <Zap className="h-6 w-6" />,
    color: 'bg-yellow-500/10 text-yellow-500',
  },
  {
    title: 'خدمة ما بعد البيع',
    description: 'نقدم خدمات صيانة وضمان للمشاريع المنفذة حسب العقود المبرمة لضمان استمرار جودة الخدمة.',
    icon: <Clock className="h-6 w-6" />,
    color: 'bg-purple-500/10 text-purple-500',
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section-padding relative bg-secondary/30 dark:bg-secondary/5">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="title-section mx-auto"
          >
            لماذا تختارنا؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            كل ما تحتاجه حديقتك في مكان واحد مع ضمان الجودة والخدمة المميزة
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-card"
            >
              <div className={`mb-4 inline-flex rounded-full ${reason.color} p-3`}>{reason.icon}</div>
              <h3 className="mb-3 text-xl font-semibold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 rounded-2xl bg-white p-8 shadow-sm dark:bg-card md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <span className="mb-2 text-sm font-medium text-primary">رؤيتنا</span>
            <h3 className="mb-4 text-2xl font-bold">
              خلق بيئة خضراء مستدامة ونشر مفهوم جديد عن أثر النبات على البيئة
            </h3>
            <p className="text-muted-foreground">
              نسعى في تقديم خدماتنا بشكل احترافي وفق معايير متجددة ومتطورة، والعمل الدؤوب على تطوير كافة الخدمات المقدمة من الشركة لتليق بمستوى عملائنا لنكون دوماً الخيار الأول والعلامة السائدة في البناء والتطوير وتقديم كل جديد.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative min-h-[250px]"
          >
            <div
              className="h-full w-full rounded-lg bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/5016999/pexels-photo-5016999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;