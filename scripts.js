
        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        const body = document.body;
        const savedTheme = localStorage.getItem('theme');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
            body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
        
        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');
        
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
        
        // Sticky header on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = "var(--header-bg)";
                header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
            } else {
                header.style.background = "var(--header-bg)";
                header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Animation for skill badges
        const skillBadges = document.querySelectorAll('.skill-badge');
        skillBadges.forEach(badge => {
            badge.addEventListener('mouseover', () => {
                badge.style.transform = 'translateY(-5px)';
                badge.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            });
            
            badge.addEventListener('mouseout', () => {
                badge.style.transform = 'translateY(0)';
                badge.style.boxShadow = 'none';
            });
        });
        
        // Datos para proyectos con más detalles
        const projectsData = {
            project1: {
                title: "Sistema de Gestión de Experimentos ML",
                subtitle: "Plataforma para seguimiento y comparación de modelos de Machine Learning",
                description: "Este proyecto consistió en el desarrollo de una plataforma para el seguimiento de experimentos de Machine Learning orientada a problemas de clasificación, enfocada en asegurar reproducibilidad y trazabilidad en entornos académicos. La solución, implementada con Django (backend) y React.js (frontend), integra MLflow para el seguimiento automatizado de experimentos y DVC para el control de versiones de datos y modelos. Incluye un pipeline que automatiza todas las etapas del ciclo de vida del modelo —desde la ingestión de datos hasta la validación— permitiendo registrar configuraciones, hiperparámetros, métricas y artefactos de forma estructurada. Ofrece visualización comparativa de resultados, generación de informes en PDF y ejecución reproducible sobre datasets tratados y no tratados. El sistema fue diseñado para ejecutarse en entornos locales.",
                technologies: ["Python", "JavaScript", "Git", "Django", "React.js", "SQLite", "MLflow", "DVC", "Docker", "Pandas", "Numpy", "Scikit-Learn","Matplotlib", "Seaborn", "CodeCarbon", "Ydata Profiling", "Sweetviz"],
                features: [
                    "Registro de experimentos con parámetros y métricas",
                    "Visualización comparativa de modelos",
                    "Generación de informes automatizados",
                    "Control de versiones de datos con DVC",
                    "Integración con MLflow para tracking",
                    "Despliegue en contenedores Docker"
                ],
                imageUrl: "/img/dreammlss.png",
                demoLink: "#",
                codeLink: "#"
            },
            project2: {
                title: "Sistema de Gestión Académica",
                subtitle: "Plataforma para la gestión académica y curricular.",
                description: "Desarrollé un sistema de gestión académica para una institución de educación superior, enfocado en centralizar y administrar la información de carreras y planes de estudio, incluyendo la integración con sistemas nacionales. El proyecto se implementó utilizando Gin (Go) con el ORM Gorm para construir un backend robusto y de alto rendimiento, una base de datos PostgreSQL para el almacenamiento de datos, y una interfaz de usuario creada con Vue.js, Axios y Bootstrap.",
                technologies: ["Go","JavaScript","Git","Gin", "Vue.js", "PostgreSQL", "Docker", "JWT", "Nginx"],
                features: [
                    "Gestión de planes de estudio",
                    "Integración con datos de sistemas externos",
                    "Interfaz de usuario interactiva y modular",
                    "API RESTful para manipulación de datos",
                    "Correlación de datos entre fuentes internas y externas",
                ],
                imageUrl: "/img/logisticou.jpg",
                demoLink: "#",
                codeLink: "#"
            },
            project3: {
                title: "MarteAI Data Analytics",
                subtitle: "Plataforma de análisis de datos con Chatbot Interactivo",
                description: "MarteAI es una aplicación web full-stack diseñada para el análisis inteligente de datos. La plataforma permite a los usuarios cargar archivos CSV para obtener un análisis descriptivo y visual de la información, interactuando a través de un chatbot en lenguaje natural para realizar consultas específicas ",
                technologies: ["Python","JavaScript","Git","Django", "React.js","PostgreSQL", "Pandas", "Matplotlib", "Scikit-learn", "LangChain"],
                features: [
                    "Carga y análisis de archivos CSV",
                    "Chatbot para consultas en lenguaje natural",
                    "Generación de visualizaciones y gráficos",
                    "API RESTful para la gestión de datos",
                    "Exportación de reportes en PDF",
                    "Integración con modelos de lenguaje (vía API de OpenAI)",
                ],
                imageUrl: "/img/marteaiss.png",
                demoLink: "#",
                codeLink: "#"
            },
            project4: {
                title: "Aplicación web Tritium Spa",
                subtitle: "Sistema de gestión de clientes y cotizaciones",
                description: "Participé en el desarrollo de una solución tecnológica para la empresa Tritium, cumpliendo roles de QA, DevOps y desarrollo. El proyecto incluye un sistema de manejo de clientes, una página web, gestión de cotizaciones y un chatbot para mejorar la interacción con los clientes y optimizar el flujo de trabajo. Contribuí con el desarrollo de funcionalidades en React.js, la automatización de despliegues con pipelines CI/CD, el diseño de pruebas de calidad, la implementación de autenticación con JWT y la creación de un chatbot en Flask integrado con la API de Gemini.",
                technologies: ["Java","Python","JavaScript","Git", "Spring Boot","Flask","React.js", "PostgreSQL",  "JWT", "Spring Security", "Axios", "Gemini API", "Nginx", "Docker", "AWS", "Render"],
                features: [
                    "Administración y seguimiento de clientes.",
                    "Gestión y envío de cotizaciones por correo.",
                    "Página web con formularios de contacto.",
                    "Chatbot con IA (Gemini) para asistencia automatizada.",
                    "Autenticación y autorización segura con JWT y Spring Security.",
                    "Despliegue automatizado con CI/CD en AWS y Render."
                ],
                imageUrl: "/img/tritium.png",
                demoLink: "#",
                codeLink: "https://github.com/lespinozaortiz/Tritium_dev"
            },
            project5: {
                title: "Intranet Académica Usach",
                subtitle: "Plataforma de Gestión Estudiantil",
                description: "Desarrollo de una aplicación web monolítica para la gestión académica, incluyendo administración de estudiantes, horarios, inscripciones a carreras y calificaciones. La plataforma, construida con Spring Boot y React, centraliza las operaciones académicas en una intranet intuitiva. El despliegue se automatizó utilizando un stack de DevOps con Docker, Terraform, Jenkins y Nginx sobre AWS.",
                technologies: ["Java","JavaScript","Git", "React.js", "Spring Boot","MySQL", "AWS", "Docker", "Terraform", "Jenkins", "Nginx"],
                features: [
                    "Gestión de perfiles de estudiantes y académicos.",
                    "Inscripción de asignaturas y visualización de horarios.",
                    "Publicación y consulta de calificaciones.",
                    "Plataforma centralizada para administración académica.",
                    "Infraestructura como Código (IaC) con Terraform.",
                    "Pipeline de Integración y Despliegue Continuo (CI/CD) con Jenkins."
                ],
                imageUrl: "/img/intranetusach.png",
                demoLink: "#",
                codeLink: "#"
            }
        };
        
        // Abrir modal de detalles del proyecto
        const viewMoreButtons = document.querySelectorAll('.view-more-btn');
        const projectModal = document.getElementById('projectModal');
        const closeModal = document.querySelector('.close-modal');
        
        viewMoreButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = button.getAttribute('data-project');
                const project = projectsData[projectId];
                
                if (project) {
                    document.getElementById('modalProjectTitle').textContent = project.title;
                    document.getElementById('modalProjectSubtitle').textContent = project.subtitle;
                    document.getElementById('modalProjectImage').src = project.imageUrl;
                    document.getElementById('modalProjectImage').alt = project.title;
                    document.getElementById('modalProjectDescription').textContent = project.description;
                    
                    const techList = document.getElementById('modalTechList');
                    techList.innerHTML = '';
                    
                    project.technologies.forEach(tech => {
                        const techItem = document.createElement('div');
                        techItem.className = 'modal-tech-item';
                        techItem.textContent = tech;
                        techList.appendChild(techItem);
                    });
                    
                    const featuresList = document.getElementById('modalFeatures');
                    featuresList.innerHTML = '';
                    
                    project.features.forEach(feature => {
                        const featureItem = document.createElement('li');
                        featureItem.textContent = feature;
                        featuresList.appendChild(featureItem);
                    });
                    
                    document.getElementById('modalDemoLink').href = project.demoLink;
                    document.getElementById('modalCodeLink').href = project.codeLink;
                    
                    projectModal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        
        // Cerrar modal
        closeModal.addEventListener('click', () => {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Cerrar modal al hacer clic fuera del contenido
        window.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                projectModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Formulario de contacto con FormSubmit.co
        const contactForm = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');
        
        // Configurar URL de redirección
        document.getElementById('nextUrl').value = window.location.href.split('#')[0] + '#contact?success=1';
        
        contactForm.addEventListener('submit', function(e) {
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('_subject');
            const message = formData.get('message');
            
            // Validación simple
            if (!name || !email || !subject || !message) {
                e.preventDefault();
                formMessage.textContent = 'Por favor completa todos los campos.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }
            
            // Mostrar mensaje de éxito
            formMessage.textContent = '¡Mensaje enviado con éxito! Te responderé lo antes posible.';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';
            
            // Resetear formulario después de 3 segundos
            setTimeout(() => {
                contactForm.reset();
                formMessage.style.display = 'none';
            }, 5000);
        });
        
        // Verificar si hay parámetro de éxito en la URL
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === '1') {
            formMessage.textContent = '¡Mensaje enviado con éxito! Te responderé lo antes posible.';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';
            
            // Ocultar después de 5 segundos
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
