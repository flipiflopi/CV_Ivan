const skillGroups = [
  {
    category: 'Ingeniería',
    skills: ['MATLAB', 'Simulink', 'PSPice', 'Xilinx / Vivado'],
  },
  {
    category: 'IA & Automatización',
    skills: ['n8n', 'VAPI', 'ElevenLabs', 'Retell AI', 'OpenAI API'],
  },
  {
    category: 'Desarrollo',
    skills: ['Flutter', 'Firebase', 'Docker', 'Git'],
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Sobre mí
            </h2>

            {/* Education */}
            <div className="border-l-2 border-gray-200 pl-5 mb-8">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                Educación
              </p>
              <p className="font-semibold text-gray-900 text-sm">
                Grado en Ingeniería Robótica, Electrónica y Mecatrónica
              </p>
              <p className="text-gray-500 text-sm">
                Universidad de Málaga · 2022 – Presente
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Terminando 3º curso · Disponible a partir de junio 2026
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Combino mi formación en ingeniería con proyectos prácticos de
              automatización e inteligencia artificial: desde agentes de voz
              para negocios hasta apps móviles y flujos de trabajo automáticos
              para clientes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Estoy en Málaga y busco incorporarme este verano como ingeniero en
              prácticas, ya sea de forma presencial o en remoto.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-7">
              Skills y herramientas
            </h3>

            <div className="space-y-7">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg hover:border-gray-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
