import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
  "home": "Home",
  "about": "Who we are",
  "contact": "Contact Us",
  "products": "Products",

  "blog": "Blog",
  "jobs": "Careers",
  "viewmore": "View Details",
  "allcategories": "All Categories",
  "notfound": "No Products Found",
  "notfound1": "No Jobs Available",
  "search": "Search",
  "explore": "Explore More",
  "slide1": "Barham & Kamal Hussein Company",
  "slide11": "More Than Just a Company",
  "slide2": "Enjoy the taste of healthy, nutritious nuts rich in energy and natural benefits",
  "slide22": "Fresh, delicious, and perfect for every moment",
  "slide3": "Togetherness means Barham Rice",
  "slide33": "Prepare the most delicious, fresh, healthy, and nutritious meals with Barham Rice",
  "slide4": "Delicious dried fruits",
  "slide44": "Rich in flavor and amazing benefits, perfect for every moment. Discover their benefits!",
  "slide5": "Premium spices",
  "slide55": "Rich flavor and unmatched quality to give you the best cooking experience – fresh, healthy, and perfect for every meal!",
  "slide6": "Coffee is not just a drink",
  "slide66": "It’s a rich experience that combines health benefits and unique flavor for a perfect start to your day",
  "slide666": "Rich flavor and unmatched quality to give you the best cooking experience – fresh, healthy, and perfect for every meal!",

  "footer": {
    "about": "Barham & Kamal Hussein Company is one of the leading companies in the import and export of food products. Founded in 1951, with over 70 years of experience, we pride ourselves on offering the highest standards of quality and professionalism in the food market, with a special focus on various types of nuts.",
    "fastlink": {
      "title": "Quick Links",
      "home": "Home",
      "about": "About Us",
      "contact": "Contact Us",
      "blog": "Blog",
      "jobs": "Careers",
      "products": "Products"
    },
    "branches": {
      "title": "Our Branches",
      "main": "Main Branch: Jordan – Amman – Yarmouk Street",
      "branch1": "Jordan – Irbid",
      "branch2": "Jordan – Aqaba",
      "branch3": "United Arab Emirates – Dubai"
    },
    "contact": {
      "time": "Saturday to Thursday: 9 AM – 6 PM"
    },
    "rights": "All rights reserved to Barham & Kamal Hussein Company",
    "design": "Designed and developed by"
  },

  "contactpage": {
    "contact": "Contact Us",
    "form": {
      "name": "Name",
      "email": "Email",
      "message": "Message",
      "send": "Send",
      "phone": "Phone Number"
    },
    "success": "Successfully Sent",
    "branches": {
      "title": "Our Branches",
      "main": "Main Branch",
      "main1": "Jordan – Amman – Yarmouk Street",
      "branch1": "Jordan – Irbid",
      "branch2": "Jordan – Aqaba",
      "branch3": "United Arab Emirates – Dubai"
    },
    "time": {
      "title": "Working Hours",
      "time": "Saturday to Thursday: 9 AM – 6 PM"
    },
    "phone": "Phone",
    "fax": "Fax"
  },

  "aboutpage": {
    "section1": {
      "title": "About the Company",
      "description": "Marina Group for Import and Export was established in 2000 in Hebron – Palestine. The company specializes in importing and distributing food products, with a particular focus on tuna and other high-quality food items.",
      "q": "Since its inception, Marina Group has been committed to meeting the needs of the local market by offering reliable and healthy products carefully selected from the world’s best companies and manufacturers, ensuring quality, taste, and excellent service."
    },
    "section2": {
      "title": "Our Values",
      "features": [
        "Quality first",
        "Trust and credibility",
        "Transparency in dealings",
        "Punctuality",
        "Continuous development and smart expansion"
      ]
    },
    "section4": {
      "features": [
        {
          "title": "Our Vision",
          "data": "To be one of the leading companies in the field of importing and distributing food products in Palestine, earning customer trust through our commitment to quality, transparency, and continuous development."
        },
        {
          "title": "Our Mission",
          "data": [
            "Provide safe and healthy food products to Palestinian consumers.",
            "Build long-term partnerships with our global suppliers.",
            "Offer outstanding and prompt customer service.",
            "Contribute to the national economy by creating job opportunities and expanding the scope of imports."
          ]
        }
      ]
    }
  },
  "commitment1": {
    "quality": "We conduct more than 150 quality tests daily to ensure we provide the best types of nuts and 100% fresh and natural food products worthy of your trust.",
    "import": "We import the finest types of nuts and food products from more than 12 countries around the world, including Turkey, Egypt, the United States, India, China, the UAE, Saudi Arabia, Afghanistan, and many more.",
    "points": "We supply our products to more than 800 wholesale points of sale throughout Jordan, with plans to expand in the region."
  },
  "cat_page_header":'Available Items',
  'cat_see_products':'See Products',
  "ProductCarousel": {
        "title": "Barham & Kamal Hussein Company",
        "qoute": "We are proud to offer a wide range of high-quality products to our customers.",
        "des1": "Barham is a leading company in the import and export of nuts and foodstuffs in the Middle East; it is one of the largest vertically integrated companies in the world. Since our establishment in 1951, the 'Barham' brand has become synonymous with quality among consumers around the world. We live and work every day by the motto: 'Quality is not an option, but a promise.'",
        "include": "Our products include:",
        "des2": "Nuts / Spices / Dried Fruits | Rice | Coffee | Herbs | Dates | Cardamom | Turkish Sweets | Other high-quality products that have established our name in the market.",
        "des3": "The company imports a variety of high-quality foodstuffs, which have established our name in the market. These materials include:",
        "des4": "Nuts / Spices / Dried Fruits | Rice | Coffee | Herbs | Dates | Cardamom | Turkish Sweets | Other high-quality products.",
        "who": "About Us"
      },


      "create_consultant": {
        "title": "Create Consultant",
        "form_description": "Enter your details to create a consultant",
        "name": "Name",
        "name_placeholder": "Name in English",
        "ar_name": "Arabic Name",
        "ar_name_placeholder": "Name in Arabic",
        "description": "Description",
        "ar_description": "Arabic Description",
        "description_placeholder": "Consultant description in English",
        "ar_description_placeholder": "Consultant description in Arabic",
        "save_new_consultant": "Save New Consultant",
        "saving_consultant": "Saving Consultant...",
        "success": "Consultant created successfully",
        "error": "Error creating consultant",
        "image": "Image",
        "images": "Images",
      },

      "create_service": {
        "title": "Create Service",
        "form_description": "Enter your details to create a Service",
        "name": "Name",
        "name_placeholder": "Name in English",
        "ar_name": "Arabic Name",
        "ar_name_placeholder": "Name in Arabic",
        "description": "Description",
        "ar_description": "Arabic Description",
        "description_placeholder": "service description in English",
        "ar_description_placeholder": "service description in Arabic",
        "save_new_service": "Save New service",
        "saving_service": "Saving service...",
        "success": "Service created successfully",
        "error": "Error creating service",
        "image": "Image",
        "images": "Images",
      },
      "create_blog": {
        "title": "Create News",
        "form_description": "Enter your details to create a news",
        "name": "Name",
        "name_placeholder": "Name in English",
        "ar_name": "Arabic Name",
        "ar_name_placeholder": "Name in Arabic",
        "description": "Description",
        "ar_description": "Arabic Description",
        "description_placeholder": "News description in English",
        "ar_description_placeholder": "News description in Arabic",
        "save_new_blog": "Save New News",
        "saving_blog": "Saving News...",
        "success": "News created successfully",
        "error": "Error creating news",
        "image": "Image",
        "images": "Images"
      },
      
      "admin_header": {
        "nav_items": [
          { "name": "Dashboard",
            "items": [
              { "name": "Manage Consultants", "href": "/admin/consultants" },
              { "name": "Manage Services", "href": "/admin/services" },
              { "name": "Manage News", "href": "/admin/news" }
            ]
          },
          { "name": "Create Consultant", "href": "/admin/create-consultant" },
          {
            "name": "Create Service",
            "href": "/admin/create-service"
          },
          {
            "name": "Add News",
            "href": "/admin/create-news"
          }
        ],
        "logo_alt": "Logo",
        "logout": "Logout"
      }
      ,
      "dashboard": {
        "title": "Dashboard",
        "dilog_title": "Delete Item",
        "confirm_delete": "Are you sure you want to delete this item? This action cannot be undone.",
        "delete_success": "Item deleted successfully",
        "delete_error": "Error deleting item",
        "loading": "Loading data...",
        "no_items": "No items to display",
        "delete": "Delete",
        "edit": "Edit",
        "cancel": "Cancel",
        "list_of_items": "List of Items",
        "welcome": "Welcome to the Dashboard",
        "login_required": "You must be logged in to access the dashboard",
        "get_item_error": "Error fetching items",
        "manage_blogs": "Here you can manage all blogs",
        "manage_services": "Here you can manage all services",
        "manage_consultants": "Here you can manage all consultants",
      }

     
}


      
      
    ,
  },
    
  
  ar: {
    translation: {
      "home": "الرئيسية",
      "about": "من نحن",
      "contact": "اتصل بنا",
      "blog": "المدونة",
      "jobs": "الوظائف",
      "viewmore":"عرض التفاصيل",
      "products": "المنتجات",
      "allcategories": "جميع الأصناف",
      "notfound":"لا يوجد منتجات",
      "notfound1":"لا يوجد وظائف متاحة",
      "search":"بحث",
      "explore":"     اكتشف المزيد",
      "slide1":"    شركة برهم وكمال حسين",
      "slide11":"     أكبر من مجرد شركة",
      "slide2":"   استمتع بمذاق المكسرات الصحية والمغذية الغنية بالطاقة والفوائد الطبيعية",
      "slide22":"    طازجة، لذيذة، ومثالية لكل لحظة ",
      "slide3":"   اللمة يعني أرز برهم ",
      "slide33":"   حضري أشهى الوجبات الطازجة والصحية والمغذية مع ارز برهم   ",
      "slide4":"   فواكه مجففة بطعم لذيذ ",
      "slide44":"   و غني وفوائد مذهلة مثالية لكل لحظة. اكتشف فوائدها ! ",
      "slide5":"   بهارات فاخرة ",
      "slide55":"   نكهة غنية وجودة لا تضاهى ، لتمنحك أفضل تجربة طهي طازجة، صحية ومثالية لكل وجبة ! ",
      "slide6":"   القهوة ليست مجرد مشروب ",
      "slide66":" بل هي تجربة غنية تجمع بين الفوائد الصحية والنكهة الفريدة التي تمنحك بداية مثالية ليومك ",
      "slide666":"   نكهة غنية وجودة لا تضاهى ، لتمنحك أفضل تجربة طهي طازجة، صحية ومثالية لكل وجبة !   ",



      "footer":{
        "about":"شركة برهم و كمال حسين هي إحدى الشركات الرائدة في مجال استيراد وتصدير المواد الغذائية، وقد أسست عام 1951 على مرّ أكثر من 70 عامًا من الخبرة ، نتميز بتقديم أعلى معايير الجودة والاحترافية في سوق المواد الغذائية، مع تركيز خاص على المكسرات بأنواعها المختلف.",
        "fastlink":{
          "title":"روابط سريعة",
          "home":"الرئيسية",
          "about":"من نحن",
          "contact":"اتصل بنا",
          "blog":"المدونة",
          "jobs":"الوظائف",
          "products":"المنتجات",
        },
        "branches":{
          "title":'فروعنا',
           "main":'الفرع الرئيسي :الأردن – عمان - شارع اليرموك',
          "branch1":'الاردن- اربد',
          "branch2":'الاردن- العقبة',
          "branch3":'الامارات العربية المتحدة - دبي',
      
        },
        "contact":{
          "time":'من السبت إلى الخميس : 9 صباحًا – 6 مساءً'
        },
        "rights":"جميع الحقوق محفوظة لدي شركة برهم وكمال حسين",
        "design":"تصميم وتطوير بواسطة"

      },
      "contactpage":{
        "contact":"تواصل معنا",
        "form":{
          "name":"الاسم",
          "email":"البريد الالكتروني",
          "message":"الرسالة",
          "send":"ارسل",
          "phone":"رقم الهاتف"
        },
        "success":"تم الارسال بنجاح",
        "branches":{
          "title":'فروعنا',
          "main":"الفرع الرئيسي",
          "main1":'الأردن – عمان - شارع اليرموك',
          "branch1":'الاردن- اربد',
          "branch2":'الاردن- العقبة',
          "branch3":'الامارات العربية المتحدة - دبي',

        },"time":{
          "title":'ساعات الدوام',
          "time":'من السبت إلى الخميس : 9 صباحًا – 6 مساءً'
        },
        "phone":"الهاتف",
        "fax":"الفاكس"

      },
      "aboutpage":{
        "section1":{
          "title":"نبذة عن الشركة",
          "description":"تأسست شركة مارينا جروب للاستيراد والتصدير عام 2000 في مدينة الخليل – فلسطين، وهي شركة متخصصة في استيراد وتوزيع المواد الغذائية، مع التركيز بشكل خاص على منتجات التونا والمواد الغذائية عالية الجودة الأخرى",
          "q":"منذ انطلاقها، حرصت مارينا جروب على تلبية احتياجات السوق المحلي من خلال تقديم منتجات موثوقة وصحية، تم اختيارها بعناية من أفضل الشركات والمصانع العالمية، بما يضمن الجودة والطعم والخدمة الممتازة."

        },
       "section2": {
  "title": "قيمنا",
  "features": [" الجودة أولاً" ,"الثقة والمصداقية","لشفافية في التعامل","الالتزام بالمواعيد","التطوير الدائم والتوسع الذكي"
    
  ]
},
"section4": {
  "features": [
  
  {
    "title": "رؤيتنا",
    "data": "أن نكون من الشركات الرائدة في مجال استيراد وتوزيع المواد الغذائية في فلسطين، وأن نحقق ثقة العملاء من خلال التزامنا بالجودة، والشفافية، والتطور المستمر."
  },
  {
    "title": "رسالتنا",
    "data": ["توفير منتجات غذائية آمنة وصحية للمستهلك الفلسطيني.","بناء شراكات طويلة الأمد مع موردينا العالميين.","تقديم خدمة عملاء متميزة وسريعة.","المساهمة في دعم الاقتصاد الوطني من خلال توفير فرص عمل وتوسيع نطاق الاستيراد."
]
  }
]

}

        },


        "create_consultant": {
          "title": "تسجيل مستشار",
          "form_description": "ادخل بياناتك لتسجيل المستشار",
          "name": "الاسم",  
          "name_placeholder": "الاسم باللغة الانجليزية",
          "ar_name": "الاسم بالعربية",
          "ar_name_placeholder": "الاسم باللغة العربية",
          "description": "الوصف",
          "description_placeholder": "وصف المستشار باللغة الانجليزية",
          "ar_description": "الوصف بالعربية",
          "ar_description_placeholder": "وصف المستشار باللغة العربية",
          "save_new_consultant": "حفظ مستشار جديد",
          "saving_consultant": "جارٍ حفظ المستشار...",
          "success": "تم تسجيل المستشار بنجاح",
          "error": "حدث خطأ أثناء تسجيل المستشار",
          "image": "صورة",
          "images": "الصور",
        },

        "create_service": {
          "title": "إنشاء خدمة",
          "form_description": "ادخل بياناتك لإنشاء الخدمة",
          "name": "الاسم",
          "name_placeholder": "الاسم باللغة الانجليزية",
          "ar_name": "الاسم بالعربية",
          "ar_name_placeholder": "الاسم باللغة العربية",
          "description": "الوصف",
          "description_placeholder": "وصف الخدمة باللغة الانجليزية",
          "ar_description": "الوصف بالعربية",
          "ar_description_placeholder": "وصف الخدمة باللغة العربية",
          "save_new_service": "حفظ خدمة جديدة",
          "saving_service": "جارٍ حفظ الخدمة...",
          "success": "تم إنشاء الخدمة بنجاح",
          "error": "حدث خطأ أثناء إنشاء الخدمة",
          "image": "صورة",
          "images": "الصور"
        },

        "create_blog": {
          "title": "إنشاء خبر",
          "form_description": "ادخل بياناتك لإنشاء الخبر",
          "name": "الاسم",
          "name_placeholder": "الاسم باللغة الانجليزية",
          "ar_name": "الاسم بالعربية",
          "ar_name_placeholder": "الاسم باللغة العربية",
          "description": "الوصف",
          "description_placeholder": "وصف الخبر باللغة الانجليزية",
          "ar_description": "الوصف بالعربية",   
          "ar_description_placeholder": "وصف الخبر باللغة العربية",
          "save_new_blog": "حفظ خبر جديد",
          "saving_blog": "جارٍ حفظ الخبر...",
          "success": "تم إنشاء الخبر بنجاح",
          "error": "حدث خطأ أثناء إنشاء الخبر",
          "image": "صورة",
          "images": "الصور"
        },

        "admin_header": {
  
          "nav_items": [
            { "name": "لوحة التحكم",
              "items": [
                { "name": "التحكم في المستشارين", "href": "/admin/consultants" },
                { "name": "التحكم في الخدمات", "href": "/admin/services" },
                { "name": "التحكم في الأخبار", "href": "/admin/news" }
              ]
             },
            { "name": "تسجيل مستشار", "href": "/admin/create-consultant" },
            {
              "name": "إنشاء خدمة",
              "href": "/admin/create-service"
            },
            {
              "name": "إضافة خبر",
              "href": "/admin/create-news"
            }
          ] ,
          "logo_alt": "الشعار",
          "logout": "تسجيل الخروج",

       
      }
      ,
      "dashboard": {
        "title": "لوحة التحكم",
        "dilog_title": "حذف العنصر",
        "confirm_delete": "هل أنت متأكد أنك تريد حذف هذا العنصر؟ هذا الإجراء لا يمكن التراجع عنه.",
        "delete_success": "تم حذف العنصر بنجاح",
        "delete_error": "حدث خطأ أثناء حذف العنصر",
        "loading": "جارٍ تحميل البيانات...",
        "no_items": "لا توجد عناصر لعرضها",
        "delete": "حذف",
        "edit": "تعديل",
        "cancel": "إلغاء",
        "list_of_items": "قائمة العناصر",
        "welcome": "مرحبًا بك في لوحة التحكم",
        "login_required": "يجب عليك تسجيل الدخول للوصول إلى لوحة التحكم",
        "get_item_error": "حدث خطأ أثناء جلب العناصر",
        "manage_blogs": "هنا يمكنك إدارة جميع المدونات",
        "manage_services": "هنا يمكنك إدارة جميع الخدمات",
        "manage_consultants": "هنا يمكنك إدارة جميع المستشارين",
      }
    }
  }
};
  
i18next.use(initReactI18next).init({
  resources,
  fallbackLng: 'ar', 
  supportedLngs: ['en', 'ar'],
  debug: false,
  interpolation: {
    escapeValue: false, 
  },
  
});

export default i18next;
