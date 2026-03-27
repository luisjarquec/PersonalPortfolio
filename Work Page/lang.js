const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About Me",
    "nav-resume": "Resume",
    "nav-work": "Work",
    "nav-contact": "Contact",
    "btn-hire": "Hire Me",

    "work-heading": "My Projects",
    "work-subtitle": "A selection of things I've built.",

    "title-huella": "Carbon Footprint Platform",
    "title-portfolio": "Personal Portfolio",

    "desc-finanz": "Personal finance web platform powered by AI. Manage finances, get advice from a GPT-4o-mini chatbot, and visualise your financial profile on an interactive dashboard.",
    "desc-huella": "Fullstack application for carbon footprint tracking in industrial facilities. Emissions visualisation by category, site, fuel and month — with fleet and inventory management.",
    "desc-portfolio": "Personal website with responsive design and multilingual support (ES/EN). Includes About, Resume, Work and Contact sections with animations and custom styles.",

    "label-private": "Private repository",
  },
  es: {
    "nav-home": "Inicio",
    "nav-about": "Sobre mí",
    "nav-resume": "CV",
    "nav-work": "Trabajo",
    "nav-contact": "Contacto",
    "btn-hire": "Contrátame",

    "work-heading": "Mis Proyectos",
    "work-subtitle": "Una selección de cosas que he construido.",

    "title-huella": "Plataforma Huella de Carbono",
    "title-portfolio": "Portfolio Personal",

    "desc-finanz": "Plataforma web de asesoría financiera personal impulsada por IA. Gestión de finanzas, chatbot GPT-4o-mini, dashboard interactivo y motor financiero con proyecciones y score personalizado.",
    "desc-huella": "Aplicación fullstack para seguimiento de huella de carbono en centros industriales. Visualización de emisiones por categoría, centro, combustible y mes con gestión de flota e inventario.",
    "desc-portfolio": "Sitio web personal con diseño responsive y soporte multiidioma (ES/EN). Incluye secciones de Sobre mí, CV, Trabajo y Contacto con animaciones y estilos personalizados.",

    "label-private": "Repositorio privado",
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  for (const id in translations[lang]) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = translations[lang][id];
  }

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
