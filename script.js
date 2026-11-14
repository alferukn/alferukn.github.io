const PROFILE_CONFIG = {
  links: {
    github: "https://github.com/alferukn",
    telegram: "https://t.me/Mrban228",
    email: "mailto:alferukn@gmail.com"
  },
  handles: {
    github: "@alferukn",
    telegram: "@Mrban228",
    email: "alferukn@gmail.com"
  },
  music: {
    main: "Paleface Swiss",
    others: "Old Nick · Bearded Legend · REDZED"
  }
};

const TRANSLATIONS = {
  ru: {
    page_title: "Алферук Николай // MRChix",
    brand_alias: "MRChix",

    nav_about: "01 // О себе",
    nav_interests: "02 // Увлечения",
    nav_projects: "03 // Проекты",
    nav_contacts: "04 // Контакты",

    hero_kicker: "MRChix // Личный архив",
    full_name: "Алферук Николай Сергеевич",
    btn_contact: "Связаться",
    btn_github: "GitHub",

    about_heading: "01 // О себе и учёба",
    bio_title: "Краткая биография",
    bio_p1: "Мне просто интересно разбираться, как устроены разные механизмы изнутри — от обычного ДВС до сложных программ. Сейчас учусь на программной инженерии и хочу развиваться в сторону архитектуры ПО и тимлидства. Параллельно смотрю на геймдизайн: за плечами большая насмотренность в играх и понимание, как они устроены и почему цепляют.",
    bio_p2: "Когда нужно отключить голову от учёбы и задач, выручает дорога: управление любой техникой для меня — лучшая медитация.",

    edu_place_label: "Университет",
    edu_place_val: "СПбГУ",
    edu_major_label: "Программа",
    edu_major_val: "Программная инженерия",
    edu_year_label: "Статус",
    edu_year_val: "2 курс",

    interests_heading: "02 // Увлечения",
    interests_title: "Чем живу вне учёбы",
    interest_1: "Хард-эндуро",
    interest_2: "Зал и плавание",
    interest_3: "Сюжетные игры — от Death Stranding до малоизвестных инди",
    interest_4: "Тяжёлая музыка — от ню до блэк и экстрим метала",

    music_label: "Heavy Rotation",
    music_genres: "Deathcore · Black Metal · Nu & Trap Metal",

    projects_heading: "03 // Проекты",
    proj1_status: "Архитектура и спецификации",
    proj1_title: "AI-пайплайн для Miminet",
    proj1_desc: "Выступаю в роли архитектора ПО. Сейчас идёт проектирование структуры ИИ-пайплайна для ускорения разработки улучшений для эмулятора компьютерных сетей.",

    proj2_status: "Написание сценария",
    proj2_title: "Визуальная новелла",
    proj2_desc: "Долгосрочный совместный проект. В данный момент идёт глубокая проработка сценария.",

    contacts_heading: "04 // Контакты",
    contacts_title: "Открыт к проектам и общению",
    contacts_sub: "Код, обсуждение архитектуры, музыка или просто связь:",

    footer_copy: "© 2026 // Алферук Николай (MRChix)",
    footer_location: "MRChix // Санкт-Петербург"
  },

  en: {
    page_title: "Nikolai Alferuk // MRChix",
    brand_alias: "MRChix",

    nav_about: "01 // About",
    nav_interests: "02 // Interests",
    nav_projects: "03 // Projects",
    nav_contacts: "04 // Contacts",

    hero_kicker: "MRChix // Personal Archive",
    full_name: "Nikolai Alferuk",
    btn_contact: "Contact Me",
    btn_github: "GitHub",

    about_heading: "01 // About & Education",
    bio_title: "Short Biography",
    bio_p1: "I’m genuinely interested in how different mechanisms work from the inside — from an internal combustion engine to complex software. I'm currently studying Software Engineering and want to grow toward software architecture and team leadership. At the same time, I’m keeping an eye on game design: years of playing games have given me a solid eye for how systems and player experiences are built.",
    bio_p2: "Whenever I need to switch off from studying and tasks, being in motion helps: operating any kind of machinery is the best meditation for me.",

    edu_place_label: "University",
    edu_place_val: "SPbU",
    edu_major_label: "Program",
    edu_major_val: "Software Engineering",
    edu_year_label: "Year",
    edu_year_val: "2nd Year",

    interests_heading: "02 // Interests",
    interests_title: "Life Outside Code",
    interest_1: "Hard Enduro",
    interest_2: "Gym & Swimming",
    interest_3: "Story-driven games — from Death Stranding to obscure indies",
    interest_4: "Heavy music — from nu-metal to black and extreme metal",

    music_label: "Heavy Rotation",
    music_genres: "Deathcore · Black Metal · Nu & Trap Metal",

    projects_heading: "03 // Projects",
    proj1_status: "Architecture & Specs",
    proj1_title: "AI Pipeline for Miminet",
    proj1_desc: "Serving as the software architect. Currently designing an AI pipeline architecture to accelerate feature development for the Miminet computer network emulator.",

    proj2_status: "Scripting Stage",
    proj2_title: "Visual Novel",
    proj2_desc: "Long-term collaborative project. Currently deep in script and narrative development.",

    contacts_heading: "04 // Contacts",
    contacts_title: "Open to Projects & Talks",
    contacts_sub: "Code, architecture discussions, music, or just reaching out:",

    footer_copy: "© 2026 // Nikolai Alferuk (MRChix)",
    footer_location: "MRChix // Saint Petersburg"
  }
};

function applyProfileConfig() {
  document.querySelectorAll("[data-link]").forEach((el) => {
    const key = el.getAttribute("data-link");
    if (PROFILE_CONFIG.links[key]) {
      el.setAttribute("href", PROFILE_CONFIG.links[key]);
    }
  });

  document.querySelectorAll("[data-handle]").forEach((el) => {
    const key = el.getAttribute("data-handle");
    if (PROFILE_CONFIG.handles[key]) {
      el.textContent = PROFILE_CONFIG.handles[key];
    }
  });

  document.querySelectorAll("[data-music]").forEach((el) => {
    const key = el.getAttribute("data-music");
    if (PROFILE_CONFIG.music[key]) {
      el.textContent = PROFILE_CONFIG.music[key];
    }
  });
}

function setLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.ru;

  document.documentElement.setAttribute("lang", lang);
  document.title = dict.page_title;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang-btn") === lang;
    btn.classList.toggle("lang-active", isActive);
  });

  localStorage.setItem("site_lang", lang);
}

function initSite() {
  applyProfileConfig();

  const savedLang = localStorage.getItem("site_lang") || "ru";
  setLanguage(savedLang);

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-btn");
      setLanguage(lang);
    });
  });

  document.querySelectorAll(".dropdown-content a").forEach((link) => {
    link.addEventListener("click", () => {
      const dropdown = link.closest(".dropdown");
      if (dropdown) {
        dropdown.removeAttribute("open");
      }
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSite);
} else {
  initSite();
}