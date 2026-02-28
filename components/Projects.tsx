import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/lib/projects'

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
                key={project.slug}
                className="bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                {/* Image / placeholder */}
                {project.images.length > 0 ? (
                  <div className="relative h-36 flex-shrink-0 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-full h-36 bg-gradient-to-br ${project.placeholderGradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className={`w-8 h-8 ${project.iconColor} opacity-40`} />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
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
                    {project.shortDescription}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-400 px-2.5 py-1 rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Link */}
                  <a
                    href={`/proyectos/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors group"
                  >
                    Ver proyecto
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
