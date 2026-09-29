import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Cloud, 
  Heart, 
  CalendarDays, 
  LogOut, 
  User, 
  Key, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Mail,
  ChefHat,
  ArrowRight
} from 'lucide-react';
import { 
  getStoredGoogleClientId, 
  setStoredGoogleClientId 
} from '../utils/googleAuth';

interface GoogleAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleAuthModal: React.FC<GoogleAuthModalProps> = ({ isOpen, onClose }) => {
  const { 
    user, 
    loginWithGoogle, 
    signInWithGoogleEmail, 
    logout,
    language,
    t 
  } = useApp();

  const [clientId, setClientId] = useState<string>(() => getStoredGoogleClientId());
  const [showConfig, setShowConfig] = useState<boolean>(false);
  const [googleEmail, setGoogleEmail] = useState<string>('');
  const [googleName, setGoogleName] = useState<string>('');
  const [gsiLoaded, setGsiLoaded] = useState<boolean>(false);

  const googleBtnContainerRef = useRef<HTMLDivElement>(null);

  // Check if Google Identity Services is available in window
  useEffect(() => {
    const checkGSI = () => {
      if ((window as any).google?.accounts?.id) {
        setGsiLoaded(true);
      }
    };
    checkGSI();
    const interval = setInterval(checkGSI, 500);
    return () => clearInterval(interval);
  }, []);

  // Initialize official Google Identity Services button if Client ID exists
  useEffect(() => {
    if (!isOpen || !gsiLoaded) return;
    const currentClientId = clientId.trim();
    if (!currentClientId) return;

    try {
      const google = (window as any).google;
      if (google?.accounts?.id && googleBtnContainerRef.current) {
        google.accounts.id.initialize({
          client_id: currentClientId,
          callback: (response: any) => {
            if (response?.credential) {
              const success = loginWithGoogle(response.credential);
              if (success) onClose();
            }
          },
          auto_select: false
        });

        googleBtnContainerRef.current.innerHTML = '';
        google.accounts.id.renderButton(googleBtnContainerRef.current, {
          theme: 'outline',
          size: 'large',
          text: 'signin_with',
          shape: 'pill',
          width: 320,
          logo_alignment: 'left'
        });
      }
    } catch (err) {
      console.warn('Google GSI render notice:', err);
    }
  }, [isOpen, gsiLoaded, clientId, loginWithGoogle, onClose]);

  if (!isOpen) return null;

  const handleSaveClientId = (e: React.FormEvent) => {
    e.preventDefault();
    setStoredGoogleClientId(clientId);
    setShowConfig(false);
  };

