const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About Me",
    "nav-resume": "Resume",
    "nav-work": "Work",
    "nav-contact": "Contact",
    "btn-hire": "Hire Me",

    "about-title": "Who is <span>Luis Jarque</span>?",
    "about-subtitle": "Hello! I'm Luis Jarque, a passionate software developer with over a year of experience in web development. I specialize in creating dynamic and user-friendly websites and applications. My skills include HTML, CSS, JavaScript, and various other technologies that help bring ideas to life. I'm eager to leverage my expertise and enthusiasm to contribute to exciting new projects.",
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
    "about-subtitle": "¡Hola! Soy Luis Jarque, un desarrollador de software apasionado con más de un año de experiencia en desarrollo web. Me especializo en crear sitios web y aplicaciones dinámicas y fáciles de usar. Mis habilidades incluyen HTML, CSS, JavaScript y diversas tecnologías que ayudan a hacer realidad las ideas. Estoy entusiasmado por aprovechar mi experiencia y entusiasmo para contribuir a nuevos proyectos emocionantes.",
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
