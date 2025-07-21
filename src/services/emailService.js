// Email Service for Richmark Foundation
// This service handles sending emails via EmailJS

import { FOUNDATION_EMAILS } from '../config/emailConfig.js';

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
    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.publicKey === 'demo_mode') {
      console.log('EmailJS not configured. Volunteer application received for:', volunteerData.email);
      throw new Error('Email service is not configured. Please contact us directly at ' + FOUNDATION_EMAILS.info);
    }

    const emailjsInstance = await loadEmailJS();

    const templateParams = {
      to_email: FOUNDATION_EMAILS.volunteer, // Foundation's email
      cc_email: FOUNDATION_EMAILS.coordinator, // CC to coordinator
      volunteer_name: `${volunteerData.firstName} ${volunteerData.lastName}`,
      volunteer_email: volunteerData.email,
      volunteer_phone: volunteerData.phone,
      volunteer_age: volunteerData.age,
      interests: volunteerData.interests.join(', '),
      availability: volunteerData.availability,
      experience: volunteerData.experience,
      motivation: volunteerData.motivation,
      application_date: new Date().toLocaleDateString('en-NG'),
      application_time: new Date().toLocaleTimeString('en-NG')
    };

    await emailjsInstance.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('Volunteer application sent to foundation');
    return { success: true };

  } catch (error) {
    console.error('Failed to send volunteer application:', error);
    throw new Error('Failed to submit application. Please try again.');
  }
};

// Newsletter subscription
export const subscribeToNewsletter = async (email) => {
  try {
    // In a real implementation, this would be an API call to your email service
    // For now, we'll simulate the API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      message: `Thank you for subscribing! You'll receive a confirmation email from ${FOUNDATION_EMAILS.info}`
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw new Error(`Failed to subscribe. Please email us directly at ${FOUNDATION_EMAILS.info}`);
  }
};

// Send confirmation email to volunteer
export const sendVolunteerConfirmation = async (volunteerData) => {
  try {
    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.publicKey === 'demo_mode') {
      console.log('EmailJS not configured. Confirmation email would be sent to:', volunteerData.email);
      throw new Error('Email service is not configured. Please contact us directly at ' + FOUNDATION_EMAILS.info);
    }

    const emailjsInstance = await loadEmailJS();

    const templateParams = {
      to_email: volunteerData.email, // Volunteer's email
      volunteer_name: `${volunteerData.firstName} ${volunteerData.lastName}`,
      foundation_email: FOUNDATION_EMAILS.info,
      foundation_phone: '+234 (0) 911 054 9719',
      coordinator_email: FOUNDATION_EMAILS.coordinator,
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
    throw new Error('Failed to send confirmation email. Please try again.');
  }
};

// Send contact form email
export const sendContactMessage = async (contactData) => {
  try {
    const emailjsInstance = await loadEmailJS();

    const templateParams = {
      to_email: FOUNDATION_EMAILS.contact,
      from_name: contactData.name,
      from_email: contactData.email,
      subject: contactData.subject,
      message: contactData.message,
      phone: contactData.phone || 'Not provided',
      contact_date: new Date().toLocaleDateString('en-NG'),
      contact_time: new Date().toLocaleTimeString('en-NG')
    };

    const contactTemplateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'template_contact';

    await emailjsInstance.send(
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
  subscribeToNewsletter,
  validateEmailConfig
};
