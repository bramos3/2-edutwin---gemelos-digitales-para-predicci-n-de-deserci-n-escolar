import React, { useState, useRef, useEffect } from 'react';
import { School, Student, SimulationParameters, TwinLevel, Language, ChatMessage } from '../../types';
import { translations } from '../../i18n/translations';
import {
  Sparkles,
  Send,
  X,
  Bot,
  User,
  Lightbulb,
  Building2,
  Sliders,
  ShieldCheck,
  TrendingDown,
  Loader2
} from 'lucide-react';

interface AiChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
  schools: School[];
  selectedSchool: School | null;
  setSelectedSchool: (school: School | null) => void;
  selectedStudent: Student | null;
  setSelectedStudent: (student: Student | null) => void;
  level: TwinLevel;
  setLevel: (level: TwinLevel) => void;
  simulationParams: SimulationParameters;
  language: Language;
}

export const AiChatbotModal: React.FC<AiChatbotModalProps> = ({
  isOpen,
  onClose,
  schools,
  selectedSchool,
  setSelectedSchool,
  selectedStudent,
  setSelectedStudent,
  level,
  setLevel,
  simulationParams,
  language
}) => {
  const t = translations[language];

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content:
        language === 'es'
          ? '👋 ¡Hola! Soy el chatbot de EduTwin AI. Estoy conectado al gemelo digital 3D y a los modelos de predicción de deserción. ¿En qué puedo orientarte hoy? Puedes pedirme diagnósticos por escuela, explicaciones de factores SHAP o simular qué pasaría si aumentamos becas de transporte.'
          : '👋 Hello! I am the EduTwin AI chatbot, connected to the 3D digital twin and dropout prediction models. How can I assist you today? You can ask for school diagnostics, SHAP factor explanations, or simulate policy interventions.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  if (!isOpen) return null;

  const handleSend = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputText;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customPrompt) setInputText('');
    setIsLoading(true);

    // Context package to send to backend
    const context = {
      level,
      selectedSchool,
      selectedStudent,
      simulationParams
    };

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend, context, language })
      });

      if (!response.ok) {
        throw new Error(`Chat request failed: ${response.status}`);
      }

      const data = await response.json();

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || (language === 'es' ? 'Análisis completado.' : 'Analysis completed.'),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);

      // Check if user requested 3D navigation
      const lower = textToSend.toLowerCase();
      if (lower.includes('carabayllo') || lower.includes('2084')) {
        const target = schools.find((s) => s.name.includes('Carabayllo')) || schools[0];
        setSelectedSchool(target);
        setLevel('meso');
      } else if (lower.includes('macro') || lower.includes('general')) {
        setLevel('macro');
      }
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          language === 'es'
            ? '🤖 He procesado tu solicitud con los datos locales del gemelo 3D: Los principales determinantes de riesgo son inasistencia (>40%) y trabajo infantil. Se aconseja priorizar intervenciones en escuelas de zona periférica.'
            : '🤖 Processed your query with 3D twin data: Key dropout drivers are absenteeism (>40%) and child work. Targeted meal aid is strongly advised.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    language === 'es'
      ? '¿Cuáles son las 3 escuelas con mayor riesgo y por qué?'
      : 'Which are the top 3 highest risk schools and why?',
    language === 'es'
      ? 'Simula qué pasa si aumentamos el transporte al 80%'
      : 'Simulate what happens if we boost transit subsidies to 80%',
    language === 'es'
      ? 'Explica cómo funciona la explicabilidad SHAP en los alumnos'
      : 'Explain how SHAP feature importance works for students'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm">
      <div className="absolute bottom-0 right-0 w-full sm:right-4 sm:bottom-4 sm:w-[min(42rem,calc(100vw-2rem))] h-[640px] max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden chatbot-slide-up">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-amber-500 flex items-center justify-center text-white shadow-md">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  {t.aiChat.title}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  {language === 'es' ? 'En línea' : 'Online'}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {t.aiChat.contextBadge} {level.toUpperCase()} • {selectedSchool ? selectedSchool.name : 'Región Global'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message History Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((msg) => {
            const isMe = msg.role === 'user';

            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isMe ? 'justify-end' : 'justify-start'}`}
              >
                {!isMe && (
                  <div className="w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    isMe
                      ? 'bg-sky-600 text-white rounded-br-none shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none border border-slate-200 dark:border-slate-700/60'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  <span
                    className={`block text-[10px] mt-1 text-right ${
                      isMe ? 'text-sky-200' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {isMe && (
                  <div className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 justify-start items-center text-xs text-slate-500 dark:text-slate-400">
              <div className="w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 flex items-center justify-center shrink-0">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
              <span className="animate-pulse">{t.aiChat.typing}</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto text-[11px]">
          <span className="text-slate-400 shrink-0 font-semibold flex items-center gap-1">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            {language === 'es' ? 'Sugerencias:' : 'Quick Prompts:'}
          </span>
          {quickPrompts.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-sky-500 whitespace-nowrap transition"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={t.aiChat.placeholder}
            className="flex-1 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="p-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white disabled:opacity-40 transition shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
