# Vercel Test Site with FollowUpBoss Integration

Dead simple 4-page site with a form that posts to FollowUpBoss via Vercel serverless function.

## Files
- index.html
- about.html
- services.html
- contact.html
- form.html (NEW - contact form)
- style.css
- form-handler.js (NEW - client-side form handling)
- api/submit.js (NEW - serverless function for FUB integration)

## Instructions for GitHub Copilot

**Update navigation on all pages:**
1. Open index.html, about.html, services.html, and contact.html
2. Find the `<nav>` section in each file
3. Add this link after the Services link: `<a href="form.html">Form</a>`
4. Should look like:
   ```html
   <nav>
       <a href="index.html">Home</a>
       <a href="about.html">About</a>
       <a href="services.html">Services</a>
       <a href="form.html">Form</a>
   </nav>
   ```

## Deployment Steps

1. **Update all page navigation** (see instructions above for Copilot)

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add form with FUB integration"
   git push
   ```

3. **Add environment variable in Vercel**
   - Go to your project in Vercel dashboard
   - Click "Settings" tab
   - Click "Environment Variables" in left sidebar
   - Add new variable:
     - Name: `FUB_API_KEY`
     - Value: [Your FollowUpBoss API key]
   - Click "Save"
   - Vercel will auto-redeploy with the new variable

4. **Test the form**
   - Go to your-site.vercel.app/form.html
   - Fill out the form
   - Check FollowUpBoss for the new lead

## How It Works

1. User fills out form on form.html
2. form-handler.js captures submission, posts JSON to /api/submit
3. api/submit.js (serverless function) receives data
4. Function posts to FollowUpBoss API with your API key
5. Returns success/error to user

## Next Steps

Once this works, you can:
- Use this same pattern for client forms
- Embed form on Squarespace (posts to your Vercel endpoint)
- Add more fields, validation, spam protection
- Connect to other APIs (Mailchimp, webhooks, etc.)

