import { useState } from 'react'
import Playbook from './components/Playbook'
import ScriptWhatsApp from './components/ScriptWhatsApp'

export default function App() {
  const [view, setView] = useState('playbook')

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f' }}>
      <div style={{
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        padding: '20px',
        textAlign: 'center',
        borderBottom: '2px solid #1e1e2e',
      }}>
        <h1 style={{ margin: '0 0 16px', color: '#fff', fontSize: 28 }}>
          📱 Vendas WhatsApp
        </h1>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => setView('playbook')}
            style={{
              padding: '10px 20px',
              background: view === 'playbook' ? '#fff' : 'rgba(255,255,255,0.2)',
              color: view === 'playbook' ? '#128C7E' : '#fff',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            📚 Playbook Completo
          </button>
          <button
            onClick={() => setView('script')}
            style={{
              padding: '10px 20px',
              background: view === 'script' ? '#fff' : 'rgba(255,255,255,0.2)',
              color: view === 'script' ? '#128C7E' : '#fff',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            🤖 Script IA
          </button>
        </div>
      </div>

      {view === 'playbook' ? <Playbook /> : <ScriptWhatsApp />}
    </div>
  )
}