import { MapPin, PhoneCall, Workflow } from 'lucide-react'

const projects = [
  {
    icon: MapPin,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    title: 'Adventure Map',
    description:
      'App móvil tipo red social para descubrir y compartir spots de aventura: saltos al agua, miradores, cuevas y piscinas naturales. Los usuarios añaden, votan y descubren los mejores lugares.',
    tech: ['Flutter', 'Firebase', 'Google Maps API'],
    status: 'En desarrollo',
    statusColor: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: PhoneCall,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    title: 'Agente de Voz para Cerrajeros',
    description:
      'Recepcionista IA que gestiona llamadas de forma autónoma para negocios de cerrajería. Responde consultas, filtra urgencias y recoge datos del cliente 24/7 sin intervención humana.',
    tech: ['VAPI', 'ElevenLabs', 'Retell AI', 'n8n'],
    status: 'Completado',
    statusColor: 'bg-gray-100 text-gray-600',
  },
  {
    icon: Workflow,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    title: 'Automatizaciones Empresariales',
    description:
      'Flujos automáticos para empresas: scraping de negocios para una lotería en Mallorca, generador de contenido para redes sociales y pipelines de datos a medida.',
    tech: ['n8n', 'Make', 'OpenAI API', 'APIs REST'],
    status: 'Varios clientes',
    statusColor: 'bg-amber-50 text-amber-700',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Proyectos
          </h2>
          <p className="text-gray-500 max-w-lg">
            Proyectos personales y para clientes en automatización, IA y
            desarrollo de aplicaciones.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${project.iconBg}`}
                >
                  <Icon className={`w-5 h-5 ${project.iconColor}`} />
                </div>

                {/* Title + status */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${project.statusColor}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
