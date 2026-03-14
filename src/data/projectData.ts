import { CaseStudyProps } from "@/lib/types";

export const projectData: CaseStudyProps = {
  client: "Valerdat",
  title: "IA aplicada a la optimización de la cadena de suministro",
  shortDescription:
    "Rediseño y conceptualización de una plataforma SaaS B2B que utiliza modelos predictivos de Inteligencia Artificial para transformar la gestión de compras y suministros en el sector industrial.",
  tags: ["B2B SaaS", "Data Visualization", "Supply Chain AI", "UX/UI Design"],

  heroImage: {
    src: "/images/macbook-dashboard.png",
    alt: "Dashboard principal de la plataforma Valerdat con analítica predictiva",
  },

  metadata: {
    role: "UX/UI Designer",
    timeline: "Ene 2023 – Jun 2023",
    platform: "Web Desktop (SaaS)",
    team: "CTO, Data Scientists, Frontend Developers, Product Manager",
    users:
      "Gestores de compras, directores de logística y responsables de operaciones en empresas industriales.",
    constraints:
      "Visualización de grandes volúmenes de datos complejos, integración de modelos de IA opacos (black box) y adaptabilidad a flujos de trabajo de ERPs tradicionales.",
  },
  introduction:
    "Valerdat es una startup que ayuda a las empresas industriales a tomar decisiones de compra más inteligentes mediante el análisis de datos. Mi reto como UX/UI Designer fue transformar algoritmos complejos de previsión de demanda y rotura de stock en una interfaz intuitiva y accionable que permitiera a los usuarios reducir costes y optimizar su inventario de forma proactiva.",

  outcomes: {
    business: {
      title: "Eficiencia en la toma de decisiones",
      description:
        "Transformación de datos brutos en recomendaciones automáticas de compra, reduciendo el riesgo de sobrestock y falta de suministro.",
    },
    users: {
      title: "Simplificación de flujos complejos",
      description:
        "Sustitución de hojas de cálculo masivas por dashboards visuales que priorizan las tareas críticas del día a día.",
    },
    team: {
      title: "Consistencia de diseño",
      description:
        "Creación de una biblioteca de componentes base que agilizó el desarrollo frontend y unificó la experiencia visual del producto.",
    },
  },

  problem: {
    subtitle: "De la incertidumbre del dato a la acción inteligente",
    context: [
      "En el sector industrial, la gestión de suministros suele depender de procesos manuales y datos fragmentados en ERPs antiguos. Los gestores de compras carecían de una herramienta que les permitiera anticiparse a las fluctuaciones del mercado o errores en la cadena logística.",
    ],
    challenge:
      'El mayor desafío fue la "explicabilidad" de la IA: ¿cómo presentar una recomendación de compra generada por un algoritmo para que el usuario confíe en ella y la ejecute?',
    successCriteria: [
      "Reducción de la carga cognitiva en la supervisión de miles de referencias de productos.",
      "Mejora en la legibilidad de gráficas predictivas y comparativas de proveedores.",
      "Validación de los nuevos flujos de aprobación de pedidos dentro de la plataforma.",
    ],
    image: {
      src: "/images/workflow-group.png",
      alt: "Comparativa entre gestión tradicional en Excel vs Dashboard de Valerdat",
      caption:
        "El reto: Humanizar datos complejos para convertirlos en decisiones de negocio",
    },
  },

  research: {
    subtitle: "Entendiendo el ecosistema de compras industriales",
    steps: [
      {
        id: "01",
        title: "Entrevistas con stakeholders y usuarios",
        items: [
          'Identificación de los "pain points" en la gestión de stocks y la comunicación con proveedores.',
          "Comprensión de las métricas críticas (KPIs) para un responsable de compras.",
        ],
      },
      {
        id: "02",
        title: "Auditoría de visualización de datos",
        items: [
          "Análisis de cómo se presentan actualmente las previsiones de demanda para evitar errores de interpretación.",
        ],
      },
      {
        id: "03",
        title: "User Personas y User Journeys",
        items: [
          "Definición del perfil del gestor operativo frente al perfil directivo que busca visión global.",
        ],
      },
    ],
    image: {
      src: "/images/stakeholders.png",
      alt: "Mapa de empatía de un gestor de compras",
      caption:
        "Investigación centrada en la precisión y la confianza del usuario en el dato",
    },
  },

  definition: {
    subtitle: "Arquitectura de información para la escalabilidad",
    context: [
      "Se definió una estructura modular que permitiera a la plataforma crecer en funcionalidades (módulos de proveedores, logística, sostenibilidad) sin comprometer la usabilidad.",
    ],
    scope: [
      "Dashboard predictivo: Vista general con alertas de rotura de stock y oportunidades de ahorro.",
      "Gestión de escenarios: Herramienta para simular el impacto de decisiones de compra antes de ejecutarlas.",
      "Diseño basado en datos: Implementación de tablas dinámicas y filtros avanzados para la gestión de catálogos extensos.",
    ],
    image: {
      src: "/images/ai-ux-research.png",
      alt: "Wireframes de baja fidelidad de la plataforma SaaS",
      caption: "Estructuración de dashboards con alta densidad de información",
    },
  },

  iterativeProcess: {
    subtitle: "Refinando la interacción hombre-máquina",
    highFidelity: [
      "Uso de una paleta de colores profesional y sobria que enfatiza los estados de alerta (stock bajo) y éxito (ahorro conseguido).",
      "Creación de componentes de visualización de datos (gráficas de tendencias, diagramas de flujo) adaptados a la densidad de datos industrial.",
    ],
    image: {
      src: "/images/wireframe-hight.png",
      alt: "Pantallas de alta fidelidad del SaaS de Valerdat",
      caption:
        "Iteración visual centrada en la claridad y la eficiencia operativa",
    },
    testing: [
      "Sesiones de feedback con el equipo técnico para asegurar la viabilidad de las visualizaciones propuestas.",
      "Validación de la jerarquía visual para asegurar que las alertas críticas no pasen desapercibidas.",
    ],
  },

  delivery: {
    subtitle: "Un producto listo para la industria 4.0",
    delivered: [
      "Prototipo interactivo de alta fidelidad para presentaciones a inversores y clientes.",
      "Design System inicial documentado en Figma (colores, tipografía, componentes de tablas y formularios).",
      "Flujos de usuario validados para los módulos principales de la plataforma.",
    ],
    improvements: [
      "Confianza: Los usuarios entienden el porqué de las recomendaciones de la IA.",
      "Productividad: Reducción drástica del tiempo de revisión manual de pedidos.",
      "Escalabilidad: Una base visual sólida para la expansión del producto.",
    ],
    image: {
      src: "/images/delivery-components.png",
      alt: "Vista general del ecosistema de diseño de Valerdat",
    },
  },

  detailedOutcomes: {
    subtitle: "Impacto real en la cadena de valor",
    business: {
      title: "Posicionamiento estratégico",
      description:
        "La nueva interfaz permitió a Valerdat diferenciarse de competidores con software obsoleto, facilitando el cierre de nuevos acuerdos comerciales.",
    },
    user: {
      title: "Control total",
      description:
        'El usuario pasa de ser un "introductor de datos" a un "supervisor de estrategia", apoyado por la inteligencia del sistema.',
    },
    team: {
      title: "Alineación Producto-Diseño",
      description:
        "La documentación detallada permitió una comunicación fluida entre el diseño y los científicos de datos encargados de los modelos.",
    },
    image: {
      src: "/images/macbook-dashboard.png",
      alt: "Mockup de la plataforma en un entorno de oficina industrial",
    },
  },

  learnings: {
    subtitle: "Lecciones sobre el diseño de productos de IA",
    items: [
      {
        title: "La IA necesita transparencia",
        description:
          "Aprendí que un diseño limpio no sirve de nada si el usuario no entiende la lógica detrás de una recomendación automatizada.",
      },
      {
        title: "Densidad vs. Claridad",
        description:
          "En herramientas B2B, ocultar información no siempre es la solución; el reto es organizar la densidad para que sea escaneable.",
      },
      {
        title: "El valor de la prototipación rápida",
        description:
          "Validar conceptos complejos con wireframes simples antes de pasar a diseño visual ahorra semanas de re-trabajo en el desarrollo de algoritmos.",
      },
    ],
  },
};
