# Richmark Foundation - Email Setup Guide

## 🚀 Your volunteer form now sends real emails!

### What's Been Added:

1. **Real Email Integration** - EmailJS service for sending emails
2. **Volunteer Application Emails** - Sent to foundation email automatically
3. **Confirmation Emails** - Sent to volunteers after submission
4. **Form Validation** - Ensures all required fields are filled
5. **Loading States** - Shows progress during email sending
6. **Success/Error Messages** - Clear feedback for users

---

## 📧 EmailJS Setup Instructions:

### Step 1: Create EmailJS Account

1. **Go to [EmailJS.com](https://www.emailjs.com)**
2. **Sign up for a free account**
3. **Verify your email address**

### Step 2: Create Email Service

1. **Go to Email Services** in your EmailJS dashboard
2. **Click "Add New Service"**
3. **Choose your email provider:**
   - **Gmail** (recommended for testing)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Custom SMTP** (for foundation email)
4. **Connect your foundation email:** `volunteer@richmarkfoundation.org.ng`
5. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Templates

#### **Template 1: Volunteer Application (to Foundation)**

1. **Go to Email Templates** → **Create New Template**
2. **Template Name:** `Volunteer Application - Richmark Foundation`
3. **Template ID:** `template_volunteer`
4. **Email Template:**

```html
Subject: New Volunteer Application - {{from_name}}

Dear Richmark Foundation Team,

A new volunteer application has been submitted:

VOLUNTEER DETAILS:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Age: {{age}}

VOLUNTEER INTERESTS:
{{interests}}

AVAILABILITY:
{{availability}}

EXPERIENCE:
{{experience}}

MOTIVATION:
{{motivation}}

APPLICATION SUBMITTED:
Date: {{application_date}}
Time: {{application_time}}

Please review and contact the volunteer at {{from_email}} or {{phone}}.

Best regards,
Richmark Foundation Website
```

#### **Template 2: Volunteer Confirmation (to Volunteer)**

1. **Create another template**
2. **Template ID:** `template_volunteer_confirmation`
3. **Email Template:**

```html
Subject: Thank You for Your Volunteer Application - Richmark Foundation

Dear {{volunteer_name}},

Thank you for your interest in volunteering with Richmark Foundation!

We have received your application and our volunteer coordinator will review it shortly. We will contact you within 3-5 business days to discuss next steps.

YOUR APPLICATION DETAILS:
- Areas of Interest: {{interests}}
- Contact Email: {{to_email}}

WHAT'S NEXT:
1. Our team will review your application
2. We'll contact you for a brief interview
3. You'll receive volunteer orientation information
4. We'll match you with suitable volunteer opportunities

If you have any questions, please contact us:
- Email: {{foundation_email}}
- Phone: {{foundation_phone}}

Thank you for wanting to make a difference in Nigerian communities!

Best regards,
Richmark Foundation Volunteer Team
```

### Step 4: Get Your API Keys

1. **Go to Account** → **API Keys**
2. **Copy your Public Key** (starts with something like `user_abc123`)
3. **Keep this key safe** - you'll need it for the website

### Step 5: Configure Environment Variables

1. **Copy the template:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` file with your EmailJS details:**
   ```env
   VITE_EMAILJS_SERVICE_ID=service_your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=template_volunteer
   VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID=template_volunteer_confirmation
   VITE_EMAILJS_PUBLIC_KEY=user_your_actual_public_key
   ```

### Step 6: Test the System

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Go to the volunteer page:**
   - Navigate to `/volunteer`
   - Fill in the form completely
   - Click "Submit Application"

3. **Check your emails:**
   - Foundation email should receive the application
   - Volunteer should receive confirmation email

---

## 📋 Email Templates You Need:

### **Required Templates:**
- ✅ **Volunteer Application** (`template_volunteer`)
- ✅ **Volunteer Confirmation** (`template_volunteer_confirmation`)

### **Optional Templates:**
- 📧 **Contact Form** (`template_contact`)
- 📧 **Donation Receipt** (`template_donation_receipt`)

---

## 🔧 Features Available:

### **Volunteer Form:**
- ✅ **Real email sending** to foundation
- ✅ **Automatic confirmation** to volunteer
- ✅ **Form validation** with error messages
- ✅ **Loading states** during submission
- ✅ **Success/error feedback** for users

### **Email Content:**
- ✅ **Complete volunteer details** in foundation email
- ✅ **Professional confirmation** to volunteer
- ✅ **Contact information** for follow-up
- ✅ **Application timestamp** for tracking

---

## 💰 EmailJS Pricing:

### **Free Plan:**
- 200 emails/month
- Perfect for testing and small foundations

### **Paid Plans:**
- Start at $15/month for 1,000 emails
- Upgrade as your foundation grows

---

## 🔒 Security Features:

1. **No server required** - All handled client-side
2. **Secure API keys** - Public key is safe to use in frontend
3. **Spam protection** - Built-in rate limiting
4. **Email validation** - Ensures valid email addresses

---

## 🆘 Troubleshooting:

### **Common Issues:**

1. **Emails not sending:**
   - Check API keys in `.env` file
   - Verify template IDs match exactly
   - Check browser console for errors

2. **Emails going to spam:**
   - Use your foundation's official email
   - Set up SPF/DKIM records
   - Ask recipients to whitelist your email

3. **Template errors:**
   - Ensure all variables are spelled correctly
   - Test templates in EmailJS dashboard

---

## 📞 Support:

- **EmailJS Documentation:** [docs.emailjs.com](https://www.emailjs.com/docs/)
- **EmailJS Support:** Available in their dashboard
- **Foundation Email:** volunteer@richmarkfoundation.org.ng

---

**Your Richmark Foundation volunteer form now sends real emails automatically! 🎉📧**

Every volunteer application will be sent directly to your foundation email, and volunteers will receive professional confirmation emails.
