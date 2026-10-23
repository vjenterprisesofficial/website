import { API_ENDPOINTS } from './apiConfig.js';

export async function submitContactForm(formData) {
  try {
    const response = await fetch(API_ENDPOINTS.contact, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(formData)
    });

    const text = await response.text();

    try {
      return JSON.parse(text);
    } catch {
      return {
        success: true,
        message: 'Form submitted successfully'
      };
    }
  } catch (error) {
    console.error('Submit Error:', error);

    return {
      success: false,
      error: error.message
    };
  }
}

export async function submitJobApplication(formData) {
  try {
    const response = await fetch(API_ENDPOINTS.careers, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(formData)
    });

    const text = await response.text();

    try {
      return JSON.parse(text);
    } catch {
      return {
        success: true,
        message: 'Application submitted successfully'
      };
    }
  } catch (error) {
    console.error('Submit Application Error:', error);

    return {
      success: false,
      error: error.message
    };
  }
}
