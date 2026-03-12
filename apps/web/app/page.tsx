import Link from 'next/link'
import { ArrowRight, Zap, Star, Shield, Clock, MapPin, CheckCircle } from 'lucide-react'

const services = [
  { emoji: '🏠', name: 'Ménage', price: '24.90€/h', desc: 'Entretien, nettoyage, repassage' },
  { emoji: '✂️', name: 'Coiffure', price: 'dès 52€', desc: 'Coupe, couleur, soins à domicile' },
  { emoji: '💆', name: 'Massage', price: 'dès 65€', desc: 'Relaxant, sportif, bien-être' },
  { emoji: '💅', name: 'Beauté', price: 'dès 42€', desc: 'Esthétique, manucure, maquillage' },
  { emoji: '👶', name: "Garde d'enfants", price: '21€/h', desc: 'Baby-sitting, aide aux devoirs' },
  { emoji: '🏋️', name: 'Coaching sportif', price: 'dès 55€', desc: 'Fitness, yoga, pilates' },
]

const steps = [
  { n: '1', icon: '🔍', title: 'Décrivez votre besoin', desc: "Choisissez le service, l'adresse et le créneau" },
  { n: '2', icon: '⚡', title: 'Matching en 30 secondes', desc: "L'IA trouve le meilleur professionnel près de chez vous" },
  { n: '3', icon: '✅', title: 'Confirmez et profitez', desc: "Paiement sécurisé, prestataire vérifié, satisfaction garantie" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">ServiceConnect</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#comment" className="hover:text-blue-600 transition-colors">Comment ça marche</a>
            <Link href="/prestataires" className="hover:text-blue-600 transition-colors">Devenir prestataire</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/connexion" className="text-sm font-medium text-gray-600 hover:text-blue-600 hidden sm:block">
              Connexion
            </Link>
            <Link href="/inscription?role=client" className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-1.5">
              Réserver un service <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #6366f1 0%, transparent 50%)' }} />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 text-sm font-medium mb-8">
            <Zap className="w-4 h-4 text-yellow-400" /> Plateforme 100% orchestrée par IA · 7 agents autonomes
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Les meilleurs services<br />
            <span className="text-blue-300">à domicile</span>,<br />
            <span className="text-yellow-400">en 30 secondes</span>
          </h1>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Des professionnels vérifiés, un matching par IA, un paiement sécurisé.
            La première plateforme où 95% du workflow est automatisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inscription?role=client"
              className="bg-yellow-400 text-gray-900 font-bold text-lg py-4 px-10 rounded-xl hover:bg-yellow-300 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-2xl">
              🔍 Trouver un professionnel
            </Link>
            <Link href="/inscription?role=provider"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              💼 Devenir prestataire
            </Link>
          </div>
          <p className="text-white/30 text-sm mt-6">✓ Sans engagement · ✓ Professionnels vérifiés · ✓ Paiement sécurisé</p>
        </div>

        {/* Stats */}
        <div className="relative border-t border-white/10 mt-20">
          <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '95%', label: 'Workflows automatisés' },
              { value: '< 30s', label: 'Temps de matching' },
              { value: '7', label: 'Agents IA autonomes' },
              { value: '4.9★', label: 'Satisfaction moyenne' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-yellow-400">{s.value}</div>
                <div className="text-white/50 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tous vos services à domicile</h2>
            <p className="text-gray-500">Des professionnels certifiés, disponibles près de chez vous</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <Link key={s.name} href={`/inscription?role=client&service=${s.name.toLowerCase()}`}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{s.emoji}</div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-gray-900">{s.name}</h3>
                  <span className="text-blue-600 font-semibold text-sm">{s.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{s.desc}</p>
                <div className="flex items-center gap-1 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Réserver <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="comment" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
            <p className="text-gray-500">3 étapes, moins de 2 minutes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(s => (
              <div key={s.n} className="relative text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                  {s.icon}
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {s.n}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIES */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Shield, title: 'Prestataires vérifiés', desc: 'SIRET, assurance RC Pro, diplômes et KYC contrôlés par nos agents' },
            { icon: Star, title: 'Satisfaction garantie', desc: 'Note < 3/5 → remboursement automatique. No-show → 100% remboursé' },
            { icon: Clock, title: 'Matching < 30 secondes', desc: "L'agent IA trouve le meilleur professionnel disponible en temps réel" },
          ].map(g => (
            <div key={g.title}>
              <g.icon className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
              <h3 className="font-bold text-lg mb-2">{g.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA PRESTATAIRES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">💼</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Vous êtes professionnel ?</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Rejoignez notre réseau. Nos agents gèrent votre agenda, vos paiements et vos relances.
            Vous vous concentrez sur votre métier, on s'occupe du reste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            {['✓ 0 frais d\'inscription', '✓ Paiement en 48h', '✓ Planning optimisé par IA'].map(f => (
              <div key={f} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                {f.replace('✓ ', '')}
              </div>
            ))}
          </div>
          <Link href="/inscription?role=provider"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-blue-700 transition-all hover:scale-105">
            Rejoindre le réseau <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white/50 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white">ServiceConnect AI</span>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
            <Link href="/cgv" className="hover:text-white transition-colors">CGV</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="text-sm">© 2026 ServiceConnect AI</p>
        </div>
      </footer>
    </div>
  )
}
