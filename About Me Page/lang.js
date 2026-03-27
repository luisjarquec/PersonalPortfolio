const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About Me",
    "nav-resume": "Resume",
    "nav-work": "Work",
    "nav-contact": "Contact",
    "btn-hire": "Hire Me",

    "about-title": "Who is <span>Luis Jarque</span>?",
    "about-role": "Software Developer",
    "about-subtitle": "Backend-focused software engineer with hands-on experience building data-driven web applications and industrial monitoring systems. Experienced in designing REST APIs, processing time-series data and deploying containerized services in production environments. Strong foundation in backend architecture, databases and scalable application design, with practical exposure to real-world systems.",
    "about-name": "<span>Name: </span>Luis Jarque",
    "about-experience": "<span>Experience:</span> 1+ Years",
    "about-nationality": "<span>Nationality:</span> Spanish",
    "about-freelance": "<span>Freelance:</span> Available",
    "about-phone": "<span>Phone:</span> +34 629 48 52 72",
    "about-email": "<span>Email:</span> luis.jarquec@gmail.com",
    "about-discord": "<span>Discord: </span>luis.jarque",
    "about-languages": "<span>Languages: </span>Spanish, English, French, German, Chinese"
  },
  es: {
    "nav-home": "Inicio",
    "nav-about": "Sobre mí",
    "nav-resume": "CV",
    "nav-work": "Trabajo",
    "nav-contact": "Contacto",
    "btn-hire": "Contrátame",

    "about-title": "¿Quién es <span>Luis Jarque</span>?",
    "about-role": "Desarrollador de Software",
    "about-subtitle": "Ingeniero de software enfocado en backend con experiencia práctica desarrollando aplicaciones web basadas en datos y sistemas de monitorización industrial. Experiencia en el diseño de APIs REST, procesamiento de datos de series temporales y despliegue de servicios contenerizados en entornos de producción. Base sólida en arquitectura backend, bases de datos y diseño de aplicaciones escalables, con exposición directa a sistemas reales.",
    "about-name": "<span>Nombre: </span>Luis Jarque",
    "about-experience": "<span>Experiencia:</span> 1+ años",
    "about-nationality": "<span>Nacionalidad:</span> Española",
    "about-freelance": "<span>Freelance:</span> Disponible",
    "about-phone": "<span>Teléfono:</span> +34 629 48 52 72",
    "about-email": "<span>Email:</span> luis.jarquec@gmail.com",
    "about-discord": "<span>Discord: </span>luis.jarque",
    "about-languages": "<span>Idiomas: </span>Español, Inglés, Francés, Alemán, Chino"
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
