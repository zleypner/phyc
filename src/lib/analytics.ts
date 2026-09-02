// Analytics event types for the chatbot
export type AnalyticsEventName =
  | "chat_opened"
  | "chat_closed"
  | "conversation_started"
  | "intent_selected"
  | "whatsapp_clicked"
  | "chat_restarted"
  | "calendar_clicked";

export interface AnalyticsEventProperties {
  timestamp?: string;
  sessionId?: string;
  source?: "launcher" | "direct";
  intent?: string;
  intentLabel?: string;
  service?: string;
  [key: string]: unknown;
}

export interface AnalyticsEvent {
  name: AnalyticsEventName;
  properties?: AnalyticsEventProperties;
}

export interface AnalyticsProvider {
  track: (event: AnalyticsEvent) => void;
  identify?: (userId: string, traits?: Record<string, unknown>) => void;
  page?: (name: string, properties?: Record<string, unknown>) => void;
}

// Default console provider for development
const consoleProvider: AnalyticsProvider = {
  track: (event) => {
    if (process.env.NODE_ENV === "development") {
      console.log("[Analytics]", event.name, event.properties);
    }
  },
};

let currentProvider: AnalyticsProvider = consoleProvider;

export function setAnalyticsProvider(provider: AnalyticsProvider): void {
  currentProvider = provider;
}

function getSessionId(): string {
  if (typeof window === "undefined") return "server";

  let sessionId = sessionStorage.getItem("chatbot_session_id");
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    sessionStorage.setItem("chatbot_session_id", sessionId);
  }
  return sessionId;
}

export function track(
  name: AnalyticsEventName,
  properties?: AnalyticsEventProperties
): void {
  const event: AnalyticsEvent = {
    name,
    properties: {
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
      ...properties,
    },
  };

  try {
    currentProvider.track(event);
  } catch (error) {
    console.error("[Analytics] Error tracking event:", error);
  }
}

export const analytics = {
  chatOpened: (source: "launcher" | "direct" = "launcher") => {
    track("chat_opened", { source });
  },

  chatClosed: () => {
    track("chat_closed");
  },

  conversationStarted: () => {
    track("conversation_started");
  },

  intentSelected: (intent: string, intentLabel?: string) => {
    track("intent_selected", { intent, intentLabel });
  },

  whatsappClicked: (service?: string) => {
    track("whatsapp_clicked", { service });
  },

  chatRestarted: () => {
    track("chat_restarted");
  },

  calendarClicked: () => {
    track("calendar_clicked");
  },
};

// GA4 provider
export function createGA4Provider(): AnalyticsProvider {
  return {
    track: (event) => {
      if (typeof window !== "undefined" && "gtag" in window) {
        const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
        gtag?.("event", event.name, event.properties);
      }
    },
  };
}
