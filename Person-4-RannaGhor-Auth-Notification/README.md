# 🍲 RannaGhor (রান্নাঘর) — Person 4 Repository

> **Bengali Cuisine Recipe Manager, Weekly Meal Planner & Digital Kitchen Companion**  
> *Dedicated Project Repository for Team Member 4*

---

## 👤 Team Member Information
- **Team Member**: Person 4
- **Assigned Module**: Google Account Authentication, Security Alerts & Email Notification Hub
- **বাংলা ভূমিকা**: গুগল অ্যাকাউন্ট অথেন্টিকেশন, সিকিউরিটি অ্যালার্ট ও ইমেইল নোটিফিকেশন হাব
- **Core Responsibilities & Highlights**:
  Official Google Identity Services (GSI SDK) integration, JWT credential verification, Client ID configuration, Automated Security Alert & Kitchen Welcome Email dispatch, In-App Notification Center, and 1-Click "Open in Real Gmail" web composer integration.

---

## 📂 Primary Key Files & Architecture for this Module
- `src/utils/googleAuth.ts - Google Identity Services client loader and JWT decoder`
- `src/components/GoogleAuthModal.tsx - Clean Google Sign-In interface with Cloud Client ID settings`
- `src/services/emailService.ts - Official Google security alerts & RannaGhor email generator`
- `src/components/EmailInboxModal.tsx - Interactive in-app inbox and 1-click real Gmail launcher`
- `src/components/Navbar.tsx - Header sign-in status, profile dropdown, and unread notification badge`
- `src/context/AppContext.tsx - Cloud sync state persistence and user authentication context`

---

## 🚀 How to Run the Project Locally

This is a complete, self-contained, and fully runnable copy of the **RannaGhor** web application.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at **http://localhost:5173** to view the application live.

### 3. Production Build & Verification
```bash
npm run build
```

---

## 📤 How to Push this Repository to your GitHub

### Method A (Recommended — 1-Click Batch Helper):
1. Open this folder on your desktop.
2. Double-click **`push-to-github.bat`**.
3. Create a new empty repository on [GitHub](https://github.com/new) (without README, .gitignore, or license).
4. Paste your GitHub repository URL when prompted, and press Enter!

---

### Method B (Using Git Command Line):
Open your terminal inside this folder and run:
```bash
# 1. Add your personal GitHub repository URL
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# 2. Ensure main branch is selected
git branch -M main

# 3. Push all commits to GitHub
git push -u origin main
```

---

### Method C (Using GitHub Desktop):
1. Open **GitHub Desktop**.
2. Click **File** ➔ **Add Local Repository...** (or press `Ctrl + O`).
3. Choose this folder: `C:\Users\acer\OneDrive\Desktop\Person-4-RannaGhor-Auth-Notification`.
4. Click **Publish repository** to push it directly to your GitHub account!

---

## 🎨 Tech Stack
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS (Authentic Bengali palette: Sindoor Red, Terracotta, Mustard, Banana Leaf)
- **Icons**: Lucide React
- **Authentication**: Google Identity Services (GSI SDK) + JWT Token Decoding
- **Notifications**: Automated Security Alert & Gmail Web Integration

---
*Created for Team Collaboration & Independent GitHub Submissions.*
