import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold tracking-widest text-white">USC</div>
        
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} United Science Corporation. Tüm hakları saklıdır.
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <span>✉️</span>
          <a href="mailto:unitedsciencescommunity@gmail.com" className="hover:text-white transition">
            unitedsciencescommunity@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
