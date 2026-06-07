const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzlnmHeOrGTaiaQHJ6Za73n77d5ytzmqFPVeZ0WiEMlvG0nJSdV7LScUyQCJufYG1rC/exec';

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