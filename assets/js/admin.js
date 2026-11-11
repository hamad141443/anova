/**
 * ANOVA UNITED COMPANY — EXECUTIVE ADMIN PORTAL CONTROLLER
 * Live Supabase Integration (Auth, Quotes CRM, Job Pipeline, Notes, Activity Logs, CSV)
 */

const ADMIN_DICT = {
  ar: {
    boot_loading: 'جارٍ التحقق من جلسة الإدارة...',
    portal_badge: 'البوابة الإدارية المعتمدة',
    login_title: 'لوحة تحكم أنوفا المتحدة',
    login_subtitle: 'إدارة طلبات عروض الأسعار وطلبات التوظيف عبر Supabase',
    label_email: 'البريد الإلكتروني الإداري',
    label_password: 'كلمة المرور',
    btn_login: 'دخول إلى لوحة التحكم',
    logging_in: 'جارٍ تسجيل الدخول...',
    back_to_site: 'العودة للموقع الرئيسي',
    lang_switch: 'English',
    nav_section_main: 'الإدارة والعمليات',
    tab_overview: 'نظرة عامة والتحليلات',
    tab_quotes: 'طلبات عروض الأسعار',
    tab_jobs: 'طلبات التوظيف',
    tab_activity: 'سجل النشاط',
    tab_settings: 'الإعدادات والأمان',
    role_admin: 'مدير النظام',
    btn_logout: 'تسجيل الخروج',
    btn_refresh: 'تحديث البيانات',
    view_website: 'عرض الموقع',
    last_sync_prefix: 'آخر مزامنة:',
    kpi_total_quotes: 'إجمالي طلبات التسعير',
    kpi_new_quotes: 'طلبات جديدة بانتظار المراجعة',
    kpi_accepted_quotes: 'طلبات معتمدة / منجزة',
    kpi_total_jobs: 'إجمالي طلبات التوظيف',
    kpi_total_quotes_sub: 'من نماذج الموقع والإدخال المباشر',
    kpi_new_quotes_sub: 'تتطلب تواصل فريق المبيعات',
    kpi_accepted_quotes_sub: 'عقود وفعاليات تم اعتمادها',
    kpi_total_jobs_sub: 'متقدمو الكوادر والضيافة',
    chart_sectors_title: 'توزيع الطلبات حسب قطاع الأعمال',
    recent_quotes_title: 'أحدث طلبات عروض الأسعار',
    recent_activity_title: 'آخر إجراءات الإدارة',
    view_all: 'عرض الكل',
    ph_search_quotes: 'بحث بالاسم، الجوال، البريد، أو التفاصيل...',
    ph_search_jobs: 'بحث باسم المتقدم، الجوال، البريد، أو الخبرة...',
    filter_all_statuses: 'جميع الحالات',
    filter_all_sectors: 'جميع القطاعات',
    filter_all_priorities: 'جميع الأولويات',
    filter_all_positions: 'جميع الوظائف',
    btn_reset: 'إعادة ضبط',
    btn_export_csv: 'تصدير CSV',
    btn_add_quote: '+ إضافة طلب يدوي',
    col_id: '#',
    col_client: 'الجهة / العميل',
    col_sector: 'القطاع',
    col_event: 'الضيوف والتاريخ',
    col_priority: 'الأولوية',
    col_status: 'الحالة',
    col_created: 'تاريخ الوصول',
    col_actions: 'الإجراءات',
    col_applicant: 'المتقدم',
    col_position: 'الوظيفة',
    col_experience: 'ملخص الخبرة',
    col_time: 'الوقت',
    col_actor: 'المستخدم',
    col_action: 'الإجراء',
    col_summary: 'التفاصيل',
    empty_quotes_title: 'لا توجد طلبات عروض أسعار مطابقة',
    empty_quotes_sub: 'جرّب تعديل معايير البحث أو انتظار وصول طلبات جديدة من الموقع.',
    empty_jobs_title: 'لا توجد طلبات توظيف مطابقة',
    empty_jobs_sub: 'ستظهر طلبات التوظيف المرسلة من صفحة التوظيف هنا فور وصولها.',
    empty_activity: 'لا توجد سجلات نشاط مسجلة حتى الآن.',
    activity_heading: 'سجل نشاط لوحة التحكم',
    settings_account_title: 'بيانات الحساب والربط',
    settings_role_label: 'الصلاحية',
    settings_db_status: 'حالة ربط Supabase',
    settings_db_connected: 'متصل بنجاح',
    settings_project_url: 'رابط مشروع Supabase',
    settings_pw_title: 'تغيير كلمة مرور المدير',
    settings_new_pw: 'كلمة المرور الجديدة (8 أحرف على الأقل)',
    settings_confirm_pw: 'تأكيد كلمة المرور الجديدة',
    settings_save_pw: 'تحديث كلمة المرور',
    label_assigned: 'المسؤول عن المتابعة',
    ph_assigned: 'اسم الموظف / القسم المسؤول...',
    btn_save_changes: 'حفظ التعديلات',
    btn_delete: 'حذف السجل',
    notes_title: 'سجل الملاحظات الداخلية والمتابعة',
    ph_new_note: 'أضف ملاحظة داخلية حول التواصل أو العرض المالي...',
    btn_add_note: 'إضافة ملاحظة',
    no_notes_yet: 'لا توجد ملاحظات داخلية مضافة لهذا الطلب بعد.',
    manual_quote_title: 'إضافة طلب عرض سعر يدوياً',
    label_phone: 'رقم الجوال',
    label_email_opt: 'البريد الإلكتروني',
    label_guests: 'العدد المتوقع للضيوف',
    label_date: 'تاريخ الفعالية',
    label_source: 'المصدر',
    label_details: 'تفاصيل المتطلبات',
    src_whatsapp: 'واتساب مباشر',
    src_phone: 'اتصال هاتفي',
    src_manual: 'إدخال إداري',
    src_contact: 'نموذج اتصل بنا',
    src_modal: 'نافذة عرض السعر',
    btn_create_quote: 'حفظ وإضافة الطلب',
    confirm_delete_title: 'تأكيد الحذف',
    confirm_delete_quote_msg: 'هل أنت متأكد من حذف طلب عرض السعر هذا نهائياً؟ لا يمكن التراجع عن هذا الإجراء.',
    confirm_delete_job_msg: 'هل أنت متأكد من حذف طلب التوظيف هذا نهائياً؟ لا يمكن التراجع عن هذا الإجراء.',
    btn_cancel: 'إلغاء',
    btn_confirm_delete: 'نعم، احذف السجل',
    btn_manage: 'إدارة',
    btn_whatsapp: 'واتساب',
    btn_call: 'اتصال',
    btn_email: 'بريد',
    sec_events: 'تنظيم المعارض والمؤتمرات',
    sec_catering: 'خدمات الإعاشة والتموين الراقي',
    sec_coffee: 'استراحات القهوة وضيافة الشركات',
    sec_supply: 'التوريد الغذائي والبوفيهات المفتوحة',
    pos_pm: 'مدير مشروع (Project Manager)',
    pos_chef: 'رئيس طهاة (Head Chef)',
    pos_dist: 'مسؤول نقل وتوزيع مبرد',
    pos_other: 'مسمى وظيفي آخر',
    status_new: 'جديد',
    status_reviewing: 'قيد الدراسة',
    status_quoted: 'تم التسعير',
    status_accepted: 'معتمد',
    status_closed: 'مغلق',
    status_shortlisted: 'مرشح مبدئياً',
    status_interview: 'مقابلة',
    status_hired: 'تم التعيين',
    status_rejected: 'مرفوض',
    prio_urgent: 'عاجلة',
    prio_high: 'عالية',
    prio_normal: 'عادية',
    prio_low: 'منخفضة',
    err_auth_invalid: 'بيانات الدخول غير صحيحة. يرجى التحقق من البريد وكلمة المرور.',
    err_not_admin: 'هذا الحساب لا يملك صلاحية مدير النظام للوصول إلى لوحة التحكم.',
    err_pw_mismatch: 'كلمتا المرور غير متطابقتين.',
    err_pw_short: 'يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.',
    msg_pw_updated: 'تم تحديث كلمة المرور بنجاح.',
    msg_record_saved: 'تم حفظ التعديلات بنجاح.',
    msg_note_added: 'تمت إضافة الملاحظة بنجاح.',
    msg_quote_created: 'تم تسجيل الطلب اليدوي بنجاح.',
    msg_record_deleted: 'تم حذف السجل بنجاح.',
    msg_csv_exported: 'تم تصدير ملف CSV بنجاح.',
    msg_refreshed: 'تم تحديث البيانات من Supabase.',
    detail_quote_prefix: 'تفاصيل طلب عرض السعر #',
    detail_job_prefix: 'تفاصيل طلب التوظيف #',
    lbl_source_page: 'صفحة المصدر',
    lbl_not_specified: 'غير محدد'
  },
  en: {
    boot_loading: 'Verifying Admin Session...',
    portal_badge: 'Authorized Management Portal',
    login_title: 'ANOVA United Admin Console',
    login_subtitle: 'Manage Quote Requests & Career Applications via Supabase',
    label_email: 'Admin Email Address',
    label_password: 'Password',
    btn_login: 'Sign In to Dashboard',
    logging_in: 'Signing In...',
    back_to_site: 'Back to Public Website',
    lang_switch: 'العربية',
    nav_section_main: 'Operations & Management',
    tab_overview: 'Overview & Analytics',
    tab_quotes: 'Quote Requests',
    tab_jobs: 'Job Applications',
    tab_activity: 'Activity Log',
    tab_settings: 'Settings & Security',
    role_admin: 'System Admin',
    btn_logout: 'Sign Out',
    btn_refresh: 'Refresh',
    view_website: 'View Live Site',
    last_sync_prefix: 'Last Sync:',
    kpi_total_quotes: 'Total Quote Requests',
    kpi_new_quotes: 'New / Pending Review',
    kpi_accepted_quotes: 'Accepted Quotes',
    kpi_total_jobs: 'Job Applications',
    kpi_total_quotes_sub: 'From website forms & direct log',
    kpi_new_quotes_sub: 'Requires account executive follow-up',
    kpi_accepted_quotes_sub: 'Approved contracts & events',
    kpi_total_jobs_sub: 'Hospitality & logistics candidates',
    chart_sectors_title: 'Requests by Business Sector',
    recent_quotes_title: 'Latest Quote Requests',
    recent_activity_title: 'Recent Management Actions',
    view_all: 'View All',
    ph_search_quotes: 'Search by client, phone, email, or details...',
    ph_search_jobs: 'Search by candidate, phone, email, or experience...',
    filter_all_statuses: 'All Statuses',
    filter_all_sectors: 'All Sectors',
    filter_all_priorities: 'All Priorities',
    filter_all_positions: 'All Positions',
    btn_reset: 'Reset',
    btn_export_csv: 'Export CSV',
    btn_add_quote: '+ Add Manual Quote',
    col_id: '#',
    col_client: 'Organization / Client',
    col_sector: 'Sector',
    col_event: 'Guests & Date',
    col_priority: 'Priority',
    col_status: 'Status',
    col_created: 'Submitted',
    col_actions: 'Actions',
    col_applicant: 'Applicant',
    col_position: 'Position',
    col_experience: 'Experience Summary',
    col_time: 'Time',
    col_actor: 'Actor',
    col_action: 'Action',
    col_summary: 'Summary',
    empty_quotes_title: 'No matching quote requests found',
    empty_quotes_sub: 'Adjust search filters or await incoming website inquiries.',
    empty_jobs_title: 'No matching job applications found',
    empty_jobs_sub: 'Applications submitted on the Careers page will appear here.',
    empty_activity: 'No management activity logged yet.',
    activity_heading: 'Admin Activity Audit Log',
    settings_account_title: 'Account & Connection Details',
    settings_role_label: 'Access Role',
    settings_db_status: 'Supabase Connection',
    settings_db_connected: 'Connected',
    settings_project_url: 'Supabase Project URL',
    settings_pw_title: 'Change Admin Password',
    settings_new_pw: 'New Password (min 8 characters)',
    settings_confirm_pw: 'Confirm New Password',
    settings_save_pw: 'Update Password',
    label_assigned: 'Assigned Account Executive',
    ph_assigned: 'Staff member / team name...',
    btn_save_changes: 'Save Changes',
    btn_delete: 'Delete Record',
    notes_title: 'Internal Notes & Follow-Up Timeline',
    ph_new_note: 'Add internal note about client contact or quotation...',
    btn_add_note: 'Add Note',
    no_notes_yet: 'No internal notes added for this record yet.',
    manual_quote_title: 'Log Manual Quote Request',
    label_phone: 'Mobile Number',
    label_email_opt: 'Email Address',
    label_guests: 'Estimated Guests',
    label_date: 'Event Date',
    label_source: 'Source Channel',
    label_details: 'Scope & Requirements',
    src_whatsapp: 'WhatsApp Inbound',
    src_phone: 'Phone Call',
    src_manual: 'Admin Manual Entry',
    src_contact: 'Contact Section Form',
    src_modal: 'Quote Modal',
    btn_create_quote: 'Save Quote Request',
    confirm_delete_title: 'Confirm Deletion',
    confirm_delete_quote_msg: 'Are you sure you want to permanently delete this quote request? This cannot be undone.',
    confirm_delete_job_msg: 'Are you sure you want to permanently delete this job application? This cannot be undone.',
    btn_cancel: 'Cancel',
    btn_confirm_delete: 'Yes, Delete',
    btn_manage: 'Manage',
    btn_whatsapp: 'WhatsApp',
    btn_call: 'Call',
    btn_email: 'Email',
    sec_events: 'Events & Conferences',
    sec_catering: 'Luxury Catering Services',
    sec_coffee: 'Coffee Break & Hospitality',
    sec_supply: 'Food Supply & Buffets',
    pos_pm: 'Project Manager',
    pos_chef: 'Head Chef',
    pos_dist: 'Distribution Specialist',
    pos_other: 'Other Role',
    status_new: 'New',
    status_reviewing: 'Reviewing',
    status_quoted: 'Quoted',
    status_accepted: 'Accepted',
    status_closed: 'Closed',
    status_shortlisted: 'Shortlisted',
    status_interview: 'Interview',
    status_hired: 'Hired',
    status_rejected: 'Rejected',
    prio_urgent: 'Urgent',
    prio_high: 'High',
    prio_normal: 'Normal',
    prio_low: 'Low',
    err_auth_invalid: 'Invalid email or password. Please verify your credentials.',
    err_not_admin: 'This account does not have System Admin privileges.',
    err_pw_mismatch: 'Passwords do not match.',
    err_pw_short: 'Password must be at least 8 characters long.',
    msg_pw_updated: 'Admin password updated successfully.',
    msg_record_saved: 'Record changes saved successfully.',
    msg_note_added: 'Internal note added.',
    msg_quote_created: 'Manual quote request added successfully.',
    msg_record_deleted: 'Record deleted successfully.',
    msg_csv_exported: 'CSV file exported successfully.',
    msg_refreshed: 'Data synchronized from Supabase.',
    detail_quote_prefix: 'Quote Request Details #',
    detail_job_prefix: 'Job Application Details #',
    lbl_source_page: 'Source Page',
    lbl_not_specified: 'Not specified'
  }
};

