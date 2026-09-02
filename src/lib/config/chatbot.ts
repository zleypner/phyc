export interface ServiceOption {
  id: string;
  label: string;
  description?: string;
  icon?: string;
  aliases?: string[];
  indicators?: string[];
}

export interface ProfessionalOption {
  id: string;
  name: string;
  specialty: string;
  aliases?: string[];
}

export interface ClinicHours {
  weekdays: string;
  saturday?: string;
  sunday?: string;
}

export interface ClinicLocation {
  address: string;
  city?: string;
  country?: string;
  mapUrl?: string;
  wazeUrl?: string;
  directions?: string;
}

export interface ContactInfo {
  phone: string;
  phoneEmergency?: string;
  email?: string;
  whatsapp: string;
}

export interface SocialMedia {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  linkedin?: string;
  twitter?: string;
}

export interface QuickReplyConfig {
  id: string;
  label: string;
  value: string;
  icon?: string;
  isPrimary?: boolean;
}

export interface ChatbotConfig {
  business: {
    name: string;
    tagline?: string;
    logo?: string;
  };

  assistant: {
    name: string;
    role: string;
  };

  whatsapp: {
    number: string;
  };

  calendar?: {
    url: string;
    enabled: boolean;
  };

  professionals?: ProfessionalOption[];
  hours?: ClinicHours;
  location?: ClinicLocation;
  contact?: ContactInfo;
  socialMedia?: SocialMedia;

  emergencyKeywords: string[];
  emergencyResponse: string;
  medicalDisclaimer: string;

  messages: {
    welcome: string;
    askBusinessType: string;
    askProblem: string;
    askUrgency: string;
    transitionCommercial: string;
    ctaMessage: string;
    abandonmentRecovery: string;
    horario: string;
    servicios: string;
    ubicacion: string;
    agendar: string;
  };

  problemExamples: Record<string, string>;

  pageContextMessages: Record<string, string>;

  services: ServiceOption[];

  quickReplies: {
    objectives: QuickReplyConfig[];
    afterResponse: QuickReplyConfig[];
    whatsappCta: QuickReplyConfig[];
    urgency: QuickReplyConfig[];
  };

  ui: {
    primaryColor: string;
    accentColor: string;
    position: "bottom-right" | "bottom-left";
  };

  abandonmentRecovery: {
    enabled: boolean;
    timeoutSeconds: number;
    minMessagesRequired: number;
  };
}

