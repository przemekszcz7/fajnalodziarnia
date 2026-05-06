/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Instagram, 
  Facebook, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  IceCream, 
  Coffee, 
  Cake as CakeIcon, 
  GlassWater, 
  Heart 
} from 'lucide-react';

const LOGO_URL = "https://iili.io/BZukyZB.md.jpg";
const GALLERY_IMAGES = [
  "https://iili.io/BZuUBuj.md.jpg",
  "https://iili.io/BZuU3F9.md.jpg",
  "https://iili.io/BZuSyZl.md.jpg",
  "https://iili.io/BZuUzMB.md.jpg",
  "https://iili.io/BZuUuF1.md.jpg",
  "https://iili.io/BZuUeol.md.jpg",
  "https://iili.io/BZuUI6P.md.jpg",
  "https://iili.io/BZuU79a.md.jpg",
  "https://iili.io/BZuU1MN.md.jpg",
  "https://iili.io/BZuUjAG.md.jpg",
  "https://iili.io/BZuUNt4.md.jpg",
];

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-ice-cream/30">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Logo" className="h-14 w-14 rounded-full object-cover shadow-sm bg-white border border-ice-pink" />
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">Fajna Lodziarnia</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#menu" className="text-sm font-semibold hover:text-pink-600 transition-colors uppercase tracking-widest">Menu</a>
            <a href="#lokalizacja" className="text-sm font-semibold hover:text-pink-600 transition-colors uppercase tracking-widest">Gdzie jesteśmy</a>
            <a href="https://www.facebook.com/profile.php?id=100063577963610" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-blue-600 transition-colors" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-16 overflow-hidden">
        <div className="atmosphere absolute inset-0 -z-10 bg-ice-pink/30 opacity-50 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-ice-cream text-ice-brown font-semibold text-xs uppercase tracking-widest mb-6">
              Lody Rzemieślnicze
            </span>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8">
              Naturalnie <br /> 
              <span className="text-pink-500 italic">Najlepsze.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-12 max-w-md leading-relaxed">
              Prawdziwe smaki dzieciństwa, tworzone z pasją i najlepszych naturalnych składników. Każda gałka to kawałek nieba.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="px-8 py-4 bg-ice-brown text-white rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-xl">
                Zobacz Menu
              </a>
              <a href="#lokalizacja" className="px-8 py-4 border-2 border-ice-brown text-ice-brown rounded-full font-bold hover:bg-ice-brown hover:text-white transition-all active:scale-95">
                Jak dojechać
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img src={GALLERY_IMAGES[0]} alt="Lody" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 aspect-square w-32 bg-ice-cream rounded-full z-20 flex items-center justify-center border-4 border-white shadow-lg animate-bounce">
              <div className="text-center">
                <span className="block font-bold text-2xl">7 zł</span>
                <span className="text-[10px] uppercase font-bold text-gray-500">Gałka</span>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 aspect-square w-48 bg-ice-mint/80 backdrop-blur rounded-[2rem] -z-10 border border-white" />
          </motion.div>
        </div>
      </header>

      {/* Loyalty Banner */}
      <section className="bg-ice-brown text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <Star className="w-10 h-10 text-ice-cream fill-ice-cream" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Halo! Masz naszą kartę?</h2>
              <p className="text-ice-cream/80 text-lg">Fajni lodożercy pieczątki zbierają i darmowe lody odbierają!</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-white text-ice-brown rounded-full font-bold text-lg hover:scale-105 transition-transform">
            Zapytaj przy kasie!
          </button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section-padding bg-ice-mint/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Nasze Słodkości</h2>
            <div className="w-24 h-1 bg-ice-brown mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lody Item */}
            <div className="glass-card p-8 group">
              <IceCream className="w-10 h-10 text-pink-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">Lody Rzemieślnicze</h3>
              <p className="text-gray-600 mb-6 italic">Gałki pełne smaku i naturalnych składników.</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white p-3 rounded-2xl border border-ice-cream shadow-sm">
                  <span className="font-semibold">1 Gałka</span>
                  <span className="font-bold text-lg text-pink-600">7 zł</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-2xl border border-ice-cream shadow-sm">
                  <span className="font-semibold">Kubek firmowy 470ml</span>
                  <span className="font-bold text-lg text-pink-600">19 zł</span>
                </div>
              </div>
            </div>

            {/* Deser Item */}
            <div className="glass-card p-8 group border-pink-100 bg-pink-50/50">
              <Heart className="w-10 h-10 text-pink-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">Deser Lodowy</h3>
              <p className="text-gray-600 mb-6">Miseczka waflowa, 3 gałki, bita śmietana, świeże owoce, polewa i posypka.</p>
              <div className="flex justify-between items-center bg-white p-3 rounded-2xl border border-ice-pink shadow-sm">
                <span className="font-semibold">Pełen wypas</span>
                <span className="font-bold text-lg text-pink-600">23 zł</span>
              </div>
            </div>

            {/* Shake Item */}
            <div className="glass-card p-8 group">
              <GlassWater className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">Shake 330ml</h3>
              <p className="text-gray-600 mb-4 italic">Na bazie naszych lodów: wanilia, truskawka, czekolada, smerfowy.</p>
              <div className="flex justify-between items-center bg-white p-3 rounded-2xl border border-ice-cream shadow-sm">
                <span className="font-semibold">Dowolny smak</span>
                <span className="font-bold text-lg text-pink-600">11,90 zł</span>
              </div>
            </div>

            {/* Gofry Item */}
            <div className="glass-card p-8 group">
              <div className="w-10 h-10 bg-ice-cream rounded-lg mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span className="font-bold text-2xl">🧇</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Gofry & Lemoniada</h3>
              <p className="text-gray-600 mb-6">Chrupiące, robione na świeżo.</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white p-3 rounded-2xl border border-ice-cream shadow-sm">
                  <span className="font-semibold">Gofry</span>
                  <span className="font-bold text-lg text-pink-600">od 7 zł</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-2xl border border-ice-cream shadow-sm">
                  <span className="font-semibold">Lemoniada</span>
                  <span className="font-bold text-lg text-pink-600">9 zł</span>
                </div>
              </div>
            </div>

            {/* Cake Item */}
            <div className="glass-card p-8 group">
              <CakeIcon className="w-10 h-10 text-amber-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">Ciasto Firmowe</h3>
              <p className="text-gray-600 mb-6 italic">Własnej produkcji, idealne do kawy.</p>
              <div className="flex justify-between items-center bg-white p-3 rounded-2xl border border-ice-cream shadow-sm">
                <span className="font-semibold">Porcja słodkości</span>
                <span className="font-bold text-lg text-pink-600">11,90 zł</span>
              </div>
            </div>

            {/* Coffee Item */}
            <div className="glass-card p-8 group bg-ice-cream/10">
              <Coffee className="w-10 h-10 text-ice-brown mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">Kawa</h3>
              <p className="text-gray-600 mb-4">Espresso, czarna, biała, cappucino, latte.</p>
              <div className="flex justify-between items-center bg-white p-3 rounded-2xl border border-ice-cream shadow-sm">
                <div className="flex flex-col">
                  <span className="font-semibold leading-none">Kawa Mrożona</span>
                  <span className="text-[10px] text-gray-500 mt-1 uppercase">Z bitą śmietaną</span>
                </div>
                <span className="font-bold text-lg text-pink-600">11 zł</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-md">
              <h2 className="text-5xl font-bold mb-4">Nasza Galeria</h2>
              <p className="text-gray-600">Zobacz jak pysznie u nas jest! Każdy deser to małe dzieło sztuki.</p>
            </div>
            <a 
              href="https://www.facebook.com/profile.php?id=100063577963610" 
              className="px-6 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 font-bold hover:bg-blue-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5" />
              Więcej na Facebooku
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {GALLERY_IMAGES.slice(1, 9).map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className={`rounded-[2rem] overflow-hidden shadow-lg aspect-square ${idx % 3 === 0 ? 'md:col-span-2 md:row-span-2 aspect-auto' : ''}`}
              >
                <img src={img} alt={`Ice cream ${idx}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reels Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Odkryj nas na Reels</h2>
            <p className="text-gray-600">Zobacz nasze najnowsze słodkie produkcje w akcji!</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              "https://www.facebook.com/reel/23979016201751726",
              "https://www.facebook.com/reel/467309112720293",
            ].map((reelUrl, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="w-full max-w-[350px] space-y-4"
              >
                <div className="aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-ice-pink bg-black relative">
                  <iframe 
                    src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(reelUrl)}&show_text=false&t=0&width=350`} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 'none', overflow: 'hidden' }} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
                <a 
                  href={reelUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-bold text-ice-brown hover:text-pink-600 transition-colors py-2 bg-ice-pink/20 rounded-xl"
                >
                  <Facebook className="w-4 h-4" />
                  Obejrzyj na Facebooku
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-pink-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Opinie naszych gości</h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Wasze uśmiechy są dla nas najważniejsze. Zobacz, co mówią o nas Fajni Lodożercy!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Anna Nowak",
                text: "Najlepsze lody w całym Kościanie! Smaki naturalne, czuć wysoką jakość składników. Polecam szczególnie deser w miseczce waflowej.",
                rating: 5
              },
              {
                name: "Marek Wiśniewski",
                text: "Pyszna kawa i genialne gofry. Bardzo miła obsługa i fajny klimat. Miejsce idealne na niedzielny spacer z rodziną.",
                rating: 5
              },
              {
                name: "Katarzyna Kowalczyk",
                text: "Lody rzemieślnicze pierwszej klasy! Shake truskawkowy skradł moje serce. Super, że macie kartę lojalnościową!",
                rating: 5
              }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card p-8 bg-white"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ice-pink flex items-center justify-center font-bold text-pink-600">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-bold">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://www.facebook.com/profile.php?id=100063577963610&sk=reviews" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5" />
              Przeczytaj wszystkie opinie na Facebooku
            </a>
          </div>
        </div>
      </section>

      {/* Info & Location Section */}
      <section id="lokalizacja" className="section-padding bg-ice-brown text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold mb-12 text-ice-cream">Godziny Otwarcia</h2>
            <div className="space-y-4">
              {[
                { day: "Poniedziałek", hours: "12:00 - 19:30" },
                { day: "Wtorek", hours: "12:00 - 19:30" },
                { day: "Środa", hours: "12:00 - 19:30" },
                { day: "Czwartek", hours: "12:00 - 19:30" },
                { day: "Piątek", hours: "12:00 - 19:30" },
                { day: "Sobota", hours: "11:00 - 19:30" },
                { day: "Niedziela", hours: "11:00 - 19:30" },
              ].map((item) => (
                <div key={item.day} className="flex justify-between items-center py-3 border-b border-white/10 group">
                  <span className="text-xl font-medium group-hover:translate-x-2 transition-transform">{item.day}</span>
                  <span className="font-display font-bold text-ice-cream">{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-ice-cream" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-ice-cream uppercase tracking-widest text-xs mb-1">Zadzwoń</h4>
                  <a href="tel:665754634" className="text-lg sm:text-xl font-semibold hover:text-ice-cream transition-colors block">665 754 634</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-ice-cream" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-ice-cream uppercase tracking-widest text-xs mb-1">Napisz</h4>
                  <a href="mailto:Fajnalodziarnia@gmail.com" className="text-lg sm:text-xl font-semibold hover:text-ice-cream transition-colors break-words block">Fajnalodziarnia@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-ice-cream" />
              </div>
              <div>
                <h4 className="font-bold text-ice-cream uppercase tracking-widest text-xs mb-1">Nasz Adres</h4>
                <p className="text-2xl font-bold">Plac Wolności , Kościan gmina</p>
              </div>
            </div>
            <div className="w-full h-full min-h-[400px] rounded-[3rem] overflow-hidden border-4 border-white/20 shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.583222946492!2d16.638019412668914!3d52.08731646805647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705b10700fc62c9%3A0x9f0c93654970f1f3!2splac%20Wolno%C5%9Bci%2C%2064-000%20Ko%C5%9Bcian!5e0!3m2!1spl!2spl!4v1778059814982!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100063577963610&sk=reviews" 
                className="flex-1 bg-white text-ice-brown py-4 rounded-full font-bold text-center hover:bg-ice-cream transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zobacz Opinie
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100063577963610" 
                className="flex-1 border-2 border-white text-white py-4 rounded-full font-bold text-center hover:bg-white hover:text-ice-brown transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Odwiedź FB
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-center border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <img src={LOGO_URL} alt="Logo Footer" className="h-20 w-20 rounded-full mx-auto mb-6 shadow-md" />
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Fajna Lodziarnia - Naturalnie. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
}
