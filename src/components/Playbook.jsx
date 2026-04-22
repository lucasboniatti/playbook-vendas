import { useState } from "react";

const COLORS = {
  bg: "#0a0a0f",
  card: "#12121a",
  border: "#1e1e2e",
  green: "#00ff88",
  greenDim: "#00cc6a",
  greenGlow: "rgba(0,255,136,0.15)",
  yellow: "#ffd60a",
  red: "#ff4466",
  blue: "#4488ff",
  purple: "#9966ff",
  text: "#e8e8f0",
  muted: "#6b6b8a",
  white: "#ffffff",
};

const etapas = [
  {
    id: 1,
    emoji: "🎯",
    titulo: "ABERTURA",
    subtitulo: "Primeiros 60 segundos — aqui você ganha ou perde o lead",
    cor: COLORS.green,
    scripts: {
      anuncio: {
        contexto: "Ele clicou no seu anúncio e mandou mensagem. Está quente mas ainda não comprometido.",
        mensagem: `Oi [Nome]! 👋 Que bom que você chegou até aqui!\n\nVi que você se interessou em ter um site profissional. Deixa eu te perguntar uma coisa rápida:\n\n*Qual é o seu negócio?* 🚀`,
        regras: [
          "Responda em menos de 2 minutos — lead quente esfria rápido",
          "Seja leve e humano, não robótico",
          "Faça UMA pergunta só — não sobrecarregue",
          "Nunca mande preço nessa etapa",
        ],
      },
    },
  },
  {
    id: 2,
    emoji: "🔍",
    titulo: "DIAGNÓSTICO",
    subtitulo: "Entenda o problema antes de oferecer a solução",
    cor: COLORS.blue,
    scripts: {
      anuncio: {
        contexto: "Agora você precisa entender a dor e criar urgência. Faça ele falar.",
        mensagem: `Que ótimo, [segmento] é uma área que trabalhamos bastante! 💪\n\nMe conta: *hoje como seus clientes te encontram?* Pelo Instagram, indicação, Google...?\n\n_(Pergunto porque isso vai definir o que o site precisa ter pra realmente trazer resultado pra você)_`,
        regras: [
          "Mostre interesse genuíno no negócio dele",
          "A pergunta sobre 'como te encontram' revela a dor",
          "Se ele disser 'só por indicação' — aí está sua munição",
          "Escute mais do que fale nessa etapa",
        ],
      },
    },
  },
  {
    id: 3,
    emoji: "💼",
    titulo: "APRESENTAÇÃO",
    subtitulo: "Mostre valor, não produto. Solucione o problema que ele revelou.",
    cor: COLORS.purple,
    scripts: {
      anuncio: {
        contexto: "Agora você sabe o problema dele. Conecte a solução à dor específica.",
        mensagem: `Faz todo sentido! Quem depende só de indicação está deixando dinheiro na mesa todo dia. 💰\n\nOlha o que já fizemos para negócios parecidos com o seu:\n\n🔗 *[Nicho parecido 1]:* link do site\n🔗 *[Nicho parecido 2]:* link do site\n🔗 *[Nicho parecido 3]:* link do site\n\nQual desses combina mais com o estilo que você imagina pro seu negócio?`,
        regras: [
          "Conecte sempre o portfólio ao problema que ele relatou",
          "Mande 3 exemplos do nicho mais próximo ao dele",
          "Termine com pergunta — mantém o engajamento",
          "Não explique os sites, deixe ele explorar",
        ],
      },
    },
  },
  {
    id: 4,
    emoji: "💰",
    titulo: "OFERTA",
    subtitulo: "Apresente o preço com contexto — nunca solto",
    cor: COLORS.yellow,
    scripts: {
      anuncio: {
        contexto: "Ele demonstrou interesse. Hora de apresentar a oferta de forma estruturada.",
        mensagem: `Boa escolha! Posso fazer algo bem parecido e personalizado pro seu negócio. ✨\n\nVeja o que está incluso:\n\n✅ Site profissional e responsivo (celular e computador)\n✅ Botão de WhatsApp integrado\n✅ Formulário de contato\n✅ Otimizado pro Google aparecer você\n✅ Entrega em até *3 dias úteis*\n✅ 30 dias de suporte pós-entrega\n\n💵 *Investimento: R$797*\n\nE tem mais: se eu não entregar em 3 dias úteis após você me enviar o conteúdo — *devolvo seu dinheiro na hora.*\n\nO que acha?`,
        regras: [
          "Liste benefícios ANTES do preço",
          "Preço vem depois do valor estabelecido",
          "A garantia elimina o risco percebido",
          "Termine com pergunta aberta 'O que acha?' — não com 'Quer comprar?'",
        ],
      },
    },
  },
];

