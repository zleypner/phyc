// Attribution tracking for UTM parameters and referrer data

export interface AttributionData {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  entryPage?: string;
  referrer?: string;
  landingTimestamp?: string;
}

const ATTRIBUTION_KEY = "phyc_attribution";

export function extractUtmParams(): Partial<AttributionData> {
  if (typeof window === "undefined") return {};

  try {
    const params = new URLSearchParams(window.location.search);
    const attribution: Partial<AttributionData> = {};

    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");
    const utmTerm = params.get("utm_term");
    const utmContent = params.get("utm_content");

    if (utmSource) attribution.utmSource = utmSource;
    if (utmMedium) attribution.utmMedium = utmMedium;
    if (utmCampaign) attribution.utmCampaign = utmCampaign;
    if (utmTerm) attribution.utmTerm = utmTerm;
    if (utmContent) attribution.utmContent = utmContent;

    return attribution;
  } catch (error) {
    console.error("[Attribution] Error extracting UTM params:", error);
    return {};
  }
}

export function getPageContext(): Partial<AttributionData> {
  if (typeof window === "undefined") return {};

  return {
    entryPage: window.location.pathname,
    referrer: document.referrer || undefined,
    landingTimestamp: new Date().toISOString(),
  };
}

export function captureAttribution(): AttributionData {
  if (typeof window === "undefined") {
    return {};
  }

  const existing = loadAttribution();
  if (existing && existing.landingTimestamp) {
    return existing;
  }

  const utmParams = extractUtmParams();
  const pageContext = getPageContext();

  const attribution: AttributionData = {
    ...utmParams,
    ...pageContext,
  };

  saveAttribution(attribution);

  return attribution;
}

export function saveAttribution(data: AttributionData): void {
  if (typeof window === "undefined") return;

  try {
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("[Attribution] Error saving:", error);
  }
}

export function loadAttribution(): AttributionData | null {
  if (typeof window === "undefined") return null;

  try {
    const data = sessionStorage.getItem(ATTRIBUTION_KEY);
    if (!data) return null;
    return JSON.parse(data);
  } catch (error) {
    console.error("[Attribution] Error loading:", error);
    return null;
  }
}

export function formatAttributionForMessage(attribution: AttributionData | undefined): string {
  if (!attribution) return "";

  const parts: string[] = [];

  if (attribution.utmSource) {
    parts.push(`Fuente: ${attribution.utmSource}`);
  }
  if (attribution.utmMedium) {
    parts.push(`Medio: ${attribution.utmMedium}`);
  }
  if (attribution.utmCampaign) {
    parts.push(`Campaña: ${attribution.utmCampaign}`);
  }
  if (attribution.entryPage && attribution.entryPage !== "/") {
    parts.push(`Página: ${attribution.entryPage}`);
  }

  return parts.length > 0 ? parts.join(" | ") : "";
}

export function hasUtmData(attribution: AttributionData | undefined): boolean {
  if (!attribution) return false;
  return !!(attribution.utmSource || attribution.utmMedium || attribution.utmCampaign);
}
