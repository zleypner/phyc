"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import {
  getChatbotConfig,
  type QuickReplyConfig,
  type ChatbotConfig,
} from "@/lib/config/chatbot";
import { generateWhatsAppUrl } from "@/lib/whatsapp";
import { clearSession } from "@/lib/session";
import { captureAttribution } from "@/lib/attribution";
import { analytics } from "@/lib/analytics";

export interface QuickReply {
  id: string;
  label: string;
  value: string;
  icon?: string;
  isPrimary?: boolean;
}

export interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
  quickReplies?: QuickReply[];
  showWhatsAppButton?: boolean;
  showMapButtons?: boolean;
}

function configToQuickReplies(replies: QuickReplyConfig[]): QuickReply[] {
  return replies.map((r) => ({
    id: r.id,
    label: r.label,
    value: r.value,
    icon: r.icon,
    isPrimary: r.isPrimary,
  }));
}

interface UseChatOptions {
  pageContext?: string;
}

export function useChat(options: UseChatOptions = {}) {
  const config = useMemo(() => getChatbotConfig(), []);
  const { pageContext } = options;

  const mainOptions = useMemo(() => configToQuickReplies(config.quickReplies.objectives), [config]);

  const getWelcomeMessage = useCallback((): Message => {
    let welcomeContent = config.messages.welcome;

    if (pageContext && config.pageContextMessages[pageContext]) {
      welcomeContent = config.pageContextMessages[pageContext] + welcomeContent;
    }

    return {
      id: "welcome",
      role: "bot",
      content: welcomeContent,
      timestamp: new Date(),
      quickReplies: mainOptions,
      showWhatsAppButton: true,
    };
  }, [config, pageContext, mainOptions]);

  const [messages, setMessages] = useState<Message[]>([getWelcomeMessage()]);
  const [isTyping, setIsTyping] = useState(false);
  const [lastOption, setLastOption] = useState<string | null>(null);

  useEffect(() => {
    clearSession();
    captureAttribution();
  }, []);

  const getResponseForOption = useCallback((optionId: string): string => {
    const responses: Record<string, string> = {
      horario: config.messages.horario || "Nuestro horario de atención:\n\nLunes a Viernes: 10:00am - 8:00pm\nSábados: 8:00am - 1:00pm",
      servicios: config.messages.servicios || "Ofrecemos diversos servicios de fisioterapia especializada.",
      ubicacion: config.messages.ubicacion || "Estamos ubicados en San Pedro de Montes de Oca, Costa Rica.",
      agendar: config.messages.agendar || "Con gusto te ayudamos a agendar tu cita.",
    };
    return responses[optionId] || "¿En qué más puedo ayudarte?";
  }, [config.messages]);

  const handleQuickReply = useCallback((reply: QuickReply) => {
    if (reply.value === "whatsapp") {
      const leadData = {
        objective: lastOption || undefined,
      };
      const url = generateWhatsAppUrl(leadData, config.whatsapp.number);
      window.open(url, "_blank", "noopener,noreferrer");
      analytics.whatsappClicked(lastOption || undefined);
      return;
    }

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: reply.label,
      timestamp: new Date(),
    };

    setMessages((prev) => [
      ...prev.map((msg): Message => ({
        ...msg,
        quickReplies: undefined,
        showWhatsAppButton: false,
      })),
      userMessage,
    ]);

    setIsTyping(true);
    setLastOption(reply.value);

    setTimeout(() => {
      const responseText = getResponseForOption(reply.value);
      const isUbicacion = reply.value === "ubicacion";

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        role: "bot",
        content: responseText,
        timestamp: new Date(),
        showWhatsAppButton: true,
        showMapButtons: isUbicacion,
        quickReplies: mainOptions,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 500);
  }, [config.whatsapp.number, getResponseForOption, lastOption, mainOptions]);

  const openWhatsApp = useCallback(() => {
    const leadData = {
      objective: lastOption || undefined,
    };
    const url = generateWhatsAppUrl(leadData, config.whatsapp.number);
    window.open(url, "_blank", "noopener,noreferrer");
    analytics.whatsappClicked(lastOption || undefined);
  }, [config.whatsapp.number, lastOption]);

  const openCalendar = useCallback(() => {
    if (config.calendar?.url) {
      window.open(config.calendar.url, "_blank", "noopener,noreferrer");
      analytics.calendarClicked();
    }
  }, [config.calendar]);

  const restart = useCallback(() => {
    setMessages([getWelcomeMessage()]);
    setLastOption(null);
    clearSession();
  }, [getWelcomeMessage]);

  return {
    messages,
    isTyping,
    handleQuickReply,
    restart,
    openWhatsApp,
    openCalendar,
    config,
  };
}
