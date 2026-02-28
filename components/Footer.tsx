export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Iván Pérez Peralta
        </p>
        <p className="text-sm text-gray-400">
          Hecho con Next.js · Desplegado en Vercel
        </p>
      </div>
    </footer>
  )
}
