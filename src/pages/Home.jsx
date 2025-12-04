import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Footer from '../components/Footer'

const featuredProjects = projects.filter(p => p.showOnHomepage)

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* NAVBAR */}
      <nav className="flex justify-between p-6 items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold tracking-widest">USC-United Science Community</div>
        <div className="space-x-6 text-gray-400">
          <Link to="/projeler" className="hover:text-white transition">Projeler</Link>
          <Link to="/hakkimizda" className="hover:text-white transition">Hakkımızda</Link>
          <Link to="/iletisim" className="hover:text-white transition">İletişim</Link>
        </div>
      </nav>

      {/* HERO BÖLÜMÜ (Xorbita Tarzı) */}
      <main className="max-w-4xl mx-auto mt-20 text-center px-4">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          BİLİMDEKİ BOŞLUKLARI<br />BİRLİKTE DOLDURALIM.
        </h1>
        <p className="text-xl text-gray-400 mb-10">
          Eksik verileri tamamlayarak bilime katkı sağladığımız yeni nesil topluluk.
        </p>
        
        <Link to="/projeler">
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
            Projeleri İncele
          </button>
        </Link>
      </main>

      {/* İSTATİSTİKLER (Xorbita'daki "Total Debris" kısmı) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-32 text-center border-t border-gray-800 pt-10">
        <div>
          <div className="text-4xl font-bold text-blue-500">1</div>
          <div className="text-gray-500 text-sm mt-2">TAMAMLANAN PROJE</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-purple-500">3</div>
          <div className="text-gray-500 text-sm mt-2">TOPLULUĞUMUZUN BÜYÜKLÜĞÜ</div>
        </div>

      </section>

      {/* MEVCUT PROJELER (Featured Projects) */}
      {featuredProjects.length > 0 && (
        <div className="max-w-6xl mx-auto mt-32 px-4 pb-20 space-y-32">
          {featuredProjects.map((project) => (
            <section key={project.id}>
              <h2 className="text-4xl font-bold text-center mb-4">Mevcut Projemiz</h2>
              <h3 className="text-2xl text-center text-blue-400 mb-12">{project.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.phases.map((phase) => (
                  <div key={phase.id} className={`bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-${phase.color}-500 transition duration-300`}>
                    <div className="text-5xl mb-4">{phase.icon}</div>
                    <h4 className="text-xl font-bold mb-2 text-white">{phase.title}</h4>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
      <Footer />
    </div>
  )
}
