export function generateWhatsAppMessage(formData) {
  const { fullName, phone, email, message } = formData;

  return encodeURIComponent(
    `📩 *New Enquiry from TMG Global Website*\n\n` +
    `👤 *Name:* ${fullName}\n` +
    `📞 *Phone:* ${phone}\n` +
    `📧 *Email:* ${email}\n\n` +
    `💬 *Message:*\n${message}\n\n` +
    `──────────────\nSent via TMG Global Website`
  );
}