const QUOTE_STATUSES = ['new', 'reviewing', 'quoted', 'accepted', 'closed'];
const JOB_STATUSES = ['new', 'shortlisted', 'interview', 'hired', 'rejected'];
const SECTORS = [
  'Events Organization',
  'Catering Services',
  'Coffee Break',
  'Food Supply & Buffets'
];

class AnovaAdminApp {
  constructor() {
    this.lang = localStorage.getItem('anova_lang') || 'ar';
    this.client = window.AnovaSupabase ? window.AnovaSupabase.createAdminClient() : null;
    this.user = null;
    this.activeTab = 'overview';
    this.quotes = [];
    this.jobs = [];
    this.activityLogs = [];
    this.lastSyncAt = null;
    this.activeDetail = null; // { entityType: 'quote_request'|'job_application', id }
    this.pendingDelete = null; // { entityType, id }

    this.init();
  }

  t(key) {
    return (ADMIN_DICT[this.lang] && ADMIN_DICT[this.lang][key]) || ADMIN_DICT.en[key] || key;
  }

  escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  sectorLabel(sector) {
    const map = {
      'Events Organization': 'sec_events',
      'Catering Services': 'sec_catering',
      'Coffee Break': 'sec_coffee',
      'Food Supply & Buffets': 'sec_supply'
    };
    return map[sector] ? this.t(map[sector]) : this.escapeHtml(sector || this.t('lbl_not_specified'));
  }

