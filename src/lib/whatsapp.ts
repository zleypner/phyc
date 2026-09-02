import type { AttributionData } from "./attribution";
import { formatAttributionForMessage, hasUtmData } from "./attribution";
import { getChatbotConfig, getServiceById } from "./config/chatbot";

export interface LeadData {
  objective?: string;
  businessType?: string;
  urgency?: "pronto" | "explorando" | undefined;
  attributionData?: AttributionData;
}

export function formatPhoneForWhatsApp(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}

export function generateWhatsAppMessage(lead: LeadData): string {
  const config = getChatbotConfig();
  const clinicName = config.business.name;

  let officialServiceName: string | null = null;

  if (lead.objective) {
    const service = getServiceById(config, lead.objective);
    if (service) {
      officialServiceName = service.label;
    }
  }

  if (!officialServiceName && lead.businessType) {
    const service = config.services.find(
      s => s.label.toLowerCase() === lead.businessType?.toLowerCase() ||
           s.id === lead.businessType
    );
    if (service) {
      officialServiceName = service.label;
    }
  }

  const lines: string[] = [];

  if (officialServiceName) {
    lines.push(`Hola, vengo desde el sitio web de ${clinicName}.`);
    lines.push(`Me gustaría solicitar una valoración de ${officialServiceName}.`);
    lines.push("");
    lines.push("¿Me pueden ayudar con la disponibilidad?");
  } else if (lead.objective === "informacion" || !lead.objective) {
    lines.push(`Hola, vengo desde el sitio web de ${clinicName}.`);
    lines.push("Me gustaría recibir información para agendar una cita.");
  } else {
    lines.push(`Hola, vengo desde el sitio web de ${clinicName} y me gustaría hablar con alguien del equipo.`);
  }

  if (lead.urgency === "pronto") {
    lines.push("");
    lines.push("Es algo urgente, ¿tienen disponibilidad pronto?");
  }

  if (lead.attributionData && hasUtmData(lead.attributionData)) {
    const attributionStr = formatAttributionForMessage(lead.attributionData);
    if (attributionStr) {
      lines.push("");
      lines.push(`[${attributionStr}]`);
    }
  }

  return lines.join("\n");
}

export function generateWhatsAppUrl(
  lead: LeadData,
  phoneNumber: string
): string {
  const phone = formatPhoneForWhatsApp(phoneNumber);
  const message = generateWhatsAppMessage(lead);
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export function openWhatsApp(
  lead: LeadData,
  phoneNumber: string
): void {
  const url = generateWhatsAppUrl(lead, phoneNumber);
  window.open(url, "_blank", "noopener,noreferrer");
}
