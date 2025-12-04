import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const teamMembers = [
  {
    id: 1,
    name: 'Ceylin',
    role: 'Ekip Üyesi',
    intro: 'Bilim ve teknoloji tutkunu, projenin geliştirilmesinde aktif rol alıyor.',
    phone: '+90 555 000 00 00',
    email: 'ceylin@usc.com'
  },
  {
    id: 2,
    name: 'Elif',
    role: 'Ekip Üyesi',
    intro: 'Yaratıcı çözümler ve tasarım odaklı yaklaşımıyla ekibe güç katıyor.',
    phone: '+90 555 000 00 01',
    email: 'elif@usc.com'
  },
  {
    id: 3,
    name: 'Muhammet Eren Karaokur',
    role: 'Ekip Üyesi',
    intro: 'Teknik altyapı ve veri analizi konularında uzmanlaşmış bir araştırmacı.',
    phone: '+90 555 000 00 02',
    email: 'muhammet@usc.com'
  },

]

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-10">
      <Link to="/" className="text-gray-400 hover:text-white mb-8 block">← Geri Dön</Link>
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600">
          Hakkımızda
        </h1>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl">
          Bilimin sınırlarını zorlayan ve geleceği şekillendiren tutkulu ekibimizle tanışın.
        </p>

        <h2 className="text-3xl font-bold mb-10 border-b border-gray-800 pb-4">Ekibimiz</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-blue-500 transition duration-300 group">
              <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-purple-600 rounded-full mb-6 flex items-center justify-center text-2xl font-bold">
                {member.name.charAt(0)}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition">{member.name}</h3>
              <div className="text-sm text-blue-500 mb-4 uppercase tracking-wider">{member.role}</div>
              
              <p className="text-gray-400 text-sm mb-6 min-h-[60px]">
                {member.intro}
              </p>
              
              <div className="space-y-3 border-t border-gray-800 pt-4">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-blue-500">📱</span>
                  {member.phone}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-blue-500">✉️</span>
                  {member.email}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
