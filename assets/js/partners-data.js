/**
 * ANOVA United - Official Canonical Success Partners Catalog
 * Unified Single Source of Truth for Homepage Marquee and Standalone Partners Page.
 * Total: 32 Official Partners (8 Original + 24 Expanded - 0 Duplicates)
 */
(function (global) {
  'use strict';

  var ANOVA_PARTNERS = [
    {
      id: 'rcrc',
      name_ar: 'الهيئة الملكية لمدينة الرياض',
      name_en: 'Royal Commission for Riyadh City',
      logo_url: 'public/partners/Logos-27-2048x2048.png',
      alt_text: 'شعار الهيئة الملكية لمدينة الرياض',
      category: 'government',
      sort_order: 1
    },
    {
      id: 'mod',
      name_ar: 'وزارة الدفاع',
      name_en: 'Ministry of Defense',
      logo_url: 'public/partners/partner_mod.svg',
      alt_text: 'شعار وزارة الدفاع',
      category: 'government',
      sort_order: 2
    },
    {
      id: 'moi',
      name_ar: 'وزارة الداخلية',
      name_en: 'Ministry of Interior',
      logo_url: 'public/partners/partner_moi.svg',
      alt_text: 'شعار وزارة الداخلية',
      category: 'government',
      sort_order: 3
    },
    {
      id: 'pss',
      name_ar: 'رئاسة أمن الدولة',
      name_en: 'Presidency of State Security',
      logo_url: 'public/partners/partner_pss.png',
      alt_text: 'شعار رئاسة أمن الدولة',
      category: 'government',
      sort_order: 4
    },
    {
      id: 'sang',
      name_ar: 'وزارة الحرس الوطني',
      name_en: 'Ministry of National Guard',
      logo_url: 'public/partners/partner_sang.svg',
      alt_text: 'شعار وزارة الحرس الوطني',
      category: 'government',
      sort_order: 5
    },
    {
      id: 'mofa',
      name_ar: 'وزارة الخارجية',
      name_en: 'Ministry of Foreign Affairs',
      logo_url: 'public/partners/partner_mofa.svg',
      alt_text: 'شعار وزارة الخارجية',
      category: 'government',
      sort_order: 6
    },
    {
      id: 'mof',
      name_ar: 'وزارة المالية',
      name_en: 'Ministry of Finance',
      logo_url: 'public/partners/partner_mof.svg',
      alt_text: 'شعار وزارة المالية',
      category: 'government',
      sort_order: 7
    },
    {
      id: 'mep',
      name_ar: 'وزارة الاقتصاد والتخطيط',
      name_en: 'Ministry of Economy and Planning',
      logo_url: 'public/partners/partner_mep.svg',
      alt_text: 'شعار وزارة الاقتصاد والتخطيط',
      category: 'government',
      sort_order: 8
    },
    {
      id: 'moenergy',
      name_ar: 'وزارة الطاقة',
      name_en: 'Ministry of Energy',
      logo_url: 'public/partners/partner_moenergy.png',
      alt_text: 'شعار وزارة الطاقة',
      category: 'government',
      sort_order: 9
    },
    {
      id: 'misa',
      name_ar: 'وزارة الاستثمار',
      name_en: 'Ministry of Investment',
      logo_url: 'public/partners/partner_misa.svg',
      alt_text: 'شعار وزارة الاستثمار',
      category: 'government',
      sort_order: 10
    },
    {
      id: 'moh',
      name_ar: 'وزارة الصحة',
      name_en: 'Ministry of Health',
      logo_url: 'public/partners/partner_moh.svg',
      alt_text: 'شعار وزارة الصحة',
      category: 'government',
      sort_order: 11
    },
    {
      id: 'moe',
      name_ar: 'وزارة التعليم',
      name_en: 'Ministry of Education',
      logo_url: 'public/partners/partner_moe.svg',
      alt_text: 'شعار وزارة التعليم',
      category: 'government',
      sort_order: 12
    },
    {
      id: 'momrah',
      name_ar: 'وزارة البلديات والإسكان',
      name_en: 'Ministry of Municipalities and Housing',
      logo_url: 'public/partners/partner_momrah.svg',
      alt_text: 'شعار وزارة البلديات والإسكان',
      category: 'government',
      sort_order: 13
    },
    {
      id: 'motls',
      name_ar: 'وزارة النقل والخدمات اللوجستية',
      name_en: 'Ministry of Transport and Logistic Services',
      logo_url: 'public/partners/partner_motls.svg',
      alt_text: 'شعار وزارة النقل والخدمات اللوجستية',
      category: 'government',
      sort_order: 14
    },
    {
      id: 'mim',
      name_ar: 'وزارة الصناعة والثروة المعدنية',
      name_en: 'Ministry of Industry and Mineral Resources',
      logo_url: 'public/partners/partner_mim.svg',
      alt_text: 'شعار وزارة الصناعة والثروة المعدنية',
      category: 'government',
      sort_order: 15
    },
    {
      id: 'hrsd',
      name_ar: 'وزارة الموارد البشرية والتنمية الاجتماعية',
      name_en: 'Ministry of Human Resources and Social Development',
      logo_url: 'public/partners/partner_hrsd.svg',
      alt_text: 'شعار وزارة الموارد البشرية والتنمية الاجتماعية',
      category: 'government',
      sort_order: 16
    },
    {
      id: 'mc',
      name_ar: 'وزارة التجارة',
      name_en: 'Ministry of Commerce',
      logo_url: 'public/partners/partner_mc.svg',
      alt_text: 'شعار وزارة التجارة',
      category: 'government',
      sort_order: 17
    },
    {
      id: 'moj',
      name_ar: 'وزارة العدل',
      name_en: 'Ministry of Justice',
      logo_url: 'public/partners/partner_moj.svg',
      alt_text: 'شعار وزارة العدل',
      category: 'government',
      sort_order: 18
    },
    {
      id: 'spga',
      name_ar: 'الهيئة العامة لعقارات الدولة',
      name_en: 'State Properties General Authority',
      logo_url: 'public/partners/partner_spga.jpg',
      alt_text: 'شعار الهيئة العامة لعقارات الدولة',
      category: 'government',
      sort_order: 19
    },
    {
      id: 'cma',
      name_ar: 'هيئة السوق المالية',
      name_en: 'Capital Market Authority',
      logo_url: 'public/partners/partner_cma.svg',
      alt_text: 'شعار هيئة السوق المالية',
      category: 'government',
      sort_order: 20
    },
    {
      id: 'mewa',
      name_ar: 'وزارة البيئة والمياه والزراعة',
      name_en: 'Ministry of Environment, Water and Agriculture',
      logo_url: 'public/partners/partner_mewa.svg',
      alt_text: 'شعار وزارة البيئة والمياه والزراعة',
      category: 'government',
      sort_order: 21
    },
    {
      id: 'ncnp',
      name_ar: 'المركز الوطني لتنمية القطاع غير الربحي',
      name_en: 'National Center for Non-Profit Sector',
      logo_url: 'public/partners/partner_ncnp.jpg',
      alt_text: 'شعار المركز الوطني لتنمية القطاع غير الربحي',
      category: 'government',
      sort_order: 22
    },
    {
      id: 'nwc',
      name_ar: 'شركة المياه الوطنية',
      name_en: 'National Water Company',
      logo_url: 'public/partners/Logos-19-2048x2048.png',
      alt_text: 'شعار شركة المياه الوطنية',
      category: 'government',
      sort_order: 23
    },
    {
      id: 'tatweer',
      name_ar: 'شركة تطوير التعليم القابضة',
      name_en: 'Tatweer Education Holding',
      logo_url: 'public/partners/Logos-14-2048x2048.png',
      alt_text: 'شعار شركة تطوير التعليم القابضة',
      category: 'government',
      sort_order: 24
    },
    {
      id: 'saudi_banks',
      name_ar: 'البنوك السعودية',
      name_en: 'Saudi Banks Committee',
      logo_url: 'public/partners/Logos-33-2048x2048.png',
      alt_text: 'شعار البنوك السعودية',
      category: 'government',
      sort_order: 25
    },
    {
      id: 'pnu',
      name_ar: 'جامعة الأميرة نورة بنت عبدالرحمن',
      name_en: 'Princess Nourah Bint Abdulrahman University',
      logo_url: 'public/partners/Logos-31-2048x2048.png',
      alt_text: 'شعار جامعة الأميرة نورة بنت عبدالرحمن',
      category: 'education',
      sort_order: 26
    },
    {
      id: 'psu',
      name_ar: 'جامعة الأمير سلطان',
      name_en: 'Prince Sultan University',
      logo_url: 'public/partners/Logos-35-2048x2048.png',
      alt_text: 'شعار جامعة الأمير سلطان',
      category: 'education',
      sort_order: 27
    },
    {
      id: 'ut',
      name_ar: 'جامعة تبوك',
      name_en: 'University of Tabuk',
      logo_url: 'public/partners/Logos-22-2048x2048.png',
      alt_text: 'شعار جامعة تبوك',
      category: 'education',
      sort_order: 28
    },
    {
      id: 'yu',
      name_ar: 'جامعة اليمامة',
      name_en: 'Al Yamamah University',
      logo_url: 'public/partners/Logos-26-2048x2048.png',
      alt_text: 'شعار جامعة اليمامة',
      category: 'education',
      sort_order: 29
    },
    {
      id: 'mdlbeast',
      name_ar: 'ميدل بيست',
      name_en: 'MDLBEAST',
      logo_url: 'public/partners/partner_mdlbeast.png',
      alt_text: 'شعار ميدل بيست',
      category: 'corporate',
      sort_order: 30
    },
    {
      id: 'riyadh_season_2021',
      name_ar: 'موسم الرياض 2021',
      name_en: 'Riyadh Season 2021',
      logo_url: 'public/partners/partner_riyadh_season_2021.png',
      alt_text: 'شعار موسم الرياض 2021',
      category: 'corporate',
      sort_order: 31
    },
    {
      id: 'riyadh_season_2019',
      name_ar: 'موسم الرياض 2019',
      name_en: 'Riyadh Season 2019',
      logo_url: 'public/partners/partner_riyadh_season_2019.png',
      alt_text: 'شعار موسم الرياض 2019',
      category: 'corporate',
      sort_order: 32
    }
  ];

  /**
   * Helper to render unified marquee track items into a container
   */
  function renderMarqueeTrack(containerEl) {
    if (!containerEl) return;
    
    // Create one unified track markup
    var html = '';
    ANOVA_PARTNERS.forEach(function (p) {
      html += '<div class="marquee-logo-card" data-partner-id="' + p.id + '">' +
                '<img src="' + p.logo_url + '" alt="' + p.alt_text + '" class="marquee-logo-img" loading="lazy" />' +
              '</div>';
    });

    // Render original + clone for seamless 100% loop
    containerEl.innerHTML = '<div class="marquee-track-inner" aria-hidden="false">' + html + '</div>' +
                            '<div class="marquee-track-inner aria-clone" aria-hidden="true">' + html + '</div>';
  }

  /**
   * Helper to render unified grid items into a container
   */
  function renderPartnersGrid(containerEl) {
    if (!containerEl) return;
    var html = '';
    ANOVA_PARTNERS.forEach(function (p) {
      html += '<article class="partner-grid-card" data-category="' + p.category + '" data-partner-id="' + p.id + '">' +
                '<div class="partner-card-media">' +
                  '<img src="' + p.logo_url + '" alt="' + p.alt_text + '" class="partner-card-img" loading="lazy" />' +
                '</div>' +
                '<div class="partner-card-info">' +
                  '<h3 class="partner-card-name-ar">' + p.name_ar + '</h3>' +
                  (p.name_en ? '<p class="partner-card-name-en">' + p.name_en + '</p>' : '') +
                '</div>' +
              '</article>';
    });
    containerEl.innerHTML = html;
  }

  // Expose to window
  global.ANOVA_PARTNERS = ANOVA_PARTNERS;
  global.renderMarqueeTrack = renderMarqueeTrack;
  global.renderPartnersGrid = renderPartnersGrid;

})(typeof window !== 'undefined' ? window : this);
