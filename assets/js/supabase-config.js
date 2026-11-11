/**
 * ANOVA United - Supabase Configuration, Helpers & Canonical Site Content Catalog
 * Uses official publishable key for browser client & Data API operations.
 */
(function (global) {
  const SUPABASE_URL = 'https://sgyktayqhunqpghvslyv.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_eS5NFVycg82eMy_aaCY9Kw_yqf9Gay3';

  /**
   * Submits a public inquiry or application directly to Supabase Data API (POST).
   * Never chains ?select=* because anon users have INSERT-only privileges by RLS.
   */
  async function submitPublicRecord(tableName, payload) {
    const endpoint = `${SUPABASE_URL}/rest/v1/${encodeURIComponent(tableName)}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_PUBLISHABLE_KEY,
          Prefer: 'return=minimal'
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      if (!response.ok) {
        let errMessage = `HTTP ${response.status}`;
        try {
          const errJson = await response.json();
          errMessage = errJson.message || errJson.hint || errMessage;
        } catch (_) {}
        throw new Error(errMessage);
      }

      return { ok: true };
    } finally {
      clearTimeout(timeoutId);
    }
  }

  /**
   * Fetches public published CMS records anonymously using the publishable key.
   */
  async function fetchPublicTable(tableName, queryString = 'select=*') {
    const endpoint = `${SUPABASE_URL}/rest/v1/${encodeURIComponent(tableName)}?${queryString}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        cache: 'no-store',
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY
        },
        signal: controller.signal
      });
      if (!response.ok) return null;
      return await response.json();
    } catch (_) {
      return null;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  /**
   * Creates an authenticated Supabase JS client for the Admin Dashboard.
   */
  function createAdminClient() {
    if (!global.supabase || typeof global.supabase.createClient !== 'function') {
      throw new Error('Supabase JS library is not loaded.');
    }
    return global.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false
      }
    });
  }

  const ANOVA_DEFAULT_TRANSLATIONS = {
    ar: {
      top_locations: "المملكة العربية السعودية | الرياض • جدة • الخبر",
      top_contact_direct: "الاتصال المباشر:",
      lang_toggle_text: "English",

      nav_home: "الرئيسية",
      nav_about: "عن أنوفا",
      nav_services: "قطاعات الأعمال",
      nav_partners: "شركاء النجاح",
      nav_careers: "التوظيف",
      nav_contact: "تواصل معنا",
      cta_quote: "اطلب عرض سعر",

      hero_kicker: "أنوفا المتحدة للفعاليات والمؤتمرات والضيافة",
      hero_headline: "نصنع تجارب تبقى في الذاكرة",
      hero_headline_line1: "نصنع تجارب",
      hero_headline_line2: "تبقى في الذاكرة",
      hero_subtext: "حلول متكاملة لتنظيم المؤتمرات والمعارض، والتموين المؤسسي الراقي، وإدارة مرافق الإعاشة بأعلى معايير الجودة والاحترافية.",
      hero_scroll: "اكتشف المزيد",
      hero_cta_secondary: "اكتشف خدماتنا",

      about_tag: "عن أنوفا المتحدة",
      about_cities: "الرياض • جدة • الخبر",
      about_showcase_tag: "معايير الضيافة والتموين الرفيع",
      about_showcase_desc: "تجهيزات فاخرة وتنسيق متكامل يعكس هيبة الفعاليات والمؤتمرات الوطنية",
      about_title: "ريادة مبنية على الاحترافية وصناعة التجارب الاستثنائية",
      about_p1: "منذ تأسيس شركة أنوفا المتحدة في الرياض عام 2017، التزمنا بإعادة صياغة مفاهيم الضيافة المؤسسية والتموين الغذائي في المملكة العربية السعودية. نجحنا في بناء ثقة وطنية راسخة بفضل الالتزام الصارم بالجداول الزمنية، وتوظيف أرقى فنون الطهي، ومراعاة أدق بروتوكولات التشريفات الرسمية.",
      about_p2: "نمتلك حضوراً تشغيلياً واسعاً عبر فروعنا في الرياض، جدة، والخبر، مع خطط توسع مستمرة تشمل مكة المكرمة والخرج. نعمل كشريك استراتيجي للجهات الحكومية والجامعات العريقة والشركات الرائدة والفنادق المصنفة، لتقديم خدمات تليق بتطلعات رؤية المملكة الطموحة.",
      about_learn_more: "تعرف على تاريخنا وقيمنا",
      stat_founded_num: "2017",
      stat_founded_lbl: "سنة التأسيس بالعاصمة الرياض",
      stat_branches_num: "3+",
      stat_branches_lbl: "فروع ومراكز تشغيل رئيسية",
      stat_quality_num: "100%",
      stat_quality_lbl: "التزام بمعايير الجودة والسلامة",
      about_hero_quote: "\"الضيافة فن ينسجه الشغف وتصونه الدقة والالتزام\"",
      about_hero_sub: "شركة أنوفا المتحدة للضيافة والإعاشة وتنظيم المعارض والمؤتمرات",
      about_manifesto_title: "رؤيتنا ورسالتنا المؤسسية",
      about_vision_title: "الرؤية (Our Vision)",
      about_vision_desc: "أن نكون الصرح الرائد والمرجع الأول في قطاع الضيافة والتموين وإدارة الفعاليات في المملكة العربية السعودية، عبر تقديم تجارب طهي استثنائية وحلول تشغيلية مبتكرة وموثوقة تتناغم مع مستهدفات التنمية الوطنية.",
      about_mission_title: "الرسالة (Our Mission)",
      about_mission_desc: "تقديم خدمات إعاشة وضيافة متفوقة تجمع بين الخبرة التشغيلية العميقة، والمكونات الغذائية عالية الجودة، والعناية الفائقة بأدق التفاصيل، لتحويل كل مؤتمر أو فعالية أو منشأة نشرف عليها إلى قصة نجاح مشرفة.",

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

      services_tag: "قطاعات الأعمال المعتمدة",
      services_title: "أربعة قطاعات متكاملة تحظى بعناية واهتمام متكافئ",
      services_subtitle: "تتميز أنوفا بشمولية خدماتها؛ حيث يحظى كل قطاع بتجهيزات مستقلة وطواقم متخصصة تضمن الكفاءة التامة.",

      sec1_title: "تنظيم المعارض والمؤتمرات",
      sec1_en: "Conferences & Events Management",
      sec1_desc: "التخطيط المتكامل للفعاليات والندوات والمؤتمرات الرسمية، وتجهيز القاعات، وإدارة طواقم الاستقبال والتشريفات لكبار الشخصيات (VIP).",
      sec1_sub1: "إدارة قاعات المؤتمرات والندوات",
      sec1_sub2: "بروتوكولات الضيافة الرسمية لكبار الشخصيات",
      sec1_sub3: "تجهيز مناطق الاستقبال والخدمة المساندة",

      sec2_title: "خدمات الإعاشة والتموين الراقي",
      sec2_en: "Catering & Fine Dining Services",
      sec2_desc: "إعداد وتصميم أرقى قوائم الطعام الشرقية والعالمية للمآدب والمناسبات الرسمية والخاصة، مع تقديم يعكس كرم الضيافة وأناقة الطرح.",
      sec2_sub1: "قوائم طهي معدّة ومخصصة لكل فعالية",
      sec2_sub2: "تجهيز ولائم المناسبات الكبرى والاحتفالات",
      sec2_sub3: "طهاة متخصصون في فنون الطهي المعاصر",

      sec3_title: "استراحات القهوة وضيافة الشركات",
      sec3_en: "Coffee Break & Corporate Serving",
      sec3_desc: "محطات قهوة مختصة متكاملة وباريستا محترفون، مع تشكيلة من المخبوزات والمقبلات الطازجة لاجتماعات مجالس الإدارة والملتقيات الدورية.",
      sec3_sub1: "محطات باريستا احترافية متنقلة وثابتة",
      sec3_sub2: "تشكيلات كانابيه ومخبوزات وسناكس فاخرة",
      sec3_sub3: "عقود ضيافة دورية لمقرات الأعمال والهيئات",

      sec5_title: "التوريد الغذائي والبوفيهات المفتوحة",
      sec5_en: "Food Supply & Large-Scale Buffets",
      sec5_desc: "تأمين سلاسل التوريد الغذائي وإعداد البوفيهات الكبرى بأرقى المعايير الجمالية مع الحفاظ على درجات الحرارة والجودة في أصعب الظروف اللوجستية.",
      sec5_sub1: "أسطول نقل مبرد مجهز وفق مواصفات هيئة الغذاء والدواء",
      sec5_sub2: "بوفيهات مفتوحة فاخرة قابلة للتخصيص حسب عدد الضيوف",
      sec5_sub3: "سلاسل إمداد موثوقة وعالية الاستجابة للمناسبات العاجلة",

      partners_tag: "شركاء النجاح والمسيرة",
      partners_title: "ثقة راسخة من كبرى الهيئات والجامعات الوطنية",
      partners_desc: "نفخر بسجل شراكاتنا الممتد مع نخبة الجهات الحكومية، الصروح الأكاديمية، والكيانات المالية في المملكة:",
      partners_gov_title: "الهيئات والمؤسسات الحكومية وشبه الحكومية",
      partners_edu_title: "قطاع التعليم العالي والجامعات الكبرى",
      partners_corp_title: "الشركات والكيانات الوطنية والخاصة",
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

      careers_tag: "انضم إلى فريق أنوفا",
      careers_tag_sub: "بيئة عمل تمكّن الكفاءات الوطنية",
      careers_title: "فرص وظيفية للمتخصصين في الضيافة وإدارة المشاريع",
      careers_desc: "نبحث باستمرار عن الكفاءات الوطنية والخبرات المتخصصة التي تشاركنا شغف التميز والارتقاء بقطاع الضيافة والإعاشة في المملكة.",
      careers_form_title: "نموذج التقديم المباشر",
      careers_form_intro: "يسعدنا استلام سيرتك الذاتية وتفاصيل خبرتك المهنية لمراجعتها من قِبل إدارة الموارد البشرية في أنوفا.",
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

      footer_about: "شركة أنوفا المتحدة للضيافة والإعاشة وتنظيم المعارض والمؤتمرات. تأسست عام 2017 في الرياض لترسيخ معايير الخدمة، الجودة، والرقابة في تلبية تطلعات كبرى الهيئات والمؤسسات الوطنية بالمملكة.",
      footer_cr: "شركة رسمية مرخصة بسجل تجاري معتمد في المملكة العربية السعودية",
      footer_quick_links: "روابط سريعة",
      footer_services: "قطاعات الأعمال",
      footer_branches: "مراكز الخدمة",
      footer_branch_riyadh: "الرياض - المقر الرئيسي",
      footer_branch_jeddah: "جدة - المنطقة الغربية",
      footer_branch_khobar: "الخبر - المنطقة الشرقية",
      footer_rights: "© 2026 شركة أنوفا المتحدة للضيافة والإعاشة. جميع الحقوق محفوظة.",

      modal_title: "طلب عرض سعر مخصص",
      modal_close: "إغلاق"
    },

    en: {
      top_locations: "Kingdom of Saudi Arabia | Riyadh • Jeddah • Khobar",
      top_contact_direct: "Direct Phone:",
      lang_toggle_text: "العربية",

      nav_home: "Home",
      nav_about: "About ANOVA",
      nav_services: "Business Sectors",
      nav_partners: "Partners & Clients",
      nav_careers: "Careers",
      nav_contact: "Contact Us",
      cta_quote: "Request a Quotation",

      hero_kicker: "ANOVA UNITED FOR CONFERENCES & HOSPITALITY",
      hero_headline: "Crafting Experiences That Remain in Memory",
      hero_headline_line1: "Crafting Experiences",
      hero_headline_line2: "That Remain in Memory",
      hero_subtext: "Integrated solutions for conferences, fine corporate catering, and executive hospitality, delivered with distinction and precision.",
      hero_scroll: "Scroll to Explore",
      hero_cta_secondary: "Explore Our Services",

      about_tag: "About Anoova United",
      about_cities: "Riyadh • Jeddah • Khobar",
      about_showcase_tag: "Premier Hospitality Standards",
      about_showcase_desc: "Refined staging and meticulous service reflecting the stature of national forums",
      about_title: "Institutional Leadership Rooted in Crafting Exceptional Experiences",
      about_p1: "Since our establishment in Riyadh in 2017, Anoova United Company (ANOVA) has been committed to redefining corporate hospitality and fine catering across the Kingdom of Saudi Arabia. We have built enduring institutional trust through strict punctuality, artisanal culinary skill, and uncompromising VIP protocol standards.",
      about_p2: "We maintain extensive operational hubs across Riyadh, Jeddah, and Khobar, with active expansion plans targeting Makkah and Al Kharj. Serving as a trusted partner to governmental commissions, esteemed universities, and prestigious hospitality venues, our solutions directly align with the Kingdom's visionary future.",
      about_learn_more: "Discover Our Heritage & Values",
      stat_founded_num: "2017",
      stat_founded_lbl: "Year Established in Riyadh",
      stat_branches_num: "3+",
      stat_branches_lbl: "Major Regional Hubs Across KSA",
      stat_quality_num: "100%",
      stat_quality_lbl: "Adherence to Health & Safety Norms",
      about_hero_quote: "\"Hospitality is an art woven with passion and preserved by precision and commitment\"",
      about_hero_sub: "Anoova United Company for Hospitality, Catering & Exhibition Organization",
      about_manifesto_title: "Our Institutional Vision & Mission",
      about_vision_title: "Our Vision",
      about_vision_desc: "To be the premier benchmark and leading authority in hospitality, catering, and event organization across the Kingdom of Saudi Arabia, delivering exceptional culinary experiences aligned with national development ambitions.",
      about_mission_title: "Our Mission",
      about_mission_desc: "To deliver superior catering and hospitality services combining deep operational expertise, finest ingredients, and meticulous attention to detail so every forum and venue becomes a hallmark of success.",

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

      services_tag: "Verified Business Sectors",
      services_title: "Four Balanced Sectors Executed with Equal Distinction",
      services_subtitle: "ANOVA provides comprehensive institutional coverage where each sector operates with dedicated infrastructure and specialist personnel.",

      sec1_title: "Conferences & Events Management",
      sec1_en: "Events Organization",
      sec1_desc: "Turnkey planning and execution for official summits, symposia, and exhibitions, encompassing venue staging, guest reception, and diplomatic VIP protocol.",
      sec1_sub1: "Conference & Auditorium Staging Management",
      sec1_sub2: "Official VIP & Diplomatic Protocol Services",
      sec1_sub3: "Reception Zones & Ancillary Hospitality Logistics",

      sec2_title: "Catering & Fine Dining Services",
      sec2_en: "Catering Services",
      sec2_desc: "Artisanal Oriental and international banqueting for corporate galas and private celebrations, presented with elegance that embodies authentic generosity.",
      sec2_sub1: "Tailored Menus Curated per Engagement",
      sec2_sub2: "Large-Scale Banquet Preparation & Delivery",
      sec2_sub3: "Master Chefs Specializing in Haute Cuisine",

      sec3_title: "Coffee Break & Corporate Serving",
      sec3_en: "Executive Coffee Breaks",
      sec3_desc: "Turnkey specialty coffee stations and artisanal baristas, accompanied by freshly baked pastries and savory hors d'oeuvres for boardrooms and symposia.",
      sec3_sub1: "Mobile & Permanent Barista Stations",
      sec3_sub2: "Deluxe Canapés, Patisserie & Savory Snacks",
      sec3_sub3: "Recurring Corporate Hospitality Contracts",

      sec5_title: "Food Supply & Large-Scale Buffets",
      sec5_en: "Bulk Logistics & Major Banquets",
      sec5_desc: "Resilient cold-chain logistics, certified bulk food provisions, and lavish buffet staging engineered to preserve immaculate temperature and presentation.",
      sec5_sub1: "SFDA-Compliant Temperature-Controlled Fleet",
      sec5_sub2: "Scalable Deluxe Buffets for Thousands of Attendees",
      sec5_sub3: "Rapid-Response Supply Chains for High-Priority Events",

      partners_tag: "Trusted Partnerships",
      partners_title: "Endorsed by Leading National Institutions & Universities",
      partners_desc: "We take immense pride in our established track record serving Saudi Arabia's premier governmental commissions, academic institutions, and financial entities:",
      partners_gov_title: "Government Authorities & National Entities",
      partners_edu_title: "Premier Academic Institutions & Universities",
      partners_corp_title: "Corporate & Private Sector Entities",
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

      careers_tag: "Join ANOVA's Team",
      careers_tag_sub: "Empowering National Talent",
      careers_title: "Career Opportunities for Hospitality & Project Leaders",
      careers_desc: "We continually welcome skilled national talent and experienced hospitality professionals who share our relentless pursuit of excellence.",
      careers_form_title: "Direct Application Form",
      careers_form_intro: "We welcome your CV and professional background for review by ANOVA's Human Resources team.",
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

      footer_about: "Anoova United Company for Hospitality, Catering, and Event Services. Established in 2017 in Riyadh to uphold the pillars of Service, Quality, and Control for premier Saudi institutions.",
      footer_cr: "Officially Licensed Commercial Enterprise in the Kingdom of Saudi Arabia",
      footer_quick_links: "Quick Navigation",
      footer_services: "Business Sectors",
      footer_branches: "Regional Hubs",
      footer_branch_riyadh: "Riyadh - Headquarters",
      footer_branch_jeddah: "Jeddah - Western Hub",
      footer_branch_khobar: "Khobar - Eastern Hub",
      footer_rights: "© 2026 Anoova United Company. All Rights Reserved.",

      modal_title: "Custom Quotation Request",
      modal_close: "Close"
    }
  };

  const ANOVA_CMS_GROUPS = [
    {
      id: 'hero_nav',
      title_ar: 'الواجهة الرئيسية والهيدر والأزرار',
      title_en: 'Hero Section, Header & Navigation',
      fields: [
        { key: 'top_locations', label_ar: 'نص المواقع في الشريط العلوي', label_en: 'Top Bar Locations' },
        { key: 'hero_kicker', label_ar: 'النص التعريفي فوق العنوان (Hero Kicker)', label_en: 'Hero Kicker' },
        { key: 'hero_headline_line1', label_ar: 'العنوان الرئيسي — السطر الأول', label_en: 'Hero Headline Line 1' },
        { key: 'hero_headline_line2', label_ar: 'العنوان الرئيسي — الكلمة الذهبية', label_en: 'Hero Headline Accent (Gold)' },
        { key: 'hero_subtext', label_ar: 'الوصف تحت العنوان الرئيسي', label_en: 'Hero Subtitle', multiline: true },
        { key: 'cta_quote', label_ar: 'نص زر طلب عرض السعر', label_en: 'Primary Quote CTA' },
        { key: 'hero_cta_secondary', label_ar: 'نص زر اكتشف خدماتنا', label_en: 'Hero Secondary CTA' },
        { key: 'nav_home', label_ar: 'رابط الرئيسية', label_en: 'Nav Home' },
        { key: 'nav_about', label_ar: 'رابط عن أنوفا', label_en: 'Nav About' },
        { key: 'nav_services', label_ar: 'رابط قطاعات الأعمال', label_en: 'Nav Sectors' },
        { key: 'nav_partners', label_ar: 'رابط شركاء النجاح', label_en: 'Nav Partners' },
        { key: 'nav_careers', label_ar: 'رابط التوظيف', label_en: 'Nav Careers' },
        { key: 'nav_contact', label_ar: 'رابط تواصل معنا', label_en: 'Nav Contact' }
      ]
    },
    {
      id: 'about_vision',
      title_ar: 'قسم عن أنوفا والرؤية والرسالة والإحصائيات',
      title_en: 'About ANOVA, Vision, Mission & Metrics',
      fields: [
        { key: 'about_tag', label_ar: 'شارة قسم عن أنوفا', label_en: 'About Eyebrow Tag' },
        { key: 'about_cities', label_ar: 'المدن تحت الشارة', label_en: 'About Cities' },
        { key: 'about_title', label_ar: 'العنوان الرئيسي لقسم عن أنوفا', label_en: 'About Main Headline' },
        { key: 'about_p1', label_ar: 'الفقرة التعريفية الأولى', label_en: 'About Paragraph 1', multiline: true },
        { key: 'about_p2', label_ar: 'الفقرة التعريفية الثانية', label_en: 'About Paragraph 2', multiline: true },
        { key: 'stat_founded_num', label_ar: 'رقم سنة التأسيس', label_en: 'Founded Stat Value' },
        { key: 'stat_founded_lbl', label_ar: 'وصف سنة التأسيس', label_en: 'Founded Stat Label' },
        { key: 'stat_branches_num', label_ar: 'عدد الفروع', label_en: 'Branches Stat Value' },
        { key: 'stat_branches_lbl', label_ar: 'وصف الفروع', label_en: 'Branches Stat Label' },
        { key: 'stat_quality_num', label_ar: 'نسبة الالتزام بالجودة', label_en: 'Quality Stat Value' },
        { key: 'stat_quality_lbl', label_ar: 'وصف معايير الجودة', label_en: 'Quality Stat Label' },
        { key: 'about_showcase_tag', label_ar: 'عنوان شريط الصورة', label_en: 'Showcase Caption Tag' },
        { key: 'about_showcase_desc', label_ar: 'وصف شريط الصورة', label_en: 'Showcase Caption Desc' },
        { key: 'about_hero_quote', label_ar: 'اقتباس صفحة عن أنوفا', label_en: 'About Page Hero Quote' },
        { key: 'about_vision_title', label_ar: 'عنوان الرؤية', label_en: 'Vision Heading' },
        { key: 'about_vision_desc', label_ar: 'نص الرؤية', label_en: 'Vision Body', multiline: true },
        { key: 'about_mission_title', label_ar: 'عنوان الرسالة', label_en: 'Mission Heading' },
        { key: 'about_mission_desc', label_ar: 'نص الرسالة', label_en: 'Mission Body', multiline: true }
      ]
    },
    {
      id: 'pillars',
      title_ar: 'منهجية العمل والركائز الثلاث',
      title_en: 'Methodology & Three Pillars',
      fields: [
        { key: 'pillars_tag', label_ar: 'شارة قسم المنهجية', label_en: 'Pillars Tag' },
        { key: 'pillars_title', label_ar: 'عنوان قسم المنهجية', label_en: 'Pillars Heading' },
        { key: 'pillars_subtitle', label_ar: 'وصف قسم المنهجية', label_en: 'Pillars Subtitle', multiline: true },
        { key: 'pillar_1_stage', label_ar: 'مرحلة الركيزة 1', label_en: 'Pillar 1 Stage' },
        { key: 'pillar_1_title', label_ar: 'عنوان الركيزة 1 (الخدمة)', label_en: 'Pillar 1 Title' },
        { key: 'pillar_1_desc', label_ar: 'وصف الركيزة 1', label_en: 'Pillar 1 Description', multiline: true },
        { key: 'pillar_2_stage', label_ar: 'مرحلة الركيزة 2', label_en: 'Pillar 2 Stage' },
        { key: 'pillar_2_title', label_ar: 'عنوان الركيزة 2 (الجودة)', label_en: 'Pillar 2 Title' },
        { key: 'pillar_2_desc', label_ar: 'وصف الركيزة 2', label_en: 'Pillar 2 Description', multiline: true },
        { key: 'pillar_3_stage', label_ar: 'مرحلة الركيزة 3', label_en: 'Pillar 3 Stage' },
        { key: 'pillar_3_title', label_ar: 'عنوان الركيزة 3 (الرقابة)', label_en: 'Pillar 3 Title' },
        { key: 'pillar_3_desc', label_ar: 'وصف الركيزة 3', label_en: 'Pillar 3 Description', multiline: true }
      ]
    },
    {
      id: 'pages_footer',
      title_ar: 'عناوين القطاعات، الشركاء، التوظيف، التواصل والفوتر',
      title_en: 'Sectors Header, Partners, Careers, Contact & Footer',
      fields: [
        { key: 'services_tag', label_ar: 'شارة قطاعات الأعمال', label_en: 'Sectors Tag' },
        { key: 'services_title', label_ar: 'عنوان قطاعات الأعمال', label_en: 'Sectors Heading' },
        { key: 'services_subtitle', label_ar: 'وصف قطاعات الأعمال', label_en: 'Sectors Subtitle', multiline: true },
        { key: 'partners_tag', label_ar: 'شارة شركاء النجاح', label_en: 'Partners Tag' },
        { key: 'partners_title', label_ar: 'عنوان شركاء النجاح', label_en: 'Partners Heading' },
        { key: 'partners_desc', label_ar: 'وصف شركاء النجاح', label_en: 'Partners Description', multiline: true },
        { key: 'careers_tag', label_ar: 'شارة صفحة التوظيف', label_en: 'Careers Tag' },
        { key: 'careers_title', label_ar: 'عنوان صفحة التوظيف', label_en: 'Careers Heading' },
        { key: 'careers_desc', label_ar: 'وصف صفحة التوظيف', label_en: 'Careers Subtitle', multiline: true },
        { key: 'careers_form_title', label_ar: 'عنوان نموذج التوظيف', label_en: 'Careers Form Title' },
        { key: 'careers_form_intro', label_ar: 'وصف نموذج التوظيف', label_en: 'Careers Form Intro', multiline: true },
        { key: 'careers_apply_btn', label_ar: 'نص زر التقديم على الوظيفة', label_en: 'Apply Button Label' },
        { key: 'contact_tag', label_ar: 'شارة قسم التواصل', label_en: 'Contact Tag' },
        { key: 'contact_title', label_ar: 'عنوان قسم التواصل', label_en: 'Contact Title' },
        { key: 'contact_desc', label_ar: 'وصف قسم التواصل', label_en: 'Contact Description', multiline: true },
        { key: 'contact_branches_val', label_ar: 'ملخص الفروع في صفحة التواصل', label_en: 'Branches Summary' },
        { key: 'form_heading', label_ar: 'عنوان نموذج طلب التسعير', label_en: 'Quote Form Heading' },
        { key: 'modal_title', label_ar: 'عنوان نافذة طلب العرض المنبثقة', label_en: 'Modal Heading' },
        { key: 'footer_about', label_ar: 'نبذة الشركة في الفوتر', label_en: 'Footer About', multiline: true },
        { key: 'footer_cr', label_ar: 'سطر الترخيص في الفوتر', label_en: 'Footer License Line' },
        { key: 'footer_branch_riyadh', label_ar: 'فرع الرياض (عنوان)', label_en: 'Riyadh Branch Label' },
        { key: 'footer_branch_jeddah', label_ar: 'فرع جدة (عنوان)', label_en: 'Jeddah Branch Label' },
        { key: 'footer_branch_khobar', label_ar: 'فرع الخبر (عنوان)', label_en: 'Khobar Branch Label' },
        { key: 'footer_rights', label_ar: 'حقوق النشر في الفوتر', label_en: 'Footer Copyright' }
      ]
    }
  ];

  global.ANOVA_SUPABASE_CONFIG = Object.freeze({
    url: SUPABASE_URL,
    publishableKey: SUPABASE_PUBLISHABLE_KEY
  });

  global.ANOVA_DEFAULT_TRANSLATIONS = ANOVA_DEFAULT_TRANSLATIONS;
  global.ANOVA_CMS_GROUPS = ANOVA_CMS_GROUPS;

  global.AnovaSupabase = Object.freeze({
    submitPublicRecord,
    fetchPublicTable,
    createAdminClient
  });
})(window);
