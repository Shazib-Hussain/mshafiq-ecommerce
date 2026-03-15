const WHATSAPP_NUMBER = '923214894332'; // Your WhatsApp number (with country code, no + or spaces)

export function getWhatsAppLink(perfumeName) {
  const message = `Hello, I want to order this perfume: ${perfumeName}`;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function getWhatsAppContactLink() {
  const message = `Hello, I would like to know more about your perfumes.`;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
