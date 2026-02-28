import { MapPin, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 border border-gray-200 px-3 py-1.5 rounded-full">
            <MapPin className="w-3 h-3" />
            Málaga, España
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Disponible · Verano 2026
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-none mb-6">
          Iván Pérez
          <br />
          Peralta
        </h1>

        {/* Role */}
        <p className="text-lg md:text-xl text-gray-500 mb-4 max-w-2xl">
          Ingeniería Robótica · Electrónica · Mecatrónica
        </p>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed max-w-lg mb-10">
          Estudiante de 3º en la Universidad de Málaga. Construyo
          automatizaciones con IA, agentes de voz y apps móviles mientras
          termino mi carrera. Busco incorporarme como ingeniero este verano.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center bg-gray-900 text-white px-7 py-3.5 rounded-lg hover:bg-gray-700 transition-colors font-medium text-sm"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-7 py-3.5 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors font-medium text-sm"
          >
            Contactar
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex items-center gap-2 text-gray-300">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span className="text-xs">Scroll</span>
        </div>
      </div>
    </section>
  )
}
