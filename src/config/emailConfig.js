// Email Configuration for Richmark Foundation
// Centralized email addresses and settings

export const FOUNDATION_EMAILS = {
  // Primary contact email
  info: 'info@richmarkfoundation.com',
  
  // Staff emails
  director: 'MichealVictor@richmarkfoundation.com',
  coordinator: 'Abanihemstephanieogochukwu@richmarkfoundation.com',
  
  // Department-specific emails
  volunteer: 'info@richmarkfoundation.com', // Volunteer applications go to main info
  donations: 'info@richmarkfoundation.com', // Donation inquiries go to main info
  contact: 'info@richmarkfoundation.com', // General contact form submissions
  newsletter: 'info@richmarkfoundation.com', // Newsletter confirmations
};

// Email templates and subjects
export const EMAIL_TEMPLATES = {
  volunteer: {
    subject: 'New Volunteer Application - Richmark Foundation',
    recipients: [FOUNDATION_EMAILS.info, FOUNDATION_EMAILS.coordinator],
  },
  contact: {
    subject: 'New Contact Form Submission - Richmark Foundation',
    recipients: [FOUNDATION_EMAILS.info],
  },
  newsletter: {
    subject: 'Newsletter Subscription Confirmation',
    recipients: [FOUNDATION_EMAILS.info],
  },
  donation: {
    subject: 'New Donation Inquiry - Richmark Foundation',
    recipients: [FOUNDATION_EMAILS.info, FOUNDATION_EMAILS.director],
  },
};

// Foundation contact information
export const FOUNDATION_CONTACT = {
  name: 'Richmark Humanitarian Foundation',
  phone: {
    main: '09110549719',
    whatsapp: '07042034473',
  },
  address: {
    head_office: 'No 71 Nouakchott street, Suit 6 ground floor, wuse zone 1, FCT,Abuja',
    branch_office: '160 Faulks road Aba, Abia state',
  },
  website: 'https://richmarkfoundation.com',

  // Social media
  social: {
    facebook: 'Richmark Humanitarian Foundation',
    instagram: 'Richmark Humanitarian Foundation',
    tiktok: 'Richmark Humanitarian Foundation',
    twitter: 'Richmark Humanitarian Foundation',
    linkedin: 'Richmark Humanitarian Foundation',
  },
};

export default {
  FOUNDATION_EMAILS,
  EMAIL_TEMPLATES,
  FOUNDATION_CONTACT,
};
