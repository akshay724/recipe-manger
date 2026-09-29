# 🔐 Person 4: RannaGhor User Auth & Real Email Notifications

## 📌 Module Overview
- **Team Member Role**: Lead Authentication & Notification Infrastructure Engineer
- **Designated Local Port**: `http://localhost:5174`
- **Main Responsibility**: Real Google Account Authentication (OAuth 2.0 / Firebase), User Session & Profile State, Real Email Notification Dispatch (Welcome emails, cooking timer alerts, weekly meal digest), Complete Removal of Demo Accounts.

---

## 🛠️ Key Files & Architecture
| File | Description |
| :--- | :--- |
| `src/components/AuthModal.tsx` | Modern login/signup modal with direct "Continue with Google" OAuth trigger |
| `src/components/NotificationSettings.tsx` | User preferences for email notifications, cooking reminders, and weekly summaries |
| `src/services/authService.ts` | Authentication service managing tokens, user state, and Google OAuth handlers |
| `src/services/emailNotificationService.ts` | Real email sending integration (EmailJS / Webhook / SMTP dispatch) |
| `src/context/AuthContext.tsx` | Global authentication state providing `user`, `loginWithGoogle`, and `logout` |
| `.env.example` | Template for configuring Google OAuth Client ID and Email provider keys |

---

## 🚀 What Happened Here (Development Log & Accomplishments)
1. **Total Removal of Fake / Demo Accounts**:
   - Cleaned out all placeholder credentials (`test@demo.com`, mock hardcoded passwords, simulated mock users).
   - Ensured the application only authenticates real users with legitimate email identities.
2. **Google Account Authentication**:
   - Integrated Google OAuth 2.0 authentication flow.
   - Shows user's real Google profile photo, display name, and verified email address upon login.
3. **Real Email Notifications Engine**:
   - Converted static alerts into a functioning email notification pipeline:
     - ✉️ **Account Welcome Email**: Sent immediately when a user signs in for the first time.
     - ⏱️ **Cooking Timer & Step Reminders**: Dispatches alerts when long simmer/slow cooking steps complete.
     - 🥗 **Weekly Meal Digest**: Summarizes the upcoming week's planned Bengali dishes.
4. **Configuration & Security**:
   - Documented environment variables in `.env.example` for painless deployment.

---

## 💻 How to Run in Visual Studio / VS Code
1. Open this folder in Visual Studio or VS Code:
   ```bash
   code "C:\Users\acer\OneDrive\Desktop\Person-4-RannaGhor-Auth-Notification"
   ```
2. **Method A (1-Click Run)**:
   - Double-click `run.bat` in this folder. It opens `http://localhost:5174` in your browser and starts the Vite dev server.
3. **Method B (VS Code / Visual Studio Task)**:
   - Press `Ctrl + Shift + B` (or `Terminal` ➔ `Run Build Task...`).
   - Select `npm: dev (Person 4 Auth & Notification)`.
4. **Method C (Debug / Launch F5)**:
   - Press `F5` in VS Code to launch Edge or Chrome directly at `http://localhost:5174`.

---

## 🧪 Demo Test Checklist
- [ ] Open `http://localhost:5174`.
- [ ] Click on the **Sign In** button in the top navigation bar.
- [ ] Verify that no fake/demo accounts appear in the UI.
- [ ] Click **"Continue with Google"** to trigger the authentication flow.
- [ ] Go to **Notification Settings**, input your email address, and send a test recipe notification.
