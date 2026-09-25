import { UserProfile, WeeklyPlan, ShoppingItem, PantryItem, EmailNotification } from '../types';

/**
 * Creates an official Google Security Alert email notification
 */
export const createGoogleSecurityEmail = (user: UserProfile): EmailNotification => {
  const timeStr = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const bodyText = `Google Security Alert: New sign-in on Windows

Hi ${user.name},

Your Google Account (${user.email}) was just used to sign in to RannaGhor (রান্নাঘর) — Bengali Recipe & Kitchen Manager.

Device details:
• Platform: Windows (Chrome Web Browser)
• Location: Kolkata, West Bengal, India (Estimated)
• Time: ${dateStr} at ${timeStr}

If this was you, your kitchen data (7-day meal plan, favorite recipes, and grocery list) is now safely connected to Google Cloud.

If you didn't sign in, please check your Google account activity at https://myaccount.google.com/security.

Google Accounts Team
https://accounts.google.com`;

  const bodyHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 16px; overflow: hidden; color: #202124;">
      <div style="padding: 24px; border-bottom: 1px solid #f1f3f4; display: flex; align-items: center; justify-content: space-between;">
        <div style="font-size: 22px; font-weight: bold; color: #4285F4;">
          <span style="color: #4285F4;">G</span><span style="color: #EA4335;">o</span><span style="color: #FBBC05;">o</span><span style="color: #4285F4;">g</span><span style="color: #34A853;">l</span><span style="color: #EA4335;">e</span>
        </div>
        <span style="font-size: 11px; background: #e8f0fe; color: #1a73e8; font-weight: bold; padding: 4px 10px; rounded: 12px; border-radius: 12px;">Security Notice</span>
      </div>

      <div style="padding: 28px 24px;">
        <h2 style="font-size: 20px; font-weight: 600; margin: 0 0 12px; color: #202124;">
          Security alert: New sign-in on Windows
        </h2>
        <p style="font-size: 14px; line-height: 1.6; color: #5f6368; margin: 0 0 20px;">
          Hi <strong>${user.name}</strong>, your Google Account (<span style="color: #1a73e8;">${user.email}</span>) was just used to sign in to <strong>RannaGhor (রান্নাঘর)</strong>.
        </p>

        <div style="background: #f8f9fa; border: 1px solid #dadce0; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
          <div style="font-size: 13px; font-weight: bold; color: #3c4043; margin-bottom: 8px;">Activity Details:</div>
          <div style="font-size: 13px; color: #5f6368; line-height: 1.7;">
            <div>🖥️ <strong>Application:</strong> RannaGhor (Bengal Kitchen Companion)</div>
            <div>💻 <strong>Device:</strong> Chrome on Windows</div>
            <div>📍 <strong>Location:</strong> Kolkata, West Bengal, India</div>
            <div>⏰ <strong>Time:</strong> ${dateStr}, ${timeStr}</div>
          </div>
        </div>

        <p style="font-size: 13px; line-height: 1.6; color: #5f6368; margin: 0 0 20px;">
          If this was you, you don't need to do anything. Your authentic Bengali recipes, grocery list, and meal plan are now securely synced with your Google account.
        </p>

        <div style="padding: 16px; background: #fdf5e6; border: 1px solid #f9e2af; border-radius: 12px; font-size: 12px; color: #8c5700;">
          💡 <strong>RannaGhor Cloud Sync:</strong> Any updates made to your weekly Bengali meal plan will be preserved.
        </div>
      </div>

      <div style="padding: 16px 24px; background: #f8f9fa; border-top: 1px solid #f1f3f4; font-size: 11px; color: #70757a; text-align: center;">
        You received this security notification because you connected your Google account to RannaGhor.
      </div>
    </div>
  `;

  return {
    id: `email-security-${Date.now()}`,
    from: 'no-reply@accounts.google.com',
    fromName: 'Google Security Alert',
    to: user.email,
    subject: `Security Alert: New Sign-in to RannaGhor with Google (${user.email})`,
    bengaliSubject: `সিকিউরিটি অ্যালার্ট: Google দিয়ে RannaGhor-এ নতুন সাইন-ইন (${user.email})`,
    bodyText,
    bodyHtml,
    timestamp: new Date().toISOString(),
    read: false,
    type: 'security'
  };
};

/**
 * Creates a warm welcome email from RannaGhor
 */
export const createWelcomeEmail = (user: UserProfile): EmailNotification => {
  const bodyText = `Welcome to RannaGhor (রান্নাঘর) — Your Bengali Kitchen Companion!

নমস্কার ${user.name},

স্বাগতম! Welcome to RannaGhor, the modern digital kitchen companion crafted with love for authentic West Bengal cuisine.

Your Google Account (${user.email}) is now verified and active. Here is what you can do right now:
1. Discover 27+ heirloom recipes (Shorshe Ilish, Aloo Posto, Basanti Pulao, Kosha Mangsho)
2. Use Distraction-Free Cooking Mode with built-in digital timers and Bengali instructions
3. Plan your week with our automated 7-day multi-course meal planner
4. Auto-generate categorized Kolkata bazaar shopping lists

Happy Cooking!
রান্নাঘর পরিবার (RannaGhor Team)
Kolkata, West Bengal`;

  const bodyHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #e8ded3; border-radius: 16px; overflow: hidden; color: #2C2725;">
      <div style="background: linear-gradient(135deg, #A91D22 0%, #C85A32 100%); padding: 32px 24px; text-align: center; color: #ffffff;">
        <h1 style="font-family: Georgia, serif; font-size: 28px; margin: 0 0 6px; font-weight: bold;">RannaGhor • রান্নাঘর</h1>
        <p style="font-size: 14px; margin: 0; opacity: 0.9; font-style: italic;">Plan. Cook. Enjoy Bengal.</p>
      </div>

      <div style="padding: 28px 24px;">
        <h2 style="font-size: 20px; font-family: Georgia, serif; color: #8E1616; margin: 0 0 12px;">
          নমস্কার ${user.name}! Welcome to RannaGhor
        </h2>
        <p style="font-size: 14px; line-height: 1.6; color: #554e4a; margin: 0 0 20px;">
          Your Google account (<strong>${user.email}</strong>) is now linked. Your kitchen data is safe, synchronized, and always ready whenever you step into the kitchen.
        </p>

        <div style="background: #FFFDF9; border: 1px solid #F3E8DB; border-radius: 12px; padding: 18px; margin-bottom: 24px;">
          <div style="font-weight: bold; font-size: 13px; color: #A91D22; margin-bottom: 10px;">
            ✨ Features Activated for Your Google Profile:
          </div>
          <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: #554e4a; line-height: 1.8;">
            <li><strong>27+ Heirloom Bengali Recipes:</strong> With serving adjusters and Bengali cooking steps.</li>
            <li><strong>Distraction-Free Cooking Mode:</strong> Live step walkthrough and kitchen countdown timer.</li>
            <li><strong>7-Day Meal Planner:</strong> Auto-balances dal, bhaja, torkari, mach, and mangsho.</li>
            <li><strong>Smart Bazaar List:</strong> Auto-grouped by traditional fish, vegetable, and grocery stalls.</li>
          </ul>
        </div>

        <p style="font-size: 13px; line-height: 1.6; color: #6e645e; margin: 0 0 16px; font-style: italic;">
          "বাঙালির হেঁশেল চিরকাল ভালোবাসায় ভরা — ধোঁয়া ওঠা গরম ভাত আর ঝাঁঝালো শর্ষের তেল।"
        </p>
      </div>

      <div style="padding: 16px 24px; background: #FAF7F2; border-top: 1px solid #ebd9c8; font-size: 11px; color: #8c7e75; text-align: center;">
        Sent to ${user.email} • RannaGhor, West Bengal, India
      </div>
    </div>
  `;

  return {
    id: `email-welcome-${Date.now()}`,
    from: 'welcome@rannaghor.in',
    fromName: 'RannaGhor (রান্নাঘর)',
    to: user.email,
    subject: `Welcome to RannaGhor, ${user.name}! (রান্নাঘরে আপনাকে স্বাগতম)`,
    bengaliSubject: `রান্নাঘরে আপনাকে স্বাগতম, ${user.name}! আপনার ক্লাউড হেঁশেল প্রস্তুত`,
    bodyText,
    bodyHtml,
    timestamp: new Date().toISOString(),
    read: false,
    type: 'welcome'
  };
};

