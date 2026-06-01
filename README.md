# 💛 Histórias do Coração

**Pequenas Histórias, Grandes Aprendizados**

Uma biblioteca interativa de histórias infantis para o Benjamin — experiência de leitura em formato de livro, com capa, introdução, histórias e mensagem da autora.

![Capa Kit 1](./client/public/images/capa_kit1.jpg)

## 🌟 Características

- **Experiência de livro** com capa, introdução e contracapa
- **Kit 1 publicado** — 5 histórias selecionadas
- **18 histórias no total** prontas para lançamento progressivo por kit
- **Interface interativa** com animações e virada de página
- **Modo de leitura imersivo** com som de página e confetti
- **100% em português brasileiro**
- **Hospedado no GitHub Pages** com domínio customizado via Cloudflare

## 🗺️ Fluxo de Navegação

```
/ (Capa)  →  /intro (Apresentação)  →  /biblioteca (Histórias)
                                              ↓
                                       /read/:id (Leitura)
                                              ↓
                                      /contracapa (Mensagem da autora)
```

## 📚 Kit 1 — Publicado

| # | História | Tema |
|---|----------|------|
| 1 | Benjamin e o Botão do "Agora!" | Impulsividade |
| 2 | Benjamin e a Mochila das Pequenas Conquistas | Autonomia |
| 3 | Benjamin e o Jardim dos Caminhos Espertos | Limites |
| 4 | Benjamin e a Montanha do "Eu Consigo Sozinho" | Pedir ajuda |
| 5 | Benjamin e o Cavalo do Coração Valente | Coragem |

## 📦 Histórias Reservadas (Kits futuros)

As outras 13 histórias estão em `client/public/data/stories_all.json`.
Para lançar um novo kit, copie as histórias desejadas para o final de `stories.json` e faça push.

<details>
<summary>Ver todas as 18 histórias</summary>

1. A Aventura do Benjamin e a Poça Misteriosa — Curiosidade e cautela
2. Benjamin e o Cavalo do Coração Valente — Coragem ✅ Kit 1
3. Benjamin e a Mochila das Pequenas Conquistas — Autonomia ✅ Kit 1
4. Benjamin e o Jardim dos Caminhos Espertos — Limites ✅ Kit 1
5. Benjamin e o Relógio da Vez — Paciência
6. Benjamin e a Fábrica do Tempo que Quase Parou — Ajudar em casa
7. Benjamin e Amora, Juntos no Coração — Saudade
8. Benjamin e a Capa da Proteção — Fé
9. Benjamin e o Jardim da Paciência — Esperar
10. Benjamin e o Segredo de Respirar Tranquilo — Ansiedade
11. Benjamin e o Amigo que Morava no Bolso — Amizade
12. Benjamin e o Dragão que Soluçava Bolhas — Ajudar os outros
13. Benjamin e o Botão do "Agora!" — Impulsividade ✅ Kit 1
14. Benjamin e Maria, Minha Princesinha — Amor de primo
15. Benjamin e o Dia em que a Sala Virou Tempestade — Escola
16. Benjamin e a Montanha do "Eu Consigo Sozinho" — Pedir ajuda ✅ Kit 1
17. Benjamin e o Mapa do Tesouro da Família — Família
18. Benjamin, Lucas e Theo e o Segredo da Floresta Quentinha — Segurança

</details>

## 🚀 Como Executar Localmente

```bash
npm install
npm run dev
# Acesse http://localhost:5000
```

## 🏗️ Como Fazer Build e Deploy

O deploy é automático via GitHub Actions a cada push na branch `main`.

```bash
git push origin main
# GitHub Actions faz o build e publica no GitHub Pages
```

**Configuração de build** (`.github/workflows/deploy.yml`):
- `VITE_BASE_URL: /` — correto para domínio customizado
- `VITE_STATIC_MODE: true` — carrega histórias do JSON estático

## 📁 Estrutura do Projeto

```
historinhas-Ben/
├── client/
│   ├── public/
│   │   ├── images/           # Capas e ilustrações
│   │   │   └── capa_kit1.jpg # Capa oficial do Kit 1
│   │   └── data/
│   │       ├── stories.json      # Histórias PUBLICADAS (Kit atual)
│   │       └── stories_all.json  # Todas as 18 histórias (reserva)
│   └── src/
│       ├── pages/
│       │   ├── Cover.tsx      # Capa da biblioteca (/)
│       │   ├── Intro.tsx      # Apresentação da coleção (/intro)
│       │   ├── Home.tsx       # Grade de histórias (/biblioteca)
│       │   ├── ReadStory.tsx  # Leitura de história (/read/:id)
│       │   └── Backcover.tsx  # Mensagem da autora (/contracapa)
│       ├── components/
│       └── hooks/
├── .github/workflows/
│   └── deploy.yml             # CI/CD GitHub Pages
└── vite.config.ts
```

## 🌐 Publicação

- **URL:** https://historiasdocoracao.mbam.com.br
- **GitHub Pages** + **Cloudflare** (proxy e domínio customizado)
- **Repositório:** github.com/Mfdemenezes/historinhas-Ben

## 💛 Feito com amor para o Benjamin

*"Ler juntos é plantar hoje as raízes de um amanhã melhor."*

— Ananda Vianna
