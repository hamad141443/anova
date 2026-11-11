/**
 * ANOVA United - Supabase Configuration & Public Submission Helper
 * Uses official publishable key for browser client & Data API submissions.
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

  global.ANOVA_SUPABASE_CONFIG = Object.freeze({
    url: SUPABASE_URL,
    publishableKey: SUPABASE_PUBLISHABLE_KEY
  });

  global.AnovaSupabase = Object.freeze({
    submitPublicRecord,
    createAdminClient
  });
})(window);
