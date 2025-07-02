const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About Me",
    "nav-resume": "Resume",
    "nav-work": "Work",
    "nav-contact": "Contact",
    "btn-hire": "Hire Me",

    "schedule": "Schedule a Meeting",
    "schedule-txt": "I'm looking forward to discussing how we can work together. Please select a time that works best for you using the scheduling tool below. If you have any specific questions or topics you'd like to cover, feel free to include them in the message section when booking."
},
es: {
    "nav-home": "Inicio",
    "nav-about": "Sobre mí",
    "nav-resume": "CV",
    "nav-work": "Trabajo",
    "nav-contact": "Contacto",
    "btn-hire": "Contrátame",

    "schedule": "Reserva una cita",
    "schedule-txt": "Tengo muchas ganas de hablar sobre cómo podemos trabajar juntos. Elige la hora que mejor te venga usando la herramienta de abajo. Si hay algo en concreto que quieras comentar, puedes escribirlo en el mensaje al reservar."
}};

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
