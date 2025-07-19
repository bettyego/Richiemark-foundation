# Richmark Foundation Email Addresses

This document outlines the email addresses used throughout the Richmark Foundation website and their purposes.

## Primary Email Addresses

### Main Contact
- **info@richmarkfoundation.com**
  - Primary contact email for the foundation
  - Used for general inquiries, contact forms, and newsletter confirmations
  - Displayed publicly on the website

### Staff Emails
- **MichealVictor@richmarkfoundation.com**
  - Director's email address
  - Receives copies of donation inquiries and important communications

- **Abanihemstephanieogochukwu@richmarkfoundation.com**
  - Coordinator's email address
  - Receives copies of volunteer applications and program-related communications

## Email Usage by Feature

### Volunteer Applications
- **Primary recipient:** info@richmarkfoundation.com
- **CC recipient:** Abanihemstephanieogochukwu@richmarkfoundation.com
- **Purpose:** New volunteer applications are sent to main contact and coordinator

### Contact Form Submissions
- **Recipient:** info@richmarkfoundation.com
- **Purpose:** General inquiries and contact form submissions

### Newsletter Subscriptions
- **Confirmation sender:** info@richmarkfoundation.com
- **Purpose:** Newsletter subscription confirmations and communications

### Donation Inquiries
- **Primary recipient:** info@richmarkfoundation.com
- **CC recipient:** MichealVictor@richmarkfoundation.com
- **Purpose:** Donation-related inquiries and communications

## Configuration Files

The email addresses are centrally managed in:
- `src/config/emailConfig.js` - Main configuration file
- `.env.example` - Environment variables template

## Updating Email Addresses

To update email addresses:

1. **Edit the configuration file:**
   ```javascript
   // src/config/emailConfig.js
   export const FOUNDATION_EMAILS = {
     info: 'info@richmarkfoundation.com',
     director: 'MichealVictor@richmarkfoundation.com',
     coordinator: 'Abanihemstephanieogochukwu@richmarkfoundation.com',
     // ... other emails
   };
   ```

2. **Update environment variables if needed:**
   ```env
   VITE_FOUNDATION_EMAIL=info@richmarkfoundation.com
   VITE_DIRECTOR_EMAIL=MichealVictor@richmarkfoundation.com
   VITE_COORDINATOR_EMAIL=Abanihemstephanieogochukwu@richmarkfoundation.com
   ```

3. **The changes will automatically apply to:**
   - Email service functions
   - Contact forms
   - Footer display
   - Newsletter confirmations
   - Volunteer applications

## Notes

- All email addresses use the `@richmarkfoundation.com` domain
- The system is designed to be easily configurable through the central config file
- Email templates in EmailJS should be updated to match these addresses
- Make sure to update your EmailJS service configuration to use these email addresses
