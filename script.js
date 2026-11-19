document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const langToggle = document.getElementById("lang-toggle");
  const langLabel = document.getElementById("lang-label");
  const copyEmailBtn = document.getElementById("copy-email");

  // 1. GERENCIAMENTO DE TEMA (Classe .dark do Tailwind)
  const savedTheme = localStorage.getItem("theme") || "dark"; // tema salvo, ou dark
  applyTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    const isDark = htmlEl.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  });

  function applyTheme(theme) {
    if (theme === "dark") {
      htmlEl.classList.add("dark");
    } else {
      htmlEl.classList.remove("dark");
    }

    const iconName = theme === "dark" ? "sun" : "moon";
    themeToggle.innerHTML = `<i data-lucide="${iconName}" class="w-4 h-4"></i>`;
    lucide.createIcons();
  }

  // 2. GERENCIAMENTO DE IDIOMA (PT / EN)
  const savedLang = localStorage.getItem("lang") || "pt"; // idioma salvo, ou pt
  applyLanguage(savedLang);

  langToggle.addEventListener("click", () => {
    const currentLang = htmlEl.getAttribute("data-lang"); // pega o idioma atual do atributo data-lang do html
    const nextLang = currentLang === "pt" ? "en" : "pt"; // se for português, muda para inglês, e vice-versa
    applyLanguage(nextLang);
    localStorage.setItem("lang", nextLang); // salva o valor a preferência do idioma no localStorage, sob a chave 'lang'
  });

  function applyLanguage(lang) {
    htmlEl.setAttribute("data-lang", lang); // variável de idioma para o JS
    htmlEl.setAttribute("lang", lang === "pt" ? "pt-BR" : "en"); // lang attribute do html
    langLabel.textContent = lang === "pt" ? "EN" : "PT"; // texto do botão (toggle)
    document.querySelectorAll("[data-pt][data-en]").forEach((el) => {
      el.textContent = el.getAttribute(`data-${lang}`); // textContent altera o conteúdo do elemento baseado no retorno do getAttibute que, por sua vez, pega o valor do atributo baseado na variável lang
    });
  }

  // 3. COPIAR E-MAIL
  copyEmailBtn.addEventListener("click", () => {
    const email = copyEmailBtn.getAttribute("data-email"); // obtém o email definido na variável data-email, no HTML
    const titleEl = document.getElementById("email-title");
    const currentLang = htmlEl.getAttribute("data-lang");

    navigator.clipboard.writeText(email).then(() => {
      // copia o email para a área de transferência
      titleEl.textContent =
        currentLang === "pt" ? "E-mail copiado!" : "Email copied!";

      setTimeout(() => {
        titleEl.textContent = titleEl.getAttribute(`data-${currentLang}`);
      }, 2000); // altera temporariamente o texto do título por 2 segundos para indicar que o email foi copiado
    });
  });
});
