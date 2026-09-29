import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EmailNotification } from '../types';
import { 
  X, 
  Mail, 
  ExternalLink, 
  Copy, 
  Check, 
  ShieldAlert, 
  Sparkles, 
  CalendarDays, 
  ShoppingBag, 
  AlertTriangle,
  ArrowLeft,
  Send,
  Inbox
} from 'lucide-react';
import { openRealGmailWebCompose } from '../services/emailService';

interface EmailInboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailInboxModal: React.FC<EmailInboxModalProps> = ({ isOpen, onClose }) => {
  const { 
    user, 
    emails, 
    markEmailAsRead, 
    sendBazaarEmailToUser,
    sendMealPlanEmailToUser,
    language,
    showToast 
  } = useApp();

  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentEmail = emails.find(e => e.id === selectedEmailId) || emails[0] || null;

  const handleSelectEmail = (email: EmailNotification) => {
    setSelectedEmailId(email.id);
    markEmailAsRead(email.id);
  };

  const handleOpenInRealGmail = (email: EmailNotification) => {
    openRealGmailWebCompose(email.to, email.subject, email.bodyText);
    showToast(language === 'bn' ? 'আসল জিমেইল উইন্ডো খোলা হয়েছে!' : 'Opened official Gmail compose window!');
  };

  const handleCopyBody = (email: EmailNotification) => {
    navigator.clipboard.writeText(email.bodyText);
    setCopied(true);
    showToast(language === 'bn' ? 'ইমেইল কপি করা হয়েছে!' : 'Email text copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const getTypeIcon = (type: EmailNotification['type']) => {
    switch (type) {
      case 'security':
        return <ShieldAlert className="w-4 h-4 text-amber-500" />;
      case 'welcome':
        return <Sparkles className="w-4 h-4 text-sindoor-600" />;
      case 'meal_plan':
        return <CalendarDays className="w-4 h-4 text-terracotta-600" />;
      case 'bazaar_list':
        return <ShoppingBag className="w-4 h-4 text-emerald-600" />;
      case 'pantry_alert':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return <Mail className="w-4 h-4 text-gray-500" />;
    }
  };

  const unreadCount = emails.filter(e => !e.read).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn text-charcoal">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full h-[85vh] max-h-[800px] overflow-hidden shadow-2xl border border-terracotta-200 flex flex-col relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-cream-100 via-white to-cream-100 border-b border-terracotta-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Gmail Multi-color Logo Style */}
            <div className="w-10 h-10 rounded-2xl bg-white border border-terracotta-200 shadow-xs flex items-center justify-center p-2">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base sm:text-lg font-serif font-bold text-sindoor-950">
                  {language === 'bn' ? 'Google অ্যাকাউন্ট ইমেইল নোটিফিকেশন' : 'Google Account Email Notifications'}
                </h2>
                {unreadCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sindoor-700 text-white animate-pulse">
                    {unreadCount} {language === 'bn' ? 'নতুন' : 'New'}
                  </span>
                )}
              </div>
              <div className="text-xs text-charcoal/60 flex items-center space-x-1.5 font-mono">
                <Mail className="w-3 h-3 text-terracotta-500" />
                <span>{user ? user.email : 'Not signed in'}</span>
              </div>
            </div>
          </div>

