# 🔗 Personal Link Hub — João Pedro Kruchelski Sales

Página estática leve e responsiva desenvolvida para centralizar meus links profissionais e projetos, hospedada via **GitHub Pages**.

🌐 **Acesse online:** [joaoksaas.github.io](https://joaoksaas.github.io)

---

## ✨ Funcionalidades

- **Alternância de Tema (Dark / Light):** Modo escuro em preto fosco com acentos em verde, azul e amarelo, e modo claro em tom suave de papel bege.
- **Internacionalização (PT-BR / EN):** Tradução dinâmica instantânea sem recarregamento de página utilizando atributos customizados (`data-pt` e `data-en`).
- **Persistência de Preferências:** Salva o tema e o idioma escolhidos pelo visitante no `localStorage` do navegador.
- **Cópia Rápida de E-mail:** Uso da Clipboard API nativa com feedback visual temporário.
- **Zero Build Step:** Arquitetura 100% estática utilizando Tailwind CSS e Lucide Icons via CDN.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** (Estrutura semântica e atributos `data-*`)
- **Tailwind CSS** (Estilização responsiva e suporte a `darkMode: 'class'`)
- **JavaScript (ES6+)** (Manipulação do DOM, `localStorage` e Clipboard API)
- **Lucide Icons** (Iconografia vetorial leve)

---

## 📂 Estrutura do Projeto

```text
├── index.html   # Estrutura da página, configuração Tailwind e conteúdos bilíngues
├── script.js    # Lógica de troca de tema, tradução PT/EN e cópia de e-mail
└── README.md    # Documentação do projeto