export default function Playbook() {
  const [etapaAtiva, setEtapaAtiva] = useState(null);
  const [copiadoId, setCopiadoId] = useState(null);

  const copiar = (texto, id) => {
    navigator.clipboard.writeText(texto);
    setCopiadoId(id);
    setTimeout(() => setCopiadoId(null), 2000);
  };

  return (
    <div style={{
      background: COLORS.bg,
      minHeight: "100vh",
      fontFamily: "'Courier New', monospace",
      color: COLORS.text,
      padding: "0 0 48px",
    }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px" }}>
        <div style={{
          background: COLORS.card,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 12,
          padding: 6,
          display: "flex",
          marginBottom: 24,
          gap: 6,
          marginTop: 24,
        }}>
          <button style={{
            flex: 1,
            background: COLORS.green,
            color: COLORS.bg,
            border: "none",
            borderRadius: 8,
            padding: "10px 8px",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: 13,
            fontFamily: "'Courier New', monospace",
          }}>
            📚 Playbook Completo
          </button>
        </div>

        {etapas.map((etapa) => {
          const aberta = etapaAtiva === etapa.id;
          const dados = etapa.scripts.anuncio;

          return (
            <div key={etapa.id} style={{
              marginBottom: 12,
              border: `1px solid ${aberta ? etapa.cor : COLORS.border}`,
              borderRadius: 14,
              overflow: "hidden",
              transition: "border 0.2s",
              background: COLORS.card,
            }}>
              <div
                onClick={() => setEtapaAtiva(aberta ? null : etapa.id)}
                style={{
                  padding: "18px 20px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: aberta ? `${etapa.cor}11` : "transparent",
                }}
              >
                <div style={{
                  width: 42, height: 42,
                  border: `2px solid ${etapa.cor}`,
                  borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, flexShrink: 0,
                  background: `${etapa.cor}15`,
                }}>
                  {etapa.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 16, color: COLORS.white, fontFamily: "Georgia, serif" }}>
                    {etapa.titulo}
                  </div>
                  <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 2 }}>
                    {etapa.subtitulo}
                  </div>
                </div>
                <div style={{
                  color: etapa.cor, fontSize: 18,
                  transform: aberta ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.2s",
                }}>▾</div>
              </div>

              {aberta && (
                <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${COLORS.border}` }}>
                  <div style={{
                    background: `${etapa.cor}10`,
                    border: `1px solid ${etapa.cor}30`,
                    borderRadius: 8,
                    padding: "10px 14px",
                    margin: "16px 0 14px",
                    fontSize: 13,
                    color: etapa.cor,
                  }}>
                    <strong>Contexto:</strong> {dados.contexto}
                  </div>

                  {dados.mensagem && (
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: 11, color: COLORS.muted, letterSpacing: 2, marginBottom: 8, textTransform: "uppercase" }}>
                        Script
                      </div>
                      <div style={{
                        background: "#1a2a1a",
                        border: `1px solid ${COLORS.green}30`,
                        borderRadius: "4px 12px 12px 12px",
                        padding: "14px 16px",
                        fontSize: 14,
                        color: "#c8f0c8",
                        lineHeight: 1.7,
                        whiteSpace: "pre-line",
                      }}>
                        {dados.mensagem}
                        <button
                          onClick={() => copiar(dados.mensagem, `msg-${etapa.id}`)}
                          style={{
                            display: "block", marginTop: 12,
                            background: copiadoId === `msg-${etapa.id}` ? COLORS.green : "transparent",
                            color: copiadoId === `msg-${etapa.id}` ? COLORS.bg : COLORS.green,
                            border: `1px solid ${COLORS.green}`,
                            borderRadius: 6, padding: "6px 14px",
                            fontSize: 12, cursor: "pointer", fontWeight: 700,
                            fontFamily: "'Courier New', monospace",
                            transition: "all 0.2s",
                          }}
                        >
                          {copiadoId === `msg-${etapa.id}` ? "✅ Copiado!" : "📋 Copiar script"}
                        </button>
                      </div>
                    </div>
                  )}

                  {dados.regras && (
                    <div style={{
                      background: "#0d0d1a",
                      border: `1px solid ${COLORS.purple}30`,
                      borderRadius: 10,
                      padding: "14px 16px",
                    }}>
                      <div style={{ fontSize: 11, color: COLORS.purple, letterSpacing: 2, marginBottom: 10, fontWeight: 700, textTransform: "uppercase" }}>
                        ⚡ Regras desta etapa
                      </div>
                      {dados.regras.map((r, ri) => (
                        <div key={ri} style={{
                          display: "flex", gap: 8, alignItems: "flex-start",
                          marginBottom: ri < dados.regras.length - 1 ? 6 : 0,
                          fontSize: 13, color: COLORS.text, lineHeight: 1.5,
                        }}>
                          <span style={{ color: COLORS.purple, flexShrink: 0 }}>→</span>
                          {r}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}