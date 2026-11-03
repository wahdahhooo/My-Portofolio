let currentLanguage = "id";

const languageToggle = document.getElementById("languageToggle");

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "id" ? "en" : "id";

  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-id][data-en]").forEach(element => {
    element.textContent =
      element.getAttribute(`data-${currentLanguage}`);
  });

  languageToggle.textContent =
    currentLanguage === "id" ? "EN" : "ID";
});

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
  });
});

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    const selectedFilter = button.dataset.filter;

    projectCards.forEach(card => {
      const category = card.dataset.category;

      if (selectedFilter === "all" || category === selectedFilter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

const projects = {
  thesis: {
    category: "FINAL THESIS / CYBERSECURITY",
    title: "Social Media User Vulnerability Analysis",
    description: {
      id: "Penelitian tugas akhir mengenai pola kerentanan pengguna media sosial melalui rekonstruksi skenario serangan phishing menggunakan website giveaway tiruan. Penelitian berorientasi pada human factor, perilaku pengguna, dan pengelompokan pola aktivitas. Proyek ini menggabungkan aspek cybersecurity, perancangan website, pengumpulan data perilaku, serta analisis.",
      en: "An undergraduate thesis exploring social media user vulnerability patterns through the reconstruction of a phishing attack scenario using a simulated giveaway website. The research focuses on human factors, user behavior, and activity clustering, combining cybersecurity, website design, behavioral data collection, and analysis."
    },
    role: "Individual Research",
    tools: "Cybersecurity - Website - Clustering",
    docs: "Thesis Report - Website - Research Documentation",
    note: {
      id: "Dokumentasi tersedia pada tombol putih di atas.",
      en: "Documentation is available trough white button above."
    },
    links: [
    {
      label: "Laporan, Tampilan Website dan Dokumentasi Penelitian",
      url: "https://drive.google.com/drive/folders/1Qwkrevn1eotfqsCR3zHghgyUsx4b33A9?usp=drive_link"
    }]
  },

  sentiment: {
    category: "NATURAL LANGUAGE PROCESSING",
    title: "Opinion Classification Application",
    description: {
      id: "Aplikasi klasifikasi opini terhadap aplikasi pemerintah dengan pendekatan Natural Language Processing. Proyek ini menggunakan Python dan Streamlit sebagai bagian dari implementasi aplikasi klasifikasi berbasis teks.",
      en: "An opinion classification application for government apps using a Natural Language Processing approach. The project uses Python and Streamlit to implement a text-based classification application."
    },
    role: "Group Project",
    tools: "Python - Streamlit - NLP",
    docs: "GitHub Repository - Project Report",
    note: {
      id: "Dokumentasi tersedia pada tombol putih di atas.",
      en: "Documentation is available trough white button above."
    },
    links: [
    {
      label: "All Proyek Items",
      url: "https://drive.google.com/drive/folders/1eRXLtpLsVoMXw-J_B_x4e0iVbgpE-IJo?usp=drive_link"
    }]
  },

  beline: {
    category: "UI/UX DESIGN",
    title: "Be-Line Bengkel Online",
    description: {
      id: "Perancangan pengalaman dan antarmuka pengguna untuk layanan bengkel online menggunakan pendekatan Design Thinking. Kontribusi utama saya berfokus pada bagian UI. Proyek juga mencakup evaluasi menggunakan System Usability Scale (SUS).",
      en: "A user experience and interface design project for an online workshop service using Design Thinking. My main contribution focused on UI design. The project also included System Usability Scale (SUS) evaluation."
    },
    role: "Group Project - UI Design",
    tools: "Figma - Design Thinking - SUS",
    docs: "Figma Prototype - Project Report",
    note: {
      id: "Dokumentasi tersedia pada tombol putih di atas.",
      en: "Documentation is available trough white button above."
    },
    links: [
    {
      label: "Figma Prototype",
      url: "https://www.figma.com/proto/kIV8xm7nBclvnaYvOFSWKs/kbt?node-id=3-162&t=aTRkUVDAD3bwtueg-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=3%3A282"
    },
    {
      label: "Project Report",
      url: "https://drive.google.com/file/d/1gXS2QvsRrUmvDkBCkehks6bxPFZPp-vn/view?usp=sharing"
    }]
  },

  jdih: {
    category: "WEB DEVELOPMENT",
    title: "JDIH Information Website",
    description: {
      id: "Pengembangan website informasi dan dokumentasi hukum yang terintegrasi dengan Google Drive. Proyek individu ini mencakup dokumentasi, desain antarmuka, pengembangan kode, dan proses deployment.",
      en: "Development of a legal information and documentation website integrated with Google Drive. This individual project covered documentation, interface design, coding, and deployment."
    },
    role: "Individual Project",
    tools: "Web Development - Google Drive - UI Design",
    docs: "Project Report - UI Design - Source Code",
    note: {
      id: "Dokumentasi tersedia pada tombol putih di atas.",
      en: "Documentation is available trough white button above."
    },
    links: [
    {
      label: "Project Report",
      url: "https://drive.google.com/file/d/1IAqv572HXddlwWrWdwmR7wrv33GXSeL0/view?usp=sharing"
    },
    {
      label: "UI Design",
      url: "https://www.figma.com/proto/yEWS6uJyDQ3aWQt9q5F2l6/jdih-disdikbud?node-id=1-530&t=nq8273BVNmFaCITN-1"
    },
    {
      label: "Source Code melalui Github",
      url: "https://github.com/wahdahhooo/jdih_disdik_v1.0.git"
    }]
  },

  wirp: {
    category: "UI/UX & SYSTEM DESIGN",
    title: "WIRP Health",
    description: {
      id: "Proyek perancangan wireframe dan konsep layanan pemesanan rumah sakit secara online. Fokus proyek berada pada perancangan alur dan struktur antarmuka.",
      en: "A wireframe and concept design project for an online hospital booking service, focusing on user flows and interface structure."
    },
    role: "Group Project",
    tools: "Wireframe - UI Design - Documentation",
    docs: "Wireframe - Project Report",
    note: {
      id: "Dokumentasi tersedia pada tombol putih di atas.",
      en: "Documentation is available trough white button above."
    },
    links: [
    {
      label: "All Proyek Items",
      url: "https://drive.google.com/drive/folders/1A-McaKBpn4BR77AG-iZQBcVMU8fV0uGi?usp=drive_link"
    }]
  },

  exam: {
    category: "UI DESIGN & FRONTEND DEVELOPMENT",
    title: "Website Ujian Auto Submit",
    description: {
      id: "Perancangan interface hingga frontend dari Website Ujian Auto Submit. Fokus proyek berada pada alur dan struktur antarmuka.",
      en: "Interface design and frontend development of an Auto Submit Examination Website, focusing on flows and interface structure."
    },
    role: "Group Project",
    tools: "UI Design - Documentation",
    docs: "Prototype - Source Code - Project Report",
    note: {
      id: "Dokumentasi tersedia pada tombol putih di atas.",
      en: "Documentation is available trough white button above."
    },
    links: [
    {
      label: "Prototype",
      url: "https://www.figma.com/proto/IplTyQDEsN83gcbjG0mLQA/project-sistem-informasi--Copy-?node-id=12-42&starting-point-node-id=12%3A42&t=2dV1JHqHMCKuLVpH-1"
    },
    {
      label: "Project Report",
      url: "https://drive.google.com/drive/folders/1uzCnGSDiDUTreiAiJlUbwp_Hx9AeasWn?usp=drive_link"
    }]
  },

  ppdb: {
    category: "WEB DEVELOPMENT",
    title: "PPDB Online SMP Plus",
    description: {
      id: "Pengembangan sistem penerimaan peserta didik baru berbasis website. Proyek ini menggunakan HTML, CSS, JavaScript, dan PHP. Saya terlibat dalam proses pengembangan sistem sebagai bagian dari proyek rekayasa perangkat lunak.",
      en: "Development of a web-based student admission system using HTML, CSS, JavaScript, and PHP. I participated in the system development process as part of a software engineering project."
    },
    role: "Group Project",
    tools: "HTML - CSS - JavaScript - PHP",
    docs: "Project Report - Source Code Archive",
    note: {
      id: "Dokumentasi tidak tersedia.",
      en: "Documentation is unavailable."
    },
    links: [
    ]
  },

  sttc: {
    category: "WEB DEVELOPMENT",
    title: "STTC Profile Website",
    description: {
      id: "Proyek pengembangan website profil institusi menggunakan framework Laravel. Proyek ini menjadi pengalaman dalam mengenal struktur pengembangan website berbasis framework.",
      en: "An institutional profile website development project using the Laravel framework. This project provided experience with framework-based website development."
    },
    role: "Group Project",
    tools: "Laravel - PHP - Web Development",
    docs: "GitHub Source Code",
    note: {
      id: "Dokumentasi tersedia pada tombol putih di atas.",
      en: "Documentation is available trough white button above."
    },
    links: [
    {
      label: "GitHub Source Code",
      url: "https://github.com/wahdahhooo/kelompok6-ifa.git"
    }]
  },

  cyberapp: {
    category: "ANDROID DEVELOPMENT",
    title: "Cyber Crime Reporting App",
    description: {
      id: "Pengembangan aplikasi Android untuk pelaporan insiden kejahatan siber menggunakan Kotlin. Proyek individu ini menjadi pengalaman dalam pengembangan aplikasi mobile.",
      en: "Development of an Android application for reporting cybercrime incidents using Kotlin. This individual project provided experience in mobile application development."
    },
    role: "Individual Project",
    tools: "Kotlin - Android Development",
    docs: "Application Documentation",
    note: {
      id: "Dokumentasi tersedia pada tombol putih di atas.",
      en: "Documentation is available trough white button above."
    },
    links: [
    {
      label: "Source Code",
      url: "https://github.com/wahdahhooo/UAS_PAM.git"
    }]
  },

  webqual: {
    category: "DATA & RESEARCH",
    title: "ChatGPT Website Evaluation",
    description: {
      id: "Evaluasi kualitas website ChatGPT menggunakan metode WebQual dalam proyek mata kuliah Probabilitas dan Statistika.",
      en: "Evaluation of ChatGPT website quality using the WebQual method as part of a Probability and Statistics course project."
    },
    role: "Group Project",
    tools: "WebQual - Statistics - Research",
    docs: "Research Report",
    note: {
      id: "Dokumentasi tersedia pada tombol putih di atas.",
      en: "Documentation is available trough white button above."
    },
    links: [
    {
      label: "Research Report",
      url: "https://drive.google.com/drive/folders/1oV-UbRaSUJqkFckGjytH9TK_zUAzQ689?usp=drive_link"
    }]
  },

  fan: {
    category: "OBJECT-ORIENTED PROGRAMMING",
    title: "Smart Fan",
    description: {
      id: "Proyek kelompok berupa prototipe kipas pintar sebagai penerapan konsep Object-Oriented Programming. Proyek dilengkapi dokumentasi aktivitas dan prototipe.",
      en: "A group project developing a smart fan prototype as an application of Object-Oriented Programming concepts, supported by activity documentation and a prototype."
    },
    role: "Group Project",
    tools: "Object-Oriented Programming - Prototype",
    docs: "Prototype - Activity Documentation",
    note: {
      id: "Dokumentasi tersedia pada tombol putih di atas.",
      en: "Documentation is available trough white button above."
    },
    links: [
    {
      label: "All Proyek Items",
      url: "https://drive.google.com/drive/folders/1flNC-yBlpu7cl5dyWOdENl2iJ7sjUDSe?usp=drive_link"
    }]
  },

  matrix: {
    category: "PROGRAMMING",
    title: "C++ Matrix Calculator",
    description: {
      id: "Program kalkulator matriks menggunakan bahasa C++ sebagai penerapan konsep pemrograman dan materi Aljabar Geometri. Dokumentasi berupa laporan kelompok yang memuat kode dan penjelasan.",
      en: "A matrix calculator developed using C++, applying programming and Algebra and Geometry concepts. The group report includes source code and explanations."
    },
    role: "Group Project",
    tools: "C++ - Programming Fundamentals",
    docs: "Project Report - Source Code",
    note: {
      id: "Dokumentasi tersedia pada tombol putih di atas.",
      en: "Documentation is available trough white button above."
    },
    links: [
    {
      label: "All Proyek Items",
      url: "https://drive.google.com/drive/folders/1RCVPzrzwiACq1HO90BlsxYIEADUq5y7L?usp=drive_link"
    }]
  },

  calculator: {
    category: "PROGRAMMING FUNDAMENTALS",
    title: "C++ Area Calculator",
    description: {
      id: "Program individu untuk menghitung luas bidang menggunakan C++. Proyek ini merupakan latihan penerapan dasar pemrograman dan logika perhitungan.",
      en: "An individual C++ program for calculating geometric areas. This project applied basic programming and computational logic."
    },
    role: "Individual Project",
    tools: "C++ - Basic Programming",
    docs: "Video Presentation",
    note: {
      id: "Dokumentasi tersedia pada tombol putih di atas.",
      en: "Documentation is available trough white button above."
    },
    links: [
    {
      label: "Video Presentation",
      url: "https://drive.google.com/drive/folders/1G8sJ_e20To-SrZT1ekmxIB1O9JYBRxep?usp=drive_link"
    }]
  },

  business: {
    category: "BUSINESS & ENTREPRENEURSHIP",
    title: "Business Idea & Business Model Canvas",
    description: {
      id: "Analisis ide bisnis menggunakan SWOT dan Business Model Canvas sebagai bagian dari proyek mata kuliah kewirausahaan.",
      en: "Business idea analysis using SWOT and Business Model Canvas as part of an entrepreneurship course project."
    },
    role: "Group Project",
    tools: "SWOT Analysis - Business Model Canvas",
    docs: "Project Report",
    note: {
      id: "Dokumentasi tersedia pada tombol putih di atas.",
      en: "Documentation is available trough white button above."
    },
    links: [
    {
      label: "All Proyek Items",
      url: "https://drive.google.com/drive/folders/1FfEEee_KUQ0mFlp4Q6E8fFmcD9grbnOu?usp=drive_link"
    }]
  }
};

const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");

const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalRole = document.getElementById("modalRole");
const modalTools = document.getElementById("modalTools");
const modalDocs = document.getElementById("modalDocs");
const modalLinks = document.getElementById("modalLinks");
const modalNote = document.getElementById("modalNote");

function openProject(projectKey) {
  const project = projects[projectKey];

  if (!project) return;

  modalCategory.textContent = project.category;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description[currentLanguage];
  modalRole.textContent = project.role;
  modalTools.textContent = project.tools;
  modalDocs.textContent = project.docs;
  modalNote.textContent = project.note[currentLanguage];

  modalLinks.innerHTML = "";

  if (project.links.length > 0) {
    project.links.forEach(link => {
      const anchor = document.createElement("a");

      anchor.href = link.url;
      anchor.textContent = link.label;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";

      modalLinks.appendChild(anchor);
    });
  } else {
    const message = document.createElement("span");
    message.textContent =
      currentLanguage === "id"
        ? "Dokumentasi belum ditautkan"
        : "Documentation not linked yet";

    message.style.color = "#a6aaa0";
    message.style.fontSize = "11px";

    modalLinks.appendChild(message);
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".detail-button").forEach(button => {
  button.addEventListener("click", () => {
    openProject(button.dataset.project);
  });
});

modalClose.addEventListener("click", closeProject);
modalBackdrop.addEventListener("click", closeProject);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeProject();
  }
});

const originalLanguageHandler = languageToggle.onclick;

languageToggle.addEventListener("click", () => {
  if (!modal.classList.contains("open")) return;

  const currentTitle = modalTitle.textContent;

  const selectedProject = Object.values(projects).find(
    project => project.title === currentTitle
  );

  if (selectedProject) {
    modalDescription.textContent =
      selectedProject.description[currentLanguage];

    modalNote.textContent =
      selectedProject.note[currentLanguage];
  }
});

const year = new Date().getFullYear();
document.querySelector(".site-footer p").innerHTML =
  document.querySelector(".site-footer p").innerHTML
    .replace("2026", year);