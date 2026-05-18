I'll give you a detailed **week-by-week action plan** with exact steps you can follow. This is your SEO roadmap.

---

# **WEEK 1 (This Week): Foundation Setup**

## **Task 1: Create OG Image (1200x630px)** — 20 minutes

### Step-by-step with Canva (Easiest):

1. **Go to Canva.com** → Sign up (free)
2. **Click "Create a design"** → Search "1200x630" → Select "Custom size"
3. **Design your image:**
   - Background: Use your brand color `#0B0616` (dark purple)
   - Add a lighter accent color or gradient
   - Add your photo/headshot (top-right corner)
   - Add text in the center:
     ```
     Zihadul Islam
     Full-Stack Developer
     ```
   - Add your domain: `zihadulislam.me` (bottom-right)
   - Keep it clean, professional, minimal

4. **Download as PNG**
5. **Save file as `og-image.png`** (exact name)
6. **Add to your project:**
   ```bash
   # Copy the file to public folder
   cp ~/Downloads/og-image.png /home/zihad/Documents/My-portfolio-new/public/
   ```

7. **After deploying:** The image will be available at `https://zihadulislam.me/og-image.png`

**Test it works:** 
- Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/sharing/)
- Enter `https://zihadulislam.me/`
- Should show your OG image preview

---

## **Task 2: Verify Google Search Console** — 15 minutes

### Option A: Via Meta Tag (Simplest)