          {/* Quick Triggers & Close Button */}
          <div className="flex items-center space-x-2">
            {user && (
              <div className="hidden sm:flex items-center space-x-1.5">
                <button
                  type="button"
                  onClick={sendBazaarEmailToUser}
                  className="px-2.5 py-1 rounded-xl bg-leaf-50 text-leaf-800 hover:bg-leaf-100 border border-leaf-200 text-xs font-semibold transition-colors flex items-center space-x-1"
                  title="Send fresh Bazaar list email"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Send Bazaar List</span>
                </button>

                <button
                  type="button"
                  onClick={sendMealPlanEmailToUser}
                  className="px-2.5 py-1 rounded-xl bg-terracotta-50 text-terracotta-800 hover:bg-terracotta-100 border border-terracotta-200 text-xs font-semibold transition-colors flex items-center space-x-1"
                  title="Send Weekly Meal Plan digest"
                >
                  <CalendarDays className="w-3.5 h-3.5" />
                  <span>Send Meal Plan</span>
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-cream-100 hover:bg-cream-200 text-charcoal/70 hover:text-charcoal transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body: Dual Column (List on left, preview on right) */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left: Email List Sidebar */}
          <div className="w-full sm:w-80 md:w-96 border-r border-terracotta-200 bg-cream-50/60 overflow-y-auto divide-y divide-cream-100 shrink-0">
            {emails.length === 0 ? (
              <div className="p-8 text-center text-charcoal/60 space-y-3">
                <Inbox className="w-10 h-10 mx-auto text-terracotta-300 stroke-1" />
                <div className="text-xs font-medium">
                  {language === 'bn' ? 'কোনো ইমেইল নোটিফিকেশন নেই' : 'No email notifications yet'}
                </div>
                <p className="text-[11px] text-charcoal/50 leading-relaxed">
                  Sign in with your Google account to automatically receive welcome letters, security alerts, and weekly meal routines.
                </p>
              </div>
            ) : (
              emails.map((email) => {
                const isSelected = (currentEmail?.id === email.id);
                return (
                  <div
                    key={email.id}
                    onClick={() => handleSelectEmail(email)}
                    className={`p-4 cursor-pointer transition-all ${
                      isSelected 
                        ? 'bg-white border-l-4 border-l-sindoor-700 shadow-xs' 
                        : 'hover:bg-cream-100/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-1.5 min-w-0">
                        {getTypeIcon(email.type)}
                        <span className={`text-xs truncate ${!email.read ? 'font-bold text-sindoor-950' : 'font-medium text-charcoal/80'}`}>
                          {email.fromName}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] text-charcoal/50 font-mono">
                          {new Date(email.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        {!email.read && (
                          <span className="w-2 h-2 rounded-full bg-sindoor-600 shrink-0"></span>
                        )}
                      </div>
                    </div>

                    <div className={`text-xs truncate mb-1 ${!email.read ? 'font-bold text-charcoal' : 'text-charcoal/70'}`}>
                      {language === 'bn' && email.bengaliSubject ? email.bengaliSubject : email.subject}
                    </div>

                    <p className="text-[11px] text-charcoal/50 line-clamp-2 leading-relaxed">
                      {email.bodyText.slice(0, 100)}...
                    </p>
                  </div>
                );
              })
            )}
          </div>

          {/* Right: Selected Email Reader & Real Gmail Dispatcher */}
          <div className="hidden sm:flex flex-1 flex-col bg-white overflow-hidden">
            {currentEmail ? (
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* Email Action Header */}
                <div className="p-4 sm:p-5 border-b border-terracotta-100 bg-white flex flex-wrap items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-base font-serif font-bold text-sindoor-950 leading-snug">
                      {language === 'bn' && currentEmail.bengaliSubject ? currentEmail.bengaliSubject : currentEmail.subject}
                    </h3>
                    <div className="text-xs text-charcoal/60 mt-1 flex items-center space-x-2">
                      <span className="font-semibold text-charcoal/80">{currentEmail.fromName}</span>
                      <span>&lt;{currentEmail.from}&gt;</span>
                      <span>•</span>
                      <span>To: <strong className="text-sindoor-800">{currentEmail.to}</strong></span>
                    </div>
                  </div>

                  {/* High Value Action: Dispatch into real Gmail web composer! */}
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => handleCopyBody(currentEmail)}
                      className="p-2 rounded-xl border border-terracotta-200 text-charcoal/70 hover:bg-cream-100 transition-colors"
                      title="Copy text"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleOpenInRealGmail(currentEmail)}
                      className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-sindoor-700 to-terracotta-600 hover:from-sindoor-800 hover:to-terracotta-700 text-white font-bold text-xs shadow-md transition-all flex items-center space-x-1.5"
                      title="Opens your real Gmail compose window"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{language === 'bn' ? 'আসল জিমেইলে পাঠান' : 'Open in Real Gmail'}</span>
                    </button>
                  </div>
                </div>

                {/* Email Rendered Body */}
                <div className="flex-1 p-6 overflow-y-auto bg-cream-50/30">
                  <div 
                    className="max-w-2xl mx-auto shadow-sm rounded-2xl overflow-hidden bg-white border border-terracotta-100"
                    dangerouslySetInnerHTML={{ __html: currentEmail.bodyHtml }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center p-8 text-center text-charcoal/50">
                <div>
                  <Mail className="w-12 h-12 mx-auto text-terracotta-200 mb-2" />
                  <p className="text-sm font-medium">Select an email to view full content</p>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3.5 bg-cream-100/90 border-t border-terracotta-200 flex items-center justify-between text-xs text-charcoal/60">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Real-time email notification dispatcher active</span>
          </div>

          <div className="font-bengali text-terracotta-700 font-semibold">
            Google Account Sync • RannaGhor
          </div>
        </div>

      </div>
    </div>
  );
};
