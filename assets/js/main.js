/**
 * ANOVA UNITED COMPANY (أنوفا المتحدة للضيافة والإعاشة)
 * Master Client-Side Controller & Bilingual Engine (Arabic / English)
 */

const ANOVA_TRANSLATIONS = {
  ar: {
    // Top Bar
    top_locations: "المملكة العربية السعودية | الرياض • جدة • الخبر",
    top_contact_direct: "الاتصال المباشر:",
    lang_toggle_text: "English",

    // Navigation
    nav_home: "الرئيسية",
    nav_about: "عن أنوفا",
    nav_services: "قطاعات الأعمال",
    nav_partners: "شركاء النجاح",
    nav_careers: "التوظيف",
    nav_contact: "تواصل معنا",
    cta_quote: "اطلب عرض سعر",

    // Cinematic Hero Section
    hero_kicker: "أنوفا المتحدة للفعاليات والمؤتمرات والضيافة",
    hero_headline: "نصنع تجارب تبقى في الذاكرة",
    hero_headline_line1: "نصنع تجارب",
    hero_headline_line2: "تبقى في الذاكرة",
    hero_subtext: "حلول متكاملة لتنظيم المؤتمرات والمعارض، والتموين المؤسسي الراقي، وإدارة مرافق الإعاشة بأعلى معايير الجودة والاحترافية.",
    hero_scroll: "اكتشف المزيد",
    hero_badge: "تأسست عام 2017 في الرياض | تغطية وطنية ممتدة",
    hero_title_1: "إرساء معايير الضيافة والتموين",
    hero_title_2: "للمؤتمرات والفعاليات والمؤسسات الكبرى",
    hero_desc: "شركة أنوفا المتحدة للضيافة والإعاشة: صرح سعودي رائد يكرس ركائز الخدمة، الجودة، والرقابة لتقديم أرقى تجارب الطهي وإدارة المؤتمرات وخدمات استراحات القهوة والتوريد الغذائي بأعلى المعايير الاحترافية.",
    hero_cta_primary: "طلب استشارة وتسعير",
    hero_cta_secondary: "اكتشف خدماتنا",
    stat_founded_num: "2017",
    stat_founded_lbl: "سنة التأسيس بالعاصمة الرياض",
    stat_branches_num: "3+",
    stat_branches_lbl: "فروع ومراكز تشغيل رئيسية",
    stat_quality_num: "100%",
    stat_quality_lbl: "التزام بمعايير الجودة والسلامة",
    hero_img_tag: "جاهزية تشغيلية متكاملة",
    hero_img_caption: "خدمات الضيافة الرسمية لكبرى المؤتمرات ومناسبات القطاعين الحكومي والخاص",
    hero_floating_title: "كفاءة لوجستية معتمدة",
    hero_floating_desc: "سلاسل إمداد مبردة وإدارة متخصصة لفعاليات ومقرات كبرى الجامعات والهيئات الوطنية.",

    // About Section
    about_tag: "عن أنوفا المتحدة",
    about_cities: "الرياض • جدة • الخبر",
    about_showcase_tag: "معايير الضيافة والتموين الرفيع",
    about_showcase_desc: "تجهيزات فاخرة وتنسيق متكامل يعكس هيبة الفعاليات والمؤتمرات الوطنية",
    about_title: "ريادة مبنية على الاحترافية وصناعة التجارب الاستثنائية",
    about_p1: "منذ تأسيس شركة أنوفا المتحدة في الرياض عام 2017، التزمنا بإعادة صياغة مفاهيم الضيافة المؤسسية والتموين الغذائي في المملكة العربية السعودية. نجحنا في بناء ثقة وطنية راسخة بفضل الالتزام الصارم بالجداول الزمنية، وتوظيف أرقى فنون الطهي، ومراعاة أدق بروتوكولات التشريفات الرسمية.",
    about_p2: "نمتلك حضوراً تشغيلياً واسعاً عبر فروعنا في الرياض، جدة، والخبر، مع خطط توسع مستمرة تشمل مكة المكرمة والخرج. نعمل كشريك استراتيجي للجهات الحكومية والجامعات العريقة والشركات الرائدة والفنادق المصنفة، لتقديم خدمات تليق بتطلعات رؤية المملكة الطموحة.",
    about_learn_more: "تعرف على تاريخنا وقيمنا",

    // The Three Pillars
    pillars_tag: "منهجية العمل والتميز",
    pillars_title: "ثلاث ركائز جوهرية توجه كافة عملياتنا التشغيلية",
    pillars_subtitle: "نموذج تشغيلي صارم يضمن تكامل الخدمة وسلامة الأداء من مرحلة التخطيط المسبق وحتى التنفيذ الميداني النهائي.",
    pillar_1_stage: "المرحلة الأولى • كفاءة التشريفات",
    pillar_1_title: "الخدمة (Service)",
    pillar_1_desc: "طواقم ضيافة وتشريفات مدربة على أعلى مستويات اللباقة وأصول البروتوكول، تضمن تلبية رغبات الضيوف وكبار الشخصيات بمنتهى الدقة والاهتمام.",
    pillar_2_stage: "المرحلة الثانية • فنون الطهي",
    pillar_2_title: "الجودة (Quality)",
    pillar_2_desc: "انتقاء دقيق للمكونات الغذائية الطازجة وتطبيق معايير الطهي العالمية المعتمدة، تحت إشراف نخبة من الطهاة لتقديم مذاق رفيع وعرض بصري أنيق.",
    pillar_3_stage: "المرحلة الثالثة • سلامة الغذاء",
    pillar_3_title: "الرقابة والإشراف (Control)",
    pillar_3_desc: "منظومة رقابة صارمة على سلاسل الإمداد والتخزين المبرد والنقل، تضمن الامتثال الكامل لاشتراطات سلامة الغذاء ونظافة بيئة العمل دون تهاون.",

    // Balanced 4 Business Sectors
    services_tag: "قطاعات الأعمال المعتمدة",
    services_title: "أربعة قطاعات متكاملة تحظى بعناية واهتمام متكافئ",
    services_subtitle: "تتميز أنوفا بشمولية خدماتها؛ حيث يحظى كل قطاع بتجهيزات مستقلة وطواقم متخصصة تضمن الكفاءة التامة.",
    
    // Sector 1
    sec1_title: "تنظيم المعارض والمؤتمرات",
    sec1_en: "Conferences & Events Management",
    sec1_desc: "التخطيط المتكامل للفعاليات والندوات والمؤتمرات الرسمية، وتجهيز القاعات، وإدارة طواقم الاستقبال والتشريفات لكبار الشخصيات (VIP).",
    sec1_sub1: "إدارة قاعات المؤتمرات والندوات",
    sec1_sub2: "بروتوكولات الضيافة الرسمية لكبار الشخصيات",
    sec1_sub3: "تجهيز مناطق الاستقبال والخدمة المساندة",

    // Sector 2
    sec2_title: "خدمات الإعاشة والتموين الراقي",
    sec2_en: "Catering & Fine Dining Services",
    sec2_desc: "إعداد وتصميم أرقى قوائم الطعام الشرقية والعالمية للمآدب والمناسبات الرسمية والخاصة، مع تقديم يعكس كرم الضيافة وأناقة الطرح.",
    sec2_sub1: "قوائم طهي معدّة ومخصصة لكل فعالية",
    sec2_sub2: "تجهيز ولائم المناسبات الكبرى والاحتفالات",
    sec2_sub3: "طهاة متخصصون في فنون الطهي المعاصر",

    // Sector 3
    sec3_title: "استراحات القهوة وضيافة الشركات",
    sec3_en: "Coffee Break & Corporate Serving",
    sec3_desc: "محطات قهوة مختصة متكاملة وباريستا محترفون، مع تشكيلة من المخبوزات والمقبلات الطازجة لاجتماعات مجالس الإدارة والملتقيات الدورية.",
    sec3_sub1: "محطات باريستا احترافية متنقلة وثابتة",
    sec3_sub2: "تشكيلات كانابيه ومخبوزات وسناكس فاخرة",
    sec3_sub3: "عقود ضيافة دورية لمقرات الأعمال والهيئات",

    // Sector 4 (Food Supply & Buffets)
    sec5_title: "التوريد الغذائي والبوفيهات المفتوحة",
    sec5_en: "Food Supply & Large-Scale Buffets",
    sec5_desc: "تأمين سلاسل التوريد الغذائي وإعداد البوفيهات الكبرى بأرقى المعايير الجمالية مع الحفاظ على درجات الحرارة والجودة في أصعب الظروف اللوجستية.",
    sec5_sub1: "أسطول نقل مبرد مجهز وفق مواصفات هيئة الغذاء والدواء",
    sec5_sub2: "بوفيهات مفتوحة فاخرة قابلة للتخصيص حسب عدد الضيوف",
    sec5_sub3: "سلاسل إمداد موثوقة وعالية الاستجابة للمناسبات العاجلة",

    // Partners & Clients
    partners_tag: "شركاء النجاح والمسيرة",
    partners_title: "ثقة راسخة من كبرى الهيئات والجامعات الوطنية",
    partners_desc: "نفخر بسجل شراكاتنا الممتد مع نخبة الجهات الحكومية، الصروح الأكاديمية، والكيانات المالية في المملكة:",
    partners_gov_title: "الجهات الحكومية والهيئات الوطنية",
    partners_edu_title: "الصروح الأكاديمية والجامعات العريقة",
    p_rcrc_ar: "الهيئة الملكية لمدينة الرياض",
    p_rcrc_en: "Royal Commission for Riyadh City",
    p_nwc_ar: "شركة المياه الوطنية",
    p_nwc_en: "National Water Company",
    p_tatweer_ar: "شركة تطوير التعليم القابضة",
    p_tatweer_en: "Tatweer Education Holding",
    p_banks_ar: "البنوك السعودية",
    p_banks_en: "Saudi Banks Committee",
    p_pnu_ar: "جامعة الأميرة نورة بنت عبدالرحمن",
    p_pnu_en: "Princess Nourah Bint Abdulrahman University",
    p_psu_ar: "جامعة الأمير سلطان",
    p_psu_en: "Prince Sultan University",
    p_tabuk_ar: "جامعة تبوك",
    p_tabuk_en: "University of Tabuk",
    p_yamamah_ar: "جامعة اليمامة",
    p_yamamah_en: "Al Yamamah University",

    // Careers Section
    careers_tag: "انضم إلى فريق أنوفا",
    careers_title: "فرص وظيفية للمتخصصين في الضيافة وإدارة المشاريع",
    careers_desc: "نبحث باستمرار عن الكفاءات الوطنية والخبرات المتخصصة التي تشاركنا شغف التميز والارتقاء بقطاع الضيافة والإعاشة في المملكة.",
    job1_title: "مدير مشروع (Project Manager)",
    job1_dept: "إدارة المؤتمرات والفعاليات | الرياض",
    job1_desc: "الإشراف الكامل على تخطيط وتنفيذ العقود الميدانية وإدارة فرق العمل والتنسيق المباشر مع العملاء.",
    job3_title: "رئيس طهاة (Head Chef)",
    job3_dept: "قسم الإنتاج الغذائي والتموين | الرياض",
    job3_desc: "ابتكار وتطوير قوائم الطعام وإدارة خطوط الطهي وإعداد البوفيهات الكبرى بأعلى معايير الإتقان.",
    job4_title: "مسؤول نقل وتوزيع مبرد (Distribution Specialist)",
    job4_dept: "الخدمات اللوجستية وسلاسل الإمداد | الرياض",
    job4_desc: "إدارة مسارات الشاحنات المبردة والتأكد من وصول التوريدات الغذائية في الوقت المحدد وبدرجات الحرارة المطلوبة.",
    careers_apply_btn: "التقديم على هذه الوظيفة",

    // Contact & Quotation Form
    contact_tag: "طلب تسعير وشراكة",
    contact_title: "ابدأ التنسيق لحدثك القادم مع فريق خبراء أنوفا",
    contact_desc: "سواء كنت تخطط لمؤتمر رفيع المستوى، أو لوليمة رسمية، أو تحتاج إلى ضيافة دورية وتوريد غذائي لمقر عملك، يسعدنا تواصلك وتقديم عرض سعر مفصل.",
    contact_phone_lbl: "الاتصال الهاتفي والمباشر",
    contact_email_lbl: "المراسلات الرسمية",
    contact_branches_lbl: "الفروع ومراكز التغطية",
    contact_branches_val: "الرياض (المقر الرئيسي) • جدة (المنطقة الغربية) • الخبر (المنطقة الشرقية)",
    form_heading: "طلب عرض سعر واستفسار",
    f_name: "الاسم الكريم / اسم الجهة",
    f_name_ph: "مثال: شركة / هيئة...",
    f_phone: "رقم الجوال للتواصل",
    f_email: "البريد الإلكتروني المؤسسي",
    f_sector: "قطاع الخدمة المطلوب",
    f_sector_placeholder: "اختر قطاع الخدمة...",
    f_guests: "العدد المتوقع للمستفيدين / الضيوف",
    f_date: "التاريخ المتوقع للفعالية / بدء التشغيل",
    f_details: "تفاصيل المتطلبات والموقع",
    f_details_ph: "يرجى توضيح طبيعة الفعالية، المدينة، وأي اشتراطات خاصة بالضيافة أو التموين...",
    f_submit_btn: "إرسال طلب التسعير",
    form_success_msg: "شكراً لتواصلكم مع شركة أنوفا المتحدة. تم استلام طلبكم بنجاح وسيتواصل معكم مسؤول الحسابات خلال وقت وجيز.",
    job_success_msg: "تم استلام طلب التوظيف بنجاح. سيتولى فريق الموارد البشرية في شركة أنوفا المتحدة مراجعة بياناتكم والتواصل معكم عند مطابقة الشواغر.",
    form_error_msg: "تعذر إرسال الطلب حالياً. يرجى التأكد من البيانات والمحاولة مرة أخرى أو التواصل المباشر عبر الواتساب.",

    // Footer
    footer_about: "شركة أنوفا المتحدة للضيافة والإعاشة وتنظيم المعارض والمؤتمرات. تأسست عام 2017 في الرياض لترسيخ معايير الخدمة، الجودة، والرقابة في تلبية تطلعات كبرى الهيئات والمؤسسات الوطنية بالمملكة.",
    footer_cr: "شركة رسمية مرخصة بسجل تجاري معتمد في المملكة العربية السعودية",
    footer_quick_links: "روابط سريعة",
    footer_services: "قطاعات الأعمال",
    footer_branches: "مراكز الخدمة",
    footer_branch_riyadh: "الرياض - المقر الرئيسي",
    footer_branch_jeddah: "جدة - المنطقة الغربية",
    footer_branch_khobar: "الخبر - المنطقة الشرقية",
    footer_rights: "© 2026 شركة أنوفا المتحدة للضيافة والإعاشة. جميع الحقوق محفوظة.",

    // Modal
    modal_title: "طلب عرض سعر مخصص",
    modal_close: "إغلاق"
  },

  en: {
    // Top Bar
    top_locations: "Kingdom of Saudi Arabia | Riyadh • Jeddah • Khobar",
    top_contact_direct: "Direct Phone:",
    lang_toggle_text: "العربية",

    // Navigation
    nav_home: "Home",
    nav_about: "About ANOVA",
    nav_services: "Business Sectors",
    nav_partners: "Partners & Clients",
    nav_careers: "Careers",
    nav_contact: "Contact Us",
    cta_quote: "Request a Quotation",

    // Cinematic Hero Section
    hero_kicker: "ANOVA UNITED FOR CONFERENCES & HOSPITALITY",
    hero_headline: "Crafting Experiences That Remain in Memory",
    hero_headline_line1: "Crafting Experiences",
    hero_headline_line2: "That Remain in Memory",
    hero_subtext: "Integrated solutions for conferences, fine corporate catering, and executive hospitality, delivered with distinction and precision.",
    hero_scroll: "Scroll to Explore",
    hero_badge: "Founded 2017 in Riyadh | Nationwide Operational Reach",
    hero_title_1: "Setting the Standard in Hospitality & Catering",
    hero_title_2: "For Major Conferences, Events & Enterprise Facilities",
    hero_desc: "Anoova United Company for Hospitality & Catering: A leading Saudi enterprise dedicated to the foundational pillars of Service, Quality, and Control—delivering culinary excellence, turnkey conference hospitality, executive coffee breaks, and bulk food supply with utmost distinction.",
    hero_cta_primary: "Request Consultation & Quote",
    hero_cta_secondary: "Explore Our Services",
    stat_founded_num: "2017",
    stat_founded_lbl: "Year Established in Riyadh",
    stat_branches_num: "3+",
    stat_branches_lbl: "Major Regional Hubs Across KSA",
    stat_quality_num: "100%",
    stat_quality_lbl: "Adherence to Health & Safety Norms",
    hero_img_tag: "Operational Preparedness",
    hero_img_caption: "Full-scale protocol hospitality for premier summits and corporate forums",
    hero_floating_title: "Certified Supply Logistics",
    hero_floating_desc: "Dedicated refrigerated transit and certified operations for leading national universities and commissions.",

    // About Section
    about_tag: "About Anoova United",
    about_cities: "Riyadh • Jeddah • Khobar",
    about_showcase_tag: "Premier Hospitality Standards",
    about_showcase_desc: "Refined staging and meticulous service reflecting the stature of national forums",
    about_title: "Institutional Leadership Rooted in Crafting Exceptional Experiences",
    about_p1: "Since our establishment in Riyadh in 2017, Anoova United Company (ANOVA) has been committed to redefining corporate hospitality and fine catering across the Kingdom of Saudi Arabia. We have built enduring institutional trust through strict punctuality, artisanal culinary skill, and uncompromising VIP protocol standards.",
    about_p2: "We maintain extensive operational hubs across Riyadh, Jeddah, and Khobar, with active expansion plans targeting Makkah and Al Kharj. Serving as a trusted partner to governmental commissions, esteemed universities, and prestigious hospitality venues, our solutions directly align with the Kingdom's visionary future.",
    about_learn_more: "Discover Our Heritage & Values",

    // The Three Pillars
    pillars_tag: "Operational Philosophy",
    pillars_title: "Three Core Pillars Guiding Every Nuance of Our Operations",
    pillars_subtitle: "A rigorous operating model ensuring end-to-end service integration and flawless field execution from initial planning to final delivery.",
    pillar_1_stage: "Stage 01 • Protocol Efficiency",
    pillar_1_title: "Service",
    pillar_1_desc: "Highly qualified hospitality specialists and diplomatic protocol teams trained in refined etiquette, ensuring every guest and VIP receives attentive, seamless care.",
    pillar_2_stage: "Stage 02 • Culinary Craft",
    pillar_2_title: "Quality",
    pillar_2_desc: "Meticulous selection of fresh ingredients and adherence to international culinary craft, overseen by master chefs to guarantee exquisite flavors and artful presentation.",
    pillar_3_stage: "Stage 03 • Food Safety & Control",
    pillar_3_title: "Control",
    pillar_3_desc: "Stringent operational oversight spanning warehousing, cold-chain logistics, and on-site hygiene compliance to uphold absolute food safety standards without compromise.",

    // Balanced 4 Business Sectors
    services_tag: "Verified Business Sectors",
    services_title: "Four Balanced Sectors Executed with Equal Distinction",
    services_subtitle: "ANOVA provides comprehensive institutional coverage where each sector operates with dedicated infrastructure and specialist personnel.",
    
    // Sector 1
    sec1_title: "Conferences & Events Management",
    sec1_en: "Events Organization",
    sec1_desc: "Turnkey planning and execution for official summits, symposia, and exhibitions, encompassing venue staging, guest reception, and diplomatic VIP protocol.",
    sec1_sub1: "Conference & Auditorium Staging Management",
    sec1_sub2: "Official VIP & Diplomatic Protocol Services",
    sec1_sub3: "Reception Zones & Ancillary Hospitality Logistics",

    // Sector 2
    sec2_title: "Catering & Fine Dining Services",
    sec2_en: "Catering Services",
    sec2_desc: "Artisanal Oriental and international banqueting for corporate galas and private celebrations, presented with elegance that embodies authentic generosity.",
    sec2_sub1: "Tailored Menus Curated per Engagement",
    sec2_sub2: "Large-Scale Banquet Preparation & Delivery",
    sec2_sub3: "Master Chefs Specializing in Haute Cuisine",

    // Sector 3
    sec3_title: "Coffee Break & Corporate Serving",
    sec3_en: "Executive Coffee Breaks",
    sec3_desc: "Turnkey specialty coffee stations and artisanal baristas, accompanied by freshly baked pastries and savory hors d'oeuvres for boardrooms and symposia.",
    sec3_sub1: "Mobile & Permanent Barista Stations",
    sec3_sub2: "Deluxe Canapés, Patisserie & Savory Snacks",
    sec3_sub3: "Recurring Corporate Hospitality Contracts",

    // Sector 4 (Food Supply & Buffets)
    sec5_title: "Food Supply & Large-Scale Buffets",
    sec5_en: "Bulk Logistics & Major Banquets",
    sec5_desc: "Resilient cold-chain logistics, certified bulk food provisions, and lavish buffet staging engineered to preserve immaculate temperature and presentation.",
    sec5_sub1: "SFDA-Compliant Temperature-Controlled Fleet",
    sec5_sub2: "Scalable Deluxe Buffets for Thousands of Attendees",
    sec5_sub3: "Rapid-Response Supply Chains for High-Priority Events",

    // Partners & Clients
    partners_tag: "Trusted Partnerships",
    partners_title: "Endorsed by Leading National Institutions & Universities",
    partners_desc: "We take immense pride in our established track record serving Saudi Arabia's premier governmental commissions, academic institutions, and financial entities:",
    partners_gov_title: "Government Authorities & National Entities",
    partners_edu_title: "Premier Academic Institutions & Universities",
    p_rcrc_ar: "Royal Commission for Riyadh City",
    p_rcrc_en: "الهيئة الملكية لمدينة الرياض",
    p_nwc_ar: "National Water Company",
    p_nwc_en: "شركة المياه الوطنية",
    p_tatweer_ar: "Tatweer Education Holding",
    p_tatweer_en: "شركة تطوير التعليم القابضة",
    p_banks_ar: "Saudi Banks Committee",
    p_banks_en: "البنوك السعودية",
    p_pnu_ar: "Princess Nourah Bint Abdulrahman University",
    p_pnu_en: "جامعة الأميرة نورة بنت عبدالرحمن",
    p_psu_ar: "Prince Sultan University",
    p_psu_en: "جامعة الأمير سلطان",
    p_tabuk_ar: "University of Tabuk",
    p_tabuk_en: "جامعة تبوك",
    p_yamamah_ar: "Al Yamamah University",
    p_yamamah_en: "جامعة اليمامة",

    // Careers Section
    careers_tag: "Join ANOVA's Team",
    careers_title: "Career Opportunities for Hospitality & Project Leaders",
    careers_desc: "We continually welcome skilled national talent and experienced hospitality professionals who share our relentless pursuit of excellence.",
    job1_title: "Project Manager",
    job1_dept: "Conference & Event Division | Riyadh",
    job1_desc: "Oversee operational delivery, on-site personnel, and client coordination across major symposium and banqueting contracts.",
    job3_title: "Head Chef",
    job3_dept: "Culinary Production & Banqueting | Riyadh",
    job3_desc: "Craft and execute tailored menus, directing kitchen brigades and orchestrating deluxe banqueting presentations.",
    job4_title: "Distribution & Cold-Chain Specialist",
    job4_dept: "Supply Chain & Logistics | Riyadh",
    job4_desc: "Coordinate temperature-controlled delivery fleets to ensure punctuality and strict adherence to cold-chain preservation.",
    careers_apply_btn: "Apply for this Position",

    // Contact & Quotation Form
    contact_tag: "Inquiries & Quotations",
    contact_title: "Coordinate Your Next Engagement with ANOVA's Specialists",
    contact_desc: "Whether orchestrating a state conference, executive gala, recurring coffee breaks, or certified bulk catering, our team is at your disposal.",
    contact_phone_lbl: "Direct Inquiries & Phone",
    contact_email_lbl: "Official Correspondence",
    contact_branches_lbl: "Operational Hubs",
    contact_branches_val: "Riyadh (Headquarters) • Jeddah (Western Hub) • Khobar (Eastern Hub)",
    form_heading: "Request Quotation & Inquiries",
    f_name: "Full Name / Organization",
    f_name_ph: "e.g., Enterprise / Government Authority...",
    f_phone: "Contact Mobile Number",
    f_email: "Corporate Email Address",
    f_sector: "Required Business Sector",
    f_sector_placeholder: "Select Business Sector...",
    f_guests: "Estimated Guests / Beneficiaries",
    f_date: "Projected Event Date / Start",
    f_details: "Scope Details & Venue Location",
    f_details_ph: "Please outline the event format, venue location, and specific hospitality requirements...",
    f_submit_btn: "Submit Quotation Request",
    form_success_msg: "Thank you for contacting Anoova United Company. Your request has been received cleanly, and our account executive will reach out promptly.",
    job_success_msg: "Your career application has been received successfully. Our HR team at Anoova United will review your profile and contact you if shortlisted.",
    form_error_msg: "Unable to submit your request right now. Please verify your details and try again, or reach us directly via WhatsApp.",

    // Footer
    footer_about: "Anoova United Company for Hospitality, Catering, and Event Services. Established in 2017 in Riyadh to uphold the pillars of Service, Quality, and Control for premier Saudi institutions.",
    footer_cr: "Officially Licensed Commercial Enterprise in the Kingdom of Saudi Arabia",
    footer_quick_links: "Quick Navigation",
    footer_services: "Business Sectors",
    footer_branches: "Regional Hubs",
    footer_branch_riyadh: "Riyadh - Headquarters",
    footer_branch_jeddah: "Jeddah - Western Hub",
    footer_branch_khobar: "Khobar - Eastern Hub",
    footer_rights: "© 2026 Anoova United Company. All Rights Reserved.",

    // Modal
    modal_title: "Custom Quotation Request",
    modal_close: "Close"
  }
};

