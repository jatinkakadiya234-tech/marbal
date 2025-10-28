// WhatsApp Configuration
export const whatsappConfig = {
  // Replace with your actual WhatsApp number (with country code, no + sign)
  phoneNumber: "917201000140", // Example: "919876543210"
  
  // Default message when user clicks WhatsApp button
  defaultMessage: "Hi! I'm interested in your marble and stone products. Can you help me?",
  
  // Different messages for different pages
  messages: {
    home: "Hi! I'm interested in learning more about your marble and stone products.",
    gallery: "Hi! I saw your gallery and I'm interested in similar marble work.",
    services: "Hi! I'd like to know more about your marble cutting and installation services.",
    contact: "Hi! I'd like to get in touch regarding your marble products.",
    about: "Hi! I'd like to know more about Rishab Green Marbles."
  },
  
  // Button position: 'bottom-right', 'bottom-left', 'top-right', 'top-left'
  position: "bottom-left",
  
  // Show/hide the WhatsApp button
  enabled: true
};

// Function to get message based on current page
export const getWhatsAppMessage = (page = 'home') => {
  return whatsappConfig.messages[page] || whatsappConfig.defaultMessage;
};

// Function to generate WhatsApp URL
export const getWhatsAppUrl = (message = whatsappConfig.defaultMessage) => {
  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(message)}`;
};