function showContent(section) {
    document.querySelectorAll('.content-section').forEach(function(content) {
        content.style.display = 'none';
    });

    document.getElementById(section).style.display = 'block';
    
    document.querySelectorAll('.buttons button').forEach(function(button) {
        button.classList.remove('active');
    });
    
    event.target.classList.add('active');
}

const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About Me",
    "nav-resume": "Resume",
    "nav-work": "Work",
    "nav-contact": "Contact",
    "btn-hire": "Hire Me",

    "why-hire-title": "Why hire me?",
    "why-hire-subtitle": "Discover why I would be a great fit <br> for your team.",
    "education-title": "Education",
    "skills-title": "Skills",
    "experience-title": "Experience",
    "languages-title": "Languages",
    "edu-section-title": "My Education",
    "edu-description": "Details about my educational background.",
    "school-1": "Elementary, Middle, High School",
    "school-1-desc": "Complete British Education",
    "school-2": "Complete Spanish Education",
    "school-3": "University in Spain",
    "school-3-desc": "Software Engineering Specification",
    "school-4": "Final Project",
    "school-4-desc": "Blockchain",
    "school-5-desc": "Bitcoin & Ethereum Technologies",
    "skills-section-title": "My Skills",
    "skills-description": "Skills that I have acquired over time.",
    "experience-section-title": "My Experience",
    "experience-description": "Summary of my professional experience.",
    "exp-1-title": "Personal Projects",
    "exp-1-desc": "Completely self-taught",
    "languages-section-title": "My Languages",
    "languages-description": "Languages I speak and my proficiency levels.",
    "lang-spanish": "Native Proficiency",
    "lang-french": "Full Professional Proficiency",
    "lang-french-desc": "Exam: DALF B2",
    "lang-catalan": "Bilingual or Native Proficiency",
    "lang-english": "Full Professional Proficiency",
    "lang-english-desc": "Exam: Cambridge University C1 Advanced",
    "lang-german": "Basic Proficiency",
    "lang-german-desc": "Goëthe-Institut Zertifikat B1",
    "lang-chinese": "Limited Basic Proficiency",
    "lang-chinese-desc": "Exam: Confucius Institute YCT 3 (A2)"
  },
  es: {
    "nav-home": "Inicio",
    "nav-about": "Sobre mí",
    "nav-resume": "CV",
    "nav-work": "Trabajo",
    "nav-contact": "Contacto",
    "btn-hire": "Contrátame",

    "why-hire-title": "¿Por qué yo?",
    "why-hire-subtitle": "Descubre por qué encajaría perfectamente <br> en tu equipo.",
    "education-title": "Formación",
    "skills-title": "Habilidades",
    "experience-title": "Experiencia",
    "languages-title": "Idiomas",
    "edu-section-title": "Mi Formación",
    "edu-description": "Detalles sobre mi trayectoria educativa.",
    "school-1": "Primaria, Secundaria y Bachillerato",
    "school-1-desc": "Educación británica completa",
    "school-2": "Educación española completa",
    "school-3": "Universidad en España",
    "school-3-desc": "Especialización en Ingeniería del Software",
    "school-4": "Proyecto final",
    "school-4-desc": "Blockchain",
    "school-5-desc": "Tecnologías de Bitcoin y Ethereum",
    "skills-section-title": "Mis Habilidades",
    "skills-description": "Habilidades que he adquirido con el tiempo.",
    "experience-section-title": "Mi Experiencia",
    "experience-description": "Resumen de mi experiencia profesional.",
    "exp-1-title": "Proyectos personales",
    "exp-1-desc": "Completamente autodidacta",
    "languages-section-title": "Mis Idiomas",
    "languages-description": "Idiomas que hablo y mis niveles de competencia.",
    "lang-spanish": "Competencia nativa",
    "lang-french": "Competencia profesional completa",
    "lang-french-desc": "Examen: DALF B2",
    "lang-catalan": "Bilingüe o competencia nativa",
    "lang-english": "Competencia profesional completa",
    "lang-english-desc": "Examen: Cambridge University C1 Advanced",
    "lang-german": "Competencia básica",
    "lang-german-desc": "Zertifikat B1 del Goethe-Institut",
    "lang-chinese": "Competencia básica limitada",
    "lang-chinese-desc": "Examen: Instituto Confucio YCT 3 (A2)"
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

