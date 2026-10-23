/**
 * Centralized API & Cloud Integration Configuration
 * Consolidates all Google Workspace cloud endpoints in one place.
 * Easily overrideable via environment variables.
 */

export const API_ENDPOINTS = {
  // Contact & Project Proposal Enquiries
  contact: import.meta.env.VITE_CONTACT_API_URL || 
    'https://script.google.com/macros/s/AKfycbzlnmHeOrGTaiaQHJ6Za73n77d5ytzmqFPVeZ0WiEMlvG0nJSdV7LScUyQCJufYG1rC/exec',

  // Job & Career Applications
  careers: import.meta.env.VITE_CAREERS_API_URL || 
    'https://script.google.com/macros/s/AKfycbyjhcB0tta-N1Cwqryx4DkZyBcqd2lr3XxmiQOaf3np4Rt5WX6rXF70JGUFkYmCZExD/exec',

  // Summer Training & Internship Registrations
  internship: import.meta.env.VITE_INTERNSHIP_API_URL || 
    'https://script.google.com/macros/s/AKfycby6XtyBYM08xGsGnOBTI_LeCglfngsL51-A0fJxc1myhdBe13Boo4y289d_MTQNShNS/exec',

  // Newsletter Subscriptions
  newsletter: import.meta.env.VITE_NEWSLETTER_API_URL || 
    'https://script.google.com/macros/s/AKfycbz4cKNFY5uC8HqJ0mzw2ocOATZNqXWK_QW5Gm7JJEDME9Upk3tKSmxMnApGsp5Ajjvs/exec',
};
