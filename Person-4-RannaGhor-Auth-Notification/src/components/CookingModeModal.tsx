import React, { useState, useEffect } from 'react';
import { Recipe } from '../types';
import { useApp } from '../context/AppContext';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  RotateCcw, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ChefHat, 
  FileText, 
  Volume2, 
  Trophy, 
  Flame, 
  Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CookingModeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export const CookingModeModal: React.FC<CookingModeModalProps> = ({ recipe, onClose }) => {
  const { language } = useApp();
  const [stepLang, setStepLang] = useState<'bn' | 'en'>(language === 'bn' ? 'bn' : 'en');

  useEffect(() => {
    setStepLang(language === 'bn' ? 'bn' : 'en');
  }, [language]);

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    new Array(recipe.instructions.length).fill(false)
  );

  // Digital Timer State (default 5 minutes = 300 seconds)
  const [timerSeconds, setTimerSeconds] = useState<number>(300);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerPresetName, setTimerPresetName] = useState<string>('5 mins');

  // Notes
  const [notes, setNotes] = useState<string>('');

  // Is completed
  const [isAllDone, setIsAllDone] = useState<boolean>(false);

  // Timer interval
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      // Play audio chime if supported
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.value = 587.33; // D5
        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1);
        osc.stop(audioCtx.currentTime + 1);
      } catch (e) {
        console.log(e);
      }
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNextStep = () => {
    // Mark current step completed
    const updated = [...completedSteps];
    updated[currentStepIndex] = true;
    setCompletedSteps(updated);

    if (currentStepIndex < recipe.instructions.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      // Completed all steps!
      setIsAllDone(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const setPreset = (seconds: number, name: string) => {
    setIsTimerRunning(false);
    setTimerSeconds(seconds);
    setTimerPresetName(name);
  };

  const totalSteps = recipe.instructions.length;
  const progressPercent = Math.round(((currentStepIndex + 1) / totalSteps) * 100);

  return (
    <div className="fixed inset-0 z-50 bg-[#1A1817] text-white flex flex-col justify-between overflow-y-auto animate-fadeIn select-none">
      
      {/* Top Bar: Progress & Close */}
      <div className="border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between bg-black/40 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-sindoor-700 flex items-center justify-center text-white">
            <ChefHat className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="font-serif font-bold text-sm sm:text-base text-white">
                {recipe.name}
              </span>
              <span className="font-bengali text-xs text-mustard-400">
                {recipe.bengaliName}
              </span>
            </div>
            <div className="text-[11px] text-white/50">
              Distraction-Free Cooking Mode • {recipe.baseServings} servings
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          title="Exit Cooking Mode"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/10 h-1.5">
        <div 
          className="bg-gradient-to-r from-mustard-500 to-sindoor-600 h-1.5 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      {/* Main Focus Canvas */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-8 py-8 flex flex-col justify-center">
        
        {!isAllDone ? (
          <div className="space-y-8 animate-fadeIn">
            {/* Step Counter Badge & Language Switcher */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full bg-sindoor-600/30 border border-sindoor-500/40 text-sindoor-400 text-xs font-bold uppercase tracking-wider font-serif">
                  {stepLang === 'bn' ? `ধাপ ${currentStepIndex + 1} / ${totalSteps}` : `Step ${currentStepIndex + 1} of ${totalSteps}`}
                </span>
                <span className="text-xs text-white/40">
                  ({progressPercent}% {stepLang === 'bn' ? 'সম্পন্ন' : 'complete'})
                </span>
              </div>

              {/* Language toggle inside cooking mode */}
              <div className="flex items-center space-x-3">
                <div className="inline-flex items-center bg-white/10 p-0.5 rounded-lg border border-white/20">
                  <button
                    type="button"
                    onClick={() => setStepLang('bn')}
                    className={`px-2.5 py-0.5 rounded-md text-xs font-bengali font-bold transition-all ${
                      stepLang === 'bn'
                        ? 'bg-sindoor-600 text-white shadow-xs'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    বাংলা
                  </button>
                  <button
                    type="button"
                    onClick={() => setStepLang('en')}
                    className={`px-2.5 py-0.5 rounded-md text-xs font-sans font-semibold transition-all ${
                      stepLang === 'en'
                        ? 'bg-sindoor-600 text-white shadow-xs'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    EN
                  </button>
                </div>
                <span className="text-xs text-mustard-400 font-medium hidden sm:inline">
                  {recipe.cuisineRegion} Style
                </span>
              </div>
            </div>

            {/* Instruction Focus Text */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-sindoor-600 to-mustard-500"></div>
              
              <p className={`text-xl sm:text-3xl text-white/95 leading-relaxed tracking-wide ${
                stepLang === 'bn' ? 'font-bengali text-2xl sm:text-3xl font-medium' : 'font-serif'
              }`}>
                "{((stepLang === 'bn' && recipe.bengaliInstructions && recipe.bengaliInstructions.length > 0)
                  ? recipe.bengaliInstructions[currentStepIndex]
                  : recipe.instructions[currentStepIndex]
                ) || recipe.instructions[currentStepIndex]}"
              </p>
            </div>

            {/* Step Tools Grid: Digital Kitchen Timer & Ingredients */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Built-in Digital Countdown Timer */}
              <div className="bg-black/40 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-mustard-400">
                    <Clock className="w-4 h-4" />
                    <span>Kitchen Timer</span>
                  </div>
                  <div className="flex items-center space-x-1 text-[11px]">
                    <button 
                      onClick={() => setPreset(120, '2 mins')}
                      className={`px-2 py-0.5 rounded ${timerSeconds === 120 ? 'bg-sindoor-700 text-white' : 'bg-white/10 text-white/70'}`}
                    >
                      2m
                    </button>
                    <button 
                      onClick={() => setPreset(300, '5 mins')}
                      className={`px-2 py-0.5 rounded ${timerSeconds === 300 ? 'bg-sindoor-700 text-white' : 'bg-white/10 text-white/70'}`}
                    >
                      5m
                    </button>
                    <button 
                      onClick={() => setPreset(600, '10 mins')}
                      className={`px-2 py-0.5 rounded ${timerSeconds === 600 ? 'bg-sindoor-700 text-white' : 'bg-white/10 text-white/70'}`}
                    >
                      10m
                    </button>
                    <button 
                      onClick={() => setPreset(900, '15 mins')}
                      className={`px-2 py-0.5 rounded ${timerSeconds === 900 ? 'bg-sindoor-700 text-white' : 'bg-white/10 text-white/70'}`}
                    >
                      15m
                    </button>
                  </div>
                </div>

                {/* Clock Face Display */}
                <div className="flex items-center justify-between py-2">
                  <div className="text-4xl font-mono font-bold tracking-wider text-mustard-300">
                    {formatTimer(timerSeconds)}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsTimerRunning(!isTimerRunning)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-all ${
                        isTimerRunning 
                          ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      }`}
                    >
                      {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      <span>{isTimerRunning ? 'Pause' : 'Start'}</span>
                    </button>

                    <button
                      onClick={() => {
                        setIsTimerRunning(false);
                        setTimerSeconds(300);
                      }}
                      className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/70 transition-colors"
                      title="Reset Timer"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Cooking Notes Scratchpad */}
              <div className="bg-black/40 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
                <div className="flex items-center space-x-2 text-xs font-bold text-white/70 mb-2">
                  <FileText className="w-4 h-4 text-mustard-500" />
                  <span>Chef's Scratchpad</span>
                </div>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Record heat adjustments, spice tweaks, or timings..."
                  className="w-full h-16 bg-white/5 border border-white/10 rounded-xl p-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-mustard-500 resize-none"
                />
              </div>

            </div>
          </div>
        ) : (
          /* Celebratory All-Done Screen */
          <div className="text-center py-12 px-6 max-w-lg mx-auto bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md animate-scaleUp">
            <div className="w-20 h-20 rounded-full bg-sindoor-600/30 border-2 border-sindoor-500 flex items-center justify-center mx-auto mb-5 text-mustard-400">
              <Trophy className="w-10 h-10" />
            </div>
            
            <h2 className="text-3xl font-serif font-bold text-white mb-2">
              Ranna Complete! (রান্না শেষ!)
            </h2>
            <p className="font-bengali text-mustard-400 text-lg mb-4">
              আপনার {recipe.bengaliName} তৈরি!
            </p>
            <p className="text-sm text-white/75 leading-relaxed mb-6">
              You've prepared an authentic Bengali culinary treasure. Serve piping hot with fresh steamed rice and green chillies. Enjoy with your family!
            </p>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-sindoor-600 to-terracotta-600 hover:from-sindoor-700 hover:to-terracotta-700 text-white font-bold text-sm shadow-xl transition-all"
            >
              Back to RannaGhor
            </button>
          </div>
        )}

      </div>

      {/* Bottom Step Controller */}
      {!isAllDone && (
        <div className="border-t border-white/10 px-4 sm:px-8 py-4 bg-black/60 backdrop-blur-md flex items-center justify-between">
          <button
            onClick={handlePrevStep}
            disabled={currentStepIndex === 0}
            className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all ${
              currentStepIndex === 0 
                ? 'opacity-30 cursor-not-allowed bg-white/5 text-white/50' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className={stepLang === 'bn' ? 'font-bengali' : ''}>
              {stepLang === 'bn' ? '← আগের ধাপ' : '← Previous'}
            </span>
          </button>

          {/* Quick step bubbles */}
          <div className="hidden sm:flex items-center space-x-1.5">
            {recipe.instructions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStepIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentStepIndex 
                    ? 'w-6 bg-mustard-500' 
                    : completedSteps[idx] 
                      ? 'bg-emerald-500' 
                      : 'bg-white/20 hover:bg-white/40'
                }`}
                title={`Step ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNextStep}
            className="flex items-center space-x-2 px-6 py-3 rounded-2xl bg-sindoor-600 hover:bg-sindoor-700 text-white text-xs font-bold shadow-lg transition-all transform active:scale-95"
          >
            <span className={stepLang === 'bn' ? 'font-bengali' : ''}>
              {currentStepIndex === totalSteps - 1 
                ? (stepLang === 'bn' ? 'রান্না সম্পন্ন! 🎉' : 'Finish Cooking!') 
                : (stepLang === 'bn' ? 'পরের ধাপ →' : 'Next Step →')}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
