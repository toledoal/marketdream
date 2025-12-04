// Internationalization (i18n) support
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.products': 'Products',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'Transform Your Business with Custom Software Solutions',
        'hero.subtitle': 'From planning to deployment, we deliver end-to-end software solutions tailored to your needs',
        'hero.cta.services': 'Our Services',
        'hero.cta.contact': 'Get Started',
        
        // Services
        'services.title': 'Comprehensive Software Solutions',
        'services.subtitle': 'We handle every aspect of software development and deployment',
        'services.planning.title': 'Planning & Design',
        'services.planning.desc': 'Strategic planning and innovative design to bring your vision to life',
        'services.development.title': 'Custom Development',
        'services.development.desc': 'Tailored software solutions built to your exact specifications',
        'services.cloud.title': 'Cloud Deployment',
        'services.cloud.desc': 'Seamless deployment to cloud infrastructure with scalability in mind',
        'services.onprem.title': 'On-Premise Installation',
        'services.onprem.desc': 'Professional installation and setup on your own infrastructure',
        'services.management.title': 'Product Management',
        'services.management.desc': 'Ongoing management and optimization of your software products',
        'services.licensing.title': 'Software Licensing',
        'services.licensing.desc': 'Flexible licensing options for businesses, schools, and organizations',
        
        // Services Detail Page
        'services.page.title': 'Our Services',
        'services.page.subtitle': 'Complete software solutions from concept to deployment and beyond',
        'services.detail.planning.title': 'Planning & Design',
        'services.detail.planning.desc': 'We start by understanding your business needs and goals. Our team works closely with you to create a comprehensive plan that aligns with your vision. From user experience design to system architecture, we ensure every detail is carefully considered before development begins.',
        'services.detail.planning.item1': 'Requirements analysis and documentation',
        'services.detail.planning.item2': 'User experience (UX) and interface (UI) design',
        'services.detail.planning.item3': 'System architecture and technical specifications',
        'services.detail.planning.item4': 'Project timeline and resource planning',
        'services.detail.development.title': 'Custom Development',
        'services.detail.development.desc': 'Our development team specializes in creating custom software solutions tailored to your specific needs. We work with all types of software, from web applications and mobile apps to enterprise systems and specialized tools.',
        'services.detail.development.item1': 'Web and mobile application development',
        'services.detail.development.item2': 'Enterprise software solutions',
        'services.detail.development.item3': 'API development and integration',
        'services.detail.development.item4': 'Quality assurance and testing',
        'services.detail.cloud.title': 'Cloud Deployment',
        'services.detail.cloud.desc': 'We deploy your software to leading cloud platforms, ensuring scalability, reliability, and security. Our team handles all aspects of cloud infrastructure setup and configuration.',
        'services.detail.cloud.item1': 'Cloud infrastructure setup and configuration',
        'services.detail.cloud.item2': 'Scalable architecture design',
        'services.detail.cloud.item3': 'Security and compliance implementation',
        'services.detail.cloud.item4': 'Monitoring and performance optimization',
        'services.detail.onprem.title': 'On-Premise Installation',
        'services.detail.onprem.desc': 'For organizations that prefer or require on-premise solutions, we provide professional installation and setup services on your own infrastructure.',
        'services.detail.onprem.item1': 'Infrastructure assessment and planning',
        'services.detail.onprem.item2': 'Professional installation and configuration',
        'services.detail.onprem.item3': 'Staff training and documentation',
        'services.detail.onprem.item4': 'Ongoing support and maintenance',
        'services.detail.management.title': 'Product Management',
        'services.detail.management.desc': 'We provide ongoing product management services to ensure your software continues to meet your business needs and evolves with your organization.',
        'services.detail.management.item1': 'Feature updates and enhancements',
        'services.detail.management.item2': 'Performance monitoring and optimization',
        'services.detail.management.item3': 'Bug fixes and technical support',
        'services.detail.management.item4': 'Roadmap planning and strategy',
        'services.cta.title': 'Ready to Start Your Project?',
        'services.cta.desc': 'Let\'s discuss how we can help transform your business with custom software solutions',
        'services.cta.button': 'Get in Touch',
        
        // Why Choose Us
        'why.title': 'Why Market Dream Solutions?',
        'why.versatile.title': 'Versatile Solutions',
        'why.versatile.desc': 'We work with all types of software, from web applications to enterprise systems',
        'why.endtoend.title': 'End-to-End Service',
        'why.endtoend.desc': 'From initial planning to final deployment and ongoing management',
        'why.flexible.title': 'Flexible Deployment',
        'why.flexible.desc': 'Cloud or on-premise, we adapt to your infrastructure needs',
        'why.cta.title': 'Ready to Get Started?',
        'why.cta.desc': 'Let\'s discuss how we can transform your business with custom software solutions',
        'why.cta.button': 'Contact Us Today',
        
        // Products
        'products.page.title': 'Products & Licensing',
        'products.page.subtitle': 'Flexible software licensing solutions for businesses, schools, and organizations',
        'products.overview.title': 'Software Licensing Solutions',
        'products.overview.subtitle': 'We offer flexible licensing options designed to meet the unique needs of different organizations',
        'products.business.title': 'Business Licenses',
        'products.business.desc': 'Enterprise software licenses tailored for businesses of all sizes',
        'products.business.item1': 'Scalable licensing options',
        'products.business.item2': 'Volume discounts available',
        'products.business.item3': 'Priority support included',
        'products.business.item4': 'Custom integration support',
        'products.education.title': 'Educational Licenses',
        'products.education.desc': 'Special pricing for schools and educational institutions',
        'products.education.item1': 'Discounted rates for schools',
        'products.education.item2': 'Site-wide licensing options',
        'products.education.item3': 'Student and faculty access',
        'products.education.item4': 'Training and support materials',
        'products.group.title': 'Group Licenses',
        'products.group.desc': 'Flexible licensing for teams, organizations, and groups',
        'products.group.item1': 'Team-based pricing',
        'products.group.item2': 'Flexible user management',
        'products.group.item3': 'Centralized administration',
        'products.group.item4': 'Custom terms available',
        'products.coming.title': 'More Products Coming Soon',
        'products.coming.desc': 'We\'re continuously developing new software solutions and expanding our product portfolio. Stay tuned for updates on our latest offerings.',
        'products.coming.contact': 'Contact Us for Updates',
        'products.coming.services': 'View Our Services',
        'products.benefits.title': 'Why Choose Our Licensing Solutions?',
        'products.benefits.secure.title': 'Secure & Reliable',
        'products.benefits.secure.desc': 'Enterprise-grade security and reliability',
        'products.benefits.support.title': 'Expert Support',
        'products.benefits.support.desc': 'Dedicated support team available',
        'products.benefits.updates.title': 'Regular Updates',
        'products.benefits.updates.desc': 'Continuous improvements and updates',
        'products.benefits.flexible.title': 'Flexible Terms',
        'products.benefits.flexible.desc': 'Customizable licensing agreements',
        'products.cta.title': 'Interested in Our Licensing Options?',
        'products.cta.desc': 'Contact us to discuss licensing options tailored to your organization\'s needs',
        'products.cta.button': 'Request a Quote',
        
        // Contact
        'contact.page.title': 'Get in Touch',
        'contact.page.subtitle': 'Let\'s discuss how we can help transform your business with custom software solutions',
        'contact.form.title': 'Send us a Message',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.company': 'Company (Optional)',
        'contact.form.subject': 'Subject',
        'contact.form.subject.select': 'Select a subject',
        'contact.form.subject.custom': 'Custom Development',
        'contact.form.subject.licensing': 'Software Licensing',
        'contact.form.subject.cloud': 'Cloud Deployment',
        'contact.form.subject.consultation': 'Consultation',
        'contact.form.subject.other': 'Other',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Send Message',
        'contact.info.title': 'Contact Information',
        'contact.info.email.title': 'Email',
        'contact.info.phone.title': 'Phone',
        'contact.info.phone.desc': 'Available upon request',
        'contact.info.hours.title': 'Business Hours',
        'contact.info.hours.desc': 'Monday - Friday: 9:00 AM - 6:00 PM',
        'contact.why.title': 'Why Contact Us?',
        'contact.why.item1': 'Free consultation on your software needs',
        'contact.why.item2': 'Customized solutions for your business',
        'contact.why.item3': 'Flexible licensing options',
        'contact.why.item4': 'Expert guidance from planning to deployment',
        
        // Footer
        'footer.tagline': 'Transforming businesses through innovative software solutions',
        'footer.links.title': 'Quick Links',
        'footer.services.title': 'Services',
        'footer.contact.title': 'Contact',
        'footer.contact.desc': 'Get in touch to discuss your software needs',
        'footer.contact.button': 'Contact Us',
        'footer.copyright': '© 2024 Market Dream Solutions. All rights reserved.'
    },
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.services': 'Servicios',
        'nav.products': 'Productos',
        'nav.contact': 'Contacto',
        
        // Hero Section
        'hero.title': 'Transforma tu Negocio con Soluciones de Software Personalizadas',
        'hero.subtitle': 'Desde la planificación hasta el despliegue, entregamos soluciones de software integrales adaptadas a tus necesidades',
        'hero.cta.services': 'Nuestros Servicios',
        'hero.cta.contact': 'Comenzar',
        
        // Services
        'services.title': 'Soluciones de Software Integrales',
        'services.subtitle': 'Manejamos todos los aspectos del desarrollo y despliegue de software',
        'services.planning.title': 'Planificación y Diseño',
        'services.planning.desc': 'Planificación estratégica y diseño innovador para dar vida a tu visión',
        'services.development.title': 'Desarrollo Personalizado',
        'services.development.desc': 'Soluciones de software adaptadas construidas según tus especificaciones exactas',
        'services.cloud.title': 'Despliegue en la Nube',
        'services.cloud.desc': 'Despliegue sin problemas en infraestructura en la nube pensando en la escalabilidad',
        'services.onprem.title': 'Instalación On-Premise',
        'services.onprem.desc': 'Instalación y configuración profesional en tu propia infraestructura',
        'services.management.title': 'Gestión de Productos',
        'services.management.desc': 'Gestión y optimización continua de tus productos de software',
        'services.licensing.title': 'Licencias de Software',
        'services.licensing.desc': 'Opciones de licencias flexibles para empresas, escuelas y organizaciones',
        
        // Services Detail Page
        'services.page.title': 'Nuestros Servicios',
        'services.page.subtitle': 'Soluciones de software completas desde el concepto hasta el despliegue y más allá',
        'services.detail.planning.title': 'Planificación y Diseño',
        'services.detail.planning.desc': 'Comenzamos entendiendo las necesidades y objetivos de tu negocio. Nuestro equipo trabaja estrechamente contigo para crear un plan integral que se alinee con tu visión. Desde el diseño de experiencia de usuario hasta la arquitectura del sistema, nos aseguramos de que cada detalle sea cuidadosamente considerado antes de que comience el desarrollo.',
        'services.detail.planning.item1': 'Análisis y documentación de requisitos',
        'services.detail.planning.item2': 'Diseño de experiencia de usuario (UX) e interfaz (UI)',
        'services.detail.planning.item3': 'Arquitectura del sistema y especificaciones técnicas',
        'services.detail.planning.item4': 'Cronograma del proyecto y planificación de recursos',
        'services.detail.development.title': 'Desarrollo Personalizado',
        'services.detail.development.desc': 'Nuestro equipo de desarrollo se especializa en crear soluciones de software personalizadas adaptadas a tus necesidades específicas. Trabajamos con todo tipo de software, desde aplicaciones web y móviles hasta sistemas empresariales y herramientas especializadas.',
        'services.detail.development.item1': 'Desarrollo de aplicaciones web y móviles',
        'services.detail.development.item2': 'Soluciones de software empresarial',
        'services.detail.development.item3': 'Desarrollo e integración de API',
        'services.detail.development.item4': 'Aseguramiento de calidad y pruebas',
        'services.detail.cloud.title': 'Despliegue en la Nube',
        'services.detail.cloud.desc': 'Desplegamos tu software en las principales plataformas en la nube, garantizando escalabilidad, confiabilidad y seguridad. Nuestro equipo maneja todos los aspectos de la configuración e infraestructura en la nube.',
        'services.detail.cloud.item1': 'Configuración e infraestructura en la nube',
        'services.detail.cloud.item2': 'Diseño de arquitectura escalable',
        'services.detail.cloud.item3': 'Implementación de seguridad y cumplimiento',
        'services.detail.cloud.item4': 'Monitoreo y optimización de rendimiento',
        'services.detail.onprem.title': 'Instalación On-Premise',
        'services.detail.onprem.desc': 'Para organizaciones que prefieren o requieren soluciones on-premise, proporcionamos servicios profesionales de instalación y configuración en tu propia infraestructura.',
        'services.detail.onprem.item1': 'Evaluación y planificación de infraestructura',
        'services.detail.onprem.item2': 'Instalación y configuración profesional',
        'services.detail.onprem.item3': 'Capacitación del personal y documentación',
        'services.detail.onprem.item4': 'Soporte y mantenimiento continuo',
        'services.detail.management.title': 'Gestión de Productos',
        'services.detail.management.desc': 'Proporcionamos servicios continuos de gestión de productos para asegurar que tu software continúe cumpliendo con las necesidades de tu negocio y evolucione con tu organización.',
        'services.detail.management.item1': 'Actualizaciones y mejoras de características',
        'services.detail.management.item2': 'Monitoreo y optimización de rendimiento',
        'services.detail.management.item3': 'Corrección de errores y soporte técnico',
        'services.detail.management.item4': 'Planificación de hoja de ruta y estrategia',
        'services.cta.title': '¿Listo para Comenzar tu Proyecto?',
        'services.cta.desc': 'Hablemos sobre cómo podemos ayudar a transformar tu negocio con soluciones de software personalizadas',
        'services.cta.button': 'Contáctanos',
        
        // Why Choose Us
        'why.title': '¿Por qué Market Dream Solutions?',
        'why.versatile.title': 'Soluciones Versátiles',
        'why.versatile.desc': 'Trabajamos con todo tipo de software, desde aplicaciones web hasta sistemas empresariales',
        'why.endtoend.title': 'Servicio Integral',
        'why.endtoend.desc': 'Desde la planificación inicial hasta el despliegue final y la gestión continua',
        'why.flexible.title': 'Despliegue Flexible',
        'why.flexible.desc': 'En la nube o on-premise, nos adaptamos a las necesidades de tu infraestructura',
        'why.cta.title': '¿Listo para Comenzar?',
        'why.cta.desc': 'Hablemos sobre cómo podemos transformar tu negocio con soluciones de software personalizadas',
        'why.cta.button': 'Contáctanos Hoy',
        
        // Products
        'products.page.title': 'Productos y Licencias',
        'products.page.subtitle': 'Soluciones de licencias de software flexibles para empresas, escuelas y organizaciones',
        'products.overview.title': 'Soluciones de Licencias de Software',
        'products.overview.subtitle': 'Ofrecemos opciones de licencias flexibles diseñadas para satisfacer las necesidades únicas de diferentes organizaciones',
        'products.business.title': 'Licencias Empresariales',
        'products.business.desc': 'Licencias de software empresarial adaptadas para empresas de todos los tamaños',
        'products.business.item1': 'Opciones de licencias escalables',
        'products.business.item2': 'Descuentos por volumen disponibles',
        'products.business.item3': 'Soporte prioritario incluido',
        'products.business.item4': 'Soporte de integración personalizada',
        'products.education.title': 'Licencias Educativas',
        'products.education.desc': 'Precios especiales para escuelas e instituciones educativas',
        'products.education.item1': 'Tarifas con descuento para escuelas',
        'products.education.item2': 'Opciones de licencias para todo el sitio',
        'products.education.item3': 'Acceso para estudiantes y profesores',
        'products.education.item4': 'Materiales de capacitación y soporte',
        'products.group.title': 'Licencias para Grupos',
        'products.group.desc': 'Licencias flexibles para equipos, organizaciones y grupos',
        'products.group.item1': 'Precios basados en equipos',
        'products.group.item2': 'Gestión flexible de usuarios',
        'products.group.item3': 'Administración centralizada',
        'products.group.item4': 'Términos personalizados disponibles',
        'products.coming.title': 'Más Productos Próximamente',
        'products.coming.desc': 'Estamos desarrollando continuamente nuevas soluciones de software y expandiendo nuestro portafolio de productos. Mantente atento para actualizaciones sobre nuestras últimas ofertas.',
        'products.coming.contact': 'Contáctanos para Actualizaciones',
        'products.coming.services': 'Ver Nuestros Servicios',
        'products.benefits.title': '¿Por qué Elegir Nuestras Soluciones de Licencias?',
        'products.benefits.secure.title': 'Seguro y Confiable',
        'products.benefits.secure.desc': 'Seguridad y confiabilidad de nivel empresarial',
        'products.benefits.support.title': 'Soporte Experto',
        'products.benefits.support.desc': 'Equipo de soporte dedicado disponible',
        'products.benefits.updates.title': 'Actualizaciones Regulares',
        'products.benefits.updates.desc': 'Mejoras y actualizaciones continuas',
        'products.benefits.flexible.title': 'Términos Flexibles',
        'products.benefits.flexible.desc': 'Acuerdos de licencias personalizables',
        'products.cta.title': '¿Interesado en Nuestras Opciones de Licencias?',
        'products.cta.desc': 'Contáctanos para discutir opciones de licencias adaptadas a las necesidades de tu organización',
        'products.cta.button': 'Solicitar Cotización',
        
        // Contact
        'contact.page.title': 'Contáctanos',
        'contact.page.subtitle': 'Hablemos sobre cómo podemos ayudar a transformar tu negocio con soluciones de software personalizadas',
        'contact.form.title': 'Envíanos un Mensaje',
        'contact.form.name': 'Nombre',
        'contact.form.email': 'Correo Electrónico',
        'contact.form.company': 'Empresa (Opcional)',
        'contact.form.subject': 'Asunto',
        'contact.form.subject.select': 'Selecciona un asunto',
        'contact.form.subject.custom': 'Desarrollo Personalizado',
        'contact.form.subject.licensing': 'Licencias de Software',
        'contact.form.subject.cloud': 'Despliegue en la Nube',
        'contact.form.subject.consultation': 'Consultoría',
        'contact.form.subject.other': 'Otro',
        'contact.form.message': 'Mensaje',
        'contact.form.submit': 'Enviar Mensaje',
        'contact.info.title': 'Información de Contacto',
        'contact.info.email.title': 'Correo Electrónico',
        'contact.info.phone.title': 'Teléfono',
        'contact.info.phone.desc': 'Disponible bajo solicitud',
        'contact.info.hours.title': 'Horario Comercial',
        'contact.info.hours.desc': 'Lunes - Viernes: 9:00 AM - 6:00 PM',
        'contact.why.title': '¿Por qué Contactarnos?',
        'contact.why.item1': 'Consulta gratuita sobre tus necesidades de software',
        'contact.why.item2': 'Soluciones personalizadas para tu negocio',
        'contact.why.item3': 'Opciones de licencias flexibles',
        'contact.why.item4': 'Orientación experta desde la planificación hasta el despliegue',
        
        // Footer
        'footer.tagline': 'Transformando negocios a través de soluciones de software innovadoras',
        'footer.links.title': 'Enlaces Rápidos',
        'footer.services.title': 'Servicios',
        'footer.contact.title': 'Contacto',
        'footer.contact.desc': 'Ponte en contacto para discutir tus necesidades de software',
        'footer.contact.button': 'Contáctanos',
        'footer.copyright': '© 2024 Market Dream Solutions. Todos los derechos reservados.'
    },
    pt: {
        // Navigation
        'nav.home': 'Início',
        'nav.services': 'Serviços',
        'nav.products': 'Produtos',
        'nav.contact': 'Contato',
        
        // Hero Section
        'hero.title': 'Transforme seu Negócio com Soluções de Software Personalizadas',
        'hero.subtitle': 'Do planejamento à implantação, entregamos soluções de software completas adaptadas às suas necessidades',
        'hero.cta.services': 'Nossos Serviços',
        'hero.cta.contact': 'Começar',
        
        // Services
        'services.title': 'Soluções de Software Abrangentes',
        'services.subtitle': 'Gerenciamos todos os aspectos do desenvolvimento e implantação de software',
        'services.planning.title': 'Planejamento e Design',
        'services.planning.desc': 'Planejamento estratégico e design inovador para dar vida à sua visão',
        'services.development.title': 'Desenvolvimento Personalizado',
        'services.development.desc': 'Soluções de software personalizadas construídas de acordo com suas especificações exatas',
        'services.cloud.title': 'Implantação na Nuvem',
        'services.cloud.desc': 'Implantação perfeita na infraestrutura em nuvem com escalabilidade em mente',
        'services.onprem.title': 'Instalação On-Premise',
        'services.onprem.desc': 'Instalação e configuração profissional em sua própria infraestrutura',
        'services.management.title': 'Gestão de Produtos',
        'services.management.desc': 'Gestão e otimização contínua de seus produtos de software',
        'services.licensing.title': 'Licenciamento de Software',
        'services.licensing.desc': 'Opções de licenciamento flexíveis para empresas, escolas e organizações',
        
        // Services Detail Page
        'services.page.title': 'Nossos Serviços',
        'services.page.subtitle': 'Soluções de software completas do conceito à implantação e além',
        'services.detail.planning.title': 'Planejamento e Design',
        'services.detail.planning.desc': 'Começamos entendendo as necessidades e objetivos do seu negócio. Nossa equipe trabalha em estreita colaboração com você para criar um plano abrangente que se alinhe com sua visão. Do design de experiência do usuário à arquitetura do sistema, garantimos que cada detalhe seja cuidadosamente considerado antes do início do desenvolvimento.',
        'services.detail.planning.item1': 'Análise e documentação de requisitos',
        'services.detail.planning.item2': 'Design de experiência do usuário (UX) e interface (UI)',
        'services.detail.planning.item3': 'Arquitetura do sistema e especificações técnicas',
        'services.detail.planning.item4': 'Cronograma do projeto e planejamento de recursos',
        'services.detail.development.title': 'Desenvolvimento Personalizado',
        'services.detail.development.desc': 'Nossa equipe de desenvolvimento é especializada em criar soluções de software personalizadas adaptadas às suas necessidades específicas. Trabalhamos com todos os tipos de software, desde aplicações web e móveis até sistemas empresariais e ferramentas especializadas.',
        'services.detail.development.item1': 'Desenvolvimento de aplicações web e móveis',
        'services.detail.development.item2': 'Soluções de software empresarial',
        'services.detail.development.item3': 'Desenvolvimento e integração de API',
        'services.detail.development.item4': 'Garantia de qualidade e testes',
        'services.detail.cloud.title': 'Implantação na Nuvem',
        'services.detail.cloud.desc': 'Implantamos seu software nas principais plataformas em nuvem, garantindo escalabilidade, confiabilidade e segurança. Nossa equipe gerencia todos os aspectos da configuração e infraestrutura em nuvem.',
        'services.detail.cloud.item1': 'Configuração e infraestrutura em nuvem',
        'services.detail.cloud.item2': 'Design de arquitetura escalável',
        'services.detail.cloud.item3': 'Implementação de segurança e conformidade',
        'services.detail.cloud.item4': 'Monitoramento e otimização de desempenho',
        'services.detail.onprem.title': 'Instalação On-Premise',
        'services.detail.onprem.desc': 'Para organizações que preferem ou requerem soluções on-premise, fornecemos serviços profissionais de instalação e configuração em sua própria infraestrutura.',
        'services.detail.onprem.item1': 'Avaliação e planejamento de infraestrutura',
        'services.detail.onprem.item2': 'Instalação e configuração profissional',
        'services.detail.onprem.item3': 'Treinamento de equipe e documentação',
        'services.detail.onprem.item4': 'Suporte e manutenção contínuos',
        'services.detail.management.title': 'Gestão de Produtos',
        'services.detail.management.desc': 'Fornecemos serviços contínuos de gestão de produtos para garantir que seu software continue atendendo às necessidades do seu negócio e evolua com sua organização.',
        'services.detail.management.item1': 'Atualizações e melhorias de recursos',
        'services.detail.management.item2': 'Monitoramento e otimização de desempenho',
        'services.detail.management.item3': 'Correção de bugs e suporte técnico',
        'services.detail.management.item4': 'Planejamento de roteiro e estratégia',
        'services.cta.title': 'Pronto para Começar seu Projeto?',
        'services.cta.desc': 'Vamos discutir como podemos ajudar a transformar seu negócio com soluções de software personalizadas',
        'services.cta.button': 'Entre em Contato',
        
        // Why Choose Us
        'why.title': 'Por que Market Dream Solutions?',
        'why.versatile.title': 'Soluções Versáteis',
        'why.versatile.desc': 'Trabalhamos com todos os tipos de software, desde aplicações web até sistemas empresariais',
        'why.endtoend.title': 'Serviço Completo',
        'why.endtoend.desc': 'Do planejamento inicial à implantação final e gestão contínua',
        'why.flexible.title': 'Implantação Flexível',
        'why.flexible.desc': 'Na nuvem ou on-premise, nos adaptamos às necessidades da sua infraestrutura',
        'why.cta.title': 'Pronto para Começar?',
        'why.cta.desc': 'Vamos discutir como podemos transformar seu negócio com soluções de software personalizadas',
        'why.cta.button': 'Entre em Contato Hoje',
        
        // Products
        'products.page.title': 'Produtos e Licenciamento',
        'products.page.subtitle': 'Soluções de licenciamento de software flexíveis para empresas, escolas e organizações',
        'products.overview.title': 'Soluções de Licenciamento de Software',
        'products.overview.subtitle': 'Oferecemos opções de licenciamento flexíveis projetadas para atender às necessidades únicas de diferentes organizações',
        'products.business.title': 'Licenças Empresariais',
        'products.business.desc': 'Licenças de software empresarial adaptadas para empresas de todos os tamanhos',
        'products.business.item1': 'Opções de licenciamento escaláveis',
        'products.business.item2': 'Descontos por volume disponíveis',
        'products.business.item3': 'Suporte prioritário incluído',
        'products.business.item4': 'Suporte de integração personalizada',
        'products.education.title': 'Licenças Educacionais',
        'products.education.desc': 'Preços especiais para escolas e instituições educacionais',
        'products.education.item1': 'Tarifas com desconto para escolas',
        'products.education.item2': 'Opções de licenciamento para todo o site',
        'products.education.item3': 'Acesso para estudantes e professores',
        'products.education.item4': 'Materiais de treinamento e suporte',
        'products.group.title': 'Licenças para Grupos',
        'products.group.desc': 'Licenciamento flexível para equipes, organizações e grupos',
        'products.group.item1': 'Preços baseados em equipes',
        'products.group.item2': 'Gestão flexível de usuários',
        'products.group.item3': 'Administração centralizada',
        'products.group.item4': 'Termos personalizados disponíveis',
        'products.coming.title': 'Mais Produtos em Breve',
        'products.coming.desc': 'Estamos desenvolvendo continuamente novas soluções de software e expandindo nosso portfólio de produtos. Fique atento para atualizações sobre nossas últimas ofertas.',
        'products.coming.contact': 'Entre em Contato para Atualizações',
        'products.coming.services': 'Ver Nossos Serviços',
        'products.benefits.title': 'Por que Escolher Nossas Soluções de Licenciamento?',
        'products.benefits.secure.title': 'Seguro e Confiável',
        'products.benefits.secure.desc': 'Segurança e confiabilidade de nível empresarial',
        'products.benefits.support.title': 'Suporte Especializado',
        'products.benefits.support.desc': 'Equipe de suporte dedicada disponível',
        'products.benefits.updates.title': 'Atualizações Regulares',
        'products.benefits.updates.desc': 'Melhorias e atualizações contínuas',
        'products.benefits.flexible.title': 'Termos Flexíveis',
        'products.benefits.flexible.desc': 'Acordos de licenciamento personalizáveis',
        'products.cta.title': 'Interessado em Nossas Opções de Licenciamento?',
        'products.cta.desc': 'Entre em contato para discutir opções de licenciamento adaptadas às necessidades da sua organização',
        'products.cta.button': 'Solicitar Orçamento',
        
        // Contact
        'contact.page.title': 'Entre em Contato',
        'contact.page.subtitle': 'Vamos discutir como podemos ajudar a transformar seu negócio com soluções de software personalizadas',
        'contact.form.title': 'Envie-nos uma Mensagem',
        'contact.form.name': 'Nome',
        'contact.form.email': 'E-mail',
        'contact.form.company': 'Empresa (Opcional)',
        'contact.form.subject': 'Assunto',
        'contact.form.subject.select': 'Selecione um assunto',
        'contact.form.subject.custom': 'Desenvolvimento Personalizado',
        'contact.form.subject.licensing': 'Licenciamento de Software',
        'contact.form.subject.cloud': 'Implantação na Nuvem',
        'contact.form.subject.consultation': 'Consultoria',
        'contact.form.subject.other': 'Outro',
        'contact.form.message': 'Mensagem',
        'contact.form.submit': 'Enviar Mensagem',
        'contact.info.title': 'Informações de Contato',
        'contact.info.email.title': 'E-mail',
        'contact.info.phone.title': 'Telefone',
        'contact.info.phone.desc': 'Disponível mediante solicitação',
        'contact.info.hours.title': 'Horário Comercial',
        'contact.info.hours.desc': 'Segunda - Sexta: 9:00 AM - 6:00 PM',
        'contact.why.title': 'Por que Entrar em Contato?',
        'contact.why.item1': 'Consulta gratuita sobre suas necessidades de software',
        'contact.why.item2': 'Soluções personalizadas para seu negócio',
        'contact.why.item3': 'Opções de licenciamento flexíveis',
        'contact.why.item4': 'Orientação especializada do planejamento à implantação',
        
        // Footer
        'footer.tagline': 'Transformando negócios através de soluções de software inovadoras',
        'footer.links.title': 'Links Rápidos',
        'footer.services.title': 'Serviços',
        'footer.contact.title': 'Contato',
        'footer.contact.desc': 'Entre em contato para discutir suas necessidades de software',
        'footer.contact.button': 'Entre em Contato',
        'footer.copyright': '© 2024 Market Dream Solutions. Todos os direitos reservados.'
    }
};

// Get current language from localStorage or default to 'en'
let currentLanguage = localStorage.getItem('language') || 'en';

// Function to translate text
function translate(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

// Function to update all translatable elements
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translate(key);
        
        if (element.tagName === 'INPUT' && element.type === 'submit') {
            element.value = translation;
        } else if (element.tagName === 'OPTION') {
            element.textContent = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Update language selector
    const selector = document.getElementById('language-selector');
    if (selector) {
        selector.value = lang;
    }
    
    // Update page title and meta description if needed
    document.documentElement.lang = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLanguage);
    
    // Add event listener to language selector
    const selector = document.getElementById('language-selector');
    if (selector) {
        selector.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });
    }
});

