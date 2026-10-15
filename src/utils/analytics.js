/**
 * Safe Google Analytics 4 (GA4) Tracking Utility
 * 
 * Supports required events:
 * - generate_lead
 * - contact_click
 * - whatsapp_click
 * - product_view
 * - product_cta_click
 * - apk_download_click
 * 
 * Guards against missing window.gtag, prevents duplicate event spam,
 * and ensures no PII (Personally Identifiable Information) is sent.
 */

const recentEvents = new Map();
const DEDUPE_WINDOW_MS = 1500;

function sendEvent(eventName, params = {}) {
  try {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
      return;
    }

    // Deduplication check
    const eventKey = `${eventName}_${JSON.stringify(params)}`;
    const now = Date.now();
    const lastFired = recentEvents.get(eventKey);

    if (lastFired && now - lastFired < DEDUPE_WINDOW_MS) {
      return;
    }
    recentEvents.set(eventKey, now);

    // Clean params to ensure NO personal info is included
    const safeParams = {};
    for (const [key, val] of Object.entries(params)) {
      if (['name', 'email', 'phone', 'message', 'address'].includes(key.toLowerCase())) {
        continue;
      }
      safeParams[key] = val;
    }

    window.gtag('event', eventName, safeParams);
  } catch (err) {
    // Fail silently without disrupting user interaction
  }
}

export const trackLeadGenerated = (formType, itemInterest = '') => {
  sendEvent('generate_lead', {
    form_type: formType,
    interest: itemInterest || 'general',
  });
};

export const trackContactClick = (method, location = 'page') => {
  sendEvent('contact_click', {
    contact_method: method, // 'email' | 'phone' | 'form'
    click_location: location,
  });
};

export const trackWhatsAppClick = (source = 'floating') => {
  sendEvent('whatsapp_click', {
    click_source: source,
  });
};

export const trackProductView = (productId, productName) => {
  sendEvent('product_view', {
    item_id: productId,
    item_name: productName,
  });
};

export const trackProductCtaClick = (productId, actionType) => {
  sendEvent('product_cta_click', {
    item_id: productId,
    action: actionType, // 'explore' | 'consultation' | 'features'
  });
};

export const trackApkDownloadClick = (productId, version = '', isAvailable = false) => {
  sendEvent('apk_download_click', {
    item_id: productId,
    app_version: version,
    status: isAvailable ? 'available' : 'unavailable_requested',
  });
};
