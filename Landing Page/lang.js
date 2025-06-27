const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About Me",
    "nav-resume": "Resume",
    "nav-work": "Work",
    "nav-contact": "Contact",
    "btn-hire": "Hire Me",
    "role": "<span>Software</span> Engineering Student",
    "iam": "I'm a <span></span>",
    "description": "I'm Luis Jarque, a dedicated <span>software engineering student</span> with a passion for creating innovative solutions and building user-centric applications. My journey in tech is driven by a <span>desire</span> to solve <span>real-world problems</span> and continuously improve my skills. I’m excited about learning new technologies and contributing to impactful projects.",
    "btn-download": "Download CV <i class='fa-solid fa-download'></i>",
  },
  es: {
    "nav-home": "Inicio",
    "nav-about": "Sobre mí",
    "nav-resume": "CV",
    "nav-work": "Trabajo",
    "nav-contact": "Contacto",
    "btn-hire": "Hire Me",
    "role": "Estudiante de <span>Ingeniería del Software</span>",
    "iam": "Soy un <span></span>",
    "description": "Soy Luis Jarque, un <span>estudiante de ingeniería del software</span> apasionado por crear soluciones innovadoras y aplicaciones centradas en el usuario. Mi camino en la tecnología está impulsado por el <span>deseo</span> de resolver <span>problemas reales</span> y mejorar constantemente mis habilidades. Estoy entusiasmado por aprender nuevas tecnologías y contribuir a proyectos con impacto.",
    "btn-download": "Descargar CV <i class='fa-solid fa-download'></i>",
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang); // recordar selección

  for (const id in translations[lang]) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = translations[lang][id];
  }

  // Actualiza la selección visual de la bandera
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
