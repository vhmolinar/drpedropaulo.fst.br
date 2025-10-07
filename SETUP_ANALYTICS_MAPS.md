# Setup Guide: Google Analytics & Maps

## ✅ **What's Already Done**

### 1. Google Maps
- ✅ Embedded in Contact section
- ✅ Uses coordinates from Schema.org data
- ✅ Lazy loading enabled for performance
- ✅ Accessibility title added

### 2. Google Analytics 4 Template
- ✅ Code structure added to Layout.astro
- ⚠️ **Needs your GA4 Measurement ID**

---

## 🔧 **Configuration Steps**

### **Step 1: Get Your Google Maps Embed URL**

The map currently uses approximate coordinates. To get the exact embed URL:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for: **"Avenida Cesário Alvim, 521, Uberlândia"**
3. Click **"Share"** button
4. Select **"Embed a map"** tab
5. Copy the `<iframe>` src URL
6. Replace in `src/components/Contact.astro` line 20:

```astro
<iframe
  src="PASTE_YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
  ...
></iframe>
```

**Current placeholder:**
```
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.3!2d-48.2772!3d-18.9186..."
```

---

### **Step 2: Setup Google Analytics 4**

#### **A. Create GA4 Property** (if you don't have one)

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Admin"** (bottom left)
3. Click **"Create Property"**
4. Fill in:
   - Property name: `Dr. Pedro Paulo Molinar`
   - Timezone: `Brazil Time (GMT-3)`
   - Currency: `Brazilian Real (BRL)`
5. Click **"Next"** → Select business info → **"Create"**
6. Choose **"Web"** platform
7. Enter:
   - Website URL: `https://drpedropaulo.fst.br`
   - Stream name: `Website`
8. Click **"Create stream"**

#### **B. Get Your Measurement ID**

After creating the stream, you'll see:
```
Measurement ID: G-XXXXXXXXXX
```

**Copy this ID!**

#### **C. Update Layout.astro**

Open `src/layouts/Layout.astro` and replace **BOTH** instances of `G-XXXXXXXXXX` with your real Measurement ID:

**Line 52:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID_HERE"></script>
```

**Line 59:**
```javascript
gtag('config', 'G-YOUR_ID_HERE', {
```

---

### **Step 3: Setup Event Tracking (Optional but Recommended)**

You can track button clicks for better insights. Add this to key CTAs:

#### **Track WhatsApp Button Clicks**

In `src/components/FloatingWhatsApp.astro`, `Hero.astro`, etc., add `onclick`:

```astro
<a
  href={whatsappLink}
  onclick="gtag('event', 'click', {'event_category': 'CTA', 'event_label': 'WhatsApp Button - Hero'});"
  ...
>
  Agendar Consulta
</a>
```

#### **Track Section Scrolls**

Add to `src/layouts/Layout.astro` inside the `<body>` tag:

```html
<script>
  // Track when users scroll to Services section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gtag('event', 'view_section', {
          'event_category': 'Engagement',
          'event_label': entry.target.id
        });
      }
    });
  });

  document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section);
  });
</script>
```

---

## 📊 **What You'll Track**

### **Automatic Tracking (GA4 Default)**
- ✅ Page views
- ✅ Session duration
- ✅ Bounce rate
- ✅ Traffic sources
- ✅ Device types (mobile/desktop)
- ✅ Geographic location

### **Custom Events (if you add tracking)**
- Button clicks (WhatsApp, CTAs)
- Section views (Hero, Services, etc.)
- Scroll depth
- Outbound links (Instagram)

---

## 🔍 **Verify Installation**

### **Method 1: Real-Time Reports**

1. Deploy your site
2. Go to Google Analytics
3. Click **"Reports"** → **"Realtime"**
4. Open your website in another tab
5. You should see yourself in the real-time view!

### **Method 2: Browser Console**

1. Open your website
2. Press `F12` (Developer Tools)
3. Go to **"Console"** tab
4. Type: `dataLayer`
5. You should see an array with GA events

### **Method 3: Tag Assistant**

1. Install [Google Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Visit your site
3. Click the extension icon
4. Should show "Google Analytics" tag found

---

## 🚨 **Important Notes**

### **Privacy & LGPD Compliance**

Since you're in Brazil, consider adding a cookie consent banner:

**Option A: Simple Notice** (add to Footer)
```html
<div class="text-center text-sm text-white/60 mt-4">
  Este site utiliza cookies e Google Analytics para melhorar sua experiência.
</div>
```

**Option B: Full Compliance** (recommended)
Use a service like:
- [Cookie Consent by Osano](https://www.osano.com/cookieconsent)
- [Cookiebot](https://www.cookiebot.com/)

### **Google Ads Conversion Tracking**

Your Google Ads ID (`AW-11167286553`) is already configured. To track conversions:

1. In Google Ads, create a conversion action
2. Add the conversion code to your "Thank You" page (if you have one)
3. Track WhatsApp button clicks as conversions

---

## ✅ **Quick Checklist**

- [ ] Get Google Maps embed URL for exact address
- [ ] Replace map iframe src in `Contact.astro`
- [ ] Create Google Analytics 4 property
- [ ] Copy Measurement ID (G-XXXXXXXXXX)
- [ ] Replace placeholder in `Layout.astro` (2 places)
- [ ] Deploy and verify in GA4 Real-Time reports
- [ ] (Optional) Add cookie consent notice
- [ ] (Optional) Set up custom event tracking

---

## 📞 **Need Help?**

If you get stuck:
1. Google Maps: [Maps Embed API docs](https://developers.google.com/maps/documentation/embed)
2. GA4: [Get started with Analytics](https://support.google.com/analytics/answer/9304153)
3. Event Tracking: [Measure events with gtag.js](https://developers.google.com/analytics/devguides/collection/gtagjs/events)
