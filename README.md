# FitFable Website

## What's in this folder
This is your full Next.js site, reconstructed from your PDF into a working project.

- **Team section**: corrected to Akshay Raj (Co-Founder, Movement Coach) and Sridevi Ishar
  (Co-Founder, Product Builder & Performance Coach), with their real photos.
- **Real logo**: your uploaded logo is now used site-wide (`public/images/fitfable-logo.png`).
- **Corporate photos**: your 3 uploaded office photos are wired into the Corporate Wellness and
  Showcase sections (`wellness-1.png`, `wellness-2.png`, `wellness-3.png`).
- **Still placeholders** (colored blocks — replace whenever you have real shots, same filenames):
  `hero-movement.png`, `transformation.png`.
- **Inquiry form → real email**: submitting either form (Enterprise or Individual) now sends a
  proper email to `coach@fitfable.in`, silently BCC'd to `akshayraj.fitness4@gmail.com` and
  `sridevi.ishar@gmail.com`, with all submitted fields laid out clearly. This runs through a small
  serverless function (`app/api/inquiry/route.ts`) using **Resend** (free, 3,000 emails/month).

## One-time email setup (5–10 minutes, required before the form works)

1. Go to **resend.com** → sign up free.
2. In Resend, go to **Domains → Add Domain** → enter `fitfable.in`.
3. Resend gives you 2–3 DNS records (TXT/CNAME) → add them at wherever `fitfable.in` is
   registered (GoDaddy, Namecheap, etc.) → back in Resend click **Verify**. This can take a few
   minutes to a few hours to propagate.
4. Once verified, go to **API Keys** in Resend → create a key → copy it.
5. In Vercel (after you deploy, see below) → your project → **Settings → Environment Variables**
   → add `RESEND_API_KEY` = the key you copied → redeploy.

Until the domain is verified, Resend will block sending — this is normal and just needs the DNS
step above. This is the same "verify your domain" step every serious email tool requires, and it
prevents your emails from landing in spam.

If you'd rather send from `fitfable.org` instead of `fitfable.in`, just change `FROM_EMAIL` in
`app/api/inquiry/route.ts` to match and verify that domain in Resend instead.

## Fastest way to get this live (no coding, no terminal)

1. **Create a GitHub account** (free) at github.com if you don't have one.
2. **Create a new repository** → click the green "New" button → name it `fitfable-website` → keep
   it Public or Private, your choice → Create repository.
3. On the empty repo page, click **"uploading an existing file"** → drag this entire folder's
   contents in (unzip first if needed) → commit.
4. Go to **vercel.com** → sign up free with your GitHub account → **Add New Project** → select
   `fitfable-website` → Vercel auto-detects Next.js → click **Deploy**.
5. Add the `RESEND_API_KEY` environment variable (see above) → redeploy once.
6. You'll have a live URL like `fitfable-website.vercel.app` in under a minute.
7. To use `fitfable.org` or `fitfable.in`: in the Vercel project → Settings → Domains → add your
   domain → Vercel gives you DNS records to add at your registrar.

## Making future edits without coding
- Small text/image swaps: edit the file directly in GitHub's web editor (pencil icon on any file)
  — Vercel redeploys automatically on save.
- Bigger changes: paste the relevant file into a Claude chat and ask for the updated version, then
  paste it back into GitHub.
