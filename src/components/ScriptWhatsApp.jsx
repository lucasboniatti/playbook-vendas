import { useState } from "react";

const script = {
  etapas: [
    {
      id: 1,
      titulo: "🟢 Primeiro contato",
      descricao: "Mensagem automática imediata ao entrar no WhatsApp",
      mensagem: `Olá! 👋 Seja bem-vindo(a)!\n\nVi que você se interessou em ter um site profissional. Boa escolha!\n\nSou a assistente virtual e vou te ajudar agora mesmo. 🚀\n\nMe conta: *qual é o seu tipo de negócio?*\n\n_(Ex: restaurante, salão, clínica, loja, escritório...)_`,
      dica: "Resposta em menos de 5 segundos. Nunca deixe o lead esfriar.",
    },
    {
      id: 2,
      titulo: "📋 Qualificação do lead",
      descricao: "Após o cliente responder o tipo de negócio",
      mensagem: `Que ótimo! Trabalhamos bastante com esse segmento. 😊\n\nDeixa eu te mostrar *3 exemplos* de sites que fizemos:\n\n🔗 Exemplo 1: [link do portfólio 1]\n🔗 Exemplo 2: [link do portfólio 2]\n🔗 Exemplo 3: [link do portfólio 3]\n\nQual desses se parece mais com o estilo que você imagina pro seu negócio?`,
      dica: "Troque os links pelos seus portfólios mais parecidos com o segmento do cliente.",
    },
    {
      id: 3,
      titulo: "💰 Apresentação da oferta",
      descricao: "Após o cliente reagir aos portfólios",
      mensagem: `Boa escolha! Conseguimos fazer algo ainda mais personalizado pro seu negócio. ✨\n\nAqui está o que está incluso:\n\n✅ Site profissional e responsivo (funciona no celular)\n✅ Entrega em até *3 dias úteis*\n✅ Domínio e hospedagem orientados\n✅ Formulário de contato\n✅ Integração com WhatsApp\n✅ Otimizado para aparecer no Google\n\n💵 *Investimento: R$797*\n\nE tem mais: se não entregar em 3 dias úteis após você me enviar o conteúdo, *devolvemos seu dinheiro.*\n\nQuer avançar?`,
      dica: "Deixe o preço claro e a garantia em destaque. Reduz objeções.",
    },
    {
      id: 4,
      titulo: "❓ Resposta a objeções",
      descricao: "Se o cliente hesitar ou perguntar algo",
      perguntas: [
        {
          pergunta: "Tá caro, tem como negociar?",
          resposta: `Entendo! O valor já é bastante acessível considerando tudo que está incluso e a velocidade de entrega. 😊\n\nNão trabalhamos com desconto porque isso afetaria a qualidade e o prazo.\n\nMas posso te dizer: clientes que investiram nesse site começaram a receber contatos pelo Google e WhatsApp logo na primeira semana. O site se paga rápido. 💪`,
        },
        {
          pergunta: "Como funciona o pagamento?",
          resposta: `Super simples! 😊\n\n💳 Aceitamos: PIX, cartão de crédito ou boleto.\n\nO pagamento é feito antes de começar o projeto, assim garantimos sua vaga na fila de produção.\n\nApós o pagamento, você me envia as informações do seu negócio (textos, fotos, cores) e em até 3 dias úteis o site estará pronto!`,
        },
      ],
      dica: "Configure cada pergunta como gatilho de palavra-chave na automação.",
    },
    {
      id: 5,
      titulo: "🔥 Transferência para fechamento",
      descricao: "Quando o lead está quente — sinalizar o dono",
      mensagem: `Que ótimo que você tem interesse! 🎉\n\nVou chamar o [Seu Nome] agora para finalizar os detalhes com você pessoalmente e garantir que tudo fique perfeito pro seu negócio.\n\nUm momento! 😊`,
      dica: "Configure uma notificação para você entrar na conversa neste ponto.",
      alerta: true,
    },
    {
      id: 6,
      titulo: "⏰ Follow-up",
      descricao: "Se o cliente não respondeu em 24h",
      mensagem: `Oi! Tudo bem? 😊\n\nVi que você ficou com interesse no site profissional. Queria só te lembrar que nossas vagas para esta semana estão quase esgotadas.\n\nQualquer dúvida é só falar, estou aqui!`,
      dica: "Mande apenas 1 follow-up. Mais do que isso afasta o cliente.",
    },
  ],
};