// Configuration for Physical Care Fisioterapia
export const defaultConfig: ChatbotConfig = {
  business: {
    name: "Physical Care",
    tagline: "Fisioterapia Especializada",
  },

  assistant: {
    name: "Sammy",
    role: "Asistente Virtual",
  },

  whatsapp: {
    number: "50689680947",
  },

  // Professionals
  professionals: [
    { id: "enmanuel-li", name: "Lic. Enmanuel Li Torres", specialty: "Director / Ondas de Choque / EMTT", aliases: ["enmanuel", "li", "emma"] },
    { id: "yamilah", name: "Lic. Yamilah", specialty: "Fisioterapia", aliases: ["yamilah"] },
  ],

  // Operating hours
  hours: {
    weekdays: "Lunes a Viernes: 10:00am - 8:00pm",
    saturday: "Sábados: 8:00am - 1:00pm",
    sunday: "Domingos: Cerrado",
  },

  // Location
  location: {
    address: "150 metros norte de Perimercados de Vargas Araya",
    city: "San Pedro de Montes de Oca",
    country: "Costa Rica",
    mapUrl: "https://maps.app.goo.gl/LhScDFZjcrYvjdXf7",
    directions: "150 metros norte de Perimercados de Vargas Araya, San Pedro de Montes de Oca.",
  },

  // Contact Information
  contact: {
    phone: "+506 8968-0947",
    email: "terapiafisicali@gmail.com",
    whatsapp: "50689680947",
  },

  // Social Media
  socialMedia: {
    facebook: "https://www.facebook.com/Physicalcarecr",
    instagram: "https://www.instagram.com/physicalcareft",
  },

  // Emergency detection
  emergencyKeywords: [
    "infarto", "no puedo respirar", "desmayo", "sangrado severo",
    "accidente", "inconsciente", "convulsion", "convulsión",
    "asfixia", "dolor en el pecho", "me muero", "ambulancia",
    "emergencia grave", "perdí el conocimiento", "no responde",
  ],

  emergencyResponse: "Esto parece una emergencia médica. Por favor:\n\n🚨 Llamá al 911 o acudí al servicio de emergencias más cercano.\n\nSi no es una emergencia, podemos ayudarte a agendar una cita de fisioterapia.",

  // Medical disclaimer
  medicalDisclaimer: "No puedo diagnosticar ni recetar tratamientos. Te recomiendo consultar con un profesional de la salud.",

  messages: {
    welcome: "¡Hola! Soy Sammy, asistente virtual de Physical Care Fisioterapia.\n\n¿En qué puedo ayudarte?",
    askBusinessType: "¿Qué tipo de servicio estás buscando?",
    askProblem: "Contame un poco más sobre tu situación para orientarte mejor.",
    askUrgency: "¿Es algo urgente o podés esperar unos días para tu cita?",
    transitionCommercial: "Entiendo tu situación. Tenemos disponibilidad para atenderte.",
    ctaMessage: "¿Te gustaría que te contactemos por WhatsApp?",
    abandonmentRecovery: "¿Hay algo más en lo que pueda ayudarte?",
    // Respuestas para las 4 opciones principales
    horario: "Nuestro horario de atención:\n\nLunes a Viernes: 10:00am - 8:00pm\nSábados: 8:00am - 1:00pm\nDomingos: Cerrado\n\n¿Te gustaría agendar una cita?",
    servicios: "En Physical Care te ayudamos con:\n\n• Dolor de rodilla, cadera o espalda\n• Recuperación después de una operación\n• Masajes para aliviar dolor o tensión muscular\n• Dificultad para caminar o moverse\n• Terapia y movilidad para adultos mayores\n• Recuperación después de una caída o lesión\n• Mejorar el equilibrio, fuerza y estabilidad\n• Terapia con cama de tracción\n• Plantillas ortopédicas\n• Otro dolor o molestia\n\nCon gusto te guiamos por WhatsApp.",
    ubicacion: "Abrí el mapa para ver cómo llegar:",
    agendar: "Con gusto te ayudamos a agendar tu valoración.\n\nContactanos por WhatsApp para confirmar disponibilidad de manera inmediata.",
  },

  problemExamples: {
    cita: "¿Es tu primera visita o ya sos paciente de la clínica?",
    consulta: "¿Qué síntomas o molestias estás experimentando?",
    especialista: "¿Tenés alguna referencia médica o es consulta directa?",
    informacion: "¿Sobre qué servicio te gustaría más información?",
  },

  pageContextMessages: {},

  services: [
    {
      id: "ondas-choque",
      label: "Ondas de Choque",
      icon: "⚡",
      aliases: ["ondas de choque", "shockwave", "ondas", "choque"],
      indicators: ["tendinitis", "calcificación", "fascitis plantar", "epicondilitis", "hombro doloroso"],
    },
    {
      id: "emtt",
      label: "EMTT / Magnetolith",
      icon: "🧲",
      aliases: ["emtt", "magnetolith", "magnetoterapia", "campos electromagnéticos"],
      indicators: ["regeneración", "dolor crónico", "lesión muscular"],
    },
    {
      id: "tecarterapia",
      label: "Tecarterapia",
      icon: "🔥",
      aliases: ["tecar", "tecarterapia", "diatermia", "radiofrecuencia"],
      indicators: ["contractura", "inflamación", "recuperación muscular"],
    },
    {
      id: "fisioterapia",
      label: "Fisioterapia Musculoesquelética",
      icon: "🩺",
      aliases: ["fisioterapia", "terapia física", "fisio", "rehabilitación"],
      indicators: ["dolor de espalda", "dolor de cuello", "dolor lumbar", "ciática"],
    },
    {
      id: "deportiva",
      label: "Rehabilitación Deportiva",
      icon: "🏃",
      aliases: ["deportiva", "lesión deportiva", "deporte", "atleta"],
      indicators: ["esguince", "desgarro", "lesión de ligamento", "rodilla", "tobillo"],
    },
    {
      id: "terapia-manual",
      label: "Terapia Manual Ortopédica",
      icon: "🤲",
      aliases: ["terapia manual", "manual", "ortopédica", "manipulación"],
      indicators: ["rigidez", "movilidad", "articulación bloqueada"],
    },
    {
      id: "adultos-mayores",
      label: "Atención Adultos Mayores",
      icon: "👵",
      aliases: ["adultos mayores", "tercera edad", "geriatría", "adulto mayor"],
      indicators: ["equilibrio", "caídas", "movilidad reducida", "artritis", "artrosis"],
    },
    {
      id: "plantillas",
      label: "Plantillas Ortopédicas",
      icon: "👟",
      aliases: ["plantillas", "ortopédicas", "pies", "pisada"],
      indicators: ["pie plano", "dolor de pie", "fascitis", "pisada"],
    },
    {
      id: "masajes",
      label: "Masajes Terapéuticos",
      icon: "💆",
      aliases: ["masaje", "masajes", "relajante", "descontracturante"],
      indicators: ["tensión muscular", "estrés", "contractura", "relajación"],
    },
    {
      id: "pre-post-operatorio",
      label: "Pre y Post Operatorio",
      icon: "🏥",
      aliases: ["pre operatorio", "post operatorio", "cirugía", "operación"],
      indicators: ["antes de cirugía", "después de cirugía", "recuperación cirugía"],
    },
  ],

  quickReplies: {
    objectives: [
      { id: "horario", label: "Horario de atención", value: "horario" },
      { id: "servicios", label: "Servicios", value: "servicios" },
      { id: "ubicacion", label: "Ubicación", value: "ubicacion" },
      { id: "agendar", label: "Agendar cita", value: "agendar" },
    ],
    afterResponse: [
      { id: "horario", label: "Horario de atención", value: "horario" },
      { id: "servicios", label: "Servicios", value: "servicios" },
      { id: "ubicacion", label: "Ubicación", value: "ubicacion" },
      { id: "agendar", label: "Agendar cita", value: "agendar" },
    ],
    whatsappCta: [
      { id: "whatsapp", label: "Hablar por WhatsApp", value: "whatsapp", isPrimary: true },
    ],
    urgency: [
      { id: "pronto", label: "Es urgente", value: "pronto" },
      { id: "explorando", label: "Puedo esperar", value: "explorando" },
    ],
  },

  ui: {
    primaryColor: "#06B8BF",
    accentColor: "#1E88A8",
    position: "bottom-right",
  },

  abandonmentRecovery: {
    enabled: true,
    timeoutSeconds: 30,
    minMessagesRequired: 2,
  },
};

// Helper to get service by ID
export function getServiceById(config: ChatbotConfig, id: string): ServiceOption | undefined {
  return config.services.find((s) => s.id === id);
}

// Helper to get service label
export function getServiceLabel(config: ChatbotConfig, id: string): string {
  const service = getServiceById(config, id);
  return service ? service.label : id;
}

// Helper to interpolate message templates
export function interpolateMessage(
  template: string,
  vars: Record<string, string>
): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] || `{${key}}`);
}

// Get current config
export function getChatbotConfig(): ChatbotConfig {
  return defaultConfig;
}
