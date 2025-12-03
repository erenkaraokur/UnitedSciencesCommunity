import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-10">
      <Link to="/" className="text-gray-400 hover:text-white mb-8 block">← Geri Dön</Link>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600">
          İletişim
        </h1>
        
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <p className="text-xl text-gray-300 mb-6">
            Bizimle iletişime geçmek için aşağıdaki e-posta adresini kullanabilirsiniz.
          </p>
          
          <div className="flex items-center gap-4 text-2xl">
            <span className="text-blue-500">✉️</span>
            <a href="mailto:unitedsciencescommunity@gmail.com" className="hover:text-blue-400 transition">
              unitedsciencescommunity@gmail.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