class AnovaApp {
  constructor() {
    this.currentLang = localStorage.getItem('anova_lang') || 'ar';
    this.init();
  }

  init() {
    this.setupPartnersMarquee();
    this.applyLanguage(this.currentLang);
    this.setupLanguageToggle();
    this.setupMobileDrawer();
    this.setupQuotationModal();
    this.setupScrollEffects();
    this.setupHeroVideo();
    this.setupParallaxEffects();
    this.setupFormSubmissions();
  }

  applyLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('anova_lang', lang);

    const isArabic = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

    const strings = ANOVA_TRANSLATIONS[lang];
    if (!strings) return;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (strings[key]) {
        el.textContent = strings[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (strings[key]) {
        el.setAttribute('placeholder', strings[key]);
      }
    });

    // Update language toggle buttons text
    document.querySelectorAll('.lang-toggle-text').forEach(el => {
      el.textContent = strings.lang_toggle_text;
    });

    // Update page title if element exists
    const pageTitleKey = document.body.getAttribute('data-page-title-key');
    if (pageTitleKey && strings[pageTitleKey]) {
      document.title = strings[pageTitleKey] + " | ANOVA United";
    }
  }

  setupLanguageToggle() {
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const nextLang = this.currentLang === 'ar' ? 'en' : 'ar';
        this.applyLanguage(nextLang);
      });
    });
  }

  setupMobileDrawer() {
    const hamburger = document.querySelector('.hamburger-btn');
    const drawer = document.querySelector('.mobile-drawer');
    const overlay = document.querySelector('.drawer-overlay');
    const closeBtn = document.querySelector('.drawer-close-btn');

    if (!drawer || !overlay) return;

    const openDrawer = () => {
      drawer.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    document.querySelectorAll('.hamburger-btn').forEach(btn => {
      btn.addEventListener('click', openDrawer);
    });
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    // Close on navigation link click inside drawer
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  setupQuotationModal() {
    const modal = document.getElementById('quoteModal');
    if (!modal) return;

    const overlay = modal;
    const closeBtn = modal.querySelector('.modal-close-btn');

    const openModal = (sectorName) => {
      if (modal._autoCloseTimer) {
        clearTimeout(modal._autoCloseTimer);
        modal._autoCloseTimer = null;
      }
      const feedbackEl = modal.querySelector('.form-feedback');
      if (feedbackEl) {
        feedbackEl.className = 'form-feedback';
        feedbackEl.textContent = '';
      }
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (sectorName) {
        const select = modal.querySelector('select[name="sector"]');
        if (select) select.value = sectorName;
      }
    };

    const closeModal = () => {
      if (modal._autoCloseTimer) {
        clearTimeout(modal._autoCloseTimer);
        modal._autoCloseTimer = null;
      }
      modal.classList.remove('open');
      document.body.style.overflow = '';
    };

    document.querySelectorAll('.open-quote-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const sector = btn.getAttribute('data-sector') || '';
        openModal(sector);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  setupScrollEffects() {
    const mainNav = document.querySelector('.main-nav');
    const headerWrapper = document.querySelector('.site-header-wrapper');
    if (!mainNav) return;

    let lastScrollY = Math.max(0, window.scrollY || window.pageYOffset || 0);
    let ticking = false;
    const TOP_THRESHOLD = 45;    // Top boundary where top-bar is visible (2.75rem = 44px)
    const SCROLL_THRESHOLD = 60; // Activate smart sticky hide/reveal
    const DELTA_MIN = 8;         // Minimum delta to avoid jitter when stopping scroll

    const updateHeader = () => {
      const currentScrollY = Math.max(0, window.scrollY || window.pageYOffset || 0);
      const scrollDelta = currentScrollY - lastScrollY;

      // Do not hide header if mobile drawer is currently open
      const isDrawerOpen = document.querySelector('.mobile-drawer.open');
      if (isDrawerOpen) {
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      // State 1: At the very top of the page (restores transparent state over hero or natural flow)
      if (currentScrollY <= TOP_THRESHOLD) {
        mainNav.classList.remove('is-sticky', 'nav-hidden', 'nav-visible');
        if (headerWrapper) {
          headerWrapper.classList.remove('is-sticky');
        }
      } 
      // State 2: Scrolled past threshold
      else if (currentScrollY > SCROLL_THRESHOLD) {
        // Scrolling Down: smoothly hide header
        if (scrollDelta > DELTA_MIN) {
          mainNav.classList.add('is-sticky', 'nav-hidden');
          mainNav.classList.remove('nav-visible');
          if (headerWrapper) {
            headerWrapper.classList.add('is-sticky');
          }
        } 
        // Scrolling Up: smoothly reveal header
        else if (scrollDelta < -DELTA_MIN) {
          mainNav.classList.add('is-sticky', 'nav-visible');
          mainNav.classList.remove('nav-hidden');
          if (headerWrapper) {
            headerWrapper.classList.add('is-sticky');
          }
        }
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateHeader();
  }

  /**
   * Manages Hero cinematic background video playback, reduced-motion compliance,
   * and seamless static image fallback when playback is unavailable.
   */
  setupHeroVideo() {
    const wrapper = document.querySelector('.hero-bg-wrapper');
    const video = wrapper ? wrapper.querySelector('.hero-bg-video') : null;
    if (!wrapper || !video) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const source = video.querySelector('source');

    const activateFallback = () => {
      wrapper.classList.add('is-video-fallback');
      video.pause();
    };

    const syncMotionPreference = (prefersReduced) => {
      if (prefersReduced) {
        activateFallback();
        return;
      }

      if (wrapper.classList.contains('is-video-failed')) return;

      wrapper.classList.remove('is-video-fallback');
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch((err) => {
          if (err && err.name === 'NotAllowedError') {
            activateFallback();
          }
        });
      }
    };

    const handleMediaError = () => {
      wrapper.classList.add('is-video-failed');
      activateFallback();
    };

    video.addEventListener('error', handleMediaError);
    if (source) {
      source.addEventListener('error', handleMediaError);
    }

    syncMotionPreference(motionQuery.matches);

    if (typeof motionQuery.addEventListener === 'function') {
      motionQuery.addEventListener('change', (e) => syncMotionPreference(e.matches));
    }
  }

  /**
   * Duplicates the canonical partner logo strip for a mathematically seamless
   * infinite horizontal marquee (-50% loop), preserving accessibility & reduced motion.
   */
  setupPartnersMarquee() {
    const track = document.querySelector('.partners-marquee-track');
    const group = track ? track.querySelector('.partners-marquee-group') : null;
    if (!track || !group) return;

    if (!track.querySelector('.partners-marquee-clone')) {
      const clone = group.cloneNode(true);
      clone.classList.add('partners-marquee-clone');
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    }

    track.classList.add('is-marquee-ready');
  }

  setupParallaxEffects() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const heroBg = document.querySelector('.hero-bg-media');
    if (!heroBg) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (scrollY < window.innerHeight) {
            heroBg.style.transform = `scale(1.05) translateY(${scrollY * 0.22}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /**
   * Returns or creates an inline feedback banner inside the given form.
   */
  getFormFeedbackElement(form) {
    let feedbackEl = form.querySelector('.form-feedback');
    if (!feedbackEl) {
      feedbackEl = document.createElement('div');
      feedbackEl.className = 'form-feedback';
      feedbackEl.setAttribute('role', 'status');
      feedbackEl.setAttribute('aria-live', 'polite');
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn && submitBtn.parentNode === form) {
        submitBtn.insertAdjacentElement('afterend', feedbackEl);
      } else {
        form.appendChild(feedbackEl);
      }
    }
    return feedbackEl;
  }

  /**
   * Builds a normalized Supabase insert payload from a public inquiry or career form.
   */
  buildSubmissionPayload(form) {
    const fd = new FormData(form);
    const getVal = (key) => String(fd.get(key) || '').trim();
    const formType = form.dataset.formType || 'quote_request';

    if (formType === 'job_application') {
      return {
        tableName: 'job_applications',
        successKey: 'job_success_msg',
        payload: {
          full_name: getVal('full_name'),
          phone: getVal('phone'),
          email: getVal('email'),
          position: getVal('position'),
          experience_summary: getVal('experience_summary')
        }
      };
    }

    const rawPath = window.location.pathname.split('/').pop() || 'index.html';
    const sourcePage = rawPath.split('?')[0] || 'index.html';
    const modal = form.closest('.modal-overlay');
    const sourceForm = form.dataset.sourceForm || (modal ? 'quote_modal' : 'contact_section');
    const eventDateVal = getVal('event_date');

    return {
      tableName: 'quote_requests',
      successKey: 'form_success_msg',
      payload: {
        full_name: getVal('full_name'),
        phone: getVal('phone'),
        email: getVal('email'),
        sector: getVal('sector'),
        guests_count: getVal('guests_count'),
        event_date: eventDateVal || null,
        details: getVal('details'),
        source_page: sourcePage,
        source_form: sourceForm
      }
    };
  }

  setupFormSubmissions() {
    document.querySelectorAll('form.ajax-inquiry-form').forEach(form => {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.innerHTML : '';
        const feedbackEl = this.getFormFeedbackElement(form);

        feedbackEl.className = 'form-feedback';
        feedbackEl.textContent = '';

        const { tableName, successKey, payload } = this.buildSubmissionPayload(form);
        const requiredKeys = tableName === 'job_applications'
          ? ['full_name', 'phone', 'email', 'position']
          : ['full_name', 'phone', 'email', 'sector'];

        const missingKey = requiredKeys.find(k => !payload[k]);
        if (missingKey) {
          const invalidField = form.querySelector(`[name="${missingKey}"]`);
          if (invalidField) invalidField.focus();
          feedbackEl.textContent = ANOVA_TRANSLATIONS[this.currentLang].form_error_msg;
          feedbackEl.className = 'form-feedback is-visible form-feedback--error';
          return;
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = this.currentLang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...';
        }

        try {
          if (!window.AnovaSupabase || typeof window.AnovaSupabase.submitPublicRecord !== 'function') {
            throw new Error('Supabase form client is not initialized.');
          }

          await window.AnovaSupabase.submitPublicRecord(tableName, payload);

          form.reset();
          feedbackEl.textContent = ANOVA_TRANSLATIONS[this.currentLang][successKey];
          feedbackEl.className = 'form-feedback is-visible form-feedback--success';
          feedbackEl.scrollIntoView({ block: 'nearest' });

          const modal = form.closest('.modal-overlay');
          if (modal) {
            if (modal._autoCloseTimer) clearTimeout(modal._autoCloseTimer);
            modal._autoCloseTimer = setTimeout(() => {
              modal.classList.remove('open');
              document.body.style.overflow = '';
              modal._autoCloseTimer = null;
            }, 2200);
          }
        } catch (err) {
          console.error('[ANOVA Form Submit]', err);
          feedbackEl.textContent = ANOVA_TRANSLATIONS[this.currentLang].form_error_msg;
          feedbackEl.className = 'form-feedback is-visible form-feedback--error';
          feedbackEl.scrollIntoView({ block: 'nearest' });
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }
        }
      });
    });
  }
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.anovaApp = new AnovaApp();
});
