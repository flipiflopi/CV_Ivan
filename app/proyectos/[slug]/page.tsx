import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/projects'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TikTokIcon from '@/components/TikTokIcon'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.title} · Iván Pérez Peralta`,
    description: project.shortDescription,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const Icon = project.icon

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Back */}
          <a
            href="/#proyectos"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </a>

          {/* Header del proyecto */}
          <div className="flex items-start gap-4 mb-6">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${project.iconBg}`}
            >
              <Icon className={`w-6 h-6 ${project.iconColor}`} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {project.title}
                </h1>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full ${project.statusColor}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-gray-500">{project.shortDescription}</p>
            </div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-sm border border-gray-200 text-gray-600 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Imagen / placeholder
              Para añadir tu captura real:
              1. Coloca el archivo en public/images/<slug>.jpg
              2. Añade image: '/images/<slug>.jpg' al proyecto en lib/projects.ts
              3. Reemplaza este bloque por <Image src={project.image} ... />
          */}
          <div
            className={`w-full h-56 md:h-72 rounded-2xl bg-gradient-to-br ${project.placeholderGradient} flex items-center justify-center mb-10 border border-gray-100`}
          >
            <div className="text-center">
              <Icon className={`w-10 h-10 ${project.iconColor} mx-auto mb-2 opacity-40`} />
              <p className="text-xs text-gray-400">
                Añade tu captura en public/images/{project.slug}.jpg
              </p>
            </div>
          </div>

          {/* Descripción */}
          <div className="space-y-4 mb-12">
            {project.fullDescription.map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* TikTok */}
          {project.tiktokUrl && (
            <div className="border border-gray-100 rounded-2xl p-6 mb-12 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                  <TikTokIcon className="w-4 h-4 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Ver en TikTok
                  </p>
                  <p className="text-xs text-gray-400">@de0a100conIA</p>
                </div>
              </div>
              <a
                href={project.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-700 border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 transition-colors"
              >
                Abrir
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* CTA contacto */}
          <div className="bg-gray-50 rounded-2xl p-7 text-center">
            <p className="text-gray-900 font-semibold mb-1">
              ¿Interesado en algo similar?
            </p>
            <p className="text-gray-500 text-sm mb-5">
              Puedo construir automatizaciones, agentes de voz o apps a medida.
            </p>
            <a
              href="/#contacto"
              className="inline-flex items-center justify-center bg-gray-900 text-white px-7 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium text-sm"
            >
              Contactar
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