  positionLabel(pos) {
    const map = {
      'Project Manager': 'pos_pm',
      'Head Chef': 'pos_chef',
      'Distribution Specialist': 'pos_dist',
      'Other': 'pos_other'
    };
    return map[pos] ? this.t(map[pos]) : this.escapeHtml(pos || this.t('lbl_not_specified'));
  }

  sourceLabel(src) {
    const map = {
      whatsapp_inbound: 'src_whatsapp',
      phone_inbound: 'src_phone',
      admin_manual: 'src_manual',
      contact_section: 'src_contact',
      quote_modal: 'src_modal'
    };
    return map[src] ? this.t(map[src]) : this.escapeHtml(src || '--');
  }

  statusPillHtml(status) {
    const safeStatus = String(status || 'new').toLowerCase();
    const label = this.t(`status_${safeStatus}`);
    return `<span class="status-pill status-${this.escapeHtml(safeStatus)}">${this.escapeHtml(label)}</span>`;
  }

  priorityPillHtml(prio) {
    const safePrio = String(prio || 'normal').toLowerCase();
    const label = this.t(`prio_${safePrio}`);
    return `<span class="priority-pill priority-${this.escapeHtml(safePrio)}">${this.escapeHtml(label)}</span>`;
  }

  formatDateTime(iso) {
    if (!iso) return '--';
    try {
      const dt = new Date(iso);
      return new Intl.DateTimeFormat(this.lang === 'ar' ? 'ar-SA-u-nu-latn' : 'en-GB', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      }).format(dt);
    } catch {
      return this.escapeHtml(iso);
    }
  }

  normalizePhoneDigits(rawPhone) {
    let digits = String(rawPhone || '').replace(/\D/g, '');
    if (digits.startsWith('00')) digits = digits.slice(2);
    if (digits.startsWith('05') && digits.length === 10) digits = '966' + digits.slice(1);
    else if (digits.startsWith('5') && digits.length === 9) digits = '966' + digits;
    return digits;
  }

  buildWhatsAppUrl(phone, name) {
    const digits = this.normalizePhoneDigits(phone);
    if (!digits) return null;
    const msg = this.lang === 'ar'
      ? `مرحباً ${name || ''}، نتواصل معكم من شركة أنوفا المتحدة بخصوص طلبكم الكريم.`
      : `Hello ${name || ''}, following up from Anoova United Company regarding your inquiry.`;
    return `https://wa.me/${digits}?text=${encodeURIComponent(msg)}`;
  }

  showToast(message, isError = false) {
    const container = document.getElementById('adminToastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = isError ? 'admin-toast admin-toast--error' : 'admin-toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3400);
  }

  setAlert(el, message, type) {
    if (!el) return;
    if (!message) {
      el.className = 'admin-alert';
      el.textContent = '';
      return;
    }
    el.textContent = message;
    el.className = `admin-alert is-visible ${type === 'success' ? 'admin-alert--success' : 'admin-alert--error'}`;
  }

  applyLanguage(lang) {
    this.lang = lang === 'en' ? 'en' : 'ar';
    localStorage.setItem('anova_lang', this.lang);
    document.documentElement.lang = this.lang;
    document.documentElement.dir = this.lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-admin-i18n]').forEach((el) => {
      const key = el.getAttribute('data-admin-i18n');
      if (key) el.textContent = this.t(key);
    });

    document.querySelectorAll('[data-admin-ph]').forEach((el) => {
      const key = el.getAttribute('data-admin-ph');
      if (key) el.placeholder = this.t(key);
    });

    const topbarTitle = document.getElementById('topbarTitle');
    if (topbarTitle) topbarTitle.textContent = this.t(`tab_${this.activeTab}`);

    if (this.user) {
      this.renderAll();
    }
  }

  async init() {
    this.applyLanguage(this.lang);
    this.bindEvents();

    if (!this.client) {
      this.showLoginView(this.t('err_auth_invalid'));
      return;
    }

    try {
      const { data, error } = await this.client.auth.getSession();
      if (error || !data || !data.session || !data.session.user) {
        this.showLoginView();
        return;
      }

      const user = data.session.user;
      if (user.app_metadata?.role !== 'admin') {
        await this.client.auth.signOut();
        this.showLoginView(this.t('err_not_admin'));
        return;
      }

      await this.enterDashboard(user);
    } catch (err) {
      console.error('[ANOVA Admin Init]', err);
      this.showLoginView();
    }
  }

  showLoginView(errorMessage = '') {
    document.getElementById('authBootView')?.classList.add('is-hidden');
    document.getElementById('dashboardView')?.classList.add('is-hidden');
    document.getElementById('loginView')?.classList.remove('is-hidden');
    const feedback = document.getElementById('loginFeedback');
    this.setAlert(feedback, errorMessage, 'error');
  }

  async enterDashboard(user) {
    this.user = user;
    document.getElementById('authBootView')?.classList.add('is-hidden');
    document.getElementById('loginView')?.classList.add('is-hidden');
    document.getElementById('dashboardView')?.classList.remove('is-hidden');

    const email = user.email || 'admin@anovaksa.com';
    document.getElementById('adminUserEmail').textContent = email;
    document.getElementById('adminUserAvatar').textContent = email.slice(0, 1).toUpperCase();
    document.getElementById('settingsEmail').textContent = email;
    document.getElementById('settingsSupabaseUrl').textContent = window.ANOVA_SUPABASE_CONFIG?.url || '--';

    await this.loadAllData();
  }

  async loadAllData(showToastOnDone = false) {
    try {
      const [quotesRes, jobsRes, logsRes] = await Promise.all([
        this.client.from('quote_requests').select('*').order('created_at', { ascending: false }),
        this.client.from('job_applications').select('*').order('created_at', { ascending: false }),
        this.client.from('activity_logs').select('*').order('created_at', { ascending: false }).limit(80)
      ]);

      if (quotesRes.error) throw quotesRes.error;
      if (jobsRes.error) throw jobsRes.error;
      if (logsRes.error) throw logsRes.error;

      this.quotes = quotesRes.data || [];
      this.jobs = jobsRes.data || [];
      this.activityLogs = logsRes.data || [];
      this.lastSyncAt = new Date();

      this.renderAll();
      if (showToastOnDone) this.showToast(this.t('msg_refreshed'));
    } catch (err) {
      console.error('[ANOVA Admin Load]', err);
      this.showToast(err.message || 'Failed to sync Supabase data', true);
    }
  }

  renderSyncLabel() {
    const syncLabel = document.getElementById('lastSyncLabel');
    if (!syncLabel) return;
    if (!this.lastSyncAt) {
      syncLabel.textContent = '--';
      return;
    }
    const formatted = this.lastSyncAt.toLocaleTimeString(this.lang === 'ar' ? 'ar-SA-u-nu-latn' : 'en-GB');
    syncLabel.textContent = `${this.t('last_sync_prefix')} ${formatted}`;
  }

  async logActivity(action, entityType, entityId, summary) {
    try {
      await this.client.from('activity_logs').insert({
        actor_email: this.user?.email || 'admin@anovaksa.com',
        action,
        entity_type: entityType,
        entity_id: entityId ?? null,
        summary
      });
    } catch (err) {
      console.warn('[ANOVA Activity Log]', err);
    }
  }

  renderAll() {
    this.renderSyncLabel();
    document.getElementById('navBadgeQuotes').textContent = this.quotes.filter(q => q.status === 'new').length;
    document.getElementById('navBadgeJobs').textContent = this.jobs.filter(j => j.status === 'new').length;
    document.getElementById('activityCountBadge').textContent = this.activityLogs.length;

    this.renderOverview();
    this.renderQuotesTable();
    this.renderJobsTable();
    this.renderActivityTable();
  }

  renderOverview() {
    const kpiGrid = document.getElementById('overviewKpiGrid');
    const newQuotesCount = this.quotes.filter(q => q.status === 'new').length;
    const acceptedCount = this.quotes.filter(q => q.status === 'accepted').length;

    kpiGrid.innerHTML = `
      <div class="kpi-card">
        <div class="kpi-card-top">
          <span class="kpi-label">${this.escapeHtml(this.t('kpi_total_quotes'))}</span>
          <span class="kpi-icon-badge"><svg class="icon-svg" style="width:1.1rem;height:1.1rem;" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>
        </div>
        <div class="kpi-value tabular-nums">${this.quotes.length}</div>
        <div class="kpi-sub">${this.escapeHtml(this.t('kpi_total_quotes_sub'))}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-card-top">
          <span class="kpi-label">${this.escapeHtml(this.t('kpi_new_quotes'))}</span>
          <span class="kpi-icon-badge kpi-icon-badge--gold"><svg class="icon-svg" style="width:1.1rem;height:1.1rem;" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
        </div>
        <div class="kpi-value tabular-nums">${newQuotesCount}</div>
        <div class="kpi-sub">${this.escapeHtml(this.t('kpi_new_quotes_sub'))}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-card-top">
          <span class="kpi-label">${this.escapeHtml(this.t('kpi_accepted_quotes'))}</span>
          <span class="kpi-icon-badge"><svg class="icon-svg" style="width:1.1rem;height:1.1rem;" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span>
        </div>
        <div class="kpi-value tabular-nums">${acceptedCount}</div>
        <div class="kpi-sub">${this.escapeHtml(this.t('kpi_accepted_quotes_sub'))}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-card-top">
          <span class="kpi-label">${this.escapeHtml(this.t('kpi_total_jobs'))}</span>
          <span class="kpi-icon-badge kpi-icon-badge--gold"><svg class="icon-svg" style="width:1.1rem;height:1.1rem;" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></span>
        </div>
        <div class="kpi-value tabular-nums">${this.jobs.length}</div>
        <div class="kpi-sub">${this.escapeHtml(this.t('kpi_total_jobs_sub'))}</div>
      </div>
    `;

    // Sector distribution bars
    const sectorBox = document.getElementById('sectorDistributionList');
    const totalQ = Math.max(1, this.quotes.length);
    sectorBox.innerHTML = SECTORS.map((sec) => {
      const count = this.quotes.filter(q => q.sector === sec).length;
      const pct = this.quotes.length ? Math.round((count / totalQ) * 100) : 0;
      return `
        <div>
          <div class="sector-bar-item-head">
            <span class="sector-bar-name">${this.escapeHtml(this.sectorLabel(sec))}</span>
            <span class="sector-bar-count tabular-nums">${count} (${pct}%)</span>
          </div>
          <div class="sector-bar-track">
            <div class="sector-bar-fill" style="width: ${pct}%;"></div>
          </div>
        </div>
      `;
    }).join('');

    // Recent Quotes Mini List
    const recentQuotesBox = document.getElementById('recentQuotesList');
    const topFiveQuotes = this.quotes.slice(0, 5);
    if (!topFiveQuotes.length) {
      recentQuotesBox.innerHTML = `<div style="color:var(--brand-grey);font-size:0.86rem;">${this.escapeHtml(this.t('empty_quotes_title'))}</div>`;
    } else {
      recentQuotesBox.innerHTML = topFiveQuotes.map((q) => `
        <div class="recent-mini-item" data-open-quote="${q.id}">
          <div class="recent-mini-info">
            <div class="recent-mini-name">${this.escapeHtml(q.full_name)}</div>
            <div class="recent-mini-sub">${this.escapeHtml(this.sectorLabel(q.sector))} • ${this.formatDateTime(q.created_at)}</div>
          </div>
          ${this.statusPillHtml(q.status)}
        </div>
      `).join('');
    }

    // Recent Activity Feed
    const recentActivityBox = document.getElementById('recentActivityList');
    const topLogs = this.activityLogs.slice(0, 5);
    if (!topLogs.length) {
      recentActivityBox.innerHTML = `<div style="color:var(--brand-grey);font-size:0.86rem;">${this.escapeHtml(this.t('empty_activity'))}</div>`;
    } else {
      recentActivityBox.innerHTML = topLogs.map((log) => `
        <div class="recent-mini-item" style="cursor:default;">
          <div class="recent-mini-info">
            <div class="recent-mini-name">${this.escapeHtml(log.summary || log.action)}</div>
            <div class="recent-mini-sub dir-ltr">${this.escapeHtml(log.actor_email)} • ${this.formatDateTime(log.created_at)}</div>
          </div>
          <span class="priority-pill priority-normal">${this.escapeHtml(log.action)}</span>
        </div>
      `).join('');
    }
  }

  getFilteredQuotes() {
    const search = (document.getElementById('quoteSearchInput')?.value || '').trim().toLowerCase();
    const status = document.getElementById('quoteStatusFilter')?.value || 'all';
    const sector = document.getElementById('quoteSectorFilter')?.value || 'all';
    const priority = document.getElementById('quotePriorityFilter')?.value || 'all';

    return this.quotes.filter((q) => {
      if (status !== 'all' && q.status !== status) return false;
      if (sector !== 'all' && q.sector !== sector) return false;
      if (priority !== 'all' && q.priority !== priority) return false;
      if (search) {
        const hay = `${q.id} ${q.full_name} ${q.phone} ${q.email} ${q.details} ${q.assigned_to}`.toLowerCase();
        if (!hay.includes(search)) return false;
      }
      return true;
    });
  }

  renderQuotesTable() {
    const tbody = document.getElementById('quotesTableBody');
    const emptyState = document.getElementById('quotesEmptyState');
    const rows = this.getFilteredQuotes();

    if (!rows.length) {
      tbody.innerHTML = '';
      emptyState.classList.remove('is-hidden');
      return;
    }

    emptyState.classList.add('is-hidden');
    tbody.innerHTML = rows.map((q) => {
      const waUrl = this.buildWhatsAppUrl(q.phone, q.full_name);
      const guestDate = [
        q.guests_count ? this.escapeHtml(q.guests_count) : null,
        q.event_date ? this.escapeHtml(q.event_date) : null
      ].filter(Boolean).join(' • ') || this.escapeHtml(this.t('lbl_not_specified'));

      return `
        <tr>
          <td class="tabular-nums">#${q.id}</td>
          <td>
            <div class="table-primary-text">${this.escapeHtml(q.full_name)}</div>
            <div class="table-sub-text dir-ltr">${this.escapeHtml(q.phone)} • ${this.escapeHtml(q.email)}</div>
          </td>
          <td>
            <div class="table-primary-text">${this.escapeHtml(this.sectorLabel(q.sector))}</div>
            <div class="table-sub-text">${this.escapeHtml(this.sourceLabel(q.source_form))}</div>
          </td>
          <td>${guestDate}</td>
          <td>${this.priorityPillHtml(q.priority)}</td>
          <td>${this.statusPillHtml(q.status)}</td>
          <td class="tabular-nums">${this.formatDateTime(q.created_at)}</td>
          <td>
            <div class="table-actions-cell">
              <button type="button" class="admin-btn-sm admin-btn-sm--navy" data-open-quote="${q.id}">${this.escapeHtml(this.t('btn_manage'))}</button>
              ${waUrl ? `<a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="admin-btn-sm">${this.escapeHtml(this.t('btn_whatsapp'))}</a>` : ''}
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  getFilteredJobs() {
    const search = (document.getElementById('jobSearchInput')?.value || '').trim().toLowerCase();
    const status = document.getElementById('jobStatusFilter')?.value || 'all';
    const position = document.getElementById('jobPositionFilter')?.value || 'all';

    return this.jobs.filter((j) => {
      if (status !== 'all' && j.status !== status) return false;
      if (position !== 'all' && j.position !== position) return false;
      if (search) {
        const hay = `${j.id} ${j.full_name} ${j.phone} ${j.email} ${j.position} ${j.experience_summary}`.toLowerCase();
        if (!hay.includes(search)) return false;
      }
      return true;
    });
  }

  renderJobsTable() {
    const tbody = document.getElementById('jobsTableBody');
    const emptyState = document.getElementById('jobsEmptyState');
    const rows = this.getFilteredJobs();

    if (!rows.length) {
      tbody.innerHTML = '';
      emptyState.classList.remove('is-hidden');
      return;
    }

    emptyState.classList.add('is-hidden');
    tbody.innerHTML = rows.map((j) => {
      const waUrl = this.buildWhatsAppUrl(j.phone, j.full_name);
      const expPreview = j.experience_summary
        ? this.escapeHtml(j.experience_summary.slice(0, 75)) + (j.experience_summary.length > 75 ? '...' : '')
        : this.escapeHtml(this.t('lbl_not_specified'));

      return `
        <tr>
          <td class="tabular-nums">#${j.id}</td>
          <td>
            <div class="table-primary-text">${this.escapeHtml(j.full_name)}</div>
            <div class="table-sub-text dir-ltr">${this.escapeHtml(j.phone)} • ${this.escapeHtml(j.email)}</div>
          </td>
          <td><strong>${this.escapeHtml(this.positionLabel(j.position))}</strong></td>
          <td style="max-width: 260px;">${expPreview}</td>
          <td>${this.statusPillHtml(j.status)}</td>
          <td class="tabular-nums">${this.formatDateTime(j.created_at)}</td>
          <td>
            <div class="table-actions-cell">
              <button type="button" class="admin-btn-sm admin-btn-sm--navy" data-open-job="${j.id}">${this.escapeHtml(this.t('btn_manage'))}</button>
              ${waUrl ? `<a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="admin-btn-sm">${this.escapeHtml(this.t('btn_whatsapp'))}</a>` : ''}
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  renderActivityTable() {
    const tbody = document.getElementById('activityTableBody');
    if (!this.activityLogs.length) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;padding:2rem;color:var(--brand-grey);">${this.escapeHtml(this.t('empty_activity'))}</td></tr>`;
      return;
    }

    tbody.innerHTML = this.activityLogs.map((log) => `
      <tr>
        <td class="tabular-nums">${this.formatDateTime(log.created_at)}</td>
        <td class="dir-ltr">${this.escapeHtml(log.actor_email)}</td>
        <td><span class="priority-pill priority-normal">${this.escapeHtml(log.action)}</span></td>
        <td>${this.escapeHtml(log.summary || '--')}</td>
      </tr>
    `).join('');
  }

  async openDetailModal(entityType, recordId) {
    const record = entityType === 'quote_request'
      ? this.quotes.find(q => Number(q.id) === Number(recordId))
      : this.jobs.find(j => Number(j.id) === Number(recordId));

    if (!record) return;
    this.activeDetail = { entityType, id: record.id, record };

    const titleEl = document.getElementById('detailModalTitle');
    titleEl.textContent = `${this.t(entityType === 'quote_request' ? 'detail_quote_prefix' : 'detail_job_prefix')}${record.id}`;

    const fieldsGrid = document.getElementById('detailFieldsGrid');
    const priorityGroup = document.getElementById('detailPriorityGroup');
    const assignedGroup = document.getElementById('detailAssignedGroup');
    const statusSelect = document.getElementById('detailStatusSelect');

    if (entityType === 'quote_request') {
      priorityGroup.classList.remove('is-hidden');
      assignedGroup.classList.remove('is-hidden');
      statusSelect.innerHTML = QUOTE_STATUSES.map(st => `<option value="${st}">${this.escapeHtml(this.t(`status_${st}`))}</option>`).join('');
      statusSelect.value = record.status || 'new';
      document.getElementById('detailPrioritySelect').value = record.priority || 'normal';
      document.getElementById('detailAssignedInput').value = record.assigned_to || '';

      fieldsGrid.innerHTML = `
        <div><div class="detail-kv-label">${this.escapeHtml(this.t('col_client'))}</div><div class="detail-kv-value">${this.escapeHtml(record.full_name)}</div></div>
        <div><div class="detail-kv-label">${this.escapeHtml(this.t('col_sector'))}</div><div class="detail-kv-value">${this.escapeHtml(this.sectorLabel(record.sector))}</div></div>
        <div><div class="detail-kv-label">${this.escapeHtml(this.t('label_phone'))}</div><div class="detail-kv-value dir-ltr">${this.escapeHtml(record.phone)}</div></div>
        <div><div class="detail-kv-label">${this.escapeHtml(this.t('label_email_opt'))}</div><div class="detail-kv-value dir-ltr">${this.escapeHtml(record.email)}</div></div>
        <div><div class="detail-kv-label">${this.escapeHtml(this.t('label_guests'))}</div><div class="detail-kv-value">${this.escapeHtml(record.guests_count || this.t('lbl_not_specified'))}</div></div>
        <div><div class="detail-kv-label">${this.escapeHtml(this.t('label_date'))}</div><div class="detail-kv-value tabular-nums">${this.escapeHtml(record.event_date || this.t('lbl_not_specified'))}</div></div>
        <div><div class="detail-kv-label">${this.escapeHtml(this.t('label_source'))}</div><div class="detail-kv-value">${this.escapeHtml(this.sourceLabel(record.source_form))}</div></div>
        <div><div class="detail-kv-label">${this.escapeHtml(this.t('lbl_source_page'))}</div><div class="detail-kv-value dir-ltr">${this.escapeHtml(record.source_page || '--')}</div></div>
        <div class="detail-full-row"><div class="detail-kv-label">${this.escapeHtml(this.t('label_details'))}</div><div class="detail-kv-value" style="white-space:pre-wrap;">${this.escapeHtml(record.details || this.t('lbl_not_specified'))}</div></div>
      `;
    } else {
      priorityGroup.classList.add('is-hidden');
      assignedGroup.classList.add('is-hidden');
      statusSelect.innerHTML = JOB_STATUSES.map(st => `<option value="${st}">${this.escapeHtml(this.t(`status_${st}`))}</option>`).join('');
      statusSelect.value = record.status || 'new';

      fieldsGrid.innerHTML = `
        <div><div class="detail-kv-label">${this.escapeHtml(this.t('col_applicant'))}</div><div class="detail-kv-value">${this.escapeHtml(record.full_name)}</div></div>
        <div><div class="detail-kv-label">${this.escapeHtml(this.t('col_position'))}</div><div class="detail-kv-value">${this.escapeHtml(this.positionLabel(record.position))}</div></div>
        <div><div class="detail-kv-label">${this.escapeHtml(this.t('label_phone'))}</div><div class="detail-kv-value dir-ltr">${this.escapeHtml(record.phone)}</div></div>
        <div><div class="detail-kv-label">${this.escapeHtml(this.t('label_email_opt'))}</div><div class="detail-kv-value dir-ltr">${this.escapeHtml(record.email)}</div></div>
        <div class="detail-full-row"><div class="detail-kv-label">${this.escapeHtml(this.t('col_experience'))}</div><div class="detail-kv-value" style="white-space:pre-wrap;">${this.escapeHtml(record.experience_summary || this.t('lbl_not_specified'))}</div></div>
      `;
    }

    // Quick contact buttons
    const waUrl = this.buildWhatsAppUrl(record.phone, record.full_name);
    const telHref = `tel:${String(record.phone || '').replace(/[^\d+]/g, '')}`;
    const mailHref = `mailto:${encodeURIComponent(record.email || '')}`;
    document.getElementById('detailQuickContacts').innerHTML = `
      ${waUrl ? `<a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="admin-btn-sm admin-btn-sm--gold">${this.escapeHtml(this.t('btn_whatsapp'))}</a>` : ''}
      ${record.phone ? `<a href="${this.escapeHtml(telHref)}" class="admin-btn-sm">${this.escapeHtml(this.t('btn_call'))}</a>` : ''}
      ${record.email ? `<a href="${this.escapeHtml(mailHref)}" class="admin-btn-sm">${this.escapeHtml(this.t('btn_email'))}</a>` : ''}
    `;

    this.openModal('detailModal');
    await this.loadNotesForEntity(entityType, record.id);
  }

  async loadNotesForEntity(entityType, entityId) {
    const timeline = document.getElementById('notesTimeline');
    timeline.innerHTML = `<div style="color:var(--brand-grey);font-size:0.84rem;">...</div>`;

    const { data, error } = await this.client
      .from('request_notes')
      .select('*')
      .eq('entity_type', entityType)
      .eq('entity_id', entityId)
      .order('created_at', { ascending: false });

    if (error) {
      timeline.innerHTML = `<div style="color:#b91c1c;font-size:0.84rem;">${this.escapeHtml(error.message)}</div>`;
      return;
    }

    if (!data || !data.length) {
      timeline.innerHTML = `<div style="color:var(--brand-grey);font-size:0.84rem;">${this.escapeHtml(this.t('no_notes_yet'))}</div>`;
      return;
    }

    timeline.innerHTML = data.map((n) => `
      <div class="note-item">
        <div class="note-item-meta">
          <span class="dir-ltr">${this.escapeHtml(n.author_email)}</span>
          <span class="tabular-nums">${this.formatDateTime(n.created_at)}</span>
        </div>
        <div class="note-item-text">${this.escapeHtml(n.note_text)}</div>
      </div>
    `).join('');
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    if (!document.querySelector('.admin-modal-overlay.is-open')) {
      document.body.style.overflow = '';
    }
  }

  switchTab(tabName) {
    this.activeTab = tabName;
    document.querySelectorAll('.admin-nav-btn[data-tab]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.tab === tabName);
    });
    document.querySelectorAll('.admin-tab-panel').forEach((panel) => {
      panel.classList.toggle('is-hidden', panel.id !== `tab-${tabName}`);
    });
    const topbarTitle = document.getElementById('topbarTitle');
    if (topbarTitle) topbarTitle.textContent = this.t(`tab_${tabName}`);

    // Close mobile sidebar drawer cleanly
    document.getElementById('adminSidebar')?.classList.remove('is-open');
    document.getElementById('sidebarBackdrop')?.classList.remove('is-open');
  }

  csvEscape(val) {
    const str = String(val ?? '');
    const safe = /^[=+\-@\t\r]/.test(str) && !/^\+\d[\d\s-]+$/.test(str) ? `'${str}` : str;
    return `"${safe.replace(/"/g, '""')}"`;
  }

  downloadCsv(filename, headers, rows) {
    const lines = [
      headers.map(h => this.csvEscape(h)).join(','),
      ...rows.map(row => row.map(cell => this.csvEscape(cell)).join(','))
    ];
    const blob = new Blob(['\uFEFF' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    this.showToast(this.t('msg_csv_exported'));
  }

  bindEvents() {
    // Login submit
    document.getElementById('adminLoginForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      const submitBtn = document.getElementById('loginSubmitBtn');
      const feedback = document.getElementById('loginFeedback');
      this.setAlert(feedback, '', 'error');

      submitBtn.disabled = true;
      submitBtn.textContent = this.t('logging_in');

      try {
        const { data, error } = await this.client.auth.signInWithPassword({ email, password });
        if (error || !data?.user) {
          this.setAlert(feedback, this.t('err_auth_invalid'), 'error');
          return;
        }
        if (data.user.app_metadata?.role !== 'admin') {
          await this.client.auth.signOut();
          this.setAlert(feedback, this.t('err_not_admin'), 'error');
          return;
        }
        await this.enterDashboard(data.user);
      } catch (err) {
        console.error('[ANOVA Admin Login]', err);
        this.setAlert(feedback, this.t('err_auth_invalid'), 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = this.t('btn_login');
      }
    });

    // Toggle password visibility
    document.getElementById('togglePasswordVisBtn')?.addEventListener('click', () => {
      const input = document.getElementById('loginPassword');
      if (input) input.type = input.type === 'password' ? 'text' : 'password';
    });

    // Language toggles
    document.getElementById('loginLangToggle')?.addEventListener('click', () => {
      this.applyLanguage(this.lang === 'ar' ? 'en' : 'ar');
    });
    document.getElementById('adminLangToggle')?.addEventListener('click', () => {
      this.applyLanguage(this.lang === 'ar' ? 'en' : 'ar');
    });

    // Sidebar navigation & mobile drawer
    document.querySelectorAll('.admin-nav-btn[data-tab]').forEach((btn) => {
      btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
    });
    document.getElementById('goToAllQuotesBtn')?.addEventListener('click', () => this.switchTab('quotes'));

    document.getElementById('openSidebarBtn')?.addEventListener('click', () => {
      document.getElementById('adminSidebar')?.classList.add('is-open');
      document.getElementById('sidebarBackdrop')?.classList.add('is-open');
    });
    const closeDrawer = () => {
      document.getElementById('adminSidebar')?.classList.remove('is-open');
      document.getElementById('sidebarBackdrop')?.classList.remove('is-open');
    };
    document.getElementById('closeSidebarBtn')?.addEventListener('click', closeDrawer);
    document.getElementById('sidebarBackdrop')?.addEventListener('click', closeDrawer);

    // Logout & Refresh
    document.getElementById('logoutBtn')?.addEventListener('click', async () => {
      await this.client.auth.signOut();
      this.user = null;
      this.showLoginView();
    });

    document.getElementById('refreshDataBtn')?.addEventListener('click', () => {
      this.loadAllData(true);
    });

    // Filter listeners (Quotes & Jobs)
    ['quoteSearchInput', 'quoteStatusFilter', 'quoteSectorFilter', 'quotePriorityFilter'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener(id.includes('Search') ? 'input' : 'change', () => this.renderQuotesTable());
    });
    document.getElementById('resetQuoteFiltersBtn')?.addEventListener('click', () => {
      document.getElementById('quoteSearchInput').value = '';
      document.getElementById('quoteStatusFilter').value = 'all';
      document.getElementById('quoteSectorFilter').value = 'all';
      document.getElementById('quotePriorityFilter').value = 'all';
      this.renderQuotesTable();
    });

    ['jobSearchInput', 'jobStatusFilter', 'jobPositionFilter'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener(id.includes('Search') ? 'input' : 'change', () => this.renderJobsTable());
    });
    document.getElementById('resetJobFiltersBtn')?.addEventListener('click', () => {
      document.getElementById('jobSearchInput').value = '';
      document.getElementById('jobStatusFilter').value = 'all';
      document.getElementById('jobPositionFilter').value = 'all';
      this.renderJobsTable();
    });

    // CSV Exports
    document.getElementById('exportQuotesCsvBtn')?.addEventListener('click', () => {
      const rows = this.getFilteredQuotes().map(q => [
        q.id, q.full_name, q.phone, q.email, q.sector, q.guests_count, q.event_date,
        q.status, q.priority, q.assigned_to, q.source_form, q.source_page, q.details, q.created_at
      ]);
      this.downloadCsv(
        `anova-quotes-${new Date().toISOString().slice(0, 10)}.csv`,
        ['ID', 'Client', 'Phone', 'Email', 'Sector', 'Guests', 'Event Date', 'Status', 'Priority', 'Assigned To', 'Source Form', 'Source Page', 'Details', 'Created At'],
        rows
      );
    });

    document.getElementById('exportJobsCsvBtn')?.addEventListener('click', () => {
      const rows = this.getFilteredJobs().map(j => [
        j.id, j.full_name, j.phone, j.email, j.position, j.status, j.experience_summary, j.created_at
      ]);
      this.downloadCsv(
        `anova-jobs-${new Date().toISOString().slice(0, 10)}.csv`,
        ['ID', 'Applicant', 'Phone', 'Email', 'Position', 'Status', 'Experience Summary', 'Created At'],
        rows
      );
    });

    // Event delegation for opening detail modals
    document.addEventListener('click', (e) => {
      const quoteTrigger = e.target.closest('[data-open-quote]');
      if (quoteTrigger) {
        this.openDetailModal('quote_request', quoteTrigger.dataset.openQuote);
        return;
      }
      const jobTrigger = e.target.closest('[data-open-job]');
      if (jobTrigger) {
        this.openDetailModal('job_application', jobTrigger.dataset.openJob);
        return;
      }
      const closeTarget = e.target.closest('[data-close-modal]');
      if (closeTarget) {
        this.closeModal(closeTarget.dataset.closeModal);
        return;
      }
      if (e.target.classList.contains('admin-modal-overlay')) {
        this.closeModal(e.target.id);
      }
    });

    // Update record status / priority / assigned
    document.getElementById('updateRecordForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!this.activeDetail) return;
      const { entityType, id, record } = this.activeDetail;
      const saveBtn = document.getElementById('saveRecordBtn');
      const newStatus = document.getElementById('detailStatusSelect').value;

      saveBtn.disabled = true;
      try {
        if (entityType === 'quote_request') {
          const newPrio = document.getElementById('detailPrioritySelect').value;
          const newAssigned = document.getElementById('detailAssignedInput').value.trim();
          const { error } = await this.client
            .from('quote_requests')
            .update({ status: newStatus, priority: newPrio, assigned_to: newAssigned })
            .eq('id', id);
          if (error) throw error;
          await this.logActivity(
            'quote_updated',
            'quote_request',
            id,
            `#${id} (${record.full_name}): status -> ${newStatus}, priority -> ${newPrio}`
          );
        } else {
          const { error } = await this.client
            .from('job_applications')
            .update({ status: newStatus })
            .eq('id', id);
          if (error) throw error;
          await this.logActivity(
            'job_updated',
            'job_application',
            id,
            `#${id} (${record.full_name}): status -> ${newStatus}`
          );
        }

        await this.loadAllData();
        this.showToast(this.t('msg_record_saved'));
      } catch (err) {
        console.error('[ANOVA Admin Update]', err);
        this.showToast(err.message || 'Update failed', true);
      } finally {
        saveBtn.disabled = false;
      }
    });

    // Add internal note
    document.getElementById('addNoteForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!this.activeDetail) return;
      const textarea = document.getElementById('newNoteText');
      const noteText = textarea.value.trim();
      if (!noteText) return;

      const btn = document.getElementById('addNoteBtn');
      btn.disabled = true;
      try {
        const { entityType, id, record } = this.activeDetail;
        const { error } = await this.client.from('request_notes').insert({
          entity_type: entityType,
          entity_id: id,
          author_email: this.user?.email || 'admin@anovaksa.com',
          note_text: noteText
        });
        if (error) throw error;

        textarea.value = '';
        await this.logActivity('note_added', entityType, id, `Note added on #${id} (${record.full_name})`);
        await this.loadNotesForEntity(entityType, id);
        await this.loadAllData();
        this.showToast(this.t('msg_note_added'));
      } catch (err) {
        console.error('[ANOVA Add Note]', err);
        this.showToast(err.message || 'Failed to add note', true);
      } finally {
        btn.disabled = false;
      }
    });

    // Manual Quote Creation
    document.getElementById('openManualQuoteBtn')?.addEventListener('click', () => {
      document.getElementById('manualQuoteForm')?.reset();
      this.openModal('manualQuoteModal');
    });

    document.getElementById('manualQuoteForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.target;
      const fd = new FormData(form);
      const getVal = (k) => String(fd.get(k) || '').trim();
      const btn = document.getElementById('saveManualQuoteBtn');

      btn.disabled = true;
      try {
        const payload = {
          full_name: getVal('full_name'),
          phone: getVal('phone'),
          email: getVal('email'),
          sector: getVal('sector'),
          guests_count: getVal('guests_count'),
          event_date: getVal('event_date') || null,
          priority: getVal('priority') || 'normal',
          source_form: getVal('source_form') || 'admin_manual',
          source_page: 'admin.html',
          details: getVal('details')
        };

        const { data, error } = await this.client
          .from('quote_requests')
          .insert(payload)
          .select('id, full_name')
          .single();
        if (error) throw error;

        await this.logActivity(
          'quote_created_manual',
          'quote_request',
          data?.id ?? null,
          `Manual quote logged: #${data?.id ?? ''} (${payload.full_name})`
        );

        this.closeModal('manualQuoteModal');
        await this.loadAllData();
        this.showToast(this.t('msg_quote_created'));
      } catch (err) {
        console.error('[ANOVA Manual Quote]', err);
        this.showToast(err.message || 'Failed to save quote', true);
      } finally {
        btn.disabled = false;
      }
    });

    // Safe Delete confirmation flow
    document.getElementById('openDeleteFromDetailBtn')?.addEventListener('click', () => {
      if (!this.activeDetail) return;
      this.pendingDelete = { ...this.activeDetail };
      document.getElementById('confirmDeleteMessage').textContent = this.t(
        this.pendingDelete.entityType === 'quote_request'
          ? 'confirm_delete_quote_msg'
          : 'confirm_delete_job_msg'
      );
      this.openModal('confirmDeleteModal');
    });

    document.getElementById('confirmDeleteBtn')?.addEventListener('click', async () => {
      if (!this.pendingDelete) return;
      const { entityType, id, record } = this.pendingDelete;
      const table = entityType === 'quote_request' ? 'quote_requests' : 'job_applications';
      const btn = document.getElementById('confirmDeleteBtn');

      btn.disabled = true;
      try {
        // Remove associated notes cleanly before parent delete
        await this.client
          .from('request_notes')
          .delete()
          .eq('entity_type', entityType)
          .eq('entity_id', id);

        const { error } = await this.client.from(table).delete().eq('id', id);
        if (error) throw error;

        await this.logActivity(
          'record_deleted',
          entityType,
          id,
          `Deleted ${entityType} #${id} (${record?.full_name || ''})`
        );

        this.pendingDelete = null;
        this.activeDetail = null;
        this.closeModal('confirmDeleteModal');
        this.closeModal('detailModal');
        await this.loadAllData();
        this.showToast(this.t('msg_record_deleted'));
      } catch (err) {
        console.error('[ANOVA Delete]', err);
        this.showToast(err.message || 'Delete failed', true);
      } finally {
        btn.disabled = false;
      }
    });

    // Change Admin Password
    document.getElementById('changePasswordForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const newPw = document.getElementById('newPasswordInput').value;
      const confirmPw = document.getElementById('confirmPasswordInput').value;
      const feedback = document.getElementById('passwordUpdateFeedback');
      const btn = document.getElementById('updatePasswordBtn');
      this.setAlert(feedback, '', 'error');

      if (newPw.length < 8) {
        this.setAlert(feedback, this.t('err_pw_short'), 'error');
        return;
      }
      if (newPw !== confirmPw) {
        this.setAlert(feedback, this.t('err_pw_mismatch'), 'error');
        return;
      }

      btn.disabled = true;
      try {
        const { error } = await this.client.auth.updateUser({ password: newPw });
        if (error) throw error;
        document.getElementById('changePasswordForm').reset();
        await this.logActivity('password_updated', 'auth', null, 'Admin updated portal password');
        this.setAlert(feedback, this.t('msg_pw_updated'), 'success');
        await this.loadAllData();
      } catch (err) {
        console.error('[ANOVA Password Update]', err);
        this.setAlert(feedback, err.message || 'Password update failed', 'error');
      } finally {
        btn.disabled = false;
      }
    });

    // Escape key closes topmost open modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (document.getElementById('confirmDeleteModal')?.classList.contains('is-open')) {
          this.closeModal('confirmDeleteModal');
        } else if (document.getElementById('manualQuoteModal')?.classList.contains('is-open')) {
          this.closeModal('manualQuoteModal');
        } else if (document.getElementById('detailModal')?.classList.contains('is-open')) {
          this.closeModal('detailModal');
        }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.anovaAdmin = new AnovaAdminApp();
});
