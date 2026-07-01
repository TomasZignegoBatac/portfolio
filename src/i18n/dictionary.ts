import type { Locale } from '@/types/content'

export interface Dictionary {
  meta: {
    title: string
  }
  hero: {
    role: string
    pitch: string
    ctaProjects: string
    ctaCv: string
  }
  about: {
    eyebrow: string
    title: string
    photoAlt: string
    paragraph1: string
    paragraph2: string
    educationLabel: string
    educationValue: string
    languagesLabel: string
    languagesValue: string
  }
  skills: {
    eyebrow: string
    title: string
    categories: {
      languages: string
      backend: string
      tools: string
    }
  }
  projects: {
    eyebrow: string
    title: string
    viewCode: string
  }
  experience: {
    eyebrow: string
    title: string
  }
  education: {
    eyebrow: string
    title: string
    present: string
    certificationsTitle: string
  }
  contact: {
    eyebrow: string
    title: string
    pitch: string
    emailLabel: string
    linkedinLabel: string
    githubLabel: string
    cvLabel: string
  }
  footer: {
    rights: string
  }
  nav: {
    about: string
    skills: string
    projects: string
    experience: string
    education: string
    contact: string
  }
  theme: {
    toggleToLight: string
    toggleToDark: string
  }
  language: {
    switchTo: string
    current: string
  }
  menu: {
    open: string
    close: string
  }
}

export const dictionary: Record<Locale, Dictionary> = {
  es: {
    meta: {
      title: 'Tomás Zignego · Desarrollador Backend / Full Stack',
    },
    hero: {
      role: 'Desarrollador Backend / Full Stack',
      pitch:
        'Estudiante avanzado de Ingeniería en Sistemas de la Información (UTN-FRBA), en búsqueda de mi primera oportunidad como desarrollador. Me apasiona resolver problemas complejos con código limpio y bien pensado.',
      ctaProjects: 'Ver proyectos',
      ctaCv: 'Descargar CV',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Quién soy',
      photoAlt: 'Foto de Tomás Zignego',
      paragraph1:
        'Soy estudiante avanzado de Ingeniería en Sistemas de la Información en la UTN-FRBA, con experiencia desarrollando proyectos académicos de mediana complejidad: desde un sistema operativo en C hasta simulaciones funcionales en Haskell. Me interesan especialmente el desarrollo backend, el diseño de sistemas y escribir código que otras personas puedan entender y mantener.',
      paragraph2:
        'Durante seis años fui voluntario de socorrismo, brindando primeros auxilios en eventos masivos y coordinando equipos en situaciones de emergencia. De ahí viene algo que también llevo a la programación: tomar decisiones con información incompleta, mantener la calma bajo presión y comunicar con claridad cuando más importa.',
      educationLabel: 'Formación',
      educationValue: 'Ingeniería en Sistemas de la Información — UTN-FRBA',
      languagesLabel: 'Idiomas',
      languagesValue: 'Español (nativo), Inglés (avanzado)',
    },
    skills: {
      eyebrow: 'Tecnologías',
      title: 'Con qué trabajo',
      categories: {
        languages: 'Lenguajes',
        backend: 'Backend & Datos',
        tools: 'Herramientas',
      },
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Lo que construí',
      viewCode: 'Ver código',
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Por dónde pasé',
    },
    education: {
      eyebrow: 'Educación',
      title: 'Formación',
      present: 'Actualidad',
      certificationsTitle: 'Certificaciones',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos',
      pitch:
        'Estoy buscando mi primera oportunidad como desarrollador Backend o Full Stack. Si mi perfil encaja con lo que buscás, escribime por cualquiera de estos medios.',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      cvLabel: 'Descargar CV',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
    nav: {
      about: 'Sobre mí',
      skills: 'Tecnologías',
      projects: 'Proyectos',
      experience: 'Experiencia',
      education: 'Educación',
      contact: 'Contacto',
    },
    theme: {
      toggleToLight: 'Cambiar a modo claro',
      toggleToDark: 'Cambiar a modo oscuro',
    },
    language: {
      switchTo: 'English',
      current: 'Español',
    },
    menu: {
      open: 'Abrir menú',
      close: 'Cerrar menú',
    },
  },
  en: {
    meta: {
      title: 'Tomás Zignego · Backend / Full Stack Developer',
    },
    hero: {
      role: 'Backend / Full Stack Developer',
      pitch:
        'Advanced Information Systems Engineering student (UTN-FRBA), looking for my first opportunity as a developer. I enjoy solving complex problems with clean, well-thought-out code.',
      ctaProjects: 'View projects',
      ctaCv: 'Download CV',
    },
    about: {
      eyebrow: 'About me',
      title: 'Who I am',
      photoAlt: 'Photo of Tomás Zignego',
      paragraph1:
        "I'm an advanced Information Systems Engineering student at UTN-FRBA, with experience building mid-sized academic projects: from an operating system in C to functional simulations in Haskell. I'm particularly interested in backend development, system design, and writing code other people can actually understand and maintain.",
      paragraph2:
        "For six years I volunteered as a first-aid responder, providing care at large events and coordinating teams during emergencies. That experience shaped something I also bring to programming: making decisions with incomplete information, staying calm under pressure, and communicating clearly when it matters most.",
      educationLabel: 'Education',
      educationValue: 'Information Systems Engineering — UTN-FRBA',
      languagesLabel: 'Languages',
      languagesValue: 'Spanish (native), English (advanced)',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'What I work with',
      categories: {
        languages: 'Languages',
        backend: 'Backend & Data',
        tools: 'Tools',
      },
    },
    projects: {
      eyebrow: 'Projects',
      title: "What I've built",
      viewCode: 'View code',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Where I have been',
    },
    education: {
      eyebrow: 'Education',
      title: 'Education',
      present: 'Present',
      certificationsTitle: 'Certifications',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      pitch:
        "I'm looking for my first opportunity as a Backend or Full Stack developer. If my profile fits what you're looking for, reach out through any of these channels.",
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      cvLabel: 'Download CV',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    theme: {
      toggleToLight: 'Switch to light mode',
      toggleToDark: 'Switch to dark mode',
    },
    language: {
      switchTo: 'Español',
      current: 'English',
    },
    menu: {
      open: 'Open menu',
      close: 'Close menu',
    },
  },
}
