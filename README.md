# P & M Tax Consult - Modern Website

A modern, responsive website for P & M Tax Consult, built with Vite + React + TypeScript + Tailwind CSS.

## 🚀 Quick Start Checklist

**IMMEDIATE ACTION REQUIRED AFTER DEPLOYMENT:**

- [ ] Replace `public/images/logo.svg` with your actual logo
- [ ] Replace `public/images/founder.jpg` with founder photo  
- [ ] Deploy to Netlify for FREE form handling (no environment variables needed!)
- [ ] Set `VITE_CALENDLY_URL` environment variable (optional)

## 📋 Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Export static files
npm run export
```

## 🔧 Environment Variables (Optional)

Create a `.env.local` file in the project root ONLY if you want Calendly:

```env
# Calendly URL for inline booking widget (optional)
VITE_CALENDLY_URL=https://calendly.com/your-username/consultation
```

### 🆓 FREE Form Handling with Netlify:

**NO SETUP REQUIRED!** Forms work automatically when deployed to Netlify:

1. Deploy to Netlify (FREE)
2. Forms automatically work - no configuration needed
3. Receive form submissions via email
4. View submissions in Netlify dashboard
5. **ZERO recurring costs forever!**

### Setting up Calendly (Optional):

1. Create a Calendly account
2. Set up your consultation event type
3. Copy the Calendly URL
4. Set `VITE_CALENDLY_URL` to this URL
5. Uncomment the Calendly section in `src/components/Booking.tsx`

## 📁 Project Structure

```
├── content/                 # Editable content files (JSON)
│   ├── site.json           # Main site content
│   ├── services.json       # Services/practice areas
│   ├── news.json          # News & insights
│   └── testimonials.json  # Client testimonials
├── public/
│   └── images/
│       ├── logo.svg        # TODO: Replace with actual logo
│       ├── founder.jpg     # TODO: Replace with founder photo
│       └── legacy/         # Original images from static site
├── src/
│   ├── components/         # React components
│   ├── data/             # Content data layer
│   ├── types/            # TypeScript definitions
│   └── __tests__/        # Test files
└── legacy/               # Original static site files
```

## 🎨 Customization

### Colors
Primary colors are defined in `tailwind.config.js`:
- Primary: `#0b5fff` (blue)
- Secondary: `#0a1f44` (dark blue)
- Accent: `#274b9f` (medium blue)

### Content Management
All content is stored in JSON files in the `/content` folder:
- Edit `content/site.json` for main site information
- Edit `content/services.json` for practice areas
- Edit `content/news.json` for news items
- Edit `content/testimonials.json` for client testimonials

## 📝 Forms & Booking

### Contact Form
- Uses Netlify Forms (100% FREE)
- Includes honeypot spam protection
- Client-side validation for required fields
- **Email destination**: prabhanshutripathi534@gmail.com
- **No recurring costs ever!**

### Booking Form
- Uses Netlify Forms (100% FREE)
- Includes preferred date/time selection
- Default time slots: 09:00, 10:00, 11:00, 14:00, 15:00, 16:00 IST
- Hidden `preferred_iso_datetime` field for calendar integration
- **Email destination**: prabhanshutripathi534@gmail.com
- **No recurring costs ever!**

### Zapier Integration (Optional)
For automatic calendar booking, set up a Zapier recipe:

**Trigger:** Netlify Forms new submission
**Action:** Google Calendar - Create Event

**Field Mappings:**
- Event Title: `service` + `name`
- Description: `message` + contact details
- Start Time: `preferred_iso_datetime`
- Attendee: `email`

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch
```

Tests include:
- Contact form validation
- Date validation (not in past)
- Email format validation

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized for all screen sizes

## 🚀 Deployment

### Netlify (Recommended - FREE Forms!)
1. Connect your GitHub repository to Netlify
2. Deploy - forms work automatically!
3. **ZERO recurring costs forever!**

### Vercel (Alternative)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard (only if using Calendly)
3. Deploy

### Static Export
```bash
npm run export
```
Upload the `dist` folder to your web server.

## 🔍 SEO & Performance

- Semantic HTML structure
- Meta tags for social sharing
- Optimized images
- Fast loading with Vite
- Mobile-optimized

## 🛠️ Development

### Adding New Components
1. Create component in `src/components/`
2. Import and use in `src/App.tsx`
3. Add TypeScript types if needed

### Modifying Content
- Edit JSON files in `/content` folder
- Changes require rebuild: `npm run build`

### Styling
- Uses Tailwind CSS utility classes
- Custom styles in `src/index.css`
- Component-specific styles with Tailwind

## 📞 Support

For technical support or customization requests, contact the development team.

---

**Migration completed from static HTML site to modern React application.**
