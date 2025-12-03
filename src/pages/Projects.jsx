import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Footer from '../components/Footer'

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-10">
      <Link to="/" className="text-gray-400 hover:text-white mb-8 block">← Geri Dön</Link>
      <h1 className="text-4xl font-bold mb-8">Projeler</h1>
      
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h2>
            <p className="text-gray-300 mb-6">{project.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.phases.map((phase) => (
                <div key={phase.id} className="bg-black/50 p-4 rounded-xl border border-gray-700">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{phase.icon}</span>
                    <h3 className="font-bold text-white">{phase.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
