const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About Me",
    "nav-resume": "Resume",
    "nav-work": "Work",
    "nav-contact": "Contact",
    "btn-hire": "Hire Me",
    
    "form-title": "Let's Work Together",
    "form-desc": "I'd love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out. I'll do my best to get back to you as soon as possible.",
    "input-firstname": "First name",
    "input-lastname": "Last name",
    "input-email": "Email address",
    "input-telephone": "Phone number",
    "select-service": "Select a service",
    "option-web": "Web Development",
    "option-software": "Software Development",
    "option-blockchain": "BlockChain Development",
    "textarea-message": "Type your message here",
    "btn-send": "Send message",
    "info-phone-title": "Phone",
    "info-email-title": "Email",
    "info-address-title": "Address",
    "info-address": "Castellón, Spain"
  },
  es: {
    "nav-home": "Inicio",
    "nav-about": "Sobre mí",
    "nav-resume": "CV",
    "nav-work": "Trabajo",
    "nav-contact": "Contacto",
    "btn-hire": "Contrátame",

    "form-title": "Colaboremos",
    "form-desc": "¡Me encantaría saber de ti! Ya sea que tengas una pregunta, una idea de proyecto o simplemente quieras conectar, no dudes en contactarme. Haré lo posible por responderte cuanto antes.",
    "input-firstname": "Nombre",
    "input-lastname": "Apellido",
    "input-email": "Correo electrónico",
    "input-telephone": "Teléfono",
    "select-service": "Selecciona un servicio",
    "option-web": "Desarrollo Web",
    "option-software": "Desarrollo de Software",
    "option-blockchain": "Desarrollo Blockchain",
    "textarea-message": "Escribe tu mensaje aquí",
    "btn-send": "Enviar mensaje",
    "info-phone-title": "Teléfono",
    "info-email-title": "Correo",
    "info-address-title": "Dirección",
    "info-address": "Castellón, España"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  const langTranslations = translations[lang];

  for (const id in langTranslations) {
    const el = document.getElementById(id);
    if (el) {
      if (el.children.length > 0) {
        el.childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = langTranslations[id];
          }
        });
      } else {
        el.textContent = langTranslations[id];
      }
    }
  }

  const placeholdersMap = {
    "input-firstname": "placeholder",
    "input-lastname": "placeholder",
    "input-email": "placeholder",
    "input-telephone": "placeholder",
    "textarea-message": "placeholder",
    "select-service": "options"
  };

  for (const inputId in placeholdersMap) {
    const el = document.getElementsByName(inputId.replace("input-", "").replace("textarea-", "").replace("select-", ""))[0] || document.getElementById(inputId);
    if (el) {
      if (placeholdersMap[inputId] === "placeholder") {
        el.setAttribute("placeholder", langTranslations[inputId]);
      }
      if (inputId === "select-service") {
        const options = el.querySelectorAll("option");
        if (options.length >= 4) {
          options[0].textContent = langTranslations["select-service"];
          options[1].textContent = langTranslations["option-web"];
          options[2].textContent = langTranslations["option-software"];
          options[3].textContent = langTranslations["option-blockchain"];
        }
      }
    }
  }

  const sendBtn = document.querySelector("button.btn.arrow-button a");
  if (sendBtn) sendBtn.textContent = langTranslations["btn-send"];

  document.querySelectorAll(".lang-selector img").forEach(img => {
    img.classList.remove("selected");
  });
  if (lang === "es") {
    document.querySelector(".lang-selector img[src*='spain.png']").classList.add("selected");
  } else if (lang === "en") {
    document.querySelector(".lang-selector img[src*='uk.png']").classList.add("selected");
  }
}

window.onload = () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
};
