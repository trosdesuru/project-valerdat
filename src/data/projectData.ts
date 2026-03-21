import { CaseStudyProps } from "@/lib/types";

export const projectData: CaseStudyProps = {
  client: "Valerdat",
  title: "IA predictiva aplicada a la optimización logística",
  shortDescription:
    "Evolución arquitectónica y visual de una plataforma SaaS B2B. Transformé algoritmos predictivos de IA (caja negra) en interfaces accionables, superando cuellos de botella de renderizado en React y mejorando la confianza del usuario.",
  tags: ["B2B SaaS", "Data Visualization", "DesignOps & AI", "UX Engineer"],

  heroImage: {
    src: "/images/macbook-dashboard.png",
    alt: "Dashboard principal de la plataforma Valerdat con analítica predictiva",
  },

  metadata: {
    role: "UX Engineer & Product Designer",
    timeline: "Ene 2023 – Jun 2023",
    platform: "Web Desktop (SaaS)",
    team: "CTO, Data Scientists, Frontend Engineers, Product Manager",
    users:
      "Gestores de compras y directores de logística gestionando inventarios de alto volumen.",
    constraints:
      "Altísima densidad de datos (>50 columnas por tabla), necesidad de renderizado eficiente en cliente y el reto de explicar decisiones generadas por IA sin abrumar.",
  },
  introduction:
    "Valerdat ayuda a empresas industriales a tomar decisiones de compra mediante el análisis de datos. Como UX Engineer, mi rol fue tender el puente entre los Data Scientists y el Frontend. Diseñé un sistema visual para explicar algoritmos predictivos complejos y desarrollé componentes en React que permitieran renderizar miles de filas de datos sin bloquear el hilo principal (UI thread).",

  outcomes: {
    business: {
      title: "Reducción de tiempos operativos",
      description:
        "Disminución estimada del 60% en el tiempo de revisión manual de pedidos al sustituir Excel por dashboards priorizados.",
    },
    users: {
      title: "Adopción y Confianza en la IA",
      description:
        "Implementación exitosa del patrón de 'Divulgación Progresiva', logrando que el usuario entendiera y confiara en las recomendaciones del algoritmo.",
    },
    team: {
      title: "Escalabilidad con DesignOps",
      description:
        "Creación de un Sistema de Diseño atómico sincronizado con el código, reduciendo el time-to-market de nuevas features en un 40%.",
    },
  },

  problem: {
    subtitle: "De la parálisis por análisis a la acción inteligente",
    context: [
      "El sector logístico industrial dependía de procesos manuales y ERPs legacy. Los gestores se enfrentaban a tablas con miles de filas y decenas de métricas cruzadas, lo que generaba un estrés cognitivo enorme y errores en las compras.",
    ],
    challenge:
      "Resolver la 'explicabilidad' de la IA. Si la plataforma recomendaba comprar 500 tornillos, el usuario necesitaba saber por qué. Técnicamente, esto exigía procesar árboles de decisión y representarlos visualmente sin penalizar el rendimiento del frontend.",
    successCriteria: [
      "Sustituir tablas masivas por componentes de datos asíncronos y escaneables.",
      "Conseguir que el usuario apruebe una recomendación de la IA en menos de 3 clics.",
      "Unificar la lógica de negocio compleja bajo una arquitectura frontend limpia (Clean Code).",
    ],
    image: {
      src: "/images/workflow-group.png",
      alt: "Comparativa entre gestión tradicional en Excel vs Dashboard de Valerdat",
      caption:
        "El reto técnico: humanizar el dato sin saturar la memoria gráfica del navegador.",
    },
  },

  research: {
    subtitle: "Ingeniería de la experiencia y descubrimiento técnico",
    steps: [
      {
        id: "01",
        title: "Descubrimiento: El miedo a la 'Caja Negra' de la IA",
        items: [
          "Identificamos que una UI limpia no bastaba; los gestores rechazaban las automatizaciones si no comprendían la formulación matemática detrás de la sugerencia.",
        ],
      },
      {
        id: "02",
        title: "Auditoría de cuellos de botella en Frontend",
        items: [
          "Evaluación de cómo renderizar comparativas históricas de proveedores sin causar un lag perceptible (evaluación de virtualización de listas).",
        ],
      },
      {
        id: "03",
        title: "Mapeo de arquitectura de información",
        items: [
          "Reestructuración del flujo transaccional para separar la 'visión macro' (directiva) de la 'ejecución micro' (gestor operativo).",
        ],
      },
    ],
    image: {
      src: "/images/stakeholders.png",
      alt: "Estructura de componentes de datos",
      caption:
        "Traduciendo dependencias de bases de datos relacionales en jerarquías visuales.",
    },
  },

  definition: {
    subtitle: "Sistemas modulares y divulgación progresiva",
    context: [
      "Diseñé una arquitectura basada en el principio de 'Progressive Disclosure'. El usuario veía un KPI simple de entrada, pero al interactuar se desencadenaba una vista detallada del razonamiento del modelo de IA.",
    ],
    scope: [
      "Dashboard predictivo: Renderizado eficiente de alertas críticas en tiempo real.",
      "Módulo de explicabilidad: Interfaz dinámica para simular escenarios de compra interactuando con variables en vivo.",
      "Design System en React: Estandarización de componentes de datos, filtros avanzados y paginación.",
    ],
    image: {
      src: "/images/ai-ux-research.png",
      alt: "Wireframes técnicos de la plataforma",
      caption:
        "Wireframes enfocados en la modularidad y reusabilidad de componentes.",
    },
  },

  iterativeProcess: {
    subtitle: "Iteración en código y optimización de flujos",
    highFidelity: [
      "Diseño de paletas semánticas estrictas para diferenciar claramente estados de stock (peligro, seguridad, exceso).",
      "Creación de prototipos funcionales evaluando no solo la estética, sino el comportamiento de carga de estados (Skeletons, Spinners) frente a llamadas a la API lentas.",
    ],
    image: {
      src: "/images/wireframe-hight.png",
      alt: "Pantallas de alta fidelidad del SaaS",
      caption: "Diseño orientado a componentes React (Atomic Design).",
    },
    testing: [
      "Testing A/B sobre diferentes disposiciones de jerarquía de datos para minimizar la fricción cognitiva.",
      "Revisión de accesibilidad y contraste enfocada en usuarios operando pantallas en entornos industriales poco iluminados.",
    ],
  },

  delivery: {
    subtitle: "Handoff técnico y gobernanza del sistema",
    delivered: [
      "Prototipo final interactivo y documentación exhaustiva del Sistema de Diseño.",
      "Directrices técnicas para la implementación en React, definiendo los props, estados y variantes de cada componente.",
    ],
    improvements: [
      "Eficiencia de desarrollo: Handoff sin fricciones gracias al uso del mismo vocabulario técnico (SOLID, TDD) que el equipo de ingeniería.",
      "Escalabilidad: Reglas claras sobre cómo extender el dashboard para futuros módulos (Sostenibilidad, Flotas).",
    ],
    image: {
      src: "/images/delivery-components.png",
      alt: "Librería de componentes del sistema",
    },
  },

  detailedOutcomes: {
    subtitle: "Impacto escalable y validación del modelo",
    business: {
      title: "Cierre de ciclo de ventas",
      description:
        "La interfaz pasó de ser una herramienta de cálculo a un argumento de ventas decisivo, demostrando que un software industrial pesado también puede ser elegante y rápido.",
    },
    user: {
      title: "Empoderamiento del gestor",
      description:
        "El usuario logró el control absoluto de sus decisiones, apoyado por una IA que actúa como consultora y no como una caja negra inaccesible.",
    },
    team: {
      title: "Flujo ágil Ingeniería/Diseño",
      description:
        "Acercar el diseño al frontend permitió iterar features basándose en las limitaciones reales de la base de datos, evitando rediseños de última hora.",
    },
    image: {
      src: "/images/macbook-dashboard.png",
      alt: "Dashboard final renderizado",
    },
  },

  learnings: {
    subtitle: "Lecciones sobre DesignOps y herramientas IA",
    items: [
      {
        title: "Integración de IA en el Workflow (Claude/Cursor)",
        description:
          "Aprendí a utilizar IA generativa (Model Context Protocol, Figma Code Connect) para acelerar drásticamente el paso de diseño a código TypeScript limpio y funcional.",
      },
      {
        title: "Rendimiento es UX",
        description:
          "Comprendí que la mejor interfaz del mundo fracasa si la arquitectura subyacente es lenta. El coste computacional de un componente es una métrica de diseño más.",
      },
      {
        title: "Traduciendo matemáticas a interfaces",
        description:
          "Este proyecto consolidó mi capacidad analítica (forjada en 42 Barcelona) para coger modelos de datos áridos y convertirlos en historias visuales que los usuarios entiendan y valoren.",
      },
    ],
  },
};
