# Contact Form Setup Guide

This guide will help you set up the contact form to actually send emails to your foundation.

## 🚀 Quick Setup

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Set Up Email Service

1. **Add Email Service:**
   - Go to "Email Services" in your EmailJS dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Note down your **Service ID**

### Step 3: Create Email Template

1. **Create Contact Template:**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template:

```html
Subject: New Contact Form Message - {{subject}}

Hello,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Phone: {{phone}}

Sent on: {{contact_date}} at {{contact_time}}

---
Richmark Humanitarian Foundation
Contact Form System
```

2. **Template Variables to include:**
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{phone}}`
   - `{{contact_date}}`
   - `{{contact_time}}`

3. **Set the "To Email":** `info@richmarkfoundation.com`
4. **Note down your Template ID**

### Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key**
3. Copy it

### Step 5: Update Environment Variables

1. **Create/Update your `.env` file:**
```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. **Replace the placeholder values:**
   - `your_service_id_here` → Your EmailJS Service ID
   - `your_template_id_here` → Your EmailJS Template ID  
   - `your_public_key_here` → Your EmailJS Public Key

### Step 6: Test the Contact Form

1. **Restart your development server:**
   ```bash
   npm run dev
   ```

2. **Test the form:**
   - Go to your contact page
   - Fill out the form
   - Submit it
   - Check your email inbox

## 🔧 Current Contact Form Features

✅ **Real Email Sending** - No more demo messages!
✅ **Loading States** - Shows "Sending..." while processing
✅ **Success Messages** - Confirms when message is sent
✅ **Error Handling** - Shows helpful error messages
✅ **Form Validation** - Required fields are enforced
✅ **Professional Design** - Clean, user-friendly interface

## 📧 Email Delivery

When someone submits the contact form:

1. **You receive an email at:** `info@richmarkfoundation.com`
2. **Email contains:**
   - Sender's name and email
   - Subject line
   - Full message
   - Phone number (if provided)
   - Timestamp

3. **User sees:**
   - Success message: "✅ Thank you for your message! We will get back to you soon."
   - Or error message with your direct email for backup

## 🛠️ Troubleshooting

### If emails aren't sending:

1. **Check your .env file** - Make sure all variables are set correctly
2. **Verify EmailJS setup** - Test sending from EmailJS dashboard
3. **Check browser console** - Look for error messages
4. **Email limits** - Free EmailJS accounts have monthly limits

### If you see "Email service is not configured":

- Your EmailJS credentials are not set up properly
- Users will see a message to contact you directly at `info@richmarkfoundation.com`

## 💡 Pro Tips

1. **Test thoroughly** before going live
2. **Set up email notifications** in EmailJS dashboard
3. **Monitor your monthly email quota**
4. **Consider upgrading** EmailJS plan for higher limits
5. **Add auto-reply templates** for better user experience

---

**Your contact form is now fully functional! 🎉**

No more demo messages - real emails will be sent to your foundation inbox.
