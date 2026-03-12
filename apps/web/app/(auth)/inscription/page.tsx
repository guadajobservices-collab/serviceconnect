'use client'
import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Zap, Mail, Lock, Eye, EyeOff, User, Phone, ArrowRight, Check } from 'lucide-react'

function InscriptionForm() {
  const searchParams = useSearchParams()
  const roleParam = searchParams.get('role') as 'client' | 'provider' | null

  const [role, setRole] = useState<'client' | 'provider'>(roleParam || 'client')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, firstName, lastName, phone, role }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.message || 'Erreur lors de l\'inscription')
      }
      setSuccess(true)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Compte créé ! 🎉</h2>
        <p className="text-white/50 mb-8">Vérifiez votre email pour activer votre compte.</p>
        <Link href="/connexion" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl inline-flex items-center gap-2">
          Se connecter <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Sélection rôle */}
      <div className="grid grid-cols-2 gap-3 mb-2">
        {(['client', 'provider'] as const).map(r => (
          <button key={r} type="button" onClick={() => setRole(r)}
            className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${role === r ? 'border-blue-500 bg-blue-600/20 text-white' : 'border-white/20 text-white/50 hover:border-white/40'}`}>
            {r === 'client' ? '🔍 Je cherche un service' : '💼 Je suis prestataire'}
          </button>
        ))}
      </div>

      {error && <div className="bg-red-500/10 border border-red-500/30 text-red-300 text-sm px-4 py-3 rounded-xl">{error}</div>}

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Prénom</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required placeholder="Prénom"
              className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-3 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 text-sm" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Nom</label>
          <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} required placeholder="Nom"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 text-sm" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="vous@example.com"
            className="w-full bg-white/10 border border-white/20 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-blue-400" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">Téléphone</label>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+33 6 12 34 56 78"
            className="w-full bg-white/10 border border-white/20 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-blue-400" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">Mot de passe</label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input type={showPwd ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required minLength={8} placeholder="8 caractères minimum"
            className="w-full bg-white/10 border border-white/20 rounded-xl pl-11 pr-12 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-blue-400" />
          <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70">
            {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <button type="submit" disabled={loading || !firstName || !email || !password}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-40 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all mt-2">
        {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Créer mon compte <ArrowRight className="w-4 h-4" /></>}
      </button>

      <p className="text-white/30 text-xs text-center">
        En créant un compte, vous acceptez nos <Link href="/cgv" className="text-white/50 hover:text-white underline">CGV</Link> et notre <Link href="/confidentialite" className="text-white/50 hover:text-white underline">politique de confidentialité</Link>.
      </p>
    </form>
  )
}

export default function InscriptionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 flex flex-col">
      <nav className="px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-white text-lg">ServiceConnect</span>
          <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">AI</span>
        </Link>
        <Link href="/connexion" className="text-white/60 hover:text-white text-sm">
          Déjà inscrit ? <span className="text-blue-400 font-semibold">Se connecter</span>
        </Link>
      </nav>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Créer votre compte 🚀</h1>
            <p className="text-white/50">Inscription gratuite · Aucune carte requise</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
            <Suspense fallback={<div className="text-white/30 text-center py-4">Chargement...</div>}>
              <InscriptionForm />
            </Suspense>
          </div>
          <p className="text-center text-white/30 text-sm mt-6">
            Déjà un compte ? <Link href="/connexion" className="text-blue-400 hover:text-blue-300 font-semibold">Se connecter</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
