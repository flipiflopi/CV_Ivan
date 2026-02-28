import { Mail, Phone, Linkedin } from 'lucide-react'
import TikTokIcon from './TikTokIcon'

const contactLinks = [
  {
    icon: Mail,
    isTikTok: false,
    label: 'Email',
    value: 'ivamm088@gmail.com',
    href: 'mailto:ivamm088@gmail.com',
    external: false,
  },
  {
    icon: Phone,
    isTikTok: false,
    label: 'Teléfono',
    value: '633 612 418',
    href: 'tel:+34633612418',
    external: false,
  },
  {
    icon: Linkedin,
    isTikTok: false,
    label: 'LinkedIn',
    value: 'Iván Pérez Peralta',
    href: 'https://www.linkedin.com/in/iv%C3%A1n-p%C3%A9rez-peralta-431236250/',
    external: true,
  },
  {
    icon: null,
    isTikTok: true,
    label: 'TikTok',
    value: '@de0a100conIA',
    href: 'https://www.tiktok.com/@de0a100conIA',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Contacto
          </h2>
          <p className="text-gray-500 mb-10">
            Disponible para prácticas de verano o proyectos freelance. No dudes
            en escribirme o llamar directamente.
          </p>

          <div className="space-y-3">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-sm hover:border-gray-200 transition-all group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors flex-shrink-0">
                  {item.isTikTok ? (
                    <TikTokIcon className="w-4 h-4 text-gray-700" />
                  ) : (
                    item.icon && <item.icon className="w-4 h-4 text-gray-700" />
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">
                    {item.label}
                  </p>
                  <p className="text-gray-900 font-medium text-sm">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
