# 🔧 Contact Form Troubleshooting

## Current Issue
Form is showing error message when submitting.

## Quick Fixes

### Option 1: Test Without JavaScript (Simplest)
1. Temporarily remove the JavaScript form handler
2. Let the form submit normally to Netlify
3. This will work automatically with Netlify Forms

### Option 2: Check Netlify Forms Setup
1. Go to Netlify Dashboard → Your Site → Forms
2. Make sure the form name "contact" appears
3. If not, the form might not be detected yet

### Option 3: Use Formspree (Alternative - Works Immediately)
If Netlify Forms isn't working, use Formspree:

1. Sign up at: https://formspree.io (free tier available)
2. Get your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
3. Update the form in `index.html`:
   ```html
   <form 
     action="https://formspree.io/f/YOUR_FORM_ID"
     method="POST"
     id="contactForm"
   >
   ```
4. Remove `data-netlify="true"` attribute
5. Update JavaScript to submit to Formspree endpoint

### Option 4: Use EmailJS (Direct Email)
1. Sign up at: https://www.emailjs.com
2. Create email service
3. Get Service ID, Template ID, Public Key
4. Replace form submission code

## Debugging Steps

1. **Check Browser Console:**
   - Open browser DevTools (F12)
   - Go to Console tab
   - Submit form and check for errors

2. **Check Network Tab:**
   - Open DevTools → Network tab
   - Submit form
   - Look for POST request to "/"
   - Check response status and body

3. **Test Form Directly:**
   - Remove JavaScript temporarily
   - Let form submit normally
   - Check if Netlify receives it

## Common Issues

### Issue: Form not detected by Netlify
**Solution:** Make sure `data-netlify="true"` is in the form tag

### Issue: CORS errors
**Solution:** This shouldn't happen with Netlify Forms, but if it does, use Formspree or EmailJS

### Issue: Form submits but no email
**Solution:** 
- Check Netlify Dashboard → Forms → contact
- Set up email notifications in Netlify settings

## Recommended: Use Formspree for Reliability

Formspree is more reliable for immediate setup:

1. **Sign up:** https://formspree.io
2. **Get endpoint:** After signup, you'll get a form endpoint
3. **Update form action:** Change form action to your Formspree endpoint
4. **Done!** Form will work immediately

Would you like me to set up Formspree instead? It's free and works immediately!

