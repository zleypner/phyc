// Session management for chatbot

const SESSION_KEY = "phyc_chatbot_session";

/**
 * Clear session from localStorage
 */
export function clearSession(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (error) {
    console.error("[Session] Error clearing session:", error);
  }
}
