const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzlnmHeOrGTaiaQHJ6Za73n77d5ytzmqFPVeZ0WiEMlvG0nJSdV7LScUyQCJufYG1rC/exec';

// TODO: Replace this URL with your separate Google Apps Script URL for career applications
const CAREER_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyjhcB0tta-N1Cwqryx4DkZyBcqd2lr3XxmiQOaf3np4Rt5WX6rXF70JGUFkYmCZExD/exec';
export async function submitContactForm(formData) {
  try {
    const response = await fetch(SCRIPT_URL, {
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
    const response = await fetch(CAREER_SCRIPT_URL, {
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
