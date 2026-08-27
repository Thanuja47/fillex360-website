# Fillex360 Solutions Website

Production marketing website for **Fillex360 Solutions**, a software studio based in Colombo and Galle, Sri Lanka. Built using Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, and Resend.

---

## Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (custom design tokens)
- **Animations:** Framer Motion
- **Email Service:** Resend API
- **Fonts:** Poppins (Display) & Inter (Body) via `next/font/google`
- **Hosting:** Vercel

---

## Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/fillex360-website.git
   cd fillex360-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
   Provide your `RESEND_API_KEY` and target `CONTACT_TO_EMAIL`.

4. **Run local dev server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment to Vercel & GitHub

### 1. Initialize Git and Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Fillex360 Solutions website"

# Push using GitHub CLI
gh repo create fillex360-website --public --source=. --remote=origin --push

# Or push manually after creating repo on github.com:
# git remote add origin https://github.com/<your-username>/fillex360-website.git
# git branch -M main
# git push -u origin main
```

### 2. Connect to Vercel
1. Log in to [vercel.com](https://vercel.com) and click **"Add New Project"**.
2. Select and import the `fillex360-website` GitHub repository.
3. Keep the default Next.js build settings.
4. Add the following **Environment Variables**:
   - `RESEND_API_KEY`: Your Resend API key (from resend.com).
   - `CONTACT_TO_EMAIL`: The recipient email inbox for project inquiries.
5. Click **Deploy**.

---

## License

© Fillex360 Solutions. All rights reserved.
