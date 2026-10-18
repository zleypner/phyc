# Mejoras SEO, GEO y AEO - Physical Care Fisioterapia

**Fecha:** 18 de octubre de 2026
**Proyecto:** Physical Care Fisioterapia
**URL:** https://physicalcarefisioterapia.com

---

## Resumen Ejecutivo

Se implementaron mejoras profundas en tres áreas clave de optimización para motores de búsqueda:

- **SEO (Search Engine Optimization):** Optimización tradicional para Google y otros buscadores
- **GEO (Geographic SEO):** Optimización para búsquedas locales y Google Maps
- **AEO (Answer Engine Optimization):** Optimización para asistentes de voz y motores de respuesta (Google Assistant, ChatGPT, Perplexity)

---

## 1. Componentes SEO Reutilizables Creados

Se creó una biblioteca de componentes Schema.org reutilizables en `/src/components/seo/`:

### 1.1 FAQSchema.tsx
- **Propósito:** Generar datos estructurados FAQPage para preguntas frecuentes
- **Beneficio AEO:** Mejora visibilidad en Featured Snippets, Google Assistant y AI answer engines
- **Uso:** Importar y pasar array de FAQs con `question` y `answer`

### 1.2 HowToSchema.tsx
- **Propósito:** Generar datos estructurados HowTo para guías paso a paso
- **Beneficio AEO:** Aparecer en rich results de "Cómo hacer X" y respuestas de voz
- **Propiedades:** name, description, steps[], totalTime, estimatedCost, image

### 1.3 LocalBusinessSchema.tsx
- **Propósito:** Schema mejorado para SEO local (GEO)
- **Características:**
  - NAP consistente (Name, Address, Phone)
  - GeoCircle con radio de servicio (15km)
  - 11 ciudades de área servida (San José, Cartago, Heredia, etc.)
  - Reviews individuales con autor, rating y fecha
  - ContactPoints múltiples (WhatsApp, email)
  - Amenidades (accesibilidad, estacionamiento, A/C)
  - Fundador y fecha de fundación
  - PotentialAction para reservaciones

### 1.4 WebsiteSchema.tsx
- **Propósito:** Schema @graph con WebSite, Organization y WebPage
- **Características:**
  - SearchAction para Sitelinks Searchbox en Google
  - SpeakableSpecification para voice search (AEO)
  - Organization con logo, contactos y founder
  - Vinculación entre entidades con @id

### 1.5 PersonSchema.tsx
- **Propósito:** Schema Person para profesionales (E-E-A-T)
- **Características:**
  - Credenciales profesionales (EducationalOccupationalCredential)
  - Membresías en organizaciones (ISMST, Colegio de Terapeutas)
  - Educación y especialidades
  - Premios y reconocimientos
  - Perfiles sociales (sameAs)

### 1.6 ServiceSchema.tsx
- **Propósito:** Schema MedicalTherapy para servicios individuales
- **Características:**
  - Tipo de servicio médico
  - Área servida
  - Canal de disponibilidad (teléfono, URL)
  - Audiencia médica
  - Especialidad relevante

### 1.7 index.ts
- **Propósito:** Exportación centralizada de todos los componentes SEO
- **Uso:** `import { FAQSchema, HowToSchema, ... } from '@/components/seo'`

---

## 2. Mejoras en Layout Global (layout.tsx)

### Cambios realizados:
1. **Importación de nuevos componentes:**
   ```tsx
   import { WebsiteSchema, LocalBusinessSchema } from "@/components/seo";
   ```

2. **WebsiteSchema global:**
   - SearchAction para sitelinks searchbox
   - Speakable specification para voice search
   - Organization con todos los datos de la empresa

3. **LocalBusinessSchema con reviews:**
   - 3 reviews individuales con datos completos
   - Rating agregado (4.9/5 - 450 reviews)
   - Área de servicio expandida

---

## 3. Mejoras en Sitemap (sitemap.ts)

### Cambios realizados:

1. **Imágenes en sitemap:**
   - Homepage con og-image.jpg
   - Servicios con og-image.jpg
   - Tecnología con og-image.jpg
   - Página personal brand con imágenes del congreso
   - Artículos de blog con imágenes relacionadas

2. **URLs adicionales:**
   - `/enmanuel-li` (página E-E-A-T del director)
   - `/servicios-especializados#ondas-de-choque`
   - `/servicios-especializados#rehabilitacion-deportiva`
   - `/servicios-especializados#terapia-manual`
   - `/servicios-especializados#tecarterapia`

