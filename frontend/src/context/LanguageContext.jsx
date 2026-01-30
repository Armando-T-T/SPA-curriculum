import { createContext, useContext, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const copy = {
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca",
      projects: "Proyectos",
      contact: "Contacto",
      cta: "Contactame",
    },
    home: {
      hero: {
        label: "PORTAFOLIO '26",
        firstName: "ARMANDO",
        lastName: "TORRES",
        subtitle:
          "Full-Stack Developer especializado en sistemas SaaS y B2B con foco en confiabilidad, escalabilidad y entregas a produccion.",
        location: "Monterrey, Nuevo Leon, Mexico",
        localTime: "Hora local",
      },
      about: {
        label: "01 — SOBRE MI",
        title: "Construyo sistemas con enfoque tecnico y de negocio.",
        body: "Creo aplicaciones completas desde requisitos hasta despliegue, cuidando arquitectura, experiencia y escalabilidad. Trabajo de cerca con producto y negocio para entregar soluciones claras y medibles.",
        disciplines: {
          title: "DISCIPLINA",
          items: ["Full-Stack", "SaaS / B2B", "API Design", "Cloud"],
        },
        tools: {
          title: "HERRAMIENTAS",
          items: [
            "React",
            "Redux Toolkit",
            "Node.js",
            "Express",
            "MongoDB",
            "AWS",
          ],
        },
        focus: {
          title: "FOCO",
          items: [
            "Confiabilidad",
            "Escalabilidad",
            "Performance",
            "Experiencia",
          ],
        },
      },
      experience: {
        label: "02 — EXPERIENCIA",
        items: [
          {
            name: "Enterprise SaaS",
            role: "Full-Stack Developer",
            period: "2025 — Presente",
            description:
              "Responsable de arquitectura, desarrollo y despliegue de plataforma B2B en produccion.",
          },
          {
            name: "Stripe & Webhooks",
            role: "Integraciones",
            period: "2025",
            description:
              "Implementacion de pagos, webhooks y flujos de facturacion automatizados.",
          },
          {
            name: "AWS Infrastructure",
            role: "Cloud & DevOps",
            period: "2025",
            description:
              "Infraestructura con EC2, S3, CloudFront, ALB e IAM con CI/CD.",
          },
        ],
        cta: "DESCARGAR CV COMPLETO",
      },
      projects: {
        label: "03 — TRABAJOS SELECCIONADOS",
        items: [
          {
            tag: "SaaS / B2B",
            title: "Plataforma de gestión empresarial",
            description:
              "Sistema SaaS desarrollado como único desarrollador, abarcando frontend, backend e infraestructura en producción.",
          },
          {
            tag: "Facturación",
            title: "Sistema de pagos y suscripciones",
            description:
              "Módulo de cobros y suscripciones con Stripe, incluyendo webhooks, automatizaciones y control de estados de pago.",
          },
          {
            tag: "Infraestructura",
            title: "Stack de producción en AWS",
            description:
              "Configuración y operación de infraestructura en AWS para aplicaciones web, con despliegue, seguridad y escalabilidad.",
          },
        ],
      },

      talk: {
        label: "04 — HABLEMOS",
        title: "HABLEMOS",
        contact: "Contacto",
        email: "torrestrevinoarmando@gmail.com",
        socials: ["LINKEDIN", "GITHUB", "TWITTER / X"],
        footer: "© 2026 Armando Torres. Todos los derechos reservados.",
      },
    },
    about: {
      chip: "SOBRE MI",
      title: "Construyendo productos que",
      titleAccent: "importan.",
      intro:
        "Soy Armando Torres, Full-Stack Developer con base en Nuevo Leon, Mexico.",
      body: "Como desarrollador full-stack y único responsable técnico de una startup SaaS, me especializo en crear aplicaciones web robustas y sistemas B2B completos. Diseño y desarrollo soluciones de extremo a extremo, desde requisitos y arquitectura hasta despliegue en producción, con foco en confiabilidad, escalabilidad y valor real para el negocio.",
      highlights: [
        "Unico desarrollador full-stack responsable del diseno, desarrollo y despliegue de una plataforma SaaS empresarial en produccion.",
        "Implementacion completa de backend, frontend e infraestructura en AWS con autenticacion, pagos (Stripe) y despliegue continuo.",
        "Liderazgo tecnico del proyecto, definiendo arquitectura y prioridades directamente con el CEO.",
      ],
      resume: "Descargar CV",
      stats: {
        years: { value: "1+", label: "AÑOS EXP." },
        projects: { value: "1", label: "PLATAFORMA SaaS" },
        awards: { value: "3", label: "LOGROS CLAVE" },
      },
      scroll: "DESLIZA",
    },
    contactPage: {
      title: "Ponte en contacto",
      subtitle:
        "Estoy abierto a nuevas oportunidades. Ya sea que tengas una pregunta sobre mi trabajo, quieras discutir un proyecto o solo saludar, hare lo posible por responder.",
      fields: {
        name: "Nombre",
        email: "Correo",
        subject: "Asunto",
        message: "Mensaje",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "tu.correo@ejemplo.com",
        subjectPlaceholder: "De que se trata?",
        messagePlaceholder: "Escribe tu mensaje aqui...",
      },
      send: "Enviar mensaje",
      sending: "Enviando...",
      infoTitle: "Informacion de contacto",
      emailLabel: "Escribeme",
      locationLabel: "Ubicacion",
      locationValue: "Monterrey, Nuevo Leon, Mexico",
      localTimeLabel: "Hora local",
      connectTitle: "Conecta conmigo",
      socials: {
        linkedin: "LinkedIn",
        github: "GitHub",
        twitter: "Twitter / X",
      },
      footer: "© 2026 Armando Torres. Todos los derechos reservados.",
      backToTop: "Volver arriba",
    },
    projectsPage: {
      title: "Experiencia profesional",
      subtitle:
        "Resumen de mi trayectoria, logros tecnicos y responsabilidades clave en desarrollo de software.",
      educationTitle: "Educacion",
      educationSubtitle:
        "Formacion academica y certificaciones que respaldan mi perfil como desarrollador.",
      experienceItems: [
        {
          title: "Full-Stack Developer",
          company: "Enterprise SaaS",
          location: "San Pedro Garza Garcia, MX",
          period: "Diciembre 2024 — Presente",
          highlights: [
            "Diseno, desarrollo y operacion de una plataforma SaaS B2B en produccion como unico desarrollador, tomando decisiones de arquitectura, alcance y prioridades tecnicas.",
            "Implementacion de flujos completos de facturacion con Stripe, incluyendo suscripciones, webhooks, manejo de estados de pago y automatizaciones criticas para el negocio.",
            "Construccion y mantenimiento de infraestructura en AWS para entornos productivos, gestionando despliegues, control de accesos y practicas basicas de seguridad y estabilidad.",
          ],
          skills: ["MongoDB", "Express", "React", "Node.js", "AWS", "Stripe", "SaaS", "B2B"],
        },
      ],
      educationItems: [
        {
          title: "Licenciatura en Ciencias Computacionales",
          company: "FCFM - UANL",
          location: "San Nicolas, MX",
          period: "2021 — 2025",
          highlights: [
            "Formacion en fundamentos de ciencias computacionales, incluyendo algoritmos, estructuras de datos, bases de datos y principios de arquitectura de software.",
            "Desarrollo de proyectos academicos enfocados en la construccion de aplicaciones web, aplicando conceptos teoricos a soluciones practicas.",
          ],
          skills: [
            "Algoritmos y estructuras de datos",
            "Bases de datos y modelado",
            "Fundamentos de sistemas y arquitectura",
          ],
          icon: "school",
        },
        {
          title: "Angular Junior Developer",
          company: "certificates.dev",
          location: "Online",
          period: "2024",
          highlights: [
            "Fundamentos de Angular y desarrollo de aplicaciones SPA.",
            "Buenas practicas de componentes y servicios.",
          ],
          skills: ["Angular", "TypeScript", "SPA"],
          icon: "cert",
        },
        {
          title: "Diploma SQL",
          company: "FIME - UANL",
          location: "San Nicolas, MX",
          period: "2024",
          highlights: [
            "Modelado relacional y consultas avanzadas.",
            "Optimizacion basica de consultas.",
          ],
          skills: ["SQL", "Modelado", "Consultas"],
          icon: "school",
        },
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      cta: "Contact Me",
    },
    home: {
      hero: {
        label: "PORTFOLIO '26",
        firstName: "ARMANDO",
        lastName: "TORRES",
        subtitle:
          "Full-Stack Developer specializing in SaaS and B2B systems with a focus on reliability, scalability, and production delivery.",
        location: "Monterrey, Nuevo Leon, Mexico",
        localTime: "Local time",
      },
      about: {
        label: "01 — ABOUT",
        title: "I build systems with technical and business focus.",
        body: "I create end-to-end applications from requirements to production, balancing architecture, experience, and scalability. I work closely with product and business to deliver clear, measurable outcomes.",
        disciplines: {
          title: "DISCIPLINE",
          items: ["Full-Stack", "SaaS / B2B", "API Design", "Cloud"],
        },
        tools: {
          title: "TOOLS",
          items: [
            "React",
            "Redux Toolkit",
            "Node.js",
            "Express",
            "MongoDB",
            "AWS",
          ],
        },
        focus: {
          title: "FOCUS",
          items: ["Reliability", "Scalability", "Performance", "Experience"],
        },
      },
      experience: {
        label: "02 — EXPERIENCE",
        items: [
          {
            name: "Enterprise SaaS",
            role: "Full-Stack Developer",
            period: "2025 — Present",
            description:
              "Owned architecture, development, and deployment of a production B2B platform.",
          },
          {
            name: "Stripe & Webhooks",
            role: "Integrations",
            period: "2025",
            description:
              "Implemented payments, webhooks, and automated billing flows.",
          },
          {
            name: "AWS Infrastructure",
            role: "Cloud & DevOps",
            period: "2025",
            description:
              "Built AWS infra with EC2, S3, CloudFront, ALB, IAM and CI/CD.",
          },
        ],
        cta: "DOWNLOAD FULL RESUME",
      },
      projects: {
        label: "03 — SELECTED WORK",
        items: [
          {
            tag: "SaaS / B2B",
            title: "Business management platform",
            description:
              "SaaS system developed as the sole developer, covering frontend, backend, and production infrastructure.",
          },
          {
            tag: "Billing",
            title: "Payments and subscriptions system",
            description:
              "Billing and subscription module built with Stripe, including webhooks, automations, and payment state management.",
          },
          {
            tag: "Infrastructure",
            title: "AWS production stack",
            description:
              "AWS infrastructure setup and operation for web applications, focused on deployment, security, and scalability.",
          },
        ],
      },

      talk: {
        label: "04 — LET'S TALK",
        title: "LET'S TALK",
        contact: "Contact",
        email: "torrestrevinoarmando@gmail.com",
        socials: ["LINKEDIN", "GITHUB", "TWITTER / X"],
        footer: "© 2026 Armando Torres. All Rights Reserved.",
      },
    },
    about: {
      chip: "ABOUT ME",
      title: "Building digital products that",
      titleAccent: "matter.",
      intro:
        "I am Armando Torres, a Full-Stack Developer based in Nuevo Leon, Mexico.",
      body: "As a full-stack developer and sole technical owner of a SaaS startup, I specialize in building robust web applications and end-to-end B2B systems. I design and develop solutions from requirements and architecture to production deployment, with a focus on reliability, scalability, and real business value.",
      highlights: [
        "Sole full-stack developer responsible for the design, development, and deployment of an enterprise SaaS platform in production.",
        "End-to-end backend, frontend, and AWS infrastructure with authentication, Stripe payments, and CI/CD.",
        "Technical lead, defining architecture and priorities directly with the CEO.",
      ],
      resume: "Download Resume",
      stats: {
        years: { value: "1+", label: "YEARS EXP." },
        projects: { value: "1", label: "SaaS PLATFORM" },
        awards: { value: "3", label: "KEY WINS" },
      },
      scroll: "SCROLL",
    },
    contactPage: {
      title: "Get in Touch",
      subtitle:
        "I'm open to new opportunities. Whether you have a question about my work, want to discuss a project, or just want to say hi, I'll do my best to get back to you.",
      fields: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your.email@example.com",
        subjectPlaceholder: "What is this regarding?",
        messagePlaceholder: "Write your message here...",
      },
      send: "Send Message",
      sending: "Sending...",
      infoTitle: "Contact Information",
      emailLabel: "Email me",
      locationLabel: "Location",
      locationValue: "Monterrey, Nuevo Leon, Mexico",
      localTimeLabel: "Local time",
      connectTitle: "Connect with me",
      socials: {
        linkedin: "LinkedIn",
        github: "GitHub",
        twitter: "Twitter / X",
      },
      footer: "© 2026 Armando Torres. All Rights Reserved.",
      backToTop: "Back to top",
    },
    projectsPage: {
      title: "Professional experience",
      subtitle:
        "A concise timeline of my career, technical achievements, and key responsibilities in software development.",
      educationTitle: "Education",
      educationSubtitle:
        "Academic background and certifications that support my developer profile.",
      experienceItems: [
        {
          title: "Full-Stack Developer",
          company: "Enterprise SaaS",
          location: "San Pedro Garza Garcia, MX",
          period: "December 2024 — Present",
          highlights: [
            "Designed, built, and operated a production B2B SaaS platform as the sole developer, owning architecture, scope, and technical priorities.",
            "Implemented end-to-end billing with Stripe, including subscriptions, webhooks, payment state handling, and critical business automations.",
            "Built and maintained AWS infrastructure for production environments, managing deployments, access control, and baseline security practices.",
          ],
          skills: ["MongoDB", "Express", "React", "Node.js", "AWS", "Stripe", "SaaS", "B2B"],
        },
      ],
      educationItems: [
        {
          title: "BSc in Computer Science",
          company: "FCFM - UANL",
          location: "San Nicolas, MX",
          period: "2021 — 2025",
          highlights: [
            "Training in core computer science fundamentals: algorithms, data structures, databases, and software architecture.",
            "Academic projects focused on building real-world web applications.",
          ],
          skills: [
            "Algorithms & data structures",
            "Databases & modeling",
            "Systems & architecture",
          ],
          icon: "school",
        },
        {
          title: "Angular Junior Developer",
          company: "certificates.dev",
          location: "Online",
          period: "2024",
          highlights: [
            "Angular fundamentals and SPA development.",
            "Component and service best practices.",
          ],
          skills: ["Angular", "TypeScript", "SPA"],
          icon: "cert",
        },
        {
          title: "SQL Diploma",
          company: "FIME - UANL",
          location: "San Nicolas, MX",
          period: "2024",
          highlights: [
            "Relational modeling and advanced queries.",
            "Basic query optimization.",
          ],
          skills: ["SQL", "Modeling", "Queries"],
          icon: "school",
        },
      ],
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const value = useMemo(() => ({ language, setLanguage, copy }), [language]);
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
