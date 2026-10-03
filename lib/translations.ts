export type Language = "pt" | "en" | "es";

export interface TranslationSchema {
  navbar: {
    services: string;
    projects: string;
    howWeWork: string;
    resources: string;
    contact: string;
    quoteBtn: string;
    switchLang: string;
  };
  hero: {
    tagline: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    startNow: string;
    portfolio: string;
    metric1Val: string;
    metric1Label: string;
    metric2Val: string;
    metric2Label: string;
    metric3Val: string;
    metric3Label: string;
  };
  techStack: {
    label: string;
  };
  customSolutions: {
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    talkToExpert: string;
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
  };
  services: {
    title: string;
    description: string;
    cards: {
      web: { title: string; tags: string[] };
      frontend: { title: string; tags: string[] };
      backend: { title: string; tags: string[] };
      ecommerce: { title: string; tags: string[] };
      mobile: { title: string; tags: string[] };
      design: { title: string; tags: string[] };
    };
  };
  reliableApps: {
    title: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    photoBadgeTitle: string;
    photoBadgeDesc: string;
  };
  projects: {
    title: string;
    subtitle: string;
    regionLabel: string;
    platformsLabel: string;
    viewPortfolio: string;
    items: {
      instrutor: {
        title: string;
        category: string;
        description: string;
        longDescription: string;
        region: string;
        platforms: string[];
        highlights: string[];
      };
      safeDriver: {
        title: string;
        category: string;
        description: string;
        longDescription: string;
        region: string;
        platforms: string[];
        highlights: string[];
      };
      manHub: {
        title: string;
        category: string;
        description: string;
        longDescription: string;
        region: string;
        platforms: string[];
        highlights: string[];
      };
      pcxd: {
        title: string;
        category: string;
        description: string;
        longDescription: string;
        region: string;
        platforms: string[];
        highlights: string[];
      };
      drGil: {
        title: string;
        category: string;
        description: string;
        longDescription: string;
        region: string;
        platforms: string[];
        highlights: string[];
      };
      figgo: {
        title: string;
        category: string;
        description: string;
        longDescription: string;
        region: string;
        platforms: string[];
        highlights: string[];
      };
    };
    modal: {
      about: string;
      technicalHighlights: string;
      regionServed: string;
      close: string;
      requestQuote: string;
      similarQuestion: string;
    };
  };
  processFlow: {
    title: string;
    description: string;
    stageLabel: string;
    hubBadge: string;
    hubBrand: string;
    steps: {
      step1Title: string;
      step1Subtitle: string;
      step1Desc: string;
      step2Title: string;
      step2Subtitle: string;
      step2Desc: string;
      step3Title: string;
      step3Subtitle: string;
      step3Desc: string;
      step4Title: string;
      step4Subtitle: string;
      step4Desc: string;
      step5Title: string;
      step5Subtitle: string;
      step5Desc: string;
    };
  };
  consultationCTA: {
    title: string;
    description: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    btn: string;
    cardBadgeTitle: string;
    cardBadgeDesc: string;
  };
  footer: {
    companyName: string;
    cnpj: string;
    location: string;
    rightsReserved: string;
  };
  contactModal: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    projectTypeLabel: string;
    options: {
      mobile: string;
      web: string;
      ecommerce: string;
      design: string;
      backend: string;
      consulting: string;
    };
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    whatsappDirect: string;
    successTitle: string;
    successDesc: string;
    whatsappTalkNow: string;
    closeBtn: string;
    whatsappInitialMessage: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    navbar: {
      services: "SERVIÇOS",
      projects: "PROJETOS",
      howWeWork: "COMO TRABALHAMOS",
      resources: "RECURSOS",
      contact: "CONTATO",
      quoteBtn: "Orçamento",
      switchLang: "Mudar",
    },
    hero: {
      tagline: "Inovação Digital em Manaus para o Mundo",
      titleStart: "Criamos",
      titleHighlight: "tecnologias",
      titleEnd: "que tornam sua visão realidade",
      description:
        "Na Interestelar Studios, transformamos suas ideias em aplicativos inovadores. Localizados em Manaus (Brasil), somos especialistas no desenvolvimento de sistemas multiplataforma, oferecemos soluções digitais personalizadas que atendem às necessidades do seu negócio.",
      startNow: "Comece Agora",
      portfolio: "Nosso Portfólio",
      metric1Val: "100%",
      metric1Label: "Projetos Sob Medida",
      metric2Val: "Ágil",
      metric2Label: "Sprints e Entregas Contínuas",
      metric3Val: "Multi",
      metric3Label: "iOS, Android e Web",
    },
    techStack: {
      label: "Nossas Principais Tecnologias",
    },
    customSolutions: {
      titleStart: "Sistemas",
      titleHighlight: "personalizados",
      titleEnd: "para seu negócio",
      description:
        "Desenvolvemos produtos digitais de alta performance, desenhados especificamente para resolver gargalos operacionais e acelerar a escala da sua empresa.",
      talkToExpert: "Fale com um especialista",
      item1Title: "Aplicativos Híbridos",
      item1Desc:
        "Aplicativos que utilizam a web moderna, e por uma boa razão: são fáceis de lançar, confiáveis e seguros.",
      item2Title: "Aplicativos Web Progressivos",
      item2Desc:
        "Aproveitam aplicativos web multiplataforma que funcionam como aplicativos nativos, mas não demoram uma eternidade para serem lançados.",
      item3Title: "Desenvolvimento Mobile Personalizado",
      item3Desc:
        "Quando você precisa de uma solução sob medida, reunimos uma vasta gama de bibliotecas e tecnologias para entregar aplicativos personalizados sem estourar o orçamento.",
    },
    services: {
      title: "Nossos serviços de desenvolvimento de software personalizado",
      description:
        "A Interestelar Studios é o lar de especialistas em design e desenvolvimento que oferecem serviços completos. Abrangemos uma ampla gama de serviços de ponta a ponta para ajudar você a construir, expandir e escalar seu negócio online.",
      cards: {
        web: { title: "Desenvolvimento\nWeb", tags: ["Front-end", "Backend"] },
        frontend: { title: "Desenvolvimento\nFrontend", tags: ["React", "Next.js", "Vue.js", "Angular"] },
        backend: { title: "Desenvolvimento\nBackend", tags: ["PHP", "Python", "Node", "GoLang", "Laravel", "Google Cloud"] },
        ecommerce: { title: "Desenvolvimento\nE-commerce", tags: ["Shopify", "WooCommerce"] },
        mobile: { title: "Desenvolvimento\nMóvel", tags: ["Flutter", "React Native", "Kotlin", "Swift"] },
        design: { title: "Design de\nProduto", tags: ["UX", "UI", "Figma"] },
      },
    },
    reliableApps: {
      title: "Desenvolvimento de Aplicações Confiáveis",
      feature1Title: "Desbloqueie a mobilidade",
      feature1Desc:
        "Evolua o seu negócio, seja por meio do engajamento omnichannel com o cliente ou da migração de suas aplicações corporativas para um modelo de acesso com foco no trabalho remoto.",
      feature2Title: "Design UX/UI confiável",
      feature2Desc:
        "Experiências belas e centradas no usuário são fundamentais no desenvolvimento de aplicativos móveis da Interestelar.",
      feature3Title: "Vá além do tradicional",
      feature3Desc:
        "Lançamento de automação, inteligência artificial, sistema de pagamento, personalização e muitos outros recursos de transformação digital.",
      feature4Title: "Serviços de backend",
      feature4Desc:
        "Escolhemos a melhor infraestrutura para a sua plataforma, oferecendo controle total sobre a entrega de conteúdo, APIs e muito mais.",
      photoBadgeTitle: "Engenharia de Alta Precisão",
      photoBadgeDesc: "Manaus • Brasil & Clientes Globais",
    },
    projects: {
      title: "Nossos projetos",
      subtitle: "Soluções completas desenhadas e construídas com maestria pela Interestelar Studios.",
      regionLabel: "Região",
      platformsLabel: "Plataformas",
      viewPortfolio: "Ver portfólio completo",
      items: {
        instrutor: {
          title: "Instrutor em Casa",
          category: "EdTech & Mobilidade",
          description: "Aplicativo que visa conectar profissionais instrutores de direção à alunos.",
          longDescription:
            "O Instrutor em Casa é uma plataforma sob medida para a preparação de condutores. Conecta instrutores independentes a alunos que buscam treinamento prático, agendamento de aulas com geolocalização em tempo real, pagamentos integrados e avaliações de desempenho pedagógico.",
          region: "Brasil",
          platforms: ["Android", "iOS", "Web"],
          highlights: [
            "Geolocalização em tempo real para encontrar instrutores próximos",
            "Agenda dinâmica com confirmação instantânea de aulas",
            "Chat interno criptografado de ponta a ponta",
            "Processamento de pagamentos seguro via PIX e Cartão",
          ],
        },
        safeDriver: {
          title: "Safe Driver",
          category: "Segurança & Transporte",
          description:
            "Aplicativo que conecta profissionais de mobilidade urbana com grupos de apoio, oferecendo recursos de segurança nativo.",
          longDescription:
            "Desenvolvido especificamente para motoristas de aplicativos e frotistas, o Safe Driver integra recursos avançados de hardware móvel (Kotlin nativo), botão de pânico silencioso, rastreamento de rotas com cercamento eletrônico (geofencing) e transmissão de alerta comunitário de emergência.",
          region: "Brasil",
          platforms: ["Android"],
          highlights: [
            "Integração de hardware e sensores de impacto em background (Kotlin)",
            "Rede de apoio comunitária com canais de áudio e localização",
            "Acionamento por botões físicos e atalhos de emergência",
            "Painel de despacho de segurança para centrais parceiras",
          ],
        },
        manHub: {
          title: "Man HUB",
          category: "Lifestyle & Coaching",
          description: "Aplicativo de treinamento de imagem masculina.",
          longDescription:
            "Man HUB é um ecossistema digital focado em consultoria de estilo pessoal, saúde e desenvolvimento para o público masculino moderno. Conta com módulos de diagnóstico visual com inteligência artificial, cronogramas de hábitos e consultoria direta com especialistas renomados.",
          region: "Global",
          platforms: ["Android", "iOS", "Web"],
          highlights: [
            "Diagnóstico automatizado de biotipo e paleta de cores",
            "Trilhas de conteúdo em vídeo e guias interativos em alta definição",
            "Painel multi-idioma com audiência no Brasil e exterior",
            "Comunidade exclusiva com engajamento diário e desafios",
          ],
        },
        pcxd: {
          title: "PCXD",
          category: "Hardware & E-commerce",
          description:
            "Aplicativo que auxilia os usuários a montarem um computador e comprar peças de forma intuitiva e detalhada.",
          longDescription:
            "O PCXD é um aplicativo completo que guia entusiastas e profissionais na montagem de computadores personalizados. Conta com assistente inteligente de verificação de compatibilidade de componentes de hardware, comparador de preços em tempo real e links diretos para aquisição de peças.",
          region: "Brasil",
          platforms: ["Android", "iOS", "Web"],
          highlights: [
            "Verificação inteligente de compatibilidade entre placa-mãe, processador e memórias",
            "Comparador de preços e histórico de ofertas das principais lojas de informática",
            "Visualização e catálogo detalhado de componentes com fotos em alta resolução",
            "Sincronização em nuvem e comunidade de builds personalizadas",
          ],
        },
        drGil: {
          title: "Dr. Gil Calvo",
          category: "Telemedicina & Saúde",
          description:
            "Website institucional para divulgação de serviços de telemedicina do Dr. Gil Calvo.",
          longDescription:
            "Desenvolvido com tecnologia de ponta em Next.js, o portal institucional do Dr. Gil Calvo apresenta seus mais de 30 anos de experiência médica na Espanha, destacando serviços de consulta médica online, telemedicina de urgência e atendimento em medicina de família com alta velocidade e responsividade.",
          region: "Espanha",
          platforms: ["Web"],
          highlights: [
            "Portal médico ultrarrápido com renderização estática e otimização SEO no Next.js",
            "Divulgação clara de serviços médicos, experiência clínica e telemedicina",
            "Integração direta para reserva de consultas e atendimento a pacientes",
            "Design acessível, limpo e profissional focado em credibilidade e conversão",
          ],
        },
        figgo: {
          title: "Figgo",
          category: "E-commerce & Landing Page",
          description:
            "Landing Page da loja Figgo que trabalha com a venda de Velas Aromáticas em Manaus.",
          longDescription:
            "Desenvolvida com tecnologia de alta performance em Next.js, a Landing Page da Figgo apresenta a linha exclusiva de velas aromáticas artesanais produzidas em Manaus. O site combina sofisticação visual, navegação intuitiva, catálogo detalhado de aromas e canal direto para pedidos e atendimento personalizado via WhatsApp.",
          region: "Brasil",
          platforms: ["Web"],
          highlights: [
            "Landing page moderna e ultrarrápida desenvolvida em Next.js",
            "Apresentação visual elegante com identidade olfativa e coleções de velas",
            "Integração direta de contato para conversão e pedidos via WhatsApp",
            "Design responsivo otimizado para dispositivos móveis e conversão",
          ],
        },
      },
      modal: {
        about: "Sobre o Projeto",
        technicalHighlights: "Recursos e Destaques Técnicos",
        regionServed: "Região Atendida",
        close: "Fechar",
        requestQuote: "Solicitar Orçamento",
        similarQuestion: "Deseja construir uma solução semelhante?",
      },
    },
    processFlow: {
      title: "Nosso processo de desenvolvimento de produtos",
      description:
        "Gerenciamos seus projetos com métodos ágeis comprovados, projetados para alinhar todas as partes interessadas (mesmo as não técnicas). Nosso fluxo de trabalho amplifica a colaboração e acelera os prazos de entrega, permitindo alcançar até mesmo os objetivos mais ambiciosos.",
      stageLabel: "Etapa",
      hubBadge: "Ciclo Ágil",
      hubBrand: "Interestelar",
      steps: {
        step1Title: "Descoberta",
        step1Subtitle: "Alinhamento Estratégico",
        step1Desc:
          "Mapeamento detalhado dos objetivos de negócio, requisitos do usuário e definição do MVP ideal com estimativas precisas de custo e cronograma.",
        step2Title: "UX / UI",
        step2Subtitle: "Design & Prototipação",
        step2Desc:
          "Criação de fluxos de experiência do usuário (UX) e interfaces visuais modernas (UI) no Figma, com protótipos navegáveis e testes de usabilidade.",
        step3Title: "Desenvolvimento",
        step3Subtitle: "Engenharia de Software",
        step3Desc:
          "Construção com arquitetura escalável, código limpo, testes unitários e sprints quinzenais com demonstrações contínuas de evolução do software.",
        step4Title: "Testes",
        step4Subtitle: "Garantia de Qualidade (QA)",
        step4Desc:
          "Testes rigorosos funcionais, de estresse, segurança de dados e compatibilidade em dezenas de dispositivos reais para garantir zero falhas.",
        step5Title: "Entrega e Suporte",
        step5Subtitle: "Lançamento & Evolução",
        step5Desc:
          "Deploy automatizado nas lojas App Store e Google Play, configuração de infraestrutura em nuvem e suporte técnico dedicado pós-lançamento.",
      },
    },
    consultationCTA: {
      title: "Não sabe por onde começar seu projeto de desenvolvimento de produto?",
      description:
        "Sem problemas! Ajudaremos você passo a passo com as escolhas de design, tecnologia e equipe. Ao final, você terá um plano de produto e estimativas de recursos para planejar com maior precisão.",
      bullet1: "Análise de viabilidade técnica sem compromisso",
      bullet2: "Estimativa de custos, cronograma e stack recomendada",
      bullet3: "Atendimento direto com engenheiros seniores",
      btn: "CONSULTA GRATUITA",
      cardBadgeTitle: "Planejamento & Estratégia Ágil",
      cardBadgeDesc: "Transformamos escopos complexos em entregas previsíveis.",
    },
    footer: {
      companyName: "Interestelar Studios Inova Simples (I.S.)",
      cnpj: "CNPJ: 55.180.644/0001-09",
      location: "Manaus, Amazonas, Brasil • Atendimento Global",
      rightsReserved: "Todos os direitos reservados.",
    },
    contactModal: {
      badge: "Consulta Gratuita",
      title: "Vamos construir algo incrível",
      subtitle: "Conte sobre sua ideia. Retornamos com um plano em menos de 24 horas.",
      nameLabel: "Seu Nome *",
      namePlaceholder: "Ex: Carlos Silva",
      emailLabel: "E-mail Corporativo *",
      emailPlaceholder: "carlos@empresa.com",
      phoneLabel: "WhatsApp / Telefone *",
      phonePlaceholder: "(92) 99999-9999",
      projectTypeLabel: "Tipo de Projeto",
      options: {
        mobile: "Aplicativo Móvel (iOS / Android / Flutter)",
        web: "Sistema Web / SaaS / Plataforma",
        ecommerce: "E-commerce / Loja Virtual",
        design: "Design de Produto (UI/UX no Figma)",
        backend: "Backend & Arquitetura em Nuvem",
        consulting: "Diagnóstico & Consultoria de Software",
      },
      messageLabel: "Conte um pouco sobre o projeto",
      messagePlaceholder: "Objetivos principais, prazos ou referências...",
      submitBtn: "Enviar Solicitação",
      whatsappDirect: "WhatsApp Direto",
      successTitle: "Mensagem Recebida!",
      successDesc: "Nossa equipe de engenharia e produto analisará seus requisitos e entrará em contato em breve.",
      whatsappTalkNow: "Falar agora no WhatsApp",
      closeBtn: "Fechar",
      whatsappInitialMessage: "Olá! Gostaria de solicitar um orçamento para um projeto com a Interestelar Studios.",
    },
  },
  en: {
    navbar: {
      services: "SERVICES",
      projects: "PROJECTS",
      howWeWork: "HOW WE WORK",
      resources: "RESOURCES",
      contact: "CONTACT",
      quoteBtn: "Get a Quote",
      switchLang: "Change",
    },
    hero: {
      tagline: "Digital Innovation from Manaus to the World",
      titleStart: "We create",
      titleHighlight: "technologies",
      titleEnd: "that turn your vision into reality",
      description:
        "At Interestelar Studios, we turn your bold ideas into innovative applications. Based in Manaus (Brazil), we specialize in cross-platform software systems, delivering custom digital solutions that meet your business needs.",
      startNow: "Get Started Now",
      portfolio: "Our Portfolio",
      metric1Val: "100%",
      metric1Label: "Tailored Projects",
      metric2Val: "Agile",
      metric2Label: "Sprints & Continuous Delivery",
      metric3Val: "Cross",
      metric3Label: "iOS, Android & Web",
    },
    techStack: {
      label: "Our Core Technologies",
    },
    customSolutions: {
      titleStart: "Customized",
      titleHighlight: "systems",
      titleEnd: "for your business",
      description:
        "We build high-performance digital products engineered specifically to resolve operational bottlenecks and accelerate business growth.",
      talkToExpert: "Talk to an expert",
      item1Title: "Hybrid Applications",
      item1Desc:
        "Applications that leverage modern web capabilities, and for good reason: fast to launch, rock-solid, and secure.",
      item2Title: "Progressive Web Apps",
      item2Desc:
        "Harness cross-platform web apps that deliver native-like experiences without waiting forever to release.",
      item3Title: "Custom Mobile Development",
      item3Desc:
        "When you need a tailored solution, we bring together cutting-edge frameworks and libraries to deliver custom apps on budget.",
    },
    services: {
      title: "Our custom software development services",
      description:
        "Interestelar Studios is home to expert designers and software engineers offering end-to-end services. We cover everything needed to help you build, grow, and scale your online business.",
      cards: {
        web: { title: "Web\nDevelopment", tags: ["Front-end", "Backend"] },
        frontend: { title: "Frontend\nDevelopment", tags: ["React", "Next.js", "Vue.js", "Angular"] },
        backend: { title: "Backend\nDevelopment", tags: ["PHP", "Python", "Node", "GoLang", "Laravel", "Google Cloud"] },
        ecommerce: { title: "E-commerce\nDevelopment", tags: ["Shopify", "WooCommerce"] },
        mobile: { title: "Mobile\nDevelopment", tags: ["Flutter", "React Native", "Kotlin", "Swift"] },
        design: { title: "Product\nDesign", tags: ["UX", "UI", "Figma"] },
      },
    },
    reliableApps: {
      title: "Engineering Reliable Applications",
      feature1Title: "Unlock mobility",
      feature1Desc:
        "Evolve your business through omnichannel client engagement or enterprise migrations enabling secure remote access anywhere.",
      feature2Title: "Dependable UX/UI Design",
      feature2Desc:
        "Beautiful, user-centric experiences are the cornerstone of mobile applications built at Interestelar.",
      feature3Title: "Go beyond traditional",
      feature3Desc:
        "Integration of workflow automation, artificial intelligence, payments, and modern digital transformation capabilities.",
      feature4Title: "Backend services",
      feature4Desc:
        "We select resilient cloud infrastructure for your platform, giving you complete control over APIs, data delivery, and security.",
      photoBadgeTitle: "High-Precision Engineering",
      photoBadgeDesc: "Manaus • Brazil & Global Clients",
    },
    projects: {
      title: "Our projects",
      subtitle: "Full-scale software solutions masterfully designed and built by Interestelar Studios.",
      regionLabel: "Region",
      platformsLabel: "Platforms",
      viewPortfolio: "View full portfolio",
      items: {
        instrutor: {
          title: "Instrutor em Casa",
          category: "EdTech & Mobility",
          description: "An innovative application connecting certified driving instructors with students.",
          longDescription:
            "Instrutor em Casa is a tailored platform for driver education. It pairs independent instructors with prospective drivers seeking practice sessions, featuring real-time geolocation matching, streamlined scheduling, secure digital payments, and student progress tracking.",
          region: "Brazil",
          platforms: ["Android", "iOS", "Web"],
          highlights: [
            "Real-time GPS proximity matching for nearby instructors",
            "Dynamic class calendar with instant booking confirmations",
            "End-to-end encrypted in-app messaging",
            "Seamless payment processing via instant bank transfer and credit cards",
          ],
        },
        safeDriver: {
          title: "Safe Driver",
          category: "Safety & Transport",
          description:
            "An application connecting urban mobility drivers with safety peer networks and native hardware protection.",
          longDescription:
            "Tailored for ride-hailing drivers and fleet operators, Safe Driver leverages deep mobile hardware access (native Kotlin), emergency silent panic buttons, geofenced route monitoring, and community-wide distress broadcasts.",
          region: "Brazil",
          platforms: ["Android"],
          highlights: [
            "Background sensor and impact telemetry processing (Native Kotlin)",
            "Community mutual assistance network with audio channels",
            "Hardware button emergency triggers and quick shortcuts",
            "Central monitoring console for partner security centers",
          ],
        },
        manHub: {
          title: "Man HUB",
          category: "Lifestyle & Coaching",
          description: "A tailored image consulting and lifestyle training application for men.",
          longDescription:
            "Man HUB is a digital ecosystem dedicated to personal style, wellness, and self-improvement for modern men. It includes visual AI diagnostics, personalized habit building, and direct coaching with leading style consultants.",
          region: "Global",
          platforms: ["Android", "iOS", "Web"],
          highlights: [
            "Automated facial and color palette AI diagnostic tool",
            "High-definition video tracks and interactive masterclasses",
            "Multi-language platform supporting Brazilian and international users",
            "Exclusive community with daily habit tracking and challenges",
          ],
        },
        pcxd: {
          title: "PCXD",
          category: "Hardware & E-commerce",
          description:
            "An application that guides users to build custom PCs and purchase computer parts intuitively with detailed specs.",
          longDescription:
            "PCXD is an all-in-one mobile and web companion designed to assist both beginners and tech enthusiasts in custom PC assembly. Features an automated hardware compatibility validator, real-time price monitoring, and direct parts purchasing guides.",
          region: "Brazil",
          platforms: ["Android", "iOS", "Web"],
          highlights: [
            "Smart hardware compatibility engine across CPU, motherboard, RAM, and GPU",
            "Real-time price tracking and deals comparator from top tech retailers",
            "Detailed specs visual catalog with high-resolution component breakdowns",
            "Cloud-synced custom builds and community rig showcases",
          ],
        },
        drGil: {
          title: "Dr. Gil Calvo",
          category: "Telemedicine & Health",
          description:
            "Institutional medical website promoting telemedicine and healthcare consultation services by Dr. Gil Calvo.",
          longDescription:
            "Engineered using modern Next.js architecture, the institutional portal for Dr. Gil Calvo showcases over 30 years of medical experience in Spain. It features seamless remote medical consultation booking, family medicine specialties, and high-performance digital presence.",
          region: "Spain",
          platforms: ["Web"],
          highlights: [
            "Ultra-fast medical portal with server rendering and localized SEO in Next.js",
            "Comprehensive presentation of healthcare services and teleconsultation options",
            "Direct patient booking flow with Doctoralia and online appointment access",
            "Accessible, clean, and reassuring design optimized for patient trust",
          ],
        },
        figgo: {
          title: "Figgo",
          category: "E-commerce & Landing Page",
          description:
            "Landing page for Figgo, an artisanal scented candle brand based in Manaus.",
          longDescription:
            "Engineered with Next.js, Figgo's landing page highlights an artisanal scented candle collection handcrafted in Manaus. Blending clean aesthetics with direct conversion funnels, it showcases olfactory notes, product care, and instant purchase connections via WhatsApp.",
          region: "Brazil",
          platforms: ["Web"],
          highlights: [
            "Modern, ultra-fast landing page developed with Next.js",
            "Cozy and sophisticated visual showcase of scented candles and aromas",
            "Direct WhatsApp order integration for instant customer conversion",
            "Mobile-first responsive layout tailored for boutique retail",
          ],
        },
      },
      modal: {
        about: "About the Project",
        technicalHighlights: "Key Technical Highlights",
        regionServed: "Target Region",
        close: "Close",
        requestQuote: "Request a Proposal",
        similarQuestion: "Looking to build a similar platform?",
      },
    },
    processFlow: {
      title: "Our product development process",
      description:
        "We manage projects using proven agile frameworks designed to keep all stakeholders aligned (including non-technical founders). Our process accelerates delivery times while fulfilling ambitious technical milestones.",
      stageLabel: "Phase",
      hubBadge: "Agile Cycle",
      hubBrand: "Interestelar",
      steps: {
        step1Title: "Discovery",
        step1Subtitle: "Strategic Alignment",
        step1Desc:
          "Thorough scoping of business goals, technical requirements, and MVP scope definition with clear timelines and estimates.",
        step2Title: "UX / UI",
        step2Subtitle: "Design & Prototyping",
        step2Desc:
          "Designing delightful user journeys and modern design systems in Figma, complete with clickable interactive prototypes.",
        step3Title: "Development",
        step3Subtitle: "Software Engineering",
        step3Desc:
          "Building on robust clean code architecture, automated testing, and continuous delivery with bi-weekly sprint demos.",
        step4Title: "Testing",
        step4Subtitle: "Quality Assurance (QA)",
        step4Desc:
          "Rigorous functional, stress, security, and multi-device compatibility testing to guarantee flawless stability.",
        step5Title: "Delivery & Support",
        step5Subtitle: "Launch & Growth",
        step5Desc:
          "Automated store publishing on App Store and Google Play, cloud provisioning, and dedicated ongoing maintenance.",
      },
    },
    consultationCTA: {
      title: "Not sure where to begin your software product journey?",
      description:
        "No problem! We guide you step-by-step through technology stacks, UI/UX choices, and architecture. You'll leave with a tangible roadmap and accurate estimates to plan with confidence.",
      bullet1: "No-obligation technical feasibility review",
      bullet2: "Detailed cost estimates, timeline, and recommended tech stack",
      bullet3: "Direct consultation with senior software architects",
      btn: "FREE CONSULTATION",
      cardBadgeTitle: "Agile Planning & Strategy",
      cardBadgeDesc: "We turn complex scopes into predictable milestones.",
    },
    footer: {
      companyName: "Interestelar Studios Inova Simples (I.S.)",
      cnpj: "CNPJ: 55.180.644/0001-09",
      location: "Manaus, Amazonas, Brazil • Global Delivery",
      rightsReserved: "All rights reserved.",
    },
    contactModal: {
      badge: "Free Consultation",
      title: "Let's build something remarkable",
      subtitle: "Share your vision. We will follow up with an actionable roadmap within 24 hours.",
      nameLabel: "Your Name *",
      namePlaceholder: "e.g. John Doe",
      emailLabel: "Corporate Email *",
      emailPlaceholder: "john@company.com",
      phoneLabel: "WhatsApp / Phone *",
      phonePlaceholder: "+1 (555) 000-0000",
      projectTypeLabel: "Project Type",
      options: {
        mobile: "Mobile Application (iOS / Android / Flutter)",
        web: "Web App / SaaS Platform",
        ecommerce: "E-commerce / Online Store",
        design: "Product Design (UI/UX in Figma)",
        backend: "Backend & Cloud Architecture",
        consulting: "Software Architecture & Consulting",
      },
      messageLabel: "Tell us about your project",
      messagePlaceholder: "Core objectives, deadlines, or benchmarks...",
      submitBtn: "Submit Request",
      whatsappDirect: "Direct WhatsApp",
      successTitle: "Inquiry Received!",
      successDesc: "Our engineering and product leads will review your specifications and get in touch promptly.",
      whatsappTalkNow: "Chat on WhatsApp now",
      closeBtn: "Close",
      whatsappInitialMessage: "Hello! I'd like to request a proposal for a software project with Interestelar Studios.",
    },
  },
  es: {
    navbar: {
      services: "SERVICIOS",
      projects: "PROYECTOS",
      howWeWork: "CÓMO TRABAJAMOS",
      resources: "RECURSOS",
      contact: "CONTACTO",
      quoteBtn: "Presupuesto",
      switchLang: "Cambiar",
    },
    hero: {
      tagline: "Innovación Digital de Manaos para el Mundo",
      titleStart: "Creamos",
      titleHighlight: "tecnologías",
      titleEnd: "que hacen realidad su visión",
      description:
        "En Interestelar Studios, transformamos sus ideas en aplicaciones innovadoras. Ubicados en Manaos (Brasil), somos especialistas en el desarrollo de sistemas multiplataforma, ofreciendo soluciones digitales personalizadas que se adaptan a las necesidades de su negocio.",
      startNow: "Comience Ahora",
      portfolio: "Nuestro Portafolio",
      metric1Val: "100%",
      metric1Label: "Proyectos a Medida",
      metric2Val: "Ágil",
      metric2Label: "Sprints y Entregas Continuas",
      metric3Val: "Multi",
      metric3Label: "iOS, Android y Web",
    },
    techStack: {
      label: "Nuestras Principales Tecnologías",
    },
    customSolutions: {
      titleStart: "Sistemas",
      titleHighlight: "personalizados",
      titleEnd: "para su empresa",
      description:
        "Desarrollamos productos digitales de alto rendimiento, diseñados específicamente para resolver cuellos de botella operativos y acelerar la escala de su negocio.",
      talkToExpert: "Hable con un especialista",
      item1Title: "Aplicaciones Híbridas",
      item1Desc:
        "Aplicaciones que aprovechan la web moderna, y por una buena razón: son rápidas de lanzar, fiables y seguras.",
      item2Title: "Aplicaciones Web Progresivas",
      item2Desc:
        "Aprovechan aplicaciones web multiplataforma que funcionan como apps nativas, sin tardar una eternidad en salir al mercado.",
      item3Title: "Desarrollo Móvil a Medida",
      item3Desc:
        "Cuando necesita una solución personalizada, reunimos una amplia gama de bibliotecas y tecnologías para entregar aplicaciones a medida sin salirse del presupuesto.",
    },
    services: {
      title: "Nuestros servicios de desarrollo de software personalizado",
      description:
        "Interestelar Studios es el hogar de especialistas en diseño y desarrollo que ofrecen servicios integrales. Abarcamos una amplia gama de soluciones de principio a fin para ayudarle a construir, expandir y escalar su negocio online.",
      cards: {
        web: { title: "Desarrollo\nWeb", tags: ["Front-end", "Backend"] },
        frontend: { title: "Desarrollo\nFrontend", tags: ["React", "Next.js", "Vue.js", "Angular"] },
        backend: { title: "Desarrollo\nBackend", tags: ["PHP", "Python", "Node", "GoLang", "Laravel", "Google Cloud"] },
        ecommerce: { title: "Desarrollo\nE-commerce", tags: ["Shopify", "WooCommerce"] },
        mobile: { title: "Desarrollo\nMóvil", tags: ["Flutter", "React Native", "Kotlin", "Swift"] },
        design: { title: "Diseño de\nProducto", tags: ["UX", "UI", "Figma"] },
      },
    },
    reliableApps: {
      title: "Desarrollo de Aplicaciones Fiables",
      feature1Title: "Desbloquee la movilidad",
      feature1Desc:
        "Haga evolucionar su negocio, ya sea a través de la interacción omnicanal con el cliente o migrando sus sistemas a un modelo con acceso remoto seguro.",
      feature2Title: "Diseño UX/UI de confianza",
      feature2Desc:
        "Las experiencias atractivas y centradas en el usuario son la piedra angular en el desarrollo de aplicaciones móviles de Interestelar.",
      feature3Title: "Vaya más allá de lo tradicional",
      feature3Desc:
        "Incorporación de automatización, inteligencia artificial, pasarelas de pago y capacidades modernas de transformación digital.",
      feature4Title: "Servicios de backend",
      feature4Desc:
        "Elegimos la infraestructura en la nube más robusta para su plataforma, ofreciendo un control absoluto sobre APIs, datos y seguridad.",
      photoBadgeTitle: "Ingeniería de Alta Precisión",
      photoBadgeDesc: "Manaos • Brasil y Clientes Globales",
    },
    projects: {
      title: "Nuestros proyectos",
      subtitle: "Soluciones de software integrales diseñadas y construidas con maestría por Interestelar Studios.",
      regionLabel: "Región",
      platformsLabel: "Plataformas",
      viewPortfolio: "Ver portafolio completo",
      items: {
        instrutor: {
          title: "Instrutor em Casa",
          category: "EdTech y Movilidad",
          description: "Aplicación para conectar instructores de conducción con alumnos en tiempo real.",
          longDescription:
            "Instrutor em Casa es una plataforma a medida para la formación vial. Conecta profesores independientes con alumnos que buscan clases prácticas, geolocalización en tiempo real, pagos integrados y seguimiento de evolución pedagógica.",
          region: "Brasil",
          platforms: ["Android", "iOS", "Web"],
          highlights: [
            "Geolocalización en tiempo real para encontrar instructores cercanos",
            "Agenda dinámica con confirmación inmediata de clases",
            "Chat interno cifrado de extremo a extremo",
            "Pasarela de pago segura con transferencias y tarjetas",
          ],
        },
        safeDriver: {
          title: "Safe Driver",
          category: "Seguridad y Transporte",
          description:
            "Aplicación que conecta conductores de movilidad urbana con redes de auxilio y seguridad nativa.",
          longDescription:
            "Diseñado para conductores profesionales y flotas, Safe Driver integra acceso profundo al hardware móvil (Kotlin nativo), botón de pánico silencioso, geovallas de ruta y avisos comunitarios de emergencia.",
          region: "Brasil",
          platforms: ["Android"],
          highlights: [
            "Procesamiento de sensores y telemetría de impacto en background (Kotlin)",
            "Red comunitaria de apoyo con canales de voz y ubicación",
            "Activación mediante botones físicos y atajos rápidos",
            "Consola de despacho para centrales de monitoreo colaboradoras",
          ],
        },
        manHub: {
          title: "Man HUB",
          category: "Estilo de Vida y Coaching",
          description: "Aplicación de entrenamiento y asesoría de imagen masculina.",
          longDescription:
            "Man HUB es un ecosistema digital dedicado a la consultoría de estilo, hábitos y desarrollo personal para el hombre contemporáneo. Integra diagnóstico visual mediante IA, planes de hábitos diarios y asesoramiento directo.",
          region: "Global",
          platforms: ["Android", "iOS", "Web"],
          highlights: [
            "Herramienta de diagnóstico visual de biotipo y paleta de colores por IA",
            "Módulos formativos en vídeo de alta definición",
            "Plataforma multilingüe para usuarios en España, Latinoamérica y Brasil",
            "Comunidad exclusiva con seguimiento de metas y retos diarios",
          ],
        },
        pcxd: {
          title: "PCXD",
          category: "Hardware y Comercio Electrónico",
          description:
            "Aplicación que asiste a los usuarios a configurar su ordenador y adquirir componentes de forma intuitiva y detallada.",
          longDescription:
            "PCXD es una plataforma integral para el montaje y personalización de ordenadores por piezas. Incorpora un asistente inteligente de verificación de compatibilidad de hardware, comparativa de precios en tiempo real y enlaces directos de compra.",
          region: "Brasil",
          platforms: ["Android", "iOS", "Web"],
          highlights: [
            "Comprobación inteligente de compatibilidad entre placa base, procesador y memorias",
            "Comparador de precios actualizado con ofertas de las principales tiendas",
            "Catálogo visual exhaustivo con especificaciones técnicas detalladas",
            "Sincronización en la nube y comunidad de configuraciones personalizadas",
          ],
        },
        drGil: {
          title: "Dr. Gil Calvo",
          category: "Telemedicina y Salud",
          description:
            "Sitio web institucional para la divulgación de servicios médicos de telemedicina del Dr. Gil Calvo.",
          longDescription:
            "Desarrollado con arquitectura moderna en Next.js, el portal médico del Dr. Gil Calvo difunde sus más de 30 años de experiencia clínica en España, ofreciendo consulta médica online, telemedicina de urgencias y medicina familiar con máxima velocidad de carga.",
          region: "España",
          platforms: ["Web"],
          highlights: [
            "Portal médico de alto rendimiento con optimización SEO en Next.js",
            "Presentación integral de especialidades clínicas y atención telemática",
            "Enlace directo para reserva de citas médicas y atención a pacientes",
            "Diseño accesible, profesional y centrado en la confianza del paciente",
          ],
        },
        figgo: {
          title: "Figgo",
          category: "Comercio Electrónico y Landing Page",
          description:
            "Landing page de la tienda Figgo, dedicada a la venta de velas aromáticas en Manaus.",
          longDescription:
            "Desarrollada con Next.js, la landing page de Figgo exhibe la línea exclusiva de velas aromáticas artesanales elaboradas en Manaus. Combina un diseño cálido y sofisticado, catálogo visual de aromas y conexión directa para pedidos personalizados a través de WhatsApp.",
          region: "Brasil",
          platforms: ["Web"],
          highlights: [
            "Landing page moderna y ultrarrápida desarrollada con Next.js",
            "Presentación visual acogedora y cuidada de velas aromáticas",
            "Integración directa con WhatsApp para pedidos y consultas ágiles",
            "Diseño adaptable y optimizado para compras desde móviles",
          ],
        },
      },
      modal: {
        about: "Sobre el Proyecto",
        technicalHighlights: "Aspectos Técnicos Destacados",
        regionServed: "Región Atendida",
        close: "Cerrar",
        requestQuote: "Solicitar Presupuesto",
        similarQuestion: "¿Desea desarrollar una solución similar?",
      },
    },
    processFlow: {
      title: "Nuestro proceso de desarrollo de productos",
      description:
        "Gestionamos sus proyectos con metodologías ágiles contrastadas, diseñadas para mantener alineados a todos los involucrados (incluidos perfiles no técnicos). Nuestro flujo acelera los plazos de entrega, cumpliendo los objetivos más ambiciosos.",
      stageLabel: "Fase",
      hubBadge: "Ciclo Ágil",
      hubBrand: "Interestelar",
      steps: {
        step1Title: "Descubrimiento",
        step1Subtitle: "Alineación Estratégica",
        step1Desc:
          "Definición detallada de objetivos de negocio, requisitos técnicos y delimitación del MVP con estimaciones transparentes.",
        step2Title: "UX / UI",
        step2Subtitle: "Diseño y Prototipado",
        step2Desc:
          "Diseño de flujos de usuario intuitivos y sistemas visuales modernos en Figma con prototipos interactivos navegables.",
        step3Title: "Desarrollo",
        step3Subtitle: "Ingeniería de Software",
        step3Desc:
          "Desarrollo con arquitectura escalable, código limpio, pruebas unitarias y sprints quincenales con demostraciones continuas.",
        step4Title: "Pruebas",
        step4Subtitle: "Control de Calidad (QA)",
        step4Desc:
          "Pruebas exhaustivas de rendimiento, seguridad de datos y compatibilidad en múltiples dispositivos reales.",
        step5Title: "Entrega y Soporte",
        step5Subtitle: "Lanzamiento y Evolución",
        step5Desc:
          "Publicación oficial en App Store y Google Play, aprovisionamiento en la nube y mantenimiento evolutivo continuo.",
      },
    },
    consultationCTA: {
      title: "¿No sabe por dónde empezar su proyecto de desarrollo de software?",
      description:
        "¡Sin problema! Le guiaremos paso a paso en las decisiones de diseño, tecnología y equipo. Al finalizar, dispondrá de una hoja de ruta clara y estimaciones realistas para planificar con total precisión.",
      bullet1: "Análisis de viabilidad técnica sin compromiso",
      bullet2: "Estimación detallada de costes, plazos y stack tecnológico",
      bullet3: "Atención directa con arquitectos de software senior",
      btn: "CONSULTA GRATUITA",
      cardBadgeTitle: "Planificación y Estrategia Ágil",
      cardBadgeDesc: "Convertimos requisitos complejos en entregas predecibles.",
    },
    footer: {
      companyName: "Interestelar Studios Inova Simples (I.S.)",
      cnpj: "CNPJ: 55.180.644/0001-09",
      location: "Manaos, Amazonas, Brasil • Cobertura Global",
      rightsReserved: "Todos los derechos reservados.",
    },
    contactModal: {
      badge: "Consulta Gratuita",
      title: "Construyamos algo extraordinario",
      subtitle: "Cuéntenos su idea. Le responderemos con un plan detallado en menos de 24 horas.",
      nameLabel: "Su Nombre *",
      namePlaceholder: "Ej: Carlos Silva",
      emailLabel: "Correo Corporativo *",
      emailPlaceholder: "carlos@empresa.com",
      phoneLabel: "WhatsApp / Teléfono *",
      phonePlaceholder: "+34 600 000 000",
      projectTypeLabel: "Tipo de Proyecto",
      options: {
        mobile: "Aplicación Móvil (iOS / Android / Flutter)",
        web: "Sistema Web / SaaS / Plataforma",
        ecommerce: "E-commerce / Tienda Online",
        design: "Diseño de Producto (UI/UX en Figma)",
        backend: "Backend y Arquitectura en la Nube",
        consulting: "Consultoría y Diagnóstico de Software",
      },
      messageLabel: "Cuéntenos sobre su proyecto",
      messagePlaceholder: "Objetivos principales, plazos deseados o referencias...",
      submitBtn: "Enviar Solicitud",
      whatsappDirect: "WhatsApp Directo",
      successTitle: "¡Mensaje Recibido!",
      successDesc: "Nuestro equipo de ingeniería y producto revisará sus requerimientos y se pondrá en contacto en breve.",
      whatsappTalkNow: "Hablar ahora por WhatsApp",
      closeBtn: "Cerrar",
      whatsappInitialMessage: "¡Hola! Me gustaría solicitar un presupuesto para un proyecto de software con Interestelar Studios.",
    },
  },
};