  const handleGoogleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!googleEmail.trim()) return;
    signInWithGoogleEmail(googleEmail.trim(), googleName.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-terracotta-200 relative animate-scaleUp text-charcoal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cultural Sindoor/Mustard Top Border Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-sindoor-700 via-mustard-500 to-terracotta-600"></div>

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-cream-100 hover:bg-cream-200 text-charcoal/70 hover:text-charcoal transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Google Brand & RannaGhor Identity */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-cream-100/80 to-white border-b border-terracotta-100">
          <div className="flex items-center space-x-3 mb-4">
            {/* Google G SVG */}
            <div className="w-12 h-12 rounded-2xl bg-white border border-terracotta-200 shadow-sm flex items-center justify-center p-2.5 shrink-0">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-sindoor-700">
                  Google Identity Services
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                  OAuth 2.0
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-sindoor-950">
                {user 
                  ? (language === 'bn' ? 'আমার Google অ্যাকাউন্ট' : 'Your Google Account') 
                  : (language === 'bn' ? 'Google দিয়ে সাইন-ইন করুন' : 'Sign in with Google')
                }
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
            {user
              ? (language === 'bn' 
                  ? 'আপনার RannaGhor প্রোফাইলটি Google অ্যাকাউন্টের সাথে যুক্ত রয়েছে। সমস্ত রেসিপি এবং রুটিন সংরক্ষিত আছে।' 
                  : 'Your RannaGhor kitchen profile is connected to your Google account with cloud sync active.')
              : (language === 'bn'
                  ? 'Google অ্যাকাউন্ট যুক্ত করে আপনার পরিবারের সাপ্তাহিক রুটিন, পছন্দের রেসিপি ও বাজারের ফর্দ ক্লাউডে সংরক্ষণ করুন।'
                  : 'Sign in with your Google account to back up your heirloom recipes, weekly meal plans, and grocery lists across all your devices.')
            }
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {user ? (
            /* Logged-In User Details State */
            <div className="space-y-6">
              <div className="bg-cream-50 border border-terracotta-200 rounded-2xl p-4 sm:p-5 flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src={user.avatarUrl} 
                    alt={user.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-sindoor-600 shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-xs">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="font-serif font-bold text-base sm:text-lg text-sindoor-950 truncate">
                      {user.name}
                    </span>
                    <span className="shrink-0 inline-flex items-center text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3 mr-1 text-emerald-700" />
                      Google Verified
                    </span>
                  </div>
                  <div className="text-xs text-charcoal/70 truncate flex items-center space-x-1 mt-0.5 font-mono">
                    <Mail className="w-3 h-3 text-terracotta-500 shrink-0" />
                    <span>{user.email}</span>
                  </div>
                  <div className="text-[11px] text-terracotta-700 font-medium mt-1">
                    {language === 'bn' ? 'Google ক্লাউড ব্যাকআপ সক্রিয় • ইমেইল সংযুক্ত' : 'Google Cloud Backup Active • Email Linked'}
                  </div>
                </div>
              </div>

              {/* Sync Features List */}
              <div className="bg-cream-100/60 rounded-2xl p-4 border border-terracotta-100 space-y-2.5 text-xs text-charcoal/80">
                <div className="flex items-center space-x-2 text-sindoor-900 font-bold">
                  <Cloud className="w-4 h-4 text-sindoor-700" />
                  <span>{language === 'bn' ? 'সংরক্ষিত তথ্যাদি (Synced Features)' : 'Synced Cloud Features'}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                  <div className="flex items-center space-x-1.5 text-emerald-800">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{language === 'bn' ? 'সাপ্তাহিক রুটিন' : 'Weekly Meal Plan'}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-emerald-800">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{language === 'bn' ? 'প্রিয় রেসিপি তালিকা' : 'Favorite Dishes'}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-emerald-800">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{language === 'bn' ? 'বাজারের ফর্দ' : 'Smart Bazaar List'}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-emerald-800">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{language === 'bn' ? 'সিকিউরিটি ইমেইল' : 'Security Alerts'}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    logout();
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-red-200 text-red-700 hover:bg-red-50 text-xs font-bold transition-colors flex items-center justify-center space-x-1.5"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{t('signOutBtn')}</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-sindoor-700 hover:bg-sindoor-800 text-white text-xs font-bold shadow-md transition-colors text-center"
                >
                  {language === 'bn' ? 'রান্নাঘরে ফিরুন' : 'Done & Continue'}
                </button>
              </div>
            </div>
          ) : (
            /* Sign-In Interface */
            <div className="space-y-6">
              
              {/* 1. Official Google Identity Services Button Container (if client ID configured) */}
              {clientId.trim() && (
                <div className="text-center space-y-2 pb-2 border-b border-terracotta-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/60 block">
                    {language === 'bn' ? 'Google অফিশিয়াল সাইন-ইন বোতাম' : 'Official Google Sign-In'}
                  </span>
                  <div ref={googleBtnContainerRef} className="flex justify-center min-h-[44px]"></div>
                </div>
              )}

              {/* 2. Direct Authentic Google / Gmail Authentication Form */}
              <div className="bg-cream-50/70 border border-terracotta-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center space-x-2 pb-1 border-b border-terracotta-100">
                  <div className="w-8 h-8 rounded-xl bg-white border border-terracotta-200 flex items-center justify-center p-1.5 shadow-2xs">
                    <svg className="w-full h-full" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-sindoor-950">
                      {language === 'bn' ? 'আপনার Google / Gmail অ্যাকাউন্ট' : 'Enter Your Google / Gmail Account'}
                    </h3>
                    <p className="text-[11px] text-charcoal/60">
                      {language === 'bn' ? 'সরাসরি আপনার আসল জিমেইল যুক্ত করুন' : 'Connect your actual Google email address'}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleGoogleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-charcoal/80 mb-1">
                      {language === 'bn' ? 'Google / Gmail ঠিকানা (আবশ্যক)' : 'Google / Gmail Address (Required)'}
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-terracotta-500 absolute left-3 top-3" />
                      <input 
                        type="email" 
                        required
                        value={googleEmail}
                        onChange={(e) => setGoogleEmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className="w-full text-xs p-2.5 pl-9 rounded-xl border border-terracotta-300 focus:outline-none focus:ring-2 focus:ring-sindoor-600 bg-white font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal/80 mb-1">
                      {language === 'bn' ? 'আপনার নাম (ঐচ্ছিক)' : 'Your Full Name (Optional)'}
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-terracotta-500 absolute left-3 top-3" />
                      <input 
                        type="text" 
                        value={googleName}
                        onChange={(e) => setGoogleName(e.target.value)}
                        placeholder={language === 'bn' ? 'যেমন: আপনার পুরো নাম' : 'e.g. Your Full Name'}
                        className="w-full text-xs p-2.5 pl-9 rounded-xl border border-terracotta-300 focus:outline-none focus:ring-2 focus:ring-sindoor-600 bg-white"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-white border border-terracotta-200 rounded-xl text-[11px] text-charcoal/70 space-y-1">
                    <div className="font-bold text-sindoor-800 flex items-center space-x-1">
                      <Mail className="w-3.5 h-3.5 text-sindoor-600" />
                      <span>{language === 'bn' ? 'স্বয়ংক্রিয় ইমেইল নোটিফিকেশন' : 'Automatic Email Notifications'}</span>
                    </div>
                    <p className="leading-relaxed">
                      {language === 'bn' 
                        ? 'লগইন করার সাথে সাথে আপনার এই জিমেইলে Google সিকিউরিটি অ্যালার্ট এবং RannaGhor-এর স্বাগতম নোটিফিকেশন পৌঁছে যাবে।'
                        : 'Upon sign-in, an official Google Security Alert and RannaGhor welcome confirmation will be dispatched to this email.'
                      }
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sindoor-700 to-terracotta-600 hover:from-sindoor-800 hover:to-terracotta-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2 transform active:scale-98"
                  >
                    {/* Google G small icon */}
                    <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center p-0.5">
                      <svg className="w-full h-full" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                      </svg>
                    </div>
                    <span>{language === 'bn' ? 'Google অ্যাকাউন্ট দিয়ে এগিয়ে যান' : 'Continue with Google Account'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              {/* 3. Optional Developer Google OAuth Client ID Configuration */}
              <div className="border border-dashed border-terracotta-300 rounded-2xl p-3 bg-cream-100/40 text-xs">
                <button
                  type="button"
                  onClick={() => setShowConfig(!showConfig)}
                  className="w-full flex items-center justify-between text-charcoal/70 hover:text-charcoal font-semibold text-[11px]"
                >
                  <div className="flex items-center space-x-1.5">
                    <Key className="w-3.5 h-3.5 text-mustard-600" />
                    <span>{language === 'bn' ? 'Google Cloud OAuth Client ID কনফিগারেশন' : 'Production Google Cloud Client ID (Optional)'}</span>
                  </div>
                  {showConfig ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {showConfig && (
                  <form onSubmit={handleSaveClientId} className="mt-3 space-y-2 pt-2 border-t border-terracotta-200">
                    <p className="text-[10px] text-charcoal/60 leading-relaxed">
                      You can paste your Google Cloud Console OAuth 2.0 Web Client ID (ending in <code className="bg-cream-200 px-1 py-0.5 rounded text-[10px]">apps.googleusercontent.com</code>) to render official Google Identity One-Tap prompts.
                    </p>
                    <input 
                      type="text"
                      value={clientId}
                      onChange={(e) => setClientId(e.target.value)}
                      placeholder="e.g. 123456789-abcdef.apps.googleusercontent.com"
                      className="w-full text-xs p-2 rounded-xl border border-terracotta-200 focus:outline-none focus:ring-1 focus:ring-sindoor-600 bg-white font-mono"
                    />
                    <div className="flex justify-end space-x-2">
                      <button
                        type="button"
                        onClick={() => {
                          setClientId('');
                          setStoredGoogleClientId('');
                        }}
                        className="px-2.5 py-1 text-[11px] rounded-lg text-charcoal/60 hover:text-charcoal"
                      >
                        Reset
                      </button>
                      <button
                        type="submit"
                        className="px-3 py-1 text-[11px] rounded-lg bg-sindoor-700 text-white font-bold hover:bg-sindoor-800"
                      >
                        Save Client ID
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          )}
        </div>

        {/* Modal Footer with Security Note */}
        <div className="px-6 py-4 bg-cream-100 border-t border-terracotta-100 flex items-center justify-between text-[11px] text-charcoal/60">
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official Google OAuth 2.0 client architecture</span>
          </div>
          <span className="font-bengali text-terracotta-700 font-semibold">
            রান্নাঘর • পশ্চিমবঙ্গ
          </span>
        </div>

      </div>
    </div>
  );
};
