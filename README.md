# 💎 Life Row Records: Simple Setup Guide

This guide explains how to get your website live and fully connected.

---

## 📧 Email Collection (Formspree)
The website is currently connected to **Formspree** using the ID `maqyqobv`.

1.  Emails are sent directly to the account associated with that ID.
2.  If you need to change the destination, create a new form at [Formspree.io](https://formspree.io).
3.  Copy the new **Form ID**.
4.  Open `components/EmailPopup.tsx` and update the `FORMSPREE_ID` variable.

---

## 📺 Option B: GitHub & Netlify (The Professional Way)

### Step 1: Put your code on GitHub
1.  Go to [GitHub.com](https://github.com) and create a free account.
2.  Click the **+** (top right) -> **New repository**.
3.  Name it `life-row-website` and click **Create**.
4.  Click the link **"uploading an existing file"**.
5.  Drag all the files from your computer into that box.
6.  Scroll down and click **Commit changes**.

### Step 2: Make it live with Netlify
1.  Go to [Netlify.com](https://netlify.com) and sign up with your GitHub account.
2.  Click **Add new site** -> **Import from GitHub**.
3.  Pick your `life-row-website` repo.
4.  Click **Deploy site**. 

---

## 🎹 Adding your Traktrain Player
1.  Open `pages/Home.tsx`.
2.  Find the `<iframe ...>` tag near the bottom.
3.  Replace the link `https://traktrain.com/widget/270590` with **your** widget link.

---

## 🖼️ How to use your own images
If you don't have an AI key, the site uses branded placeholders. To use your own photos:
1.  **Artists**: Open `pages/Artists.tsx`. Update the `imageUrl` for each artist.
2.  **Home Page**: You can swap `GeneratedImage` tags for regular `<img>` tags if you have specific files you want to use.