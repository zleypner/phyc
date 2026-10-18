/**
 * SEO Components - Centralized exports
 *
 * These components implement structured data schemas for:
 * - SEO (Search Engine Optimization)
 * - GEO (Geographic SEO / Local SEO)
 * - AEO (Answer Engine Optimization - Voice Search, AI Assistants)
 * - E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 */

// Breadcrumb navigation schema
export { default as BreadcrumbSchema } from './BreadcrumbSchema';

// FAQ schema for AEO and rich results
export { default as FAQSchema } from './FAQSchema';
export type { FAQItem } from './FAQSchema';

// HowTo schema for step-by-step guides
export { default as HowToSchema } from './HowToSchema';
export type { HowToStep } from './HowToSchema';

// Enhanced Local Business schema for GEO
export { default as LocalBusinessSchema } from './LocalBusinessSchema';

// Website schema with SearchAction for sitelinks
export { default as WebsiteSchema } from './WebsiteSchema';

// Person schema for E-E-A-T and author credibility
export { default as PersonSchema } from './PersonSchema';

// Service schema for medical services
export { default as ServiceSchema } from './ServiceSchema';
