const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About Me",
    "nav-resume": "Resume",
    "nav-work": "Work",
    "nav-contact": "Contact",
    "btn-hire": "Hire Me",

    "about-title": "Who is <span>Luis Jarque</span>?",
    "about-subtitle": "Hello! I'm Luis Jarque, a passionate <span>software developer</span> with over a year of experience in web development. I specialize in creating <span>dynamic</span> and <span>user-friendly</span> websites and applications. My skills include <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, and various other technologies that help bring ideas to life. I'm eager to leverage my expertise and enthusiasm to <span>contribute to exciting new projects</span>.",
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
    "about-subtitle": "¡Hola! Soy Luis Jarque, un apasionado <span>desarrollador de software</span> con más de un año de experiencia en desarrollo web. Me especializo en crear sitios web y aplicaciones <span>dinámicas</span> y <span>fáciles de usar</span>. Mis habilidades incluyen <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> y diversas otras tecnologías que ayudan a dar vida a las ideas. Estoy deseando aprovechar mi experiencia y entusiasmo para <span>contribuir a nuevos proyectos emocionantes</span>.",
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
