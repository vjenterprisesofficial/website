import { API_ENDPOINTS } from "./apiConfig.js";

export const subscribeNewsletter = async (email) => {
  const response = await fetch(API_ENDPOINTS.newsletter, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      email,
      formType: "newsletter",
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(
      data.message || "Failed to subscribe"
    );
  }

  return data;
};