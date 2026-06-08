const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbz4cKNFY5uC8HqJ0mzw2ocOATZNqXWK_QW5Gm7JJEDME9Upk3tKSmxMnApGsp5Ajjvs/exec";

export const subscribeNewsletter = async (email) => {
const response = await fetch(SCRIPT_URL, {
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