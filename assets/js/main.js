/**
 * ANOVA UNITED COMPANY (أنوفا المتحدة للضيافة والإعاشة)
 * Master Client-Side Controller & Bilingual Engine (Arabic / English)
 */

const ANOVA_TRANSLATIONS = (() => {
  const defaults = window.ANOVA_DEFAULT_TRANSLATIONS || { ar: {}, en: {} };
  return {
    ar: { ...(defaults.ar || {}) },
    en: { ...(defaults.en || {}) }
  };
})();

class AnovaApp {
  constructor() {
    this.currentLang = localStorage.getItem('anova_lang') || 'ar';
    this.cmsJobs = null;
    this.cmsPartners = null;
    this.cmsSectors = null;
    this.cmsContact = null;
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
    this.hydrateCmsFromSupabase();
  }

  escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  safeMediaUrl(url, fallback = '') {
    const raw = String(url || '').trim();
    if (!raw) return fallback;
    if (/^(https?:\/\/|\/|public\/|assets\/)/i.test(raw)) return raw;
    return fallback;
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

    if (this.cmsJobs) this.renderCmsJobs();
    if (this.cmsSectors) this.renderCmsSectors();
    if (this.cmsPartners) this.renderCmsPartners();
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

    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.open-quote-modal');
      if (trigger) {
        e.preventDefault();
        const sector = trigger.getAttribute('data-sector') || '';
        openModal(sector);
      }
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

  /**
   * Fetches live CMS settings, job openings, partners, and business sectors from Supabase
   * and applies updates seamlessly across all public pages.
   */
  async hydrateCmsFromSupabase() {
    if (!window.AnovaSupabase || typeof window.AnovaSupabase.fetchPublicTable !== 'function') return;

    const needsJobs = Boolean(document.getElementById('cmsJobsList') || document.querySelector('select[name="position"]'));
    const needsPartners = Boolean(document.querySelector('.partners-marquee-group') || document.getElementById('cmsPartnersGovGrid'));
    const needsSectors = Boolean(
      document.querySelector('#sectors .sectors-matrix-wrapper') ||
      document.querySelector('.sector-experience-wrapper') ||
      document.querySelector('select[name="sector"]')
    );

    const tasks = [
      window.AnovaSupabase.fetchPublicTable('site_settings', 'select=setting_key,setting_value'),
      needsSectors ? window.AnovaSupabase.fetchPublicTable('business_sectors', 'is_active=eq.true&order=sort_order.asc,id.asc') : Promise.resolve(null),
      needsPartners ? window.AnovaSupabase.fetchPublicTable('partners', 'is_active=eq.true&order=sort_order.asc,id.asc') : Promise.resolve(null),
      needsJobs ? window.AnovaSupabase.fetchPublicTable('job_openings', 'is_active=eq.true&order=sort_order.asc,id.asc') : Promise.resolve(null)
    ];

    const [settingsRows, sectorsRows, partnersRows, jobsRows] = await Promise.all(tasks);

    if (Array.isArray(settingsRows)) {
      this.applyCmsSettings(settingsRows);
    }
    if (Array.isArray(sectorsRows)) {
      this.cmsSectors = sectorsRows;
      this.renderCmsSectors();
    }
    if (Array.isArray(partnersRows)) {
      this.cmsPartners = partnersRows;
      this.renderCmsPartners();
    }
    if (Array.isArray(jobsRows)) {
      this.cmsJobs = jobsRows;
      this.renderCmsJobs();
    }
  }

  applyCmsSettings(rows) {
    const map = {};
    rows.forEach(r => {
      if (r && r.setting_key) map[r.setting_key] = r.setting_value || {};
    });

    if (map.i18n_overrides_ar && typeof map.i18n_overrides_ar === 'object') {
      Object.assign(ANOVA_TRANSLATIONS.ar, map.i18n_overrides_ar);
    }
    if (map.i18n_overrides_en && typeof map.i18n_overrides_en === 'object') {
      Object.assign(ANOVA_TRANSLATIONS.en, map.i18n_overrides_en);
    }

    this.applyLanguage(this.currentLang);

    if (map.contact_info) {
      this.cmsContact = map.contact_info;
      this.applyCmsContactInfo(map.contact_info);
    }
    if (map.media_assets) {
      this.applyCmsMediaAssets(map.media_assets);
    }
  }

  applyCmsContactInfo(contact) {
    const phoneDisplay = String(contact.phone_display || '').trim();
    const phoneSecondary = String(contact.phone_secondary || '').trim();
    const phoneTel = String(contact.phone_tel || phoneDisplay.replace(/[^\d+]/g, '')).trim();
    const waDigits = String(contact.whatsapp_number || '').replace(/\D/g, '');
    const email = String(contact.email || '').trim();

    if (phoneTel) {
      document.querySelectorAll('a[href^="tel:"]').forEach(a => {
        a.setAttribute('href', `tel:${phoneTel}`);
        if (phoneDisplay) {
          const span = a.querySelector('span');
          if (span) span.textContent = phoneDisplay;
          else a.textContent = phoneDisplay;
        }
      });
    }

    if (phoneDisplay) {
      document.querySelectorAll('[data-cms-contact="phone_display"]').forEach(el => {
        el.textContent = phoneDisplay;
      });
    }
    if (phoneSecondary !== undefined) {
      document.querySelectorAll('[data-cms-contact="phone_secondary"]').forEach(el => {
        el.textContent = phoneSecondary;
      });
    }
    if (email) {
      document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
        a.setAttribute('href', `mailto:${email}`);
        a.textContent = email;
      });
      document.querySelectorAll('[data-cms-contact="email"]').forEach(el => {
        el.textContent = email;
      });
    }
    if (waDigits) {
      document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
        a.setAttribute('href', `https://wa.me/${waDigits}`);
      });
    }
  }

  applyCmsMediaAssets(media) {
    const logoUrl = this.safeMediaUrl(media.logo_url);
    if (logoUrl) {
      document.querySelectorAll('.brand-logo-img, .footer-logo-badge img').forEach(img => {
        if (img.getAttribute('src') !== logoUrl) img.setAttribute('src', logoUrl);
      });
    }

    const aboutImgUrl = this.safeMediaUrl(media.about_image_url);
    if (aboutImgUrl) {
      document.querySelectorAll('.about-corp-img, .about-hospitality-frame img').forEach(img => {
        if (img.getAttribute('src') !== aboutImgUrl) img.setAttribute('src', aboutImgUrl);
      });
    }

    const aboutHeroUrl = this.safeMediaUrl(media.about_page_hero_url);
    if (aboutHeroUrl) {
      document.querySelectorAll('.about-hero-arch-img').forEach(img => {
        if (img.getAttribute('src') !== aboutHeroUrl) img.setAttribute('src', aboutHeroUrl);
      });
    }

    const posterUrl = this.safeMediaUrl(media.hero_poster_url);
    if (posterUrl) {
      document.querySelectorAll('.hero-bg-fallback').forEach(img => {
        if (img.getAttribute('src') !== posterUrl) img.setAttribute('src', posterUrl);
      });
      document.querySelectorAll('.hero-bg-video').forEach(vid => {
        if (vid.getAttribute('poster') !== posterUrl) vid.setAttribute('poster', posterUrl);
      });
    }

    const videoUrl = this.safeMediaUrl(media.hero_video_url);
    if (videoUrl) {
      const video = document.querySelector('.hero-bg-video');
      const source = video ? video.querySelector('source') : null;
      if (video && source && source.getAttribute('src') !== videoUrl) {
        source.setAttribute('src', videoUrl);
        video.load();
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          const playPromise = video.play();
          if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(() => {});
        }
      }
    }
  }

  renderCmsJobs() {
    if (!Array.isArray(this.cmsJobs)) return;
    const isAr = this.currentLang === 'ar';
    const listEl = document.getElementById('cmsJobsList');
    const applyLabel = ANOVA_TRANSLATIONS[this.currentLang]?.careers_apply_btn || (isAr ? 'التقديم على هذه الوظيفة' : 'Apply for this Position');

    if (listEl) {
      if (!this.cmsJobs.length) {
        listEl.innerHTML = `<div style="border: 1px solid var(--brand-grey-light); border-radius: 14px; padding: 2rem; text-align: center; color: var(--brand-grey);">${this.escapeHtml(isAr ? 'لا توجد شواغر متاحة حالياً، يمكنكم إرسال سيرتكم الذاتية عبر النموذج الجانبي.' : 'No open positions right now. Submit your profile in the general application form.')}</div>`;
      } else {
        listEl.innerHTML = this.cmsJobs.map((job) => {
          const title = isAr ? job.title_ar : (job.title_en || job.title_ar);
          const empType = isAr ? job.employment_type_ar : (job.employment_type_en || job.employment_type_ar);
          const dept = isAr ? job.department_ar : (job.department_en || job.department_ar);
          const desc = isAr ? job.description_ar : (job.description_en || job.description_ar);
          return `
            <div style="border: 1px solid var(--brand-grey-light); border-radius: 14px; padding: 2rem; background-color: var(--pure-white); box-shadow: var(--shadow-sm); transition: all 0.3s ease;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
                <h3 style="font-size: 1.35rem;">${this.escapeHtml(title)}</h3>
                <span style="display: inline-block; padding: 0.25rem 0.75rem; background-color: rgba(26,58,93,0.08); color: var(--primary-navy); border-radius: 9999px; font-size: 0.8rem; font-weight: 600;">${this.escapeHtml(empType)}</span>
              </div>
              <div style="font-size: 0.85rem; color: var(--warm-gold); font-weight: 700; margin-bottom: 1rem;">${this.escapeHtml(dept)}</div>
              <p style="font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">${this.escapeHtml(desc)}</p>
              <a href="#apply-box" class="btn btn-outline cms-job-apply-btn" data-job-slug="${this.escapeHtml(job.slug)}" style="font-size: 0.85rem; padding: 0.5rem 1.25rem;">${this.escapeHtml(applyLabel)}</a>
            </div>
          `;
        }).join('');
      }

      if (!document._cmsJobApplyBound) {
        document._cmsJobApplyBound = true;
        document.addEventListener('click', (e) => {
          const btn = e.target.closest('.cms-job-apply-btn');
          if (!btn) return;
          const slug = btn.getAttribute('data-job-slug');
          const sel = document.querySelector('form[data-form-type="job_application"] select[name="position"]');
          if (sel && slug) {
            sel.value = slug;
          }
        });
      }
    }

    const posSelect = document.querySelector('form[data-form-type="job_application"] select[name="position"]');
    if (posSelect) {
      const currentVal = posSelect.value;
      const ph = isAr ? 'اختر المسمى الوظيفي...' : 'Select Position...';
      const otherLbl = isAr ? 'مسمى وظيفي آخر في قطاع الضيافة' : 'Other Hospitality Position';
      posSelect.innerHTML = `<option value="" disabled ${!currentVal ? 'selected' : ''}>${this.escapeHtml(ph)}</option>`
        + this.cmsJobs.map((job) => {
          const title = isAr ? job.title_ar : (job.title_en || job.title_ar);
          return `<option value="${this.escapeHtml(job.slug)}">${this.escapeHtml(title)}</option>`;
        }).join('')
        + `<option value="Other">${this.escapeHtml(otherLbl)}</option>`;
      if (currentVal && [...posSelect.options].some(o => o.value === currentVal)) {
        posSelect.value = currentVal;
      }
    }
  }

  renderCmsPartners() {
    if (!Array.isArray(this.cmsPartners)) return;
    const isAr = this.currentLang === 'ar';

    const marqueeTrack = document.querySelector('.partners-marquee-track');
    const marqueeGroup = marqueeTrack ? marqueeTrack.querySelector('.partners-marquee-group') : null;
    if (marqueeTrack && marqueeGroup && this.cmsPartners.length) {
      const oldClone = marqueeTrack.querySelector('.partners-marquee-clone');
      if (oldClone) oldClone.remove();

      marqueeGroup.innerHTML = this.cmsPartners.map((p) => {
        const logo = this.safeMediaUrl(p.logo_url, 'public/brand/anova-logo.png');
        const primaryName = isAr ? p.name_ar : (p.name_en || p.name_ar);
        const secondaryName = isAr ? (p.name_en || p.name_ar) : p.name_ar;
        return `
          <div class="partner-card-corp partner-marquee-card">
            <div class="partner-logo-box">
              <img src="${this.escapeHtml(logo)}" alt="${this.escapeHtml(primaryName)}" class="partner-logo-img" decoding="async">
            </div>
            <div class="partner-name-ar">${this.escapeHtml(primaryName)}</div>
            <div class="partner-name-en">${this.escapeHtml(secondaryName)}</div>
          </div>
        `;
      }).join('');

      this.setupPartnersMarquee();
    }

    const govGrid = document.getElementById('cmsPartnersGovGrid');
    const eduGrid = document.getElementById('cmsPartnersEduGrid');
    const corpSec = document.getElementById('cmsPartnersCorpSection');
    const corpGrid = document.getElementById('cmsPartnersCorpGrid');

    const renderPedestalCards = (items) => items.map((p) => {
      const logo = this.safeMediaUrl(p.logo_url, 'public/brand/anova-logo.png');
      const primaryName = isAr ? p.name_ar : (p.name_en || p.name_ar);
      const secondaryName = isAr ? (p.name_en || p.name_ar) : p.name_ar;
      return `
        <div class="partner-pedestal-card">
          <div class="partner-pedestal-logo-wrap">
            <img src="${this.escapeHtml(logo)}" alt="${this.escapeHtml(primaryName)}">
          </div>
          <div class="partner-pedestal-name-ar">${this.escapeHtml(primaryName)}</div>
          <div class="partner-pedestal-name-en">${this.escapeHtml(secondaryName)}</div>
        </div>
      `;
    }).join('');

    if (govGrid) {
      govGrid.innerHTML = renderPedestalCards(this.cmsPartners.filter(p => p.category === 'government'));
    }
    if (eduGrid) {
      eduGrid.innerHTML = renderPedestalCards(this.cmsPartners.filter(p => p.category === 'education'));
    }
    if (corpSec && corpGrid) {
      const corpList = this.cmsPartners.filter(p => p.category === 'corporate');
      corpSec.style.display = corpList.length ? 'block' : 'none';
      corpGrid.innerHTML = renderPedestalCards(corpList);
    }
  }

  renderCmsSectors() {
    if (!Array.isArray(this.cmsSectors)) return;
    const isAr = this.currentLang === 'ar';
    const ctaText = ANOVA_TRANSLATIONS[this.currentLang]?.cta_quote || (isAr ? 'اطلب عرض سعر' : 'Request a Quotation');

    // 1. Update all sector dropdown selects in quote forms
    document.querySelectorAll('select[name="sector"]').forEach((select) => {
      const prev = select.value;
      const placeholder = ANOVA_TRANSLATIONS[this.currentLang]?.f_sector_placeholder || (isAr ? 'اختر قطاع الخدمة...' : 'Select Business Sector...');
      select.innerHTML = `<option value="" disabled ${!prev ? 'selected' : ''}>${this.escapeHtml(placeholder)}</option>`
        + this.cmsSectors.map((sec) => {
          const title = isAr ? sec.title_ar : (sec.title_en || sec.title_ar);
          return `<option value="${this.escapeHtml(sec.sector_key)}">${this.escapeHtml(title)}</option>`;
        }).join('');
      if (prev && [...select.options].some(o => o.value === prev)) select.value = prev;
    });

    const activeByAnchor = new Map(this.cmsSectors.map((s) => [s.anchor_id, s]));

    // 2. Sync index.html sectors matrix
    const homeMatrix = document.querySelector('#sectors .sectors-matrix-wrapper');
    if (homeMatrix) {
      const defaultAnchors = ['sec-events', 'sec-catering', 'sec-coffee', 'sec-supply'];
      defaultAnchors.forEach((aid) => {
        const el = document.getElementById(aid);
        if (el) el.style.display = activeByAnchor.has(aid) ? '' : 'none';
      });

      homeMatrix.querySelectorAll('.cms-dynamic-sector-home').forEach(el => el.remove());

      this.cmsSectors.forEach((sec, idx) => {
        const numLabel = String(idx + 1).padStart(2, '0');
        const title = isAr ? sec.title_ar : (sec.title_en || sec.title_ar);
        const subEn = isAr ? (sec.subtitle_en || sec.title_en || '') : (sec.title_en || sec.subtitle_en || '');
        const desc = isAr ? sec.description_ar : (sec.description_en || sec.description_ar);
        const feats = Array.isArray(isAr ? sec.features_ar : sec.features_en)
          ? (isAr ? sec.features_ar : sec.features_en)
          : (Array.isArray(sec.features_ar) ? sec.features_ar : []);
        const imgUrl = this.safeMediaUrl(sec.image_url, 'public/sec-events.jpg');

        const existing = document.getElementById(sec.anchor_id);
        if (existing) {
          const wm = existing.querySelector('.sector-number-watermark');
          if (wm) wm.textContent = numLabel;
          const h3 = existing.querySelector('.sector-title-ar');
          if (h3) h3.textContent = title;
          const enDiv = existing.querySelector('.sector-title-en');
          if (enDiv) enDiv.textContent = subEn;
          const pDesc = existing.querySelector('.sector-desc-text');
          if (pDesc) pDesc.textContent = desc;
          const ul = existing.querySelector('.sector-feature-list');
          if (ul && feats.length) {
            ul.innerHTML = feats.map(f => `<li><span class="diamond-bullet"></span><span>${this.escapeHtml(f)}</span></li>`).join('');
          }
          const img = existing.querySelector('img');
          if (img && img.getAttribute('src') !== imgUrl) {
            img.setAttribute('src', imgUrl);
            img.setAttribute('alt', title);
          }
          const btn = existing.querySelector('.open-quote-modal');
          if (btn) btn.setAttribute('data-sector', sec.sector_key);
          homeMatrix.appendChild(existing);
        } else {
          const article = document.createElement('article');
          article.className = 'sector-editorial-split cms-dynamic-sector-home';
          article.id = sec.anchor_id;
          article.innerHTML = `
            <div class="sector-content-body">
              <div>
                <div class="sector-number-watermark">${this.escapeHtml(numLabel)}</div>
                <h3 class="sector-title-ar">${this.escapeHtml(title)}</h3>
                <div class="sector-title-en">${this.escapeHtml(subEn)}</div>
                <p class="sector-desc-text">${this.escapeHtml(desc)}</p>
                <ul class="sector-feature-list">
                  ${feats.map(f => `<li><span class="diamond-bullet"></span><span>${this.escapeHtml(f)}</span></li>`).join('')}
                </ul>
              </div>
              <button class="btn btn-outline open-quote-modal" data-sector="${this.escapeHtml(sec.sector_key)}" style="align-self: flex-start; margin-top: 1.5rem;">
                <span>${this.escapeHtml(ctaText)}</span>
                <svg class="icon-svg" style="width: 1rem; height: 1rem;" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
            <div class="sector-media-container">
              <img src="${this.escapeHtml(imgUrl)}" alt="${this.escapeHtml(title)}">
            </div>
          `;
          homeMatrix.appendChild(article);
        }
      });
    }

    // 3. Sync services.html blocks + quick pill strip
    const servicesWrapper = document.querySelector('.sector-experience-wrapper');
    if (servicesWrapper) {
      ['sec-events', 'sec-catering', 'sec-coffee', 'sec-supply'].forEach((aid) => {
        const el = document.getElementById(aid);
        if (el) el.style.display = activeByAnchor.has(aid) ? '' : 'none';
      });
      servicesWrapper.querySelectorAll('.cms-dynamic-sector-page').forEach(el => el.remove());

      const pillStrip = document.querySelector('.sector-navigator-strip');
      if (pillStrip) {
        pillStrip.innerHTML = this.cmsSectors.map((sec, idx) => {
          const title = isAr ? sec.title_ar : (sec.title_en || sec.title_ar);
          return `<a href="#${this.escapeHtml(sec.anchor_id)}" class="sector-nav-pill"><span class="sector-nav-pill-num">${String(idx + 1).padStart(2, '0')}.</span><span>${this.escapeHtml(title)}</span></a>`;
        }).join('');
      }

      this.cmsSectors.forEach((sec) => {
        const title = isAr ? sec.title_ar : (sec.title_en || sec.title_ar);
        const subEn = isAr ? (sec.subtitle_en || sec.title_en || '') : (sec.title_en || sec.subtitle_en || '');
        const badge = isAr ? (sec.badge_ar || '') : (sec.badge_en || sec.badge_ar || '');
        const desc = isAr ? sec.description_ar : (sec.description_en || sec.description_ar);
        const feats = Array.isArray(isAr ? sec.features_ar : sec.features_en)
          ? (isAr ? sec.features_ar : sec.features_en)
          : (Array.isArray(sec.features_ar) ? sec.features_ar : []);
        const imgUrl = this.safeMediaUrl(sec.image_url, 'public/sec-events.jpg');

        const existing = document.getElementById(sec.anchor_id);
        if (existing) {
          const b = existing.querySelector('.sector-index-badge');
          if (b && badge) b.textContent = badge;
          const h2 = existing.querySelector('.sector-heading-xl');
          if (h2) h2.textContent = title;
          const enEl = existing.querySelector('.sector-heading-en');
          if (enEl) enEl.textContent = subEn;
          const pEl = existing.querySelector('.sector-narrative-p');
          if (pEl) pEl.textContent = desc;
          const ul = existing.querySelector('.sector-feature-list');
          if (ul && feats.length) {
            const isLightBlock = existing.classList.contains('sector-block-luxury');
            const colorStyle = isLightBlock ? 'color: var(--midnight-dark);' : 'color: rgba(255,255,255,0.95) !important;';
            ul.innerHTML = feats.map(f => `<li class="sector-feature-item" style="${colorStyle}"><span class="sector-feature-dot"></span><span>${this.escapeHtml(f)}</span></li>`).join('');
          }
          const img = existing.querySelector('img');
          if (img && img.getAttribute('src') !== imgUrl) {
            img.setAttribute('src', imgUrl);
            img.setAttribute('alt', title);
          }
          const btn = existing.querySelector('.open-quote-modal');
          if (btn) btn.setAttribute('data-sector', sec.sector_key);
          servicesWrapper.appendChild(existing);
        } else {
          const secEl = document.createElement('section');
          secEl.id = sec.anchor_id;
          secEl.className = 'sector-block-luxury cms-dynamic-sector-page';
          secEl.innerHTML = `
            <div class="container">
              <div class="sector-luxury-grid">
                <div class="sector-luxury-visual"><img src="${this.escapeHtml(imgUrl)}" alt="${this.escapeHtml(title)}"></div>
                <div>
                  ${badge ? `<div class="sector-index-badge sector-badge-light">${this.escapeHtml(badge)}</div>` : ''}
                  <h2 class="sector-heading-xl" style="color: var(--primary-navy);">${this.escapeHtml(title)}</h2>
                  <div class="sector-heading-en">${this.escapeHtml(subEn)}</div>
                  <p class="sector-narrative-p" style="color: #475569;">${this.escapeHtml(desc)}</p>
                  <ul class="sector-feature-list">
                    ${feats.map(f => `<li class="sector-feature-item" style="color: var(--midnight-dark);"><span class="sector-feature-dot"></span><span>${this.escapeHtml(f)}</span></li>`).join('')}
                  </ul>
                  <button class="btn btn-primary open-quote-modal" data-sector="${this.escapeHtml(sec.sector_key)}">
                    <span>${this.escapeHtml(ctaText)}</span>
                  </button>
                </div>
              </div>
            </div>
          `;
          servicesWrapper.appendChild(secEl);
        }
      });
    }

    // 4. Sync footer sector quick links cleanly
    document.querySelectorAll('.footer-grid ul.footer-links').forEach((ul) => {
      const firstLink = ul.querySelector('a');
      if (firstLink && (firstLink.getAttribute('href') || '').startsWith('services.html#')) {
        ul.innerHTML = this.cmsSectors.map((sec) => {
          const title = isAr ? sec.title_ar : (sec.title_en || sec.title_ar);
          return `<li><a href="services.html#${this.escapeHtml(sec.anchor_id)}">${this.escapeHtml(title)}</a></li>`;
        }).join('');
      }
    });
  }
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.anovaApp = new AnovaApp();
});