1. **Go to [Google Search Console](https://search.google.com/search-console)**
2. **Click "Start now"** → Sign in with Google account
3. **Select "URL prefix"** → Type `https://zihadulislam.me/`
4. **Click "Continue"**
5. **Choose verification method: "HTML tag"**
6. **You'll see:**
   ```html
   <meta name="google-site-verification" content="abc123def456..." />
   ```
7. **Copy the `content="..."` value** (the string inside quotes)
8. **Check your current index.html:**

Let me read the file first to see what's there: 

Read [](file:///home/zihad/Documents/My-portfolio-new/index.html#60-60), lines 60 to 80

Perfect! I can see the placeholders are ready. Here's what to do:

### **Step-by-Step Google Search Console Verification:**

9. **You see a verification code like:** 
   ```
   1a2b3c4d5e6f7g8h9i0j...
   ```

10. **Update your index.html** with the code:
    - Open index.html
    - Find line 65: `<meta name="google-site-verification" content="" />`
    - Replace empty `""` with your code from Google:
      ```html
      <meta name="google-site-verification" content="1a2b3c4d5e6f7g8h9i0j..." />
      ```

11. **Save the file** → Build → Deploy to your server:
    ```bash
    npm run build
    # Then deploy the dist/ folder to your hosting
    ```

12. **Go back to Google Search Console** → Click **"Verify"**
13. **Wait 1–2 minutes** → Google checks if meta tag is on your site
14. **Success!** You'll see: "Ownership verified" ✅

### **Next: Submit Your Sitemap**

15. **In Google Search Console**, go to **"Sitemaps"** (left menu)
16. **Click "Add/Test Sitemap"** → Type:
    ```
    https://zihadulislam.me/sitemap.xml
    ```
17. **Click "Submit"**
18. **You should see:** 
    - Status: "Success" ✅
    - URLs found: 8 (your homepage + 7 projects)

✅ **Done with Google Search Console verification!**

---

## **Task 3: Set Up Google Analytics & Add GA ID** — 10 minutes

### **Step 1: Create Google Analytics Account**

1. **Go to [Google Analytics](https://analytics.google.com)**
2. **Click "Start measuring"** → Sign in with Google
3. **Set up new account:**
   - Account name: `Zihadul Islam Portfolio`
   - Property name: `zihadulislam.me`
   - Reporting time zone: Select your timezone
   - Currency: USD (or your currency)
4. **Click "Create"**
5. **Accept terms** → Click "I Accept"

### **Step 2: Find Your Measurement ID**

6. **You'll see:** 
   ```
   Measurement ID: G-XXXXXXXXXX
   ```
   (Looks like `G-ABC12DEF34`)

7. **Copy this ID** (you'll need it next)

### **Step 3: Update Your index.html with GA ID**

8. **Open** index.html
9. **Find these two lines (~72 and ~78):**
   ```html
   src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_GA_ID"
   ```
   and
   ```html
   gtag('config', 'G-YOUR_GA_ID')
   ```

10. **Replace `G-YOUR_GA_ID` with your actual ID**, for example:
    ```html
    src="https://www.googletagmanager.com/gtag/js?id=G-ABC12DEF34"
    ```
    and
    ```html
    gtag('config', 'G-ABC12DEF34')
    ```

Let me do this for you automatically - just provide me your GA ID and I'll update it:

Actually, let me create a template file to show you exactly what needs to change: 

Read [](file:///home/zihad/Documents/My-portfolio-new/index.html#65-65), lines 65 to 85

### **Here's the template - Replace these two lines:**

**BEFORE (Current):**
```html
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_GA_ID"
></script>
```

**AFTER (With your actual ID - example: G-ABC12DEF34):**
```html
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-ABC12DEF34"
></script>
```

**And also replace:**
```html
gtag('config', 'G-YOUR_GA_ID')
```

**With:**
```html
gtag('config', 'G-ABC12DEF34')
```

### **Step 4: Build & Deploy**

11. **After updating, run:**
    ```bash
    npm run build
    ```

12. **Deploy the dist folder** to your hosting (Netlify, Vercel, etc.)

### **Step 5: Verify Analytics Is Working**

13. **Go back to Google Analytics** (might take 1–2 hours to show data)
14. **Go to "Real-time"** in the left menu
15. **Open your site in a new tab:** `https://zihadulislam.me/`
16. **You should see "1 active user" in Analytics** ✅

✅ **WEEK 1 Complete!** You now have:
- ✅ OG Image created & deployed
- ✅ Google Search Console verified
- ✅ Sitemap submitted
- ✅ Google Analytics tracking visitors

---

# **WEEK 2 (Next Week): Performance & Speed**

## **Task 1: Run Lighthouse Audit** — 20 minutes

### **Step 1: Open Lighthouse**

1. **Go to your live site:** `https://zihadulislam.me/`
2. **Press `F12`** → Open DevTools
3. **Find "Lighthouse"** tab (if not visible: click **">> Tabs"** → look for it)
4. **If Lighthouse isn't there:**
   - Right-click anywhere → "Inspect"
   - Click **"Lighthouse"** tab
5. **Select these checkboxes:**
   - ✅ Mobile (or Desktop - test both)
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO

6. **Click "Analyze page load"** → Wait 30–60 seconds

### **Step 2: Understand Your Scores**

**You'll see 5 scores (0–100):**
- **Performance**: How fast your site loads
- **Accessibility**: Can blind users, keyboard users navigate?
- **Best Practices**: Security, browser compatibility
- **SEO**: Search engine visibility
- **PWA**: (Can skip for portfolio)

**Target scores:**
- 🟢 Green: 90–100
- 🟡 Yellow: 50–89
- 🔴 Red: 0–49

### **Step 3: Fix Top 3 Performance Issues**

Lighthouse will list issues like:

#### **Common Issue #1: Large Images (Most Common)**
**Problem:** Hero/project images too big
**Fix:**
- Go to [TinyPNG.com](https://tinypng.com)
- Drag your project images
- Download compressed versions
- Replace in your public folder (if local)
- For Cloudinary images: Already optimized ✅

#### **Common Issue #2: Unused CSS/JavaScript**
**Problem:** Loading code you don't use
**Fix:**
- This is usually build optimization (not your concern)
- Vite already handles this ✅

#### **Common Issue #3: Missing Alt Text**
**Problem:** Images without descriptive alt text
**Fix:**
- Find all `<img>` tags without alt text
- Add descriptive alt text:
  ```html
  <!-- BEFORE -->
  <img src="project.png" />
  
  <!-- AFTER -->
  <img src="project.png" alt="Multi-Sector Booking Platform dashboard" />
  ```
- Your project cards should already have alt text ✅

#### **Common Issue #4: Poor Web Font Loading**
**Problem:** Fonts taking too long to load
**Fix:**
- Add `font-display: swap` to any `@font-face` rules
- Or preload critical fonts in index.html:
  ```html
  <link rel="preload" href="/fonts/myfont.woff2" as="font" type="font/woff2" crossorigin>
  ```

### **Step 4: Document Your Baseline Scores**

**Create a simple Google Doc or Notion page:**
```
LIGHTHOUSE BASELINE (May 16, 2026)
===================================
Mobile:
  - Performance: 75
  - Accessibility: 95
  - Best Practices: 90
  - SEO: 100

Desktop:
  - Performance: 85
  - Accessibility: 95
  - Best Practices: 90
  - SEO: 100

Top 3 Issues:
1. Image compression (saves 200KB)
2. Unused CSS (saves 50KB)
3. Render-blocking resources (saves 0.5s)

Target: 90+ across all metrics
```

### **Step 5: Retest After Fixes**

- Make fixes
- Run Lighthouse again
- Compare scores
- Goal: **All scores 90+**

✅ **WEEK 2 Complete!** Your site is now fast and accessible.

---

# **WEEK 3–4 (This Month): Content & Authority**

## **Task 1: Write 2–3 Blog Posts** — 3–5 hours total

### **Why Blog Posts Help SEO:**
- Gives search engines more content to rank
- More keywords = more searches find you
- Shows expertise = builds authority
- Each post = potential backlink source

### **Blog Post Ideas (Pick 2–3):**

#### **Post #1: "How I Built the Multi-Sector Booking Platform"**
- **Length:** 1,200–1,500 words
- **Structure:**
  ```
  1. Introduction (150 words)
     - What is a booking platform?
     - Why is it hard to build?
  
  2. Architecture Overview (300 words)
     - Tech stack (React, Node, Database)
     - System design diagram
     - Why these technologies?
  
  3. Key Features Breakdown (600 words)
     - Real-time booking calendar
     - Staff management system
     - SMS/Email notifications
     - Each with code snippets or screenshots
  
  4. Challenges & Solutions (300 words)
     - Problem: Handling concurrent bookings
     - Solution: Database locking + redis queue
  
  5. Results & Metrics (150 words)
     - How many users?
     - Revenue impact?
     - Performance metrics?
  
  6. Lessons Learned (200 words)
     - What would you do differently?
     - Key takeaways for developers
  ```

#### **Post #2: "Top 5 Scalability Mistakes I Made (And Fixed)"**
- **Length:** 1,000–1,200 words
- **Content:**
  - Mistake #1: N+1 database queries → Solution: Query optimization, caching
  - Mistake #2: Monolithic architecture → Solution: Microservices
  - Mistake #3: No monitoring → Solution: Application logging
  - Mistake #4: Hardcoded configurations → Solution: Environment variables
  - Mistake #5: Skipping tests → Solution: Test-driven development

#### **Post #3: "Building E-Commerce with Dynamic Pricing"**
- **About:** Your HierroMarket project
- **Topics:**
  - How to implement dynamic pricing engines
  - Formula-based pricing (Excel integration)
  - Real-time inventory management
  - Shipping calculation logic

### **Where to Publish (Best for SEO):**

**Option 1: Dev.to** (BEST for new writers)
- Go to [Dev.to](https://dev.to)
- Sign up → Create account
- Click "Write a Post"
- Paste your article
- Add tags: `react` `nodejs` `webdevelopment` `fullstack`
- Include link: "Check my portfolio: zihadulislam.me"
- Publish → Share on Twitter/LinkedIn

**Option 2: Hashnode** (Good for technical credibility)
- Go to [Hashnode.com](https://hashnode.com)
- Sign up
- Click "Create Story"
- Include portfolio link in author bio & article
- Hashnode shows high in search results

**Option 3: Medium** (Largest audience)
- Go to [Medium.com](https://medium.com)
- Great for reach, but less "developer credibility"
- Use for broader topics only

**Option 4: Your Own Blog Component** (Best for SEO)
- Use your React Blog component in your portfolio
- Articles appear on your site directly
- Links back to projects = more SEO value
- Update Blog.jsx to fetch from your blog data

### **Blog Post Publishing Checklist:**

- [ ] Write first draft (2–3 hours)
- [ ] Edit & proofread (30 min)
- [ ] Add code snippets/screenshots (30 min)
- [ ] Publish to Dev.to
- [ ] Publish to Hashnode
- [ ] Share on Twitter (tag @dev_to, @hashnode)
- [ ] Share on LinkedIn with portfolio link
- [ ] Add internal link: "See this project on my portfolio"

---

## **Task 2: Build 5 High-Quality Backlinks** — 5–7 hours

### **What is a Backlink?**
A link from another website pointing to yours. Search engines see backlinks as "votes of confidence" = higher rankings.

### **Backlink Strategy (5 links in 4 weeks):**

#### **Backlink #1: LinkedIn Profile Link** ✅ (5 min)
1. Go to [LinkedIn.com](https://linkedin.com)
2. Edit profile → Scroll to "Headline"
3. Add: `Full-Stack Developer | React | Node.js | Visit my portfolio: zihadulislam.me`
4. Save
5. Go to "About" section → Add portfolio link:
   ```
   Check out my portfolio and projects at https://zihadulislam.me
   ```

**Why?** LinkedIn is #2 most trusted domain after Wikipedia. Backlink = SEO boost ✅

#### **Backlink #2: GitHub Profile README** ✅ (10 min)
1. Go to [GitHub.com](https://github.com/yourusername)
2. Create repo named exactly: `yourusername` (e.g., `zihadulislam/zihadulislam`)
3. GitHub shows a README on your profile
4. Click "Add a README"
5. Edit with this template:
   ```markdown
   # 👋 Hi, I'm Zihadul Islam
   
   Full-stack developer specializing in scalable web applications.
   
   ## 🔗 Links
   - **Portfolio**: [zihadulislam.me](https://zihadulislam.me)
   - **LinkedIn**: [linkedin.com/in/zihadulislam](https://linkedin.com/in/zihadulislam)
   - **Twitter**: [@ZihadulIslam](https://twitter.com/ZihadulIslam)
   
   ## 💼 Featured Projects
   - [Multi-Sector Booking Platform](https://zihadulislam.me/projects/Multi-Sector%20Booking%20Platform)
   - [HierroMarket eCommerce](https://zihadulislam.me/projects/HierroMarket%20Custom%20eCommerce%20Platform)
   
   ## 🛠️ Tech Stack
   React • Node.js • TypeScript • Azure • Tailwind CSS
   ```
6. Commit → Save

**Why?** GitHub is high authority. Your profile README shows up on Google searches.

#### **Backlink #3: Twitter/X Bio** ✅ (5 min)
1. Go to [Twitter.com](https://twitter.com)
2. Click profile → "Edit profile"
3. In Bio, add: `Building scalable web apps 🚀 Full-stack developer | Portfolio: zihadulislam.me`
4. Also add link in "Website" field: `https://zihadulislam.me`
5. Save

**Why?** Twitter links carry some SEO weight, especially if you have followers.

#### **Backlink #4: Dev.to Profile Link** ✅ (5 min)
1. After publishing your first blog post on Dev.to
2. Go to Settings → Profile
3. Add your portfolio URL to "Website"
4. On each article, in author bio, link: "See my full portfolio at zihadulislam.me"

**Why?** Dev.to is high authority. Your author profile gets searched.

#### **Backlink #5: Relevant Tech Communities** (1–2 hours)

**Option A: Answer Questions on Stack Overflow**
- Go to [StackOverflow.com](https://stackoverflow.com)
- Find questions tagged `react`, `nodejs`, etc.
- Answer 10 good questions with helpful code snippets
- In your profile, link your portfolio
- When users find your helpful answer → They visit your profile → They see your portfolio link

**Option B: Participate in Dev.to Community**
- Comment thoughtfully on other Dev.to posts
- In your Dev.to profile, link your portfolio
- Build reputation → More visibility

**Option C: Guest Post**
- Reach out to 3–5 tech blogs:
  - [CSS-Tricks.com](https://css-tricks.com)
  - [Smashing Magazine](https://smashingmagazine.com)
  - [LogRocket Blog](https://blog.logrocket.com)
- Pitch: "I'd like to write about [topic] for your blog"
- Include link back to your portfolio in author bio

**Option D: Tech Directories** (Easy, free)
- Submit to [DevProjects](https://www.devprojects.io)
- Submit to [Behance](https://www.behance.net) (portfolio platform)
- Submit to [Dribbble](https://dribbble.com) (for design work)

### **Backlink Tracking:**

Keep a simple spreadsheet:
```
Source | URL | Authority | Date Added | Status
LinkedIn | linkedin.com/in/zihadulislam | High | May 20 | ✅
GitHub | github.com/zihadulislam | High | May 20 | ✅
Dev.to Profile | dev.to/zihadulislam | High | May 22 | ✅
Stack Overflow | stackoverflow.com/users/... | Very High | May 25 | ✅
Guest Post (LogRocket) | blog.logrocket.com | Very High | June 5 | ✅
```

Check your backlinks later with [Ahrefs Backlink Checker](https://ahrefs.com/backlink-checker) or [Moz Link Explorer](https://moz.com/link-explorer) (free limited version).

---

# **ONGOING: Monitor GSC & Analytics Monthly**

## **What to Check Each Month:**

### **Google Search Console (Monday Morning Ritual):**

1. **Go to [Google Search Console](https://search.google.com/search-console)**
2. **Check "Performance" tab:**
   - How many clicks? (Goal: Growing)
   - How many impressions? (Goal: Growing)
   - Average position? (Goal: Top 10 for your target keywords)
   - Click-through rate (CTR)? (Goal: >3%)

3. **Check "Coverage" tab:**
   - Any errors? Fix them immediately
   - Any warnings? Address within 48 hours

4. **Check "Links" tab:**
   - Are your backlinks showing up?
   - Who's linking to you?
   - What anchor text are they using?

5. **Check "Search results" appearance:**
   - Is your OG image showing?
   - Is your meta description correct?

### **Google Analytics (Monthly Report):**

1. **Go to [Google Analytics](https://analytics.google.com)**
2. **Check these metrics:**
   - Total users: Growing?
   - Session duration: Are visitors staying?
   - Bounce rate: Should be < 50%
   - Traffic sources: Where do visitors come from?
     - Organic (Google search) - Goal: 50%+
     - Direct (bookmarks)
     - Referral (backlinks)
     - Social

3. **Deep dive:**
   - Click on "Pages" → See which projects get most views
   - Click on "Conversions" (if you set up goals)
   - Check what keywords bring visitors

### **Monthly Action Items:**

```
MONTHLY SEO CHECKLIST
=====================

[ ] Check GSC Performance (2 min)
[ ] Check GSC Coverage for errors (2 min)
[ ] Review top pages in Analytics (3 min)
[ ] Check bounce rate (1 min)
[ ] Verify backlinks (5 min)
[ ] Write 1 new blog post (2–3 hours)
[ ] Build 1 new backlink (30 min–1 hour)
[ ] Update sitemap if added new pages (5 min)
[ ] Monitor search rankings for target keywords (5 min)

Total: ~3–4 hours/month for ongoing maintenance
```

### **Keywords to Monitor (Add to Search Console):**

Create a list of target keywords:
1. "Full-stack developer" - High competition
2. "React developer portfolio" - Medium
3. "Node.js booking platform" - Niche
4. "E-commerce platform builder" - Medium
5. "Web application developer" - Your area

**Check monthly:**
- Are you ranking for these?
- What's your position?
- Which keywords have the most impressions but low CTR? (Improve meta description)

---

## **Summary: Your 30-Day Action Plan**

| Week | Tasks | Time |
|------|-------|------|
| **Week 1** | Create OG image, verify GSC, set up GA | 45 min |
| **Week 2** | Run Lighthouse, fix top 3 issues | 2–3 hours |
| **Week 3** | Write 1–2 blog posts | 3–5 hours |
| **Week 4** | Build 5 backlinks, submit guest post | 5–7 hours |
| **Ongoing** | Monthly monitoring & optimization | 3–4 hours |

**Total for Month 1: ~13–18 hours**

---

**What happens next?**
- **Weeks 2–4:** Google crawls your content
- **Weeks 4–8:** Search results start showing your posts
- **Month 2:** Traffic increases 20–50%
- **Month 3:** You rank for 3–5 target keywords
- **Month 6:** You rank on first page of Google for main keywords

**Questions? Ready to start?**