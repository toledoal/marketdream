# Market Dream Solutions - Website

A modern, multi-language marketing website for Market Dream Solutions, built as a static site ready for GitHub Pages and Firebase Hosting.

## Features

- 🌍 **Multi-language Support**: English, Spanish, and Portuguese
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🎨 **Modern Design**: Beautiful UI with Tailwind CSS
- ⚡ **Fast Loading**: Static site optimized for performance
- 🔥 **GitHub Pages Ready**: Configured for GitHub Pages hosting
- ☁️ **Firebase Ready**: Also configured for Firebase Hosting

## Pages

- **Home** (`index.html`): Hero section, services overview, and company highlights
- **Services** (`services.html`): Detailed information about all services
- **Products** (`products.html`): Software licensing options and product information
- **Contact** (`contact.html`): Contact form and company information

## Services Highlighted

1. **Planning & Design**: Strategic planning and innovative design
2. **Custom Development**: Tailored software solutions
3. **Cloud Deployment**: Seamless cloud infrastructure deployment
4. **On-Premise Installation**: Professional installation on client infrastructure
5. **Product Management**: Ongoing management and optimization
6. **Software Licensing**: Flexible licensing for businesses, schools, and groups

## Setup and Deployment

### GitHub Pages Deployment

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Choose branch: `main`
   - Choose folder: `/ (root)`
   - Click Save

2. Your site will be live at: `https://toledoal.github.io/marketdream/`

3. **Custom Domain** (optional):
   - Add a `CNAME` file with your domain name
   - Configure DNS settings as per GitHub Pages documentation

### Local Development

1. Simply open `index.html` in your browser, or
2. Use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

### Deploy to Firebase Hosting (Alternative)

1. **Install Firebase CLI** (if not already installed):
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase in your project** (if not already done):
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create a new one
   - Set public directory to `.` (current directory)
   - Configure as single-page app: **No** (we have multiple HTML files)
   - Set up automatic builds: **No**

4. **Deploy to Firebase**:
   ```bash
   firebase deploy --only hosting
   ```

5. Your site will be live at: `https://YOUR-PROJECT-ID.web.app`

## Customization

### Adding Images

Place images in an `images/` directory and reference them in your HTML:
```html
<img src="images/your-image.jpg" alt="Description">
```

Currently using Unsplash images via CDN. To use local images, download them and place in an `images/` folder.

### Updating Content

- **Text Content**: Edit the HTML files directly
- **Translations**: Update `js/i18n.js` to modify translations
- **Styling**: Modify `css/styles.css` or add Tailwind classes

### Changing Colors

The site uses a purple/indigo color scheme. To change colors:
1. Update Tailwind classes in HTML (e.g., `bg-indigo-600` → `bg-blue-600`)
2. Update gradient colors in `css/styles.css`

## Language Support

The site supports three languages:
- **English (en)**: Default language
- **Spanish (es)**: Español
- **Portuguese (pt)**: Português

Users can switch languages using the dropdown in the navigation. The selected language is saved in localStorage.

## Contact Form

The contact form is currently set up for client-side validation. To make it functional:

1. Set up a backend service (GitHub Actions with serverless function, Firebase Functions, or another service)
2. Update `js/contact.js` to send form data to your backend
3. Configure email sending service (e.g., SendGrid, Mailgun, or Firebase Functions with Nodemailer)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Market Dream Solutions. All rights reserved.

## Support

For questions or issues, please contact: info@marketdreamsolutions.com
