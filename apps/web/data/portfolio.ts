export type Locale = "pt" | "en";

// Configure real profile URLs here. Empty profile values render disabled controls.
export const githubUrl = "https://github.com/Samuel-885";
export const linkedinUrl = "https://www.linkedin.com/in/samuel-campos-385a93170/";
export const cvUrl = "/samuel-campos-cv.pdf";
export const photoUrl = "/foto.webp";
export const email = "samuelcampos885@gmail.com";
export const profile = { githubUrl, linkedinUrl, cvUrl, photoUrl, email };
export const heroStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
];

export interface Project {
  id: string;
  name: Record<Locale, string>;
  kind: Record<Locale, string>;
  description: Record<Locale, string>;
  detail?: Record<Locale, string[]>;
  stack?: string[];
  features?: Record<Locale, string[]>;
  githubUrl?: string;
  liveUrl?: string;
  storeUrl?: string;
  image?: string;
  images?: string[];
  featured?: boolean;
  highlighted?: boolean;
  status?: "development";
  version?: string;
  authors?: string;
}

// Screenshots: add real files in public/projects/ before setting image or images.
// image is the primary screenshot; images also provides the DenTools gallery.
// Development projects always use the technical composition, never screenshots.
export const projects: Project[] = [
  {
    id: "beauty-saas",
    name: { pt: "Beauty SaaS", en: "Beauty SaaS" },
    featured: true,
    status: "development",
    kind: { pt: "Aplicação full stack", en: "Full stack application" },
    description: {
      pt: "SaaS multi-tenant para gestão de salões de beleza, desenvolvido a partir das necessidades de um negócio real.",
      en: "A multi-tenant SaaS for beauty salon management, built around the needs of a real business.",
    },
    stack: ["React", "Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    features: {
      pt: [
        "Agendamentos",
        "Clientes",
        "Profissionais",
        "Serviços",
        "Controle de permissões",
        "Dashboard",
        "Regras de conflito de horários",
        "Estrutura multi-tenant",
      ],
      en: [
        "Appointments",
        "Clients",
        "Professionals",
        "Services",
        "Access control",
        "Dashboard",
        "Scheduling conflict rules",
        "Multi-tenant architecture",
      ],
    },
  },
  {
    id: "dentools",
    name: { pt: "DenTools", en: "DenTools" },
    highlighted: true,
    kind: { pt: "Extensão de produtividade", en: "Productivity extension" },
    description: {
      pt: "Extensão de produtividade para Chrome criada para otimizar tarefas reais de atendimento e cobrança.",
      en: "A Chrome productivity extension built to streamline real-world customer service and billing tasks.",
    },
    detail: {
      pt: [
        "O DenTools nasceu a partir de dificuldades e tarefas repetitivas encontradas no dia a dia de uma equipe de atendimento. O projeto reúne diferentes ferramentas operacionais em uma única extensão para Google Chrome.",
        "O projeto evoluiu com base no uso real da equipe e feedback dos usuários. Durante o desenvolvimento trabalhei com implementação de funcionalidades, UX, responsividade, persistência de dados, privacidade, permissões do navegador, atalhos globais, segurança e publicação na Chrome Web Store.",
      ],
      en: [
        "DenTools grew out of challenges and repetitive tasks in a customer service team's daily work. The project brings together operational tools in a single Google Chrome extension.",
        "The project evolved through real-world use by the team and user feedback. My work included implementing features, UX, responsive design, data persistence, privacy, browser permissions, global shortcuts, security and publishing on the Chrome Web Store.",
      ],
    },
    stack: [
      "JavaScript",
      "HTML",
      "CSS",
      "Chrome Extensions API",
      "Manifest V3",
    ],
    version: "1.9.0",
    authors: "Samuel Campos",
    features: {
      pt: [
        "Supernotepad Financeiro",
        "Buscar vários nomes",
        "Fala para texto",
        "Anotação flutuante",
        "Separar nome e CPF",
        "Validar cartão",
        "Fechamento PIX",
      ],
      en: [
        "Financial Supernotepad",
        "Batch name search",
        "Speech to text",
        "Floating notes",
        "Name and CPF separation",
        "Card validation",
        "PIX reconciliation",
      ],
    },
    storeUrl:
      "https://chromewebstore.google.com/detail/kgkjcmecdjcdbbngdkdabjmefgnhnpda?utm_source=item-share-cb",
    image: "/projects/dentools/dentools-01.png",
    images: [
      "/projects/dentools/dentools-01.png",
      "/projects/dentools/dentools-02.png",
      "/projects/dentools/dentools-03.png",
      "/projects/dentools/dentools-04.png",
      "/projects/dentools/dentools-05.png",
      "/projects/dentools/dentools-06.png",
    ],
  },
  {
    id: "fonoapp",
    name: { pt: "FonoApp", en: "FonoApp" },
    kind: { pt: "Progressive Web App", en: "Progressive Web App" },
    description: {
      pt: "Aplicação web criada para ajudar no acompanhamento diário de exercícios de fonoaudiologia durante um período de recuperação pós-cirúrgica. O app organiza os exercícios por períodos do dia e permite marcar as atividades concluídas, facilitando a criação de uma rotina e o acompanhamento diário.",
      en: "A web app built to help track daily speech therapy exercises during recovery from surgery. It organizes exercises by time of day and lets users mark completed activities, making it easier to build a routine and keep track each day.",
    },
    stack: ["HTML", "CSS", "JavaScript", "PWA"],
    liveUrl: "https://exerciciosfono.netlify.app/",
    image: "/projects/fonoapp/fonoapp.png",
  },
  {
    id: "lista-de-compras",
    name: { pt: "Lista de Compras", en: "Shopping List" },
    kind: { pt: "Aplicação web instalável", en: "Installable web app" },
    description: {
      pt: "Aplicação web instalável no celular criada para acompanhar o valor das compras em tempo real durante idas ao supermercado. Permite adicionar e remover produtos, alterar quantidades e preços e recalcula automaticamente o total da compra, ajudando a evitar surpresas no caixa.",
      en: "A web app that can be installed on a phone to track spending in real time while grocery shopping. Users can add or remove products and update quantities and prices, with the total recalculated automatically to avoid surprises at checkout.",
    },
    features: {
      pt: [
        "Adicionar produtos",
        "Remover produtos",
        "Alterar quantidade",
        "Alterar preço",
        "Cálculo automático do total",
        "Instalável no celular",
      ],
      en: [
        "Add products",
        "Remove products",
        "Update quantities",
        "Update prices",
        "Automatic total calculation",
        "Installable on mobile",
      ],
    },
    liveUrl: "https://supermercadoslista.netlify.app/",
    image: "/projects/lista-compras/lista-compras.png",
  },
  {
    id: "caca-palavras-trafego-pago",
    name: { pt: "Caça-Palavras Tráfego Pago", en: "Paid Media Word Search" },
    kind: { pt: "Jogo de caça-palavras", en: "Word search game" },
    description: {
      pt: "Jogo de caça-palavras criado para uma apresentação mensal da equipe durante minha experiência com tráfego pago. Utiliza termos e palavras-chave do universo de mídia paga e inclui recursos como pontuação e cronômetro.",
      en: "A word search game created for a monthly team presentation during my time working in paid media. It uses advertising terms and keywords and includes scoring and a timer.",
    },
    detail: {
      pt: [
        "Projeto simples criado para tornar uma apresentação interna mais interativa e divertida.",
      ],
      en: [
        "A simple project designed to make an internal presentation more interactive and fun.",
      ],
    },
    liveUrl: "https://cacapalavrastrafegopago.netlify.app/",
    image: "/projects/caca-palavras/caca-palavras-01.png",
    images: [
      "/projects/caca-palavras/caca-palavras-01.png",
      "/projects/caca-palavras/caca-palavras-02.png",
    ],
  },
];

