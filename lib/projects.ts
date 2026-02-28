import { MapPin, PhoneCall, Workflow, type LucideIcon } from 'lucide-react'

export type Project = {
  slug: string
  icon: LucideIcon
  iconBg: string
  iconColor: string
  placeholderGradient: string
  title: string
  shortDescription: string
  fullDescription: string[]
  tech: string[]
  status: string
  statusColor: string
  images: string[]
  // 'columns' → fila de fotos portrait (móvil)
  // 'stack'   → fotos apiladas full-width una debajo de la otra
  galleryLayout: 'columns' | 'stack'
  tiktokUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'adventure-map',
    icon: MapPin,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    placeholderGradient: 'from-emerald-50 to-teal-100',
    title: 'Adventure Map',
    shortDescription:
      'App móvil tipo red social para descubrir y compartir spots de aventura al aire libre.',
    fullDescription: [
      'Adventure Map es una aplicación móvil desarrollada con Flutter y Firebase que funciona como una red social centrada en los spots de aventura al aire libre.',
      'Los usuarios pueden añadir nuevos spots —saltos al agua, miradores, cuevas, cascadas y piscinas naturales— votarlos y descubrir los mejores lugares cercanos en un mapa interactivo.',
      'El proyecto combina autenticación de usuarios, base de datos en tiempo real con Cloud Firestore, almacenamiento de imágenes y geolocalización, todo dentro de una sola app multiplataforma.',
    ],
    tech: ['Flutter', 'Firebase', 'Google Maps API', 'Cloud Firestore'],
    status: 'En desarrollo',
    statusColor: 'bg-emerald-50 text-emerald-700',
    images: [
      '/images/adventure-map-1.jpeg',
      '/images/adventure-map-2.jpeg',
      '/images/adventure-map-3.jpeg',
      '/images/adventure-map-4.jpeg',
    ],
    galleryLayout: 'columns',
  },
  {
    slug: 'agente-de-voz',
    icon: PhoneCall,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    placeholderGradient: 'from-blue-50 to-indigo-100',
    title: 'Agente de Voz para Cerrajeros',
    shortDescription:
      'Recepcionista IA que gestiona llamadas para negocios de cerrajería las 24 horas.',
    fullDescription: [
      'Un agente de voz basado en inteligencia artificial que actúa como recepcionista virtual para negocios de cerrajería. Atiende llamadas 24/7 sin intervención humana.',
      'El agente responde preguntas frecuentes, identifica el tipo de urgencia, recoge los datos del cliente y puede transferir la llamada o notificar al cerrajero en tiempo real mediante automatizaciones de n8n.',
      'Construido sobre VAPI y Retell AI para la gestión de llamadas, con voces naturales generadas por ElevenLabs y toda la lógica de backend orquestada desde n8n.',
      'El sistema incluye un CRM donde el cliente puede consultar el historial de llamadas, los datos recogidos por el agente y el estado de cada contacto, todo centralizado en un único panel.',
    ],
    tech: ['VAPI', 'ElevenLabs', 'Retell AI', 'n8n', 'OpenAI'],
    status: 'Completado',
    statusColor: 'bg-gray-100 text-gray-600',
    images: [
      '/images/agente-de-voz-1.png',
      '/images/agente-de-voz-2.png',
      '/images/agente-de-voz-3.png',
    ],
    galleryLayout: 'stack',
    tiktokUrl: 'https://www.tiktok.com/@de0a100conIA',
  },
  {
    slug: 'automatizaciones',
    icon: Workflow,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    placeholderGradient: 'from-amber-50 to-orange-100',
    title: 'Automatizaciones Empresariales',
    shortDescription:
      'Flujos de trabajo automáticos para empresas y particulares con n8n.',
    fullDescription: [
      'Desarrollo de automatizaciones a medida para empresas y particulares usando n8n como motor principal de workflows, eliminando tareas repetitivas y conectando herramientas.',
      'Proyectos realizados: scraping de negocios locales para una lotería en Mallorca, generador automático de contenido para redes sociales usando IA, y pipelines de datos personalizados.',
      'Cada proyecto integra APIs externas, bases de datos y modelos de lenguaje para crear soluciones que funcionan solas sin necesidad de intervención manual.',
    ],
    tech: ['n8n', 'Make', 'OpenAI API', 'APIs REST', 'Webhooks'],
    status: 'Varios clientes',
    statusColor: 'bg-amber-50 text-amber-700',
    images: [
      '/images/automatizaciones-1.png',
      '/images/automatizaciones-2.png',
      '/images/automatizaciones-3.png',
    ],
    galleryLayout: 'stack',
    tiktokUrl: 'https://www.tiktok.com/@de0a100conIA',
  },
]
