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
  "hero": {
    "welcome": "Welcome to RQF High Management Consulting",
    "tagline": "Your partners in success",
    "description": "Your partners in success, helping you realize your vision through top-tier consulting services and innovative solutions.",
    "team_commitment": "Our team of experts is committed to delivering tailored solutions to boost your organizational capabilities.",
    "cta_button": "Get Your Free Consultation Today",
    "explore_services": "Explore Our Services",
    "discover_more": "Discover More",
    "professional_service": "Professional Service",
    "guarantee": "100% Guarantee",
    "experience": "15+ Years Experience",
    "in_field": "In the Field"
  },
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
        "email": "Email",
        "email_placeholder": "consultant@example.com",
        "phone": "Phone",
        "phone_placeholder": "+966 XX XXX XXXX",
        "linkedin": "LinkedIn Profile",
        "linkedin_placeholder": "https://linkedin.com/in/username",
        "specialization": "Specialization",
        "specialization_placeholder": "e.g., Strategic Planning, HR Management",
        "experience_years": "Years of Experience",
        "experience_years_placeholder": "e.g., 5",
        "description": "Description",
        "ar_description": "Arabic Description",
        "description_placeholder": "Consultant description in English",
        "ar_description_placeholder": "Consultant description in Arabic",
        "languages": "Languages",
        "select_language": "Select a language",
        "certifications": "Certifications",
        "select_certification": "Select a certification",
        "save_new_consultant": "Save New Consultant",
        "saving_consultant": "Saving Consultant...",
        "success": "Consultant created successfully",
        "error": "Error creating consultant",
        "image": "Image",
        "images": "Profile Image",
      },
      "edit_consultant": {
        "title": "Edit Consultant",
        "form_description": "Update consultant details",
        "update_consultant": "Update Consultant",
        "updating_consultant": "Updating consultant...",
        "success": "Consultant updated successfully",
        "error": "Error updating consultant",
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
      "edit_service": {
        "title": "Edit Service",
        "form_description": "Update service details",
        "update_service": "Update Service",
        "updating_service": "Updating service...",
        "success": "Service updated successfully",
        "error": "Error updating service",
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
      "edit_blog": {
        "title": "Edit News",
        "form_description": "Update news details",
        "update_blog": "Update News",
        "updating_blog": "Updating news...",
        "success": "News updated successfully",
        "error": "Error updating news",
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
        "image": "Image",
        "name": "Name",
        "actions": "Actions",
        "copy_name": "Copy Name",
        "columns": "Columns",
        "no_results": "No results found",
        "of": "of",
        "rows_selected": "row(s) selected",
        "previous": "Previous",
        "next": "Next",
        "no_image": "No Image",
        "try_different_search": "Try adjusting your search criteria",
        "selected": "selected",
        "blogs": "Blogs",
        "services": "Services",
        "consultants": "Consultants"
      },

      "about_us": {
        "title": "About RQF High Management Consulting",
        "subtitle": "Excellence in Consulting, Partnership in Success",
        "mission": {
          "title": "Our Mission",
          "description": "To provide exceptional consulting services that empower organizations to achieve their strategic goals through innovative solutions and expert guidance."
        },
        "vision": {
          "title": "Our Vision",
          "description": "To be the leading consulting firm in the Middle East, recognized for our commitment to excellence, integrity, and transformative impact on our clients' success."
        },
        "values": {
          "title": "Our Values",
          "excellence": {
            "title": "Excellence",
            "description": "We strive for the highest standards in everything we do, delivering exceptional results that exceed expectations."
          },
          "integrity": {
            "title": "Integrity",
            "description": "We conduct business with honesty, transparency, and ethical principles at the core of our operations."
          },
          "innovation": {
            "title": "Innovation",
            "description": "We embrace creative thinking and innovative approaches to solve complex business challenges."
          },
          "partnership": {
            "title": "Partnership",
            "description": "We build lasting relationships with our clients, working together as trusted partners in their success journey."
          }
        },
        "statistics": {
          "years_experience": "Years of Experience",
          "satisfied_clients": "Satisfied Clients",
          "projects_completed": "Projects Completed",
          "success_rate": "Success Rate"
        },
        "why_choose_us": {
          "title": "Why Choose RQF?",
          "expert_team": "Expert Team of Certified Consultants",
          "proven_track": "Proven Track Record of Success",
          "tailored_solutions": "Tailored Solutions for Your Business",
          "comprehensive_support": "Comprehensive Support Throughout Your Journey"
        }
      },

      "our_services": {
        "title": "Our Professional Services",
        "subtitle": "Comprehensive Consulting Solutions for Your Business Growth",
        "description": "We offer a full range of consulting services designed to help your organization achieve its strategic objectives and drive sustainable growth.",
        "request_consultation": "Request Consultation",
        "learn_more": "Learn More",
        "contact_expert": "Contact Our Expert",
        "service_features": "Service Features",
        "benefits": "Benefits",
        "process": "Our Process",
        "case_studies": "Case Studies",
        "get_started": "Get Started Today"
      },

      "our_team": {
        "title": "Meet Our Expert Team",
        "subtitle": "Professional Consultants with Proven Excellence",
        "description": "Our team consists of highly qualified consultants with extensive experience across various industries and specializations.",
        "search_placeholder": "Search consultants by name or expertise...",
        "filter_by_field": "Filter by Field",
        "all_fields": "All Fields",
        "contact_consultant": "Contact Consultant",
        "book_consultation": "Book Consultation",
        "view_profile": "View Full Profile",
        "years_experience": "Years Experience",
        "specializations": "Specializations",
        "achievements": "Key Achievements",
        "certifications": "Certifications",
        "education": "Education",
        "languages": "Languages",
        "email": "Email",
        "phone": "Phone",
        "linkedin": "LinkedIn Profile",
        "no_consultants": "No consultants found matching your criteria",
        "loading_consultants": "Loading consultants...",
        "error_loading": "Error loading consultants. Please try again.",
        "clear_filters": "Clear Filters"
      },

      "contact_us": {
        "title": "Contact Us",
        "subtitle": "Ready to Transform Your Organization?",
        "form_title": "Send us a Message",
        "get_in_touch": "Get in Touch",
        "contact_info": "Contact Information",
        "contact_description": "Contact us through any of the following channels, and we will respond as soon as possible.",
        "form": {
          "name": "Full Name",
          "name_placeholder": "Enter your name",
          "email": "Email Address",
          "email_placeholder": "your.email@example.com",
          "phone": "Phone Number",
          "phone_placeholder": "+966 50 123 4567",
          "company": "Company/Organization",
          "company_placeholder": "Your company name",
          "subject": "Subject",
          "subject_placeholder": "Message subject",
          "message": "Message",
          "message_placeholder": "Write your message here...",
          "service_type": "Service Type",
          "service_type_placeholder": "Select service type",
          "consultation_request": "Consultation Request",
          "general_inquiry": "General Inquiry",
          "medical_device_licensing": "Medical Device Licensing",
          "hr_strategy": "HR Strategy",
          "business_process": "Business Process Reengineering",
          "send": "Send Message",
          "sending": "Sending...",
          "success": "Message sent successfully! We will contact you soon.",
          "error": "Error sending message. Please try again."
        },
        "info": {
          "email": "info@ragafconsulting.com",
          "phone": "+966 11 123 4567",
          "address": "Riyadh, Kingdom of Saudi Arabia",
          "working_hours": "Sunday to Thursday: 9:00 AM - 6:00 PM"
        }
      },

      "medical_licensing": {
        "title": "Medical Device Licensing Request",
        "subtitle": "SFDA Licensed - Professional Medical Device Registration",
        "description": "We are licensed by SFDA for licensing systems, supporting foreign companies in obtaining licenses for their medical devices within Saudi Arabia efficiently.",
        "form": {
          "company_name": "Company/Organization Name",
          "company_name_placeholder": "Enter company name",
          "legal_representative": "Legal Representative Name",
          "legal_representative_placeholder": "Enter representative name",
          "email": "Email Address",
          "email_placeholder": "company@example.com",
          "phone": "Phone Number",
          "phone_placeholder": "+966 50 123 4567",
          "device_type": "Type of Medical Devices",
          "device_type_placeholder": "Describe the medical devices to be licensed",
          "has_documents": "Do you have technical documents and specifications?",
          "yes": "Yes",
          "no": "No",
          "additional_info": "Additional Information or Inquiries",
          "additional_info_placeholder": "Any additional details or questions",
          "submit": "Submit Request",
          "submitting": "Submitting Request...",
          "success": "Request submitted successfully! Our team will contact you within 24 hours.",
          "error": "Error submitting request. Please try again."
        }
      },

      "consultation_booking": {
        "title": "Book a Consultation",
        "subtitle": "Schedule Your Free Consultation Session",
        "form": {
          "preferred_date": "Preferred Date",
          "preferred_time": "Preferred Time",
          "consultation_type": "Consultation Type",
          "consultation_type_placeholder": "Select consultation type",
          "online": "Online Meeting",
          "in_person": "In-Person Meeting",
          "phone": "Phone Call",
          "consultant": "Preferred Consultant",
          "consultant_placeholder": "Select consultant (optional)",
          "any_consultant": "Any Available Consultant",
          "urgency": "Urgency Level",
          "urgency_placeholder": "Select urgency",
          "low": "Low - Within 2 weeks",
          "medium": "Medium - Within 1 week",
          "high": "High - Within 3 days",
          "urgent": "Urgent - Within 24 hours",
          "book": "Book Consultation",
          "booking": "Booking...",
          "success": "Consultation booked successfully! You will receive confirmation details via email.",
          "error": "Error booking consultation. Please try again."
        }
      },

      "importance_of_consulting": {
        "title": "The Importance of Consulting",
        "content": "In today's business world, sustainable profit and real success come only through deep knowledge and carefully studied strategies. Management consulting and specialized expertise play a crucial role in enabling organizations to achieve their goals efficiently and flexibly, reduce risks, and optimize resource investment. Think of consulting as a key that opens new horizons of high performance and innovation. It provides you with leading ideas, independent analysis, and professional guidance that ensures making the right decisions at the right time. Investing in consulting is not an additional expense, but a smart investment in your organization's future, driving you towards excellence and outperforming competitors."
      }
    }
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
      "hero": {
        "welcome": "مرحبًا بكم في شركة رقف للاستشارات العليا في الإدارة",
        "tagline": "شركاؤكم في النجاح",
        "description": "نحن شركاؤكم في النجاح، نساعدكم على تحقيق رؤيتكم من خلال خدمات استشارية عالية الجودة وتقنيات مبتكرة.",
        "team_commitment": "فريقنا من الخبراء ملتزم بتقديم حلول مخصصة لتعزيز قدرات مؤسستكم.",
        "cta_button": "احصل على استشارتك المجانية اليوم",
        "explore_services": "استكشف خدماتنا",
        "discover_more": "اكتشف المزيد",
        "professional_service": "خدمة احترافية",
        "guarantee": "بضمان 100%",
        "experience": "خبرة 15+ عام",
        "in_field": "في المجال"
      },
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
          "email": "البريد الإلكتروني",
          "email_placeholder": "consultant@example.com",
          "phone": "رقم الهاتف",
          "phone_placeholder": "+966 XX XXX XXXX",
          "linkedin": "الملف الشخصي على LinkedIn",
          "linkedin_placeholder": "https://linkedin.com/in/username",
          "specialization": "التخصص",
          "specialization_placeholder": "مثل: التخطيط الاستراتيجي، إدارة الموارد البشرية",
          "experience_years": "سنوات الخبرة",
          "experience_years_placeholder": "مثل: 5",
          "description": "الوصف",
          "description_placeholder": "وصف المستشار باللغة الانجليزية",
          "ar_description": "الوصف بالعربية",
          "ar_description_placeholder": "وصف المستشار باللغة العربية",
          "languages": "اللغات",
          "select_language": "اختر لغة",
          "certifications": "الشهادات",
          "select_certification": "اختر شهادة",
          "save_new_consultant": "حفظ مستشار جديد",
          "saving_consultant": "جارٍ حفظ المستشار...",
          "success": "تم تسجيل المستشار بنجاح",
          "error": "حدث خطأ أثناء تسجيل المستشار",
          "image": "صورة",
          "images": "صورة الملف الشخصي",
        },

        "edit_consultant": {
          "title": "تعديل المستشار",
          "form_description": "تحديث تفاصيل المستشار",
          "update_consultant": "تحديث المستشار",
          "updating_consultant": "جارٍ تحديث المستشار...",
          "success": "تم تحديث المستشار بنجاح",
          "error": "حدث خطأ أثناء تحديث المستشار",
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

        "edit_service": {
          "title": "تعديل الخدمة",
          "form_description": "تحديث تفاصيل الخدمة",
          "update_service": "تحديث الخدمة",
          "updating_service": "جارٍ تحديث الخدمة...",
          "success": "تم تحديث الخدمة بنجاح",
          "error": "حدث خطأ أثناء تحديث الخدمة",
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

        "edit_blog": {
          "title": "تعديل الخبر",
          "form_description": "تحديث تفاصيل الخبر",
          "update_blog": "تحديث الخبر",
          "updating_blog": "جارٍ تحديث الخبر...",
          "success": "تم تحديث الخبر بنجاح",
          "error": "حدث خطأ أثناء تحديث الخبر",
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
        "image": "الصورة",
        "name": "الاسم",
        "actions": "الإجراءات",
        "copy_name": "نسخ الاسم",
        "columns": "الأعمدة",
        "no_results": "لا توجد نتائج",
        "of": "من",
        "rows_selected": "صف محدد",
        "previous": "السابق",
        "next": "التالي",
        "no_image": "لا توجد صورة",
        "try_different_search": "جرب تعديل معايير البحث",
        "selected": "محدد",
        "blogs": "المدونات",
        "services": "الخدمات",
        "consultants": "المستشارين"
      },

      "about_us": {
        "title": "عن شركة رقف للاستشارات العليا في الإدارة",
        "subtitle": "التميز في الاستشارات، الشراكة في النجاح",
        "mission": {
          "title": "رسالتنا",
          "description": "تقديم خدمات استشارية استثنائية تمكن المنظمات من تحقيق أهدافها الاستراتيجية من خلال حلول مبتكرة وإرشادات خبيرة."
        },
        "vision": {
          "title": "رؤيتنا",
          "description": "أن نكون الشركة الاستشارية الرائدة في الشرق الأوسط، معترف بها لالتزامنا بالتميز والنزاهة والأثر التحويلي على نجاح عملائنا."
        },
        "values": {
          "title": "قيمنا",
          "excellence": {
            "title": "التميز",
            "description": "نسعى لأعلى المعايير في كل ما نقوم به، ونقدم نتائج استثنائية تتجاوز التوقعات."
          },
          "integrity": {
            "title": "النزاهة",
            "description": "نمارس الأعمال بصدق وشفافية ومبادئ أخلاقية في صميم عملياتنا."
          },
          "innovation": {
            "title": "الابتكار",
            "description": "نتبنى التفكير الإبداعي والأساليب المبتكرة لحل التحديات التجارية المعقدة."
          },
          "partnership": {
            "title": "الشراكة",
            "description": "نبني علاقات دائمة مع عملائنا، نعمل معًا كشركاء موثوقين في رحلة نجاحهم."
          }
        },
        "statistics": {
          "years_experience": "سنوات من الخبرة",
          "satisfied_clients": "عميل راضٍ",
          "projects_completed": "مشروع مكتمل",
          "success_rate": "معدل النجاح"
        },
        "why_choose_us": {
          "title": "لماذا تختار رقف؟",
          "expert_team": "فريق خبير من المستشارين المعتمدين",
          "proven_track": "سجل حافل مثبت من النجاح",
          "tailored_solutions": "حلول مخصصة لأعمالك",
          "comprehensive_support": "دعم شامل طوال رحلتك"
        }
      },

      "our_services": {
        "title": "خدماتنا المهنية",
        "subtitle": "حلول استشارية شاملة لنمو أعمالك",
        "description": "نقدم مجموعة كاملة من الخدمات الاستشارية المصممة لمساعدة مؤسستك على تحقيق أهدافها الاستراتيجية ودفع النمو المستدام.",
        "request_consultation": "طلب استشارة",
        "learn_more": "اعرف المزيد",
        "contact_expert": "تواصل مع خبيرنا",
        "service_features": "مميزات الخدمة",
        "benefits": "الفوائد",
        "process": "عمليتنا",
        "case_studies": "دراسات الحالة",
        "get_started": "ابدأ اليوم"
      },

      "our_team": {
        "title": "تعرف على فريقنا الخبير",
        "subtitle": "مستشارون محترفون بتميز مثبت",
        "description": "يتكون فريقنا من مستشارين مؤهلين تأهيلاً عالياً مع خبرة واسعة عبر مختلف الصناعات والتخصصات.",
        "search_placeholder": "ابحث عن المستشارين بالاسم أو الخبرة...",
        "filter_by_field": "تصفية حسب المجال",
        "all_fields": "جميع المجالات",
        "contact_consultant": "تواصل مع المستشار",
        "book_consultation": "احجز استشارة",
        "view_profile": "عرض الملف الكامل",
        "years_experience": "سنوات الخبرة",
        "specializations": "التخصصات",
        "achievements": "الإنجازات الرئيسية",
        "certifications": "الشهادات",
        "education": "التعليم",
        "languages": "اللغات",
        "email": "البريد الإلكتروني",
        "phone": "الهاتف",
        "linkedin": "ملف لينكد إن",
        "no_consultants": "لم يتم العثور على مستشارين يطابقون معاييرك",
        "loading_consultants": "جارٍ تحميل المستشارين...",
        "error_loading": "خطأ في تحميل المستشارين. يرجى المحاولة مرة أخرى.",
        "clear_filters": "مسح المرشحات"
      },

      "contact_us": {
        "title": "اتصل بنا",
        "subtitle": "هل أنتم مستعدون لتحويل مؤسستكم؟",
        "form_title": "أرسل لنا رسالة",
        "get_in_touch": "تواصل معنا",
        "contact_info": "معلومات الاتصال",
        "contact_description": "تواصل معنا من خلال أي من القنوات التالية، وسنرد عليك في أقرب وقت ممكن.",
        "form": {
          "name": "الاسم الكامل",
          "name_placeholder": "أدخل اسمك",
          "email": "عنوان البريد الإلكتروني", 
          "email_placeholder": "your.email@example.com",
          "phone": "رقم الهاتف",
          "phone_placeholder": "+966 50 123 4567",
          "company": "اسم الشركة/المنظمة",
          "company_placeholder": "اسم شركتك",
          "subject": "الموضوع",
          "subject_placeholder": "موضوع الرسالة",
          "message": "الرسالة",
          "message_placeholder": "اكتب رسالتك هنا...",
          "service_type": "نوع الخدمة",
          "service_type_placeholder": "اختر نوع الخدمة",
          "consultation_request": "طلب استشارة",
          "general_inquiry": "استفسار عام",
          "medical_device_licensing": "ترخيص الأجهزة الطبية",
          "hr_strategy": "استراتيجية الموارد البشرية",
          "business_process": "إعادة هندسة العمليات التجارية",
          "send": "إرسال الرسالة",
          "sending": "جارٍ الإرسال...",
          "success": "تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.",
          "error": "خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى."
        },
        "info": {
          "email": "info@ragafconsulting.com",
          "phone": "+966 11 123 4567",
          "address": "الرياض، المملكة العربية السعودية",
          "working_hours": "من الأحد إلى الخميس: 9:00 صباحاً - 6:00 مساءً"
        }
      },

      "medical_licensing": {
        "title": "طلب ترخيص الأجهزة الطبية",
        "subtitle": "مرخصون من هيئة الغذاء والدواء - تسجيل أجهزة طبية احترافي",
        "description": "نحن مرخصون لدى هيئة الغذاء والدواء لأنظمة التراخيص، ونقدم الدعم للشركات الأجنبية للحصول على تراخيص لأجهزتها الطبية داخل المملكة العربية السعودية بكفاءة.",
        "form": {
          "company_name": "اسم الشركة/المنظمة",
          "company_name_placeholder": "أدخل اسم الشركة",
          "legal_representative": "اسم الممثل القانوني",
          "legal_representative_placeholder": "أدخل اسم الممثل",
          "email": "عنوان البريد الإلكتروني",
          "email_placeholder": "company@example.com",
          "phone": "رقم الهاتف",
          "phone_placeholder": "+966 50 123 4567",
          "device_type": "نوع الأجهزة الطبية",
          "device_type_placeholder": "صف الأجهزة الطبية المطلوب ترخيصها",
          "has_documents": "هل لديك المستندات والمواصفات الفنية؟",
          "yes": "نعم",
          "no": "لا",
          "additional_info": "معلومات إضافية أو استفسارات",
          "additional_info_placeholder": "أي تفاصيل أو أسئلة إضافية",
          "submit": "تقديم الطلب",
          "submitting": "جارٍ تقديم الطلب...",
          "success": "تم تقديم الطلب بنجاح! سيتواصل معك فريقنا خلال 24 ساعة.",
          "error": "خطأ في تقديم الطلب. يرجى المحاولة مرة أخرى."
        }
      },

      "consultation_booking": {
        "title": "حجز استشارة",
        "subtitle": "احجز جلسة الاستشارة المجانية الخاصة بك",
        "form": {
          "preferred_date": "التاريخ المفضل",
          "preferred_time": "الوقت المفضل",
          "consultation_type": "نوع الاستشارة",
          "consultation_type_placeholder": "اختر نوع الاستشارة",
          "online": "اجتماع عبر الإنترنت",
          "in_person": "اجتماع شخصي",
          "phone": "مكالمة هاتفية",
          "consultant": "المستشار المفضل",
          "consultant_placeholder": "اختر المستشار (اختياري)",
          "any_consultant": "أي مستشار متاح",
          "urgency": "مستوى الأولوية",
          "urgency_placeholder": "اختر الأولوية",
          "low": "منخفض - خلال أسبوعين",
          "medium": "متوسط - خلال أسبوع",
          "high": "عالي - خلال 3 أيام",
          "urgent": "عاجل - خلال 24 ساعة",
          "book": "حجز الاستشارة",
          "booking": "جارٍ الحجز...",
          "success": "تم حجز الاستشارة بنجاح! ستصلك تفاصيل التأكيد عبر البريد الإلكتروني.",
          "error": "خطأ في حجز الاستشارة. يرجى المحاولة مرة أخرى."
        }
      },

      "importance_of_consulting": {
        "title": "أهمية الاستشارات",
        "content": "في عالم الأعمال اليوم، الربح المستدام والنجاح الحقيقي لا يأتيان إلا من خلال معرفة عميقة واستراتيجيات مدروسة بعناية. الاستشارات الإدارية والخبرات المتخصصة تلعب دورًا حاسمًا في تمكين المؤسسات من تحقيق أهدافها بكفاءة ومرونة، وتقليل المخاطر، واستثمار الموارد بشكل أمثل. فكر في الاستشارات كمفتاح يفتح أمامكم آفاقًا جديدة من الأداء العالي والابتكار. فهي تزودكم بالأفكار الرائدة، والتحليل المستقل، والتوجيه المهني الذي يضمن اتخاذ القرارات الصائبة في الوقت المناسب. إن الاستثمار في الاستشارات ليس تكبدًا لنفقات إضافية، بل هو استثمار ذكي في مستقبل مؤسستكم، يدفعكم نحو التميز والتفوق على المنافسين."
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
