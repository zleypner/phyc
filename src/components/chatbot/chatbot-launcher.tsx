"use client";

import { forwardRef } from "react";
import { X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatbotLauncherProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const ChatbotLauncher = forwardRef<HTMLButtonElement, ChatbotLauncherProps>(
  function ChatbotLauncher({ isOpen, onClick, className }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        aria-label={isOpen ? "Cerrar asistente" : "Abrir asistente"}
        aria-expanded={isOpen}
        className={cn(
          "fixed bottom-6 right-6 z-50",
          "flex h-16 w-16 items-center justify-center",
          "rounded-full",
          "bg-[#25D366] hover:bg-[#20BA5C]",
          "text-white shadow-lg",
          "transition-all duration-200 ease-out",
          "hover:scale-110",
          "active:scale-95",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2",
          className
        )}
      >
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-70" />
        )}
        <span className="relative z-10 flex items-center justify-center">
          {isOpen ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <MessageCircle className="h-7 w-7" aria-hidden="true" />
          )}
        </span>
      </button>
    );
  }
);
