"use client";

import { useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { ChatbotLauncher } from "./chatbot-launcher";
import { ChatbotPanel } from "./chatbot-panel";
import { analytics } from "@/lib/analytics";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => {
      const newState = !prev;
      if (newState) {
        analytics.chatOpened("launcher");
      } else {
        analytics.chatClosed();
      }
      return newState;
    });
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    analytics.chatClosed();
    launcherRef.current?.focus();
  }, []);

  return (
    <>
      <ChatbotPanel isOpen={isOpen} onClose={handleClose} pageContext={pathname} />
      <ChatbotLauncher ref={launcherRef} isOpen={isOpen} onClick={handleToggle} />
    </>
  );
}
