import Head from 'next/head'
import Link from 'next/link' // Sayfalar arası hızlı geçiş (Video 1'den)

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Head>
        <title>Bilim Oluşumu | Fill the Gaps</title>
      </Head>

      {/* NAVBAR */}
      <nav className="flex justify-between p-6 items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold tracking-widest">X-OLUSUM</div>
        <div className="space-x-6 text-gray-400">
          <Link href="/projeler" className="hover:text-white transition">Projeler</Link>
          <Link href="/iletisim" className="hover:text-white transition">İletişim</Link>
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
        
        {/* Video 1'deki Link komponenti kullanımı */}
        <Link href="/projeler">
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
            Projeleri İncele
          </button>
        </Link>
      </main>

      {/* İSTATİSTİKLER (Xorbita'daki "Total Debris" kısmı) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-32 text-center border-t border-gray-800 pt-10">
        <div>
          <div className="text-4xl font-bold text-blue-500">1,250+</div>
          <div className="text-gray-500 text-sm mt-2">TAMAMLANAN PROJE</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-purple-500">500+</div>
          <div className="text-gray-500 text-sm mt-2">KATILIMCI BİLİM İNSANI</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-green-500">%98</div>
          <div className="text-gray-500 text-sm mt-2">DOĞRULUK ORANI</div>
        </div>
      </section>
    </div>
  )
}