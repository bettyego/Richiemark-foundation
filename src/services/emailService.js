// Email Service for Richmark Foundation
// This service handles sending emails via EmailJS

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: import.meta.env?.VITE_EMAILJS_SERVICE_ID || 'service_richmark',
  templateId: import.meta.env?.VITE_EMAILJS_TEMPLATE_ID || 'template_volunteer',
  publicKey: import.meta.env?.VITE_EMAILJS_PUBLIC_KEY || 'demo_mode'
};

// Initialize EmailJS (will be loaded dynamically)
let emailjs = null;

// Load EmailJS library dynamically
const loadEmailJS = () => {
  return new Promise((resolve, reject) => {
    if (emailjs) {
      resolve(emailjs);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => {
      emailjs = window.emailjs;
      emailjs.init(EMAILJS_CONFIG.publicKey);
      resolve(emailjs);
    };
    script.onerror = () => reject(new Error('Failed to load EmailJS'));
    document.head.appendChild(script);
  });
};

// Send volunteer application email
export const sendVolunteerApplication = async (volunteerData) => {
  try {
    // Check if we're in demo mode
    if (EMAILJS_CONFIG.publicKey === 'demo_mode') {
      console.log('Demo mode: Volunteer application would be sent:', volunteerData);
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      return {
        success: true,
        message: 'Demo mode: Application submitted successfully! (No actual email sent)'
      };
    }

    // Load EmailJS if not already loaded
    const emailjsInstance = await loadEmailJS();

    // Prepare email template parameters
    const templateParams = {
      to_email: 'volunteer@richmarkfoundation.org.ng', // Foundation email
      from_name: `${volunteerData.firstName} ${volunteerData.lastName}`,
      from_email: volunteerData.email,
      phone: volunteerData.phone,
      age: volunteerData.age,
      interests: volunteerData.interests.join(', '),
      availability: volunteerData.availability,
      experience: volunteerData.experience,
      motivation: volunteerData.motivation,
      application_date: new Date().toLocaleDateString('en-NG'),
      application_time: new Date().toLocaleTimeString('en-NG')
    };

    // Send email using EmailJS
    const response = await emailjsInstance.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('Volunteer application sent successfully:', response);
    return { success: true, message: 'Application sent successfully!' };

  } catch (error) {
    console.error('Failed to send volunteer application:', error);
    return { 
      success: false, 
      message: 'Failed to send application. Please try again or contact us directly.' 
    };
  }
};

// Send confirmation email to volunteer
export const sendVolunteerConfirmation = async (volunteerData) => {
  try {
    // Check if we're in demo mode
    if (EMAILJS_CONFIG.publicKey === 'demo_mode') {
      console.log('Demo mode: Confirmation email would be sent to:', volunteerData.email);
      return { success: true };
    }

    const emailjsInstance = await loadEmailJS();

    const templateParams = {
      to_email: volunteerData.email, // Volunteer's email
      volunteer_name: `${volunteerData.firstName} ${volunteerData.lastName}`,
      foundation_email: 'volunteer@richmarkfoundation.org.ng',
      foundation_phone: '+234-901-234-5678',
      interests: volunteerData.interests.join(', ')
    };

    // Use a different template for confirmation emails
    const confirmationTemplateId = import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID || 'template_volunteer_confirmation';

    await emailjsInstance.send(
      EMAILJS_CONFIG.serviceId,
      confirmationTemplateId,
      templateParams
    );

    console.log('Confirmation email sent to volunteer');
    return { success: true };

  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    return { success: false };
  }
};

// Send contact form email
export const sendContactMessage = async (contactData) => {
  try {
    const emailjsInstance = await loadEmailJS();

    const templateParams = {
      to_email: 'info@richmarkfoundation.org.ng',
      from_name: contactData.name,
      from_email: contactData.email,
      subject: contactData.subject,
      message: contactData.message,
      phone: contactData.phone || 'Not provided',
      contact_date: new Date().toLocaleDateString('en-NG'),
      contact_time: new Date().toLocaleTimeString('en-NG')
    };

    const contactTemplateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'template_contact';

    const response = await emailjsInstance.send(
      EMAILJS_CONFIG.serviceId,
      contactTemplateId,
      templateParams
    );

    return { success: true, message: 'Message sent successfully!' };

  } catch (error) {
    console.error('Failed to send contact message:', error);
    return { 
      success: false, 
      message: 'Failed to send message. Please try again.' 
    };
  }
};

// Validate email configuration
export const validateEmailConfig = () => {
  const missingConfig = [];
  
  if (!EMAILJS_CONFIG.serviceId || EMAILJS_CONFIG.serviceId === 'service_richmark') {
    missingConfig.push('Service ID');
  }
  
  if (!EMAILJS_CONFIG.templateId || EMAILJS_CONFIG.templateId === 'template_volunteer') {
    missingConfig.push('Template ID');
  }
  
  if (!EMAILJS_CONFIG.publicKey || EMAILJS_CONFIG.publicKey === 'your_emailjs_public_key') {
    missingConfig.push('Public Key');
  }

  return {
    isValid: missingConfig.length === 0,
    missingConfig
  };
};

export default {
  sendVolunteerApplication,
  sendVolunteerConfirmation,
  sendContactMessage,
  validateEmailConfig
};
