import React, { useState, useEffect } from 'react';
import { Mic, MicOff, X, Volume2, Sparkles, Send } from 'lucide-react';
import { TRANSLATIONS } from '../data/mockData';

export default function VoiceAssistantModal({ isOpen, onClose, currentLang }) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const PROMPT_EXAMPLES = {
    hi: [
      "मेरे टमाटर में बीमारी है, क्या उपाय करूं?",
      "कल बारिश होगी या सिंचाई रोक दूं?",
      "आज पुणे मंडी में गेहूं का भाव क्या है?",
      "PM-Kisan योजना का लाभ कैसे मिलेगा?"
    ],
    mr: [
      "माझ्या टोमॅटोवर रोगाचा प्रादुर्भाव झाला आहे, काय उपाय करू?",
      "उद्या पाऊस पडेल का?",
      "पुणे मार्केटमध्ये गव्हाचा काय भाव आहे?"
    ],
    te: [
      "నా టమోటా పంటలో వ్యాధి వచ్చింది, ఏమి చేయాలి?",
      "రేపు వర్షం పడుతుందా?",
      "మార్కెట్లో ఈరోజు ధరలు ఎంత ఉన్నాయి?"
    ],
    en: [
      "My tomato plant leaves are turning yellow, what should I spray?",
      "Should I irrigate my wheat crop tomorrow or skip due to rain?",
      "What is the 15-day market forecast for Cotton?"
    ]
  };

  const currentPrompts = PROMPT_EXAMPLES[currentLang] || PROMPT_EXAMPLES.en;

  const handleVoiceQuery = (text) => {
    setTranscript(text);
    setIsListening(false);
    
    // Simulate Gemini Multilingual Voice AI processing
    setTimeout(() => {
      let aiText = "";
      if (text.includes("टमाटर") || text.includes("tomato") || text.includes("टोमॅटो") || text.includes("టమోటా")) {
        aiText = currentLang === 'hi' 
          ? "YOLOv11 स्कैनर के अनुसार यह अगेती झुलसा (Early Blight) है। 5ml नीम का तेल प्रति लीटर पानी में मिलाकर छिड़काव करें और निचली पत्तियां हटा दें।"
          : "Based on YOLOv11 leaf analysis, this is Early Blight. Spray Neem Oil 5ml/L water and clear lower foliage.";
      } else if (text.includes("बारिश") || text.includes("rain") || text.includes("पाऊस") || text.includes("వర్షం")) {
        aiText = currentLang === 'hi'
          ? "मौसम पूर्वानुमान के अनुसार गुरुवार को 78% बारिश की संभावना है। सिंचाई आज रोक दें और 2500 लीटर पानी बचाएं।"
          : "Weather forecast predicts 78% rainfall on Thursday. Skip irrigation today to conserve water.";
      } else {
        aiText = currentLang === 'hi'
          ? "कृषिवर्स AI ने आपकी सहायता दर्ज कर ली है। आज टमाटर का मंडी भाव ₹3,450/क्विंटल है और 15 दिनों में ₹3,850 तक बढ़ने का अनुमान है।"
          : "KrishiVerse AI suggests holding crop sales. Current Tomato market price is ₹3,450/Q with 15-day forecast of ₹3,850/Q.";
      }
      
      setResponse(aiText);
      speakText(aiText);
    }, 600);
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const startListeningMock = () => {
    setIsListening(true);
    setTranscript("Listening...");
    setTimeout(() => {
      handleVoiceQuery(currentPrompts[0]);
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-card-glow max-w-lg w-full p-6 relative text-emerald-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-emerald-400 hover:text-white p-1 rounded-lg"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/40">
            <Mic className="w-6 h-6 text-black" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-white flex items-center space-x-2">
              <span>{t.voiceAssistant}</span>
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
            </h3>
            <p className="text-xs text-emerald-300">Multilingual Gemini 1.5 Pro + Speech-to-Text</p>
          </div>
        </div>

        {/* Voice Visualizer / Mic Control */}
        <div className="flex flex-col items-center justify-center py-6 bg-emerald-950/60 rounded-2xl border border-emerald-500/20 mb-6">
          <button
            onClick={startListeningMock}
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
              isListening
                ? 'bg-red-500 shadow-2xl shadow-red-500/60 animate-ping'
                : 'bg-gradient-to-tr from-emerald-500 to-teal-400 hover:scale-105 shadow-xl shadow-emerald-500/40 text-black'
            }`}
          >
            {isListening ? <MicOff className="w-8 h-8 text-white" /> : <Mic className="w-8 h-8 text-black" />}
          </button>
          
          <p className="mt-4 text-xs font-semibold text-emerald-200 tracking-wide">
            {isListening ? '🎙️ बोलिए... AI सुन रहा है...' : 'माइक्रोफ़ोन पर टैप करें या नीचे दिए प्रश्न चुनें'}
          </p>

          {isSpeaking && (
            <div className="mt-2 flex items-center space-x-1 text-xs text-amber-300">
              <Volume2 className="w-4 h-4 animate-bounce" />
              <span>AI उत्तर बोल रहा है...</span>
            </div>
          )}
        </div>

        {/* Query Input & Output */}
        {transcript && (
          <div className="bg-emerald-900/40 p-3 rounded-xl mb-4 border border-emerald-500/20">
            <p className="text-xs text-emerald-400 font-bold">आपका प्रश्न:</p>
            <p className="text-sm font-medium text-white italic">"{transcript}"</p>
          </div>
        )}

        {response && (
          <div className="bg-teal-950/70 p-4 rounded-xl mb-6 border border-teal-400/40 shadow-inner">
            <p className="text-xs text-teal-300 font-extrabold flex items-center space-x-1 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>KrishiVerse AI उत्तर:</span>
            </p>
            <p className="text-sm text-emerald-100 font-medium leading-relaxed">{response}</p>
          </div>
        )}

        {/* Sample Voice Prompts */}
        <div>
          <p className="text-xs text-emerald-300 font-bold mb-2">उदाहरण प्रश्न (टैप करें):</p>
          <div className="space-y-2">
            {currentPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleVoiceQuery(prompt)}
                className="w-full text-left text-xs bg-emerald-900/30 hover:bg-emerald-800/50 text-emerald-200 p-2.5 rounded-xl border border-emerald-500/20 transition-all flex items-center justify-between"
              >
                <span>🗣️ "{prompt}"</span>
                <Send className="w-3.5 h-3.5 text-emerald-400" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
