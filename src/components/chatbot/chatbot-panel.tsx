"use client";

import { useEffect, useRef } from "react";
import { X, RotateCcw, Clock, MapPin, Briefcase, CalendarDays, Phone, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import { useChat } from "@/hooks/use-chat";

interface ChatbotPanelProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  pageContext?: string;
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString("es", { hour: "2-digit", minute: "2-digit" });
}

const replyIcons: Record<string, React.ReactNode> = {
  horario: <Clock className="h-4 w-4" />,
  servicios: <Briefcase className="h-4 w-4" />,
  ubicacion: <MapPin className="h-4 w-4" />,
  agendar: <CalendarDays className="h-4 w-4" />,
};

// Waze Icon Component
const WazeIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.54 6.63c-1.62-2.93-4.74-4.64-8.54-4.64-5.12 0-9 3.37-9 8.5 0 2.6 1.14 4.82 3.07 6.37-.13.39-.37.75-.74 1.13-.66.66-1.57 1.12-2.58 1.34a.5.5 0 00-.1.97c1.56.39 3.27.24 4.77-.45.55-.26 1.04-.57 1.47-.93a11.8 11.8 0 003.11.42c5.12 0 9-3.37 9-8.5 0-1.57-.4-3.02-1.08-4.21h-.38zM8.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
  </svg>
);

export function ChatbotPanel({ isOpen, onClose, className, pageContext }: ChatbotPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const {
    messages,
    isTyping,
    handleQuickReply,
    restart,
    openWhatsApp,
    config,
  } = useChat({ pageContext });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

    const panel = panelRef.current;
    const focusableElements = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    panel.addEventListener("keydown", handleTabKey);
    return () => panel.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  const handleWhatsApp = () => {
    openWhatsApp();
  };

  const handleRestart = () => {
    restart();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Chat con ${config.business.name}`}
      aria-describedby="chat-description"
      className={cn(
        "fixed inset-0 z-50",
        "pb-[env(safe-area-inset-bottom)]",
        "sm:inset-auto sm:bottom-20 sm:right-4",
        "sm:w-[380px] sm:h-[540px]",
        "sm:rounded-2xl sm:pb-0",
        "flex flex-col",
        "bg-white",
        "shadow-2xl shadow-black/10",
        "border border-gray-200",
        "overflow-hidden",
        className
      )}
    >
      <p id="chat-description" className="sr-only">
        Asistente virtual de {config.business.name}. Usá los botones para navegar por las opciones disponibles.
      </p>

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-[#25D366]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <span className="text-xl">💬</span>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">
              Dana
            </h2>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="text-xs text-white/80">
                En línea
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleRestart}
            aria-label="Reiniciar conversación"
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full",
              "text-white/70 hover:text-white hover:bg-white/10",
              "transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            )}
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar chat"
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full",
              "text-white/70 hover:text-white hover:bg-white/10",
              "transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            )}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Messages area */}
      <main
        className="flex-1 overflow-y-auto p-4 bg-gray-50"
        aria-live="polite"
        aria-atomic="false"
        aria-relevant="additions"
      >
        {messages.map((message) => (
          <div key={message.id} className="mb-4">
            <div
              className={cn(
                "flex gap-2.5",
                message.role === "user" && "flex-row-reverse"
              )}
            >
              {/* Bot Avatar */}
              {message.role === "bot" && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white text-sm font-medium">
                  D
                </div>
              )}
              <div
                className={cn(
                  "flex flex-col gap-1 max-w-[75%]",
                  message.role === "user" && "items-end"
                )}
              >
                <div
                  className={cn(
                    "rounded-2xl px-4 py-2.5 text-sm",
                    message.role === "bot"
                      ? "bg-white text-gray-800 shadow-sm border border-gray-100"
                      : "bg-[#25D366] text-white"
                  )}
                >
                  <p className="leading-relaxed whitespace-pre-line">{message.content}</p>
                </div>
                <span className="text-[10px] text-gray-400 px-1">
                  {formatTime(message.timestamp)}
                </span>
              </div>
            </div>

            {/* Quick Reply Buttons */}
            {message.quickReplies && message.quickReplies.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mt-3 ml-10" role="group" aria-label="Opciones disponibles">
                {message.quickReplies.map((reply) => (
                  <button
                    key={reply.id}
                    type="button"
                    onClick={() => handleQuickReply(reply)}
                    disabled={isTyping}
                    className={cn(
                      "flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl",
                      "text-xs font-medium",
                      "transition-all duration-150",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50",
                      "disabled:opacity-50 disabled:cursor-not-allowed",
                      "bg-white text-gray-700",
                      "border border-gray-200",
                      "hover:border-[#25D366] hover:text-[#25D366]",
                      "active:scale-[0.98]"
                    )}
                  >
                    <span className="text-[#25D366]">
                      {replyIcons[reply.value] || null}
                    </span>
                    {reply.label}
                  </button>
                ))}
              </div>
            )}

            {/* WhatsApp Button */}
            {message.showWhatsAppButton && (
              <div className="mt-3 ml-10 space-y-2">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className={cn(
                    "w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl",
                    "bg-[#25D366] hover:bg-[#22c55e]",
                    "text-white font-medium text-sm",
                    "transition-all duration-150",
                    "hover:scale-[1.01]",
                    "shadow-sm"
                  )}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contactar por WhatsApp
                </button>

                <button
                  type="button"
                  onClick={() => window.open(`tel:${config.contact?.phone || '+50689680947'}`, '_self')}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl",
                    "bg-gray-100 hover:bg-gray-200",
                    "text-gray-600 text-xs font-medium",
                    "transition-colors duration-150"
                  )}
                >
                  <Phone className="h-3.5 w-3.5" />
                  Llamar directamente
                </button>
              </div>
            )}

            {/* Map Buttons */}
            {message.showMapButtons && (
              <div className="mt-3 ml-10 flex gap-2">
                <a
                  href="https://maps.app.goo.gl/LhScDFZjcrYvjdXf7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl",
                    "bg-[#0E3A4A] hover:bg-[#156378]",
                    "text-white font-medium text-sm",
                    "transition-all duration-150",
                    "shadow-sm"
                  )}
                >
                  <MapPin className="w-4 h-4" />
                  Google Maps
                </a>
                <a
                  href="https://waze.com/ul?q=Physical+Care+Fisioterapia+Vargas+Araya&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl",
                    "bg-[#33CCFF] hover:bg-[#2CBEEF]",
                    "text-white font-medium text-sm",
                    "transition-all duration-150",
                    "shadow-sm"
                  )}
                >
                  <WazeIcon className="w-4 h-4" />
                  Waze
                </a>
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex gap-2.5 mb-4" role="status" aria-label="Escribiendo">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white text-sm font-medium">
              D
            </div>
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-4 py-2.5 bg-white">
        <p className="text-center text-[11px] text-gray-400">
          Dana - Asistente virtual de Physical Care
        </p>
      </footer>
    </div>
  );
}