3. **Fechas específicas:**
   - Artículo de blog con fecha real de publicación (2026-10-14)

---

## 4. Página Enmanuel Li (E-E-A-T)

### Nuevo layout.tsx creado:

**Metadata mejorada:**
- Title optimizado con nombre, título y especialidad
- Description con credenciales y experiencia
- 12 keywords específicas del profesional
- Open Graph type: profile
- Twitter card con imagen del congreso

**PersonSchema completo:**
- 4 credenciales educativas/profesionales
- 2 instituciones educativas (alumniOf)
- 9 áreas de expertise (knowsAbout)
- 3 membresías profesionales (ISMST, Colegio, STORZ)
- 2 premios/reconocimientos
- Datos de contacto completos

---

## 5. Página Servicios Especializados

### Mejoras realizadas:

1. **FAQSchema con 6 preguntas:**
   - Fisioterapia geriátrica
   - Ondas de choque
   - Número de sesiones
   - Diferencia tecarterapia vs ondas de choque
   - Rehabilitación post-quirúrgica
   - Métodos de pago

2. **HowToSchema para agendar citas:**
   - 4 pasos detallados
   - Tiempo total estimado (5 minutos)
   - URL de WhatsApp incluida

---

## 6. Página de Contacto (GEO)

### Mejoras realizadas:

1. **ContactPage Schema:**
   - Tipo ContactPage con mainEntity MedicalClinic
   - Coordenadas geográficas precisas
   - Horarios de operación estructurados
   - Link a Google Maps

2. **FAQSchema con 4 preguntas:**
   - Horario de atención
   - Ubicación exacta
   - Cómo agendar cita
   - Requisitos para primera consulta

---

## 7. Impacto Esperado

### SEO Tradicional:
- Rich snippets en resultados de búsqueda
- Sitelinks searchbox en búsquedas de marca
- Mejor entendimiento del contenido por Google

### GEO (Local SEO):
- Mejor posicionamiento en Google Maps
- Aparecer en búsquedas "cerca de mí"
- Knowledge Panel mejorado para la clínica
- NAP consistente en todos los schemas

### AEO (Answer Engine Optimization):
- Respuestas en Google Assistant/Siri
- Featured snippets para preguntas frecuentes
- Visibilidad en ChatGPT/Perplexity cuando citan fuentes
- Voice search optimization con Speakable

### E-E-A-T:
- Credibilidad del profesional establecida
- Expertise demostrada con credenciales
- Autoridad con membresías internacionales
- Trust signals con reviews individuales

---

## 8. Archivos Modificados/Creados

### Archivos Creados:
```
src/components/seo/FAQSchema.tsx
src/components/seo/HowToSchema.tsx
src/components/seo/LocalBusinessSchema.tsx
src/components/seo/WebsiteSchema.tsx
src/components/seo/PersonSchema.tsx
src/components/seo/ServiceSchema.tsx
src/components/seo/index.ts
src/app/enmanuel-li/layout.tsx
docs/2026-10-18-mejoras-seo-geo-aeo.md
```

### Archivos Modificados:
```
src/app/layout.tsx
src/app/sitemap.ts
src/app/servicios-especializados/page.tsx
src/app/contacto/page.tsx
```

---

## 9. Próximos Pasos Recomendados

1. **Google Search Console:**
   - Verificar el sitio (descomentar código en layout.tsx)
   - Enviar sitemap actualizado
   - Monitorear indexación de nuevas URLs

2. **Google Business Profile:**
   - Sincronizar NAP con schema
   - Agregar fotos del equipo y la clínica
   - Responder reviews

3. **Monitoreo:**
   - Usar Rich Results Test para validar schemas
   - Monitorear posiciones en Search Console
   - Tracking de búsquedas por voz

4. **Contenido adicional:**
   - Más artículos de blog con FAQ schemas
   - Videos con VideoObject schema
   - Páginas de servicios individuales

---

## 10. Validación de Schemas

Para validar los schemas implementados:

1. **Google Rich Results Test:**
   https://search.google.com/test/rich-results

2. **Schema.org Validator:**
   https://validator.schema.org/

3. **Inspeccionar en DevTools:**
   - Buscar `<script type="application/ld+json">`
   - Copiar JSON y validar

---

*Documento generado el 18 de octubre de 2026*