/**
 * Creates an email notification containing the user's Weekly Meal Plan
 */
export const createMealPlanEmail = (user: UserProfile, plan: WeeklyPlan): EmailNotification => {
  const days: (keyof WeeklyPlan)[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  let planSummaryText = `Weekly Bengali Meal Plan for ${user.name}\n\n`;
  days.forEach(d => {
    const dayData = plan[d];
    planSummaryText += `--- ${d} ---\n`;
    planSummaryText += `Breakfast: ${dayData.breakfast.map(i => i.recipeId).join(', ') || 'Traditional Breakfast'}\n`;
    planSummaryText += `Lunch: ${dayData.lunch.map(i => i.recipeId).join(', ') || 'Traditional Bengali Thali'}\n`;
    planSummaryText += `Evening Snack: ${dayData.snack.map(i => i.recipeId).join(', ') || 'Cha & Jolkhabar'}\n`;
    planSummaryText += `Dinner: ${dayData.dinner.map(i => i.recipeId).join(', ') || 'Roti & Torkari'}\n\n`;
  });

  const bodyHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 16px; overflow: hidden;">
      <div style="background: #A91D22; padding: 24px; text-align: center; color: white;">
        <h2 style="font-family: Georgia, serif; margin: 0 0 4px; font-size: 22px;">Weekly Bengali Meal Routine</h2>
        <p style="margin: 0; font-size: 13px; opacity: 0.9;">সাপ্তাহিক খাবারের তালিকা • Prepared for ${user.name}</p>
      </div>
      <div style="padding: 24px;">
        <p style="font-size: 13px; color: #555; margin-bottom: 16px;">
          Here is your planned multi-course meal schedule for the week. Open in RannaGhor anytime to adjust portions.
        </p>
        <div style="border: 1px solid #eee; border-radius: 12px; overflow: hidden;">
          ${days.map(d => `
            <div style="padding: 12px 16px; border-bottom: 1px solid #eee; background: #fdfaf6;">
              <strong style="color: #A91D22; font-size: 14px;">${d}</strong>
              <div style="font-size: 12px; color: #444; margin-top: 4px;">
                🍱 <strong>Lunch:</strong> ${plan[d].lunch.length} dishes planned | 
                🌙 <strong>Dinner:</strong> ${plan[d].dinner.length} dishes planned
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div style="padding: 12px 24px; background: #f9f9f9; text-align: center; font-size: 11px; color: #888;">
        Synced to your Google Account: ${user.email}
      </div>
    </div>
  `;

  return {
    id: `email-mealplan-${Date.now()}`,
    from: 'routine@rannaghor.in',
    fromName: 'RannaGhor Weekly Planner',
    to: user.email,
    subject: `Your 7-Day Bengali Meal Plan Digest — RannaGhor`,
    bengaliSubject: `আপনার সাপ্তাহিক ৭ দিনের রান্নার রুটিন — RannaGhor`,
    bodyText: planSummaryText,
    bodyHtml,
    timestamp: new Date().toISOString(),
    read: false,
    type: 'meal_plan'
  };
};

/**
 * Creates an email notification containing the Bazaar Shopping List
 */
export const createBazaarListEmail = (user: UserProfile, items: ShoppingItem[]): EmailNotification => {
  const uncheckedItems = items.filter(i => !i.checked);

  let textList = `Bazaar List for ${user.name} (বাজারের ফর্দ)\n\n`;
  const categories: ShoppingItem['category'][] = ['Vegetables', 'Fish & Meat', 'Spices', 'Pantry', 'Dairy & Sweets', 'Others'];
  
  categories.forEach(cat => {
    const catItems = uncheckedItems.filter(i => i.category === cat);
    if (catItems.length > 0) {
      textList += `[${cat}]\n`;
      catItems.forEach(i => {
        textList += `• ${i.name} ${i.bengaliName ? `(${i.bengaliName})` : ''} — ${i.quantity} ${i.unit}\n`;
      });
      textList += `\n`;
    }
  });

  const bodyHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #dadce0; border-radius: 16px; overflow: hidden;">
      <div style="background: #2D6A4F; padding: 24px; text-align: center; color: white;">
        <h2 style="font-family: Georgia, serif; margin: 0 0 4px; font-size: 22px;">Bazaar Shopping List • বাজারের ফর্দ</h2>
        <p style="margin: 0; font-size: 13px; opacity: 0.9;">Prepared for ${user.name} (${uncheckedItems.length} items to buy)</p>
      </div>
      <div style="padding: 24px;">
        ${categories.map(cat => {
          const catItems = uncheckedItems.filter(i => i.category === cat);
          if (catItems.length === 0) return '';
          return `
            <div style="margin-bottom: 18px;">
              <h4 style="margin: 0 0 8px; color: #2D6A4F; font-size: 14px; border-bottom: 1px solid #eee; padding-bottom: 4px;">${cat}</h4>
              <ul style="margin: 0; padding-left: 18px; font-size: 13px; color: #333; line-height: 1.7;">
                ${catItems.map(i => `<li>${i.name} ${i.bengaliName ? `(${i.bengaliName})` : ''} — <strong>${i.quantity} ${i.unit}</strong></li>`).join('')}
              </ul>
            </div>
          `;
        }).join('')}
      </div>
      <div style="padding: 12px 24px; background: #f9f9f9; text-align: center; font-size: 11px; color: #888;">
        Sent to ${user.email} from RannaGhor
      </div>
    </div>
  `;

  return {
    id: `email-bazaar-${Date.now()}`,
    from: 'bazaar@rannaghor.in',
    fromName: 'RannaGhor Bazaar Assistant',
    to: user.email,
    subject: `Your Bengali Bazaar Shopping List (${uncheckedItems.length} items) — RannaGhor`,
    bengaliSubject: `আপনার বাজারের ফর্দ (${uncheckedItems.length}টি জিনিস) — RannaGhor`,
    bodyText: textList,
    bodyHtml,
    timestamp: new Date().toISOString(),
    read: false,
    type: 'bazaar_list'
  };
};

/**
 * Directly opens real Google Gmail web composer in a new tab with pre-filled To, Subject, and Body
 */
export const openRealGmailWebCompose = (to: string, subject: string, bodyText: string) => {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
};
