/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  Star, 
  Menu, 
  X,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  HeartPulse
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Hammastarkastus",
    description: "Kattava suun ja hampaiden terveydentilan tutkimus.",
    icon: Stethoscope,
  },
  {
    title: "Hammaskiven poisto",
    description: "Ammattimainen puhdistus ja iensairauksien ennaltaehkäisy.",
    icon: Sparkles,
  },
  {
    title: "Paikkaushoidot",
    description: "Kestävät ja esteettiset paikkaukset nykyaikaisilla materiaaleilla.",
    icon: ShieldCheck,
  },
  {
    title: "Päivystys",
    description: "Nopea apu särkyyn ja tapaturmiin aukioloaikojen puitteissa.",
    icon: HeartPulse,
  }
];

const reviews = [
  {
    name: "Matti V.",
    text: "Erittäin ammattitaitoinen ja rauhallinen hammaslääkäri. Pelkopotilaana tunsin oloni turvalliseksi.",
    rating: 5
  },
  {
    name: "Liisa K.",
    text: "Loistava sijainti Forumissa ja ystävällinen palvelu. Suosittelen lämpimästi!",
    rating: 5
  },
  {
    name: "Antti S.",
    text: "Tarkkaa työtä ja selkeät selitykset toimenpiteistä. Paras kokemus hammaslääkärissä pitkään aikaan.",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">Pertti Patinen</h1>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Hammaslääkäri • Helsinki</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <a href="#palvelut" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Palvelut</a>
            <a href="#meista" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Meistä</a>
            <a href="#yhteystiedot" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Yhteystiedot</a>
            <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all active:scale-95">
              Varaa aika
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="rounded-lg p-2 text-slate-600 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-slate-100 bg-white p-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <a href="#palvelut" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-slate-600">Palvelut</a>
              <a href="#meista" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-slate-600">Meistä</a>
              <a href="#yhteystiedot" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-slate-600">Yhteystiedot</a>
              <button className="w-full rounded-xl bg-blue-600 py-3 text-base font-semibold text-white">
                Varaa aika
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Vastaanotto avoinna Forumissa
                </div>
                <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                  Tervetuloa asiantuntevaan <span className="text-blue-600">hammashoitoon</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl">
                  Hammaslääkäri Pertti Patinen tarjoaa yksilöllistä ja huolellista hammashoitoa Helsingin ydinkeskustassa. Panostamme potilaan mukavuuteen ja korkeaan laatuun.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <button className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-700 hover:shadow-blue-200 transition-all active:scale-95">
                    Varaa aika verkossa
                  </button>
                  <a href="tel:+3580000000" className="text-sm font-semibold leading-6 text-slate-900 flex items-center gap-2 group">
                    <Phone size={18} className="text-blue-600 group-hover:animate-bounce" /> Soita ajanvaraukseen
                  </a>
                </div>
                <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <img 
                        key={i}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white" 
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        alt="User"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <p>Yli 1000 tyytyväistä potilasta Helsingissä</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/dental-office/1200/900" 
                    alt="Dental Office" 
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-900/5 sm:-bottom-10 sm:-left-10">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <CheckCircle2 size={28} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Kela-korvattava</p>
                      <p className="text-xs text-slate-500">Suorakorvausmenettely</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="palvelut" className="py-24 sm:py-32 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-widest">Palvelumme</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Kaikki hammashoidon palvelut saman katon alta</p>
            
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600 flex-grow">{service.description}</p>
                  <button className="mt-6 flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    Lue lisää <ChevronRight size={16} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="meista" className="py-24 sm:py-32 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100 shadow-xl">
                    <img 
                      src="https://picsum.photos/seed/dentist-portrait/800/1066" 
                      alt="Pertti Patinen" 
                      className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden xl:block">
                    <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-2xl rotate-3">
                      <p className="text-4xl font-bold">25+</p>
                      <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Vuoden kokemus</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-widest">Hammaslääkäri</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Pertti Patinen</p>
                <div className="mt-6 space-y-6 text-lg leading-8 text-slate-600">
                  <p>
                    Olen toiminut hammaslääkärinä Helsingin keskustassa jo yli kahden vuosikymmenen ajan. Työssäni minulle on tärkeintä potilaan kohtaaminen yksilönä ja kivuton hoitokokemus.
                  </p>
                  <p>
                    Vastaanottoni sijaitsee kauppakeskus Forumissa, jonne on helppo tulla mistä päin pääkaupunkiseutua tahansa. Käytössämme on alan uusin teknologia ja noudatamme tiukimpia laatustandardeja.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Helsingin Yliopiston hammaslääketieteen lisensiaatti",
                      "Suomen Hammaslääkäriliiton jäsen",
                      "Jatkuva täydennyskoulutus uusimmista menetelmistä",
                      "Erityisosaaminen pelkopotilaiden hoidossa"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-24 sm:py-32 bg-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-blue-400 uppercase tracking-widest">Potilaskokemukset</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Mitä mieltä potilaamme ovat?</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-3xl bg-slate-800 p-8 ring-1 ring-white/10"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg italic leading-relaxed text-slate-300">"{review.text}"</p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold">
                      {review.name[0]}
                    </div>
                    <p className="font-semibold">{review.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Location Section */}
        <section id="yhteystiedot" className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Ota yhteyttä</h2>
                <p className="mt-4 text-lg text-slate-600">Varaa aika tai kysy lisää palveluistamme. Vastaamme mielellämme kaikkiin kysymyksiisi.</p>
                
                <div className="mt-10 space-y-8">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Sijainti</h3>
                      <p className="mt-1 text-slate-600">Kauppakeskus Forum, 6. krs<br />Mannerheimintie 20a, 00100 Helsinki</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Puhelin</h3>
                      <p className="mt-1 text-slate-600">Ajanvaraus: <a href="tel:+3580000000" className="hover:text-blue-600 transition-colors">09 123 4567</a></p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Aukioloajat</h3>
                      <div className="mt-1 text-slate-600 space-y-1">
                        <p className="flex justify-between w-48"><span>Ma - To:</span> <span>08:00 - 16:00</span></p>
                        <p className="flex justify-between w-48"><span>Pe:</span> <span>08:00 - 14:00</span></p>
                        <p className="flex justify-between w-48 text-slate-400"><span>La - Su:</span> <span>Suljettu</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] lg:h-auto overflow-hidden rounded-3xl bg-slate-100 shadow-inner ring-1 ring-slate-200">
                {/* Map Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <MapPin size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Löydät meidät Forumista</h3>
                  <p className="mt-2 text-slate-600 max-w-xs">Mannerheimintie 20a, 00100 Helsinki. Sisäänkäynti Forumin 6. kerrokseen.</p>
                  <button className="mt-6 rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-300 hover:bg-slate-50 transition-colors">
                    Avaa Google Maps
                  </button>
                </div>
                {/* Decorative Map Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-blue-600 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Valmiina hymyilemään?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Varaa aikasi jo tänään ja varmista hampaidesi hyvinvointi asiantuntevissa käsissä.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 transition-all active:scale-95">
                Varaa aika nyt
              </button>
              <a href="#yhteystiedot" className="text-sm font-semibold leading-6 text-white flex items-center gap-2">
                Katso sijainti <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <ShieldCheck size={20} />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">Pertti Patinen</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-blue-600 transition-colors">Tietosuoja</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Saavutettavuus</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Evästeet</a>
            </div>
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Hammaslääkäri Pertti Patinen. Kaikki oikeudet pidätetään.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
