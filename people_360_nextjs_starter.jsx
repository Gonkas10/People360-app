// people360-nextjs-starter
// Estrutura inicial de um projeto SaaS B2B com Next.js, Firebase e i18n

import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirecionar para dashboard se já estiver autenticado (mock)
    const user = false // alterar para lógica Firebase Auth
    if (user) {
      router.push('/dashboard')
    }
  }, [])

  return (
    <>
      <Head>
        <title>People360 – Onde a gestão de pessoas encontra a inteligência</title>
        <meta name="description" content="SaaS de Recursos Humanos para PMEs com IA integrada." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">People360</h1>
        <p className="text-xl text-center max-w-xl">
          Onde a gestão de pessoas encontra a inteligência. Plataforma RH com IA integrada para PMEs.
        </p>
        <button
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          onClick={() => router.push('/login')}
        >
          Entrar / Registar
        </button>
      </main>
    </>
  )
}