export default function ScriptWhatsApp() {
  const [aberta, setAberta] = useState(null);
  const [copiadoId, setCopiadoId] = useState(null);

  const copiar = (texto, id) => {
    navigator.clipboard.writeText(texto);
    setCopiadoId(id);
    setTimeout(() => setCopiadoId(null), 2000);
  };

  const cores = [
    { bg: "#e8f5e9", borda: "#43a047", num: "#2e7d32" },
    { bg: "#e3f2fd", borda: "#1e88e5", num: "#1565c0" },
    { bg: "#fff8e1", borda: "#fdd835", num: "#f57f17" },
    { bg: "#fce4ec", borda: "#e91e63", num: "#880e4f" },
    { bg: "#f3e5f5", borda: "#9c27b0", num: "#6a1b9a" },
    { bg: "#e0f7fa", borda: "#00acc1", num: "#006064" },
  ];

  return (
    <div style={{
      fontFamily: "'Segoe UI', sans-serif",
      background: "#f0f4f8",
      minHeight: "100vh",
      padding: "24px 16px",
    }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        {script.etapas.map((etapa, i) => {
          const cor = cores[i % cores.length];
          const estaAberta = aberta === etapa.id;

          return (
            <div key={etapa.id} style={{
              background: "#fff",
              borderRadius: 16,
              marginBottom: 14,
              border: `2px solid ${estaAberta ? cor.borda : "#e2e8f0"}`,
              overflow: "hidden",
              transition: "border 0.2s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}>
              <div
                onClick={() => setAberta(estaAberta ? null : etapa.id)}
                style={{
                  padding: "16px 20px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: estaAberta ? cor.bg : "#fff",
                  transition: "background 0.2s",
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: cor.num, color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: 16, flexShrink: 0,
                }}>
                  {etapa.id}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#1a202c" }}>
                    {etapa.titulo}
                  </div>
                  <div style={{ fontSize: 12, color: "#718096", marginTop: 2 }}>
                    {etapa.descricao}
                  </div>
                </div>
                <div style={{
                  fontSize: 20, color: cor.num,
                  transform: estaAberta ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}>
                  ▾
                </div>
              </div>

              {estaAberta && (
                <div style={{ padding: "0 20px 20px" }}>
                  {etapa.alerta && (
                    <div style={{
                      background: "#fff3cd", border: "1px solid #ffc107",
                      borderRadius: 10, padding: "10px 14px",
                      fontSize: 13, color: "#856404", marginBottom: 14,
                    }}>
                      ⚠️ <strong>Ação humana necessária aqui!</strong>
                    </div>
                  )}

                  {etapa.mensagem && (
                    <div style={{ marginBottom: 14 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#718096", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>
                        Mensagem
                      </div>
                      <div style={{
                        background: "#dcf8c6",
                        borderRadius: "4px 16px 16px 16px",
                        padding: "14px 16px",
                        fontSize: 14, color: "#1a202c", lineHeight: 1.6,
                        whiteSpace: "pre-line",
                      }}>
                        {etapa.mensagem}
                        <button
                          onClick={() => copiar(etapa.mensagem, `msg-${etapa.id}`)}
                          style={{
                            marginTop: 10, display: "block",
                            background: copiadoId === `msg-${etapa.id}` ? "#25D366" : "#128C7E",
                            color: "#fff", border: "none", borderRadius: 8,
                            padding: "6px 14px", fontSize: 12, cursor: "pointer",
                            fontWeight: 600, transition: "background 0.2s",
                          }}
                        >
                          {copiadoId === `msg-${etapa.id}` ? "✅ Copiado!" : "📋 Copiar mensagem"}
                        </button>
                      </div>
                    </div>
                  )}

                  {etapa.perguntas && (
                    <div style={{ marginBottom: 14 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#718096", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>
                        Respostas para objeções
                      </div>
                      {etapa.perguntas.map((pq, pi) => (
                        <div key={pi} style={{
                          marginBottom: 12, borderRadius: 12,
                          border: "1px solid #e2e8f0", overflow: "hidden",
                        }}>
                          <div style={{
                            background: "#f7fafc", padding: "10px 14px",
                            fontSize: 13, fontWeight: 700, color: "#2d3748",
                          }}>
                            💬 "{pq.pergunta}"
                          </div>
                          <div style={{
                            background: "#dcf8c6", padding: "12px 14px",
                            fontSize: 13, color: "#1a202c", lineHeight: 1.6,
                            whiteSpace: "pre-line",
                          }}>
                            {pq.resposta}
                            <button
                              onClick={() => copiar(pq.resposta, `pq-${etapa.id}-${pi}`)}
                              style={{
                                marginTop: 8, display: "block",
                                background: copiadoId === `pq-${etapa.id}-${pi}` ? "#25D366" : "#128C7E",
                                color: "#fff", border: "none", borderRadius: 8,
                                padding: "5px 12px", fontSize: 11, cursor: "pointer",
                                fontWeight: 600,
                              }}
                            >
                              {copiadoId === `pq-${etapa.id}-${pi}` ? "✅ Copiado!" : "📋 Copiar"}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {etapa.dica && (
                    <div style={{
                      background: "#ebf8ff", border: "1px solid #90cdf4",
                      borderRadius: 10, padding: "10px 14px",
                      fontSize: 13, color: "#2b6cb0",
                    }}>
                      💡 <strong>Dica:</strong> {etapa.dica}
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