export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      stack: "Tecnologias",
      experience: "Experiência",
      contact: "Contato",
    },
    download: "Baixar CV",
    unavailable: "Disponível em breve",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Selecionar idioma",
    skip: "Pular para o conteúdo",
    available: "Disponível para oportunidades",
    greeting: "Olá, eu sou",
    role: "Desenvolvedor Full Stack Júnior",
    junior: "Desenvolvedor Full Stack Júnior",
    intro:
      "Transformo problemas reais em aplicações web, ferramentas e automações.",
    heroDetail:
      "Estudante de Engenharia de Software, desenvolvendo projetos práticos com React, Next.js, TypeScript, Node.js e PostgreSQL enquanto construo minha carreira em desenvolvimento de software.",
    viewProjects: "Ver projetos",
    location: "Ipatinga – MG, Brasil",
    remote: "Disponível para trabalho remoto",
    photo: "Foto profissional em breve",
    scroll: "Conheça meu trabalho",
    projectLabel: "Projetos",
    projectTitle: "Projetos selecionados",
    projectSubtitle:
      "Projetos desenvolvidos durante minha evolução como desenvolvedor, desde ferramentas de produtividade até aplicações full stack.",
    featured: "Projeto em destaque",
    development: "Em desenvolvimento",
    screenshot: "Screenshot em breve",
    screenshotAlt: "Screenshot do projeto",
    previousScreenshot: "Screenshot anterior",
    nextScreenshot: "Próximo screenshot",
    screenshotGallery: "Screenshots do projeto",
    tools: "ferramentas",
    extension: "em uma única extensão",
    projectScope: "Escopo em desenvolvimento",
    noInterface: "O frontend e a interface ainda não estão implementados.",
    plannedStack: "Stack do projeto",
    viewProject: "Ver projeto",
    version: "Versão atual",
    developedBy: "Desenvolvido por",
    stackLabel: "Stack",
    stackTitle: "Tecnologias que utilizo",
    stackSubtitle:
      "As ferramentas que uso para transformar uma ideia em uma solução.",
    categories: ["Front-end", "Back-end", "Dados", "Ferramentas"],
    aboutLabel: "Sobre",
    aboutTitle: "Sobre mim",
    about: [
      "Sou estudante de Engenharia de Software e estou construindo minha carreira como Desenvolvedor Full Stack Júnior. Tenho aprendido principalmente por meio de projetos práticos, criando aplicações, ferramentas e automações para resolver necessidades reais.",
      "Minha experiência profissional em outras áreas contribuiu para desenvolver habilidades de comunicação, organização, análise de problemas e visão de negócio, que hoje aplico no desenvolvimento de software.",
    ],
    experienceLabel: "Experiência",
    experienceTitle: "Experiência profissional",
    present: "Atual",
    related: "Projeto relacionado: DenTools",
    jobs: [
      {
        role: "Assistente Financeiro",
        description:
          "Atuação em rotinas financeiras e de cobrança, com grande volume de dados e atendimentos. Desenvolvimento de ferramentas e automações para reduzir tarefas manuais e aumentar a produtividade.",
      },
      {
        role: "Gestor de Tráfego Pago II",
        description:
          "Gestão e otimização de campanhas de mídia paga para diferentes clientes, com análise de métricas. Desenvolvimento de dashboards e ferramentas internas para organização de dados e automação de processos.",
      },
    ],
    educationLabel: "Formação",
    educationTitle: "Aprendizado contínuo",
    degree: "Engenharia de Software",
    studying: "2026 – Cursando",
    courses: "Cursos complementares",
    contactLabel: "Contato",
    contactTitle: "Vamos conversar?",
    contactText:
      "Busco minha primeira oportunidade profissional como Desenvolvedor de Software Júnior. Estou aberto a conversar sobre projetos, tecnologia e novas oportunidades.",
    sendEmail: "Enviar email",
    footer: "Desenvolvido com Next.js, React e TypeScript por Samuel Campos.",
    top: "Voltar ao topo",
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      stack: "Technologies",
      experience: "Experience",
      contact: "Contact",
    },
    download: "Download CV",
    unavailable: "Coming soon",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Select language",
    skip: "Skip to content",
    available: "Available for opportunities",
    greeting: "Hi, I'm",
    role: "Junior Full Stack Developer",
    junior: "Junior Full Stack Developer",
    intro:
      "I turn real-world problems into web applications, tools and automations.",
    heroDetail:
      "Software Engineering student building practical projects with React, Next.js, TypeScript, Node.js and PostgreSQL as I work toward a career in software development.",
    viewProjects: "View projects",
    location: "Ipatinga – MG, Brazil",
    remote: "Available for remote work",
    photo: "Professional photo coming soon",
    scroll: "Explore my work",
    projectLabel: "Projects",
    projectTitle: "Selected projects",
    projectSubtitle:
      "Projects built throughout my journey as a developer, from productivity tools to full stack applications.",
    featured: "Featured project",
    development: "In development",
    screenshot: "Screenshot coming soon",
    screenshotAlt: "Project screenshot",
    previousScreenshot: "Previous screenshot",
    nextScreenshot: "Next screenshot",
    screenshotGallery: "Project screenshots",
    tools: "tools",
    extension: "in a single extension",
    projectScope: "Scope in development",
    noInterface: "The frontend and interface have not been implemented yet.",
    plannedStack: "Project stack",
    viewProject: "View project",
    version: "Current version",
    developedBy: "Developed by",
    stackLabel: "Stack",
    stackTitle: "Technologies I work with",
    stackSubtitle: "The tools I use to turn an idea into a solution.",
    categories: ["Front-end", "Back-end", "Data", "Tools"],
    aboutLabel: "About",
    aboutTitle: "About me",
    about: [
      "I'm a Software Engineering student building my career as a Junior Full Stack Developer. I learn mainly through hands-on projects, creating applications, tools and automations to address real-world needs.",
      "My professional experience in other fields has helped me develop communication, organizational, problem-solving and business skills that I now apply to software development.",
    ],
    experienceLabel: "Experience",
    experienceTitle: "Professional experience",
    present: "Present",
    related: "Related project: DenTools",
    jobs: [
      {
        role: "Finance Assistant",
        description:
          "Working with financial and billing processes, handling large volumes of data and customer interactions. Developing tools and automations to reduce manual tasks and improve productivity.",
      },
      {
        role: "Paid Media Manager II",
        description:
          "Managing and optimizing paid media campaigns for multiple clients, with metrics analysis. Developing dashboards and internal tools for data organization and process automation.",
      },
    ],
    educationLabel: "Education",
    educationTitle: "Always learning",
    degree: "Software Engineering",
    studying: "2026 – In progress",
    courses: "Additional courses",
    contactLabel: "Contact",
    contactTitle: "Let's talk?",
    contactText:
      "I'm seeking my first professional opportunity in software development as a Junior Software Developer. I'm open to conversations about projects, technology and new opportunities.",
    sendEmail: "Send an email",
    footer: "Built with Next.js, React and TypeScript by Samuel Campos.",
    top: "Back to top",
  },
};
export type Copy = (typeof translations)[Locale];
