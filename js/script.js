// ========== Wait for DOM to be fully loaded ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Initialize all functions
    initNavigation();
    initTypedAnimation();
    initProjects();
    initContactForm();
    initScrollEffects();
    initAnimations();
});

// ========== Navigation Toggle ==========
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }
}

// ========== Active Navigation on Scroll ==========
function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        const navLinks = document.querySelectorAll('.nav-link');

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });

        // Navbar background on scroll
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (scrollY > 50) {
                navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ========== Typed.js Animation ==========
function initTypedAnimation() {
    const typedElement = document.getElementById('typed');
    
    if (typedElement && typeof Typed !== 'undefined') {
        console.log('Initializing Typed.js...');
        
        const typed = new Typed('#typed', {
            strings: [
                'a Data Science Professional',
                'an AI/ML Practitioner',
                'a Full-Stack Web Developer',
                'a Problem Solver',
                'passionate about Machine Learning'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
        
        console.log('Typed.js initialized successfully');
    } else {
        console.error('Typed.js not loaded or element not found');
    }
}

// ========== Projects Rendering ==========
function initProjects() {
    console.log('Initializing projects...');
    
    if (typeof projectsData === 'undefined') {
        console.error('projectsData not found! Make sure projects-data.js is loaded.');
        return;
    }
    
    console.log('Projects data loaded:', projectsData.length, 'projects');
    
    // Render initial projects
    renderProjects();
    
    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value and render projects
            const filter = button.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
    
    // Set up modal
    initProjectModal();
}

function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) {
        console.error('Projects grid not found');
        return;
    }
    
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category.includes(filter));

    console.log('Rendering', filteredProjects.length, 'projects for filter:', filter);

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-id', project.id);
        
        const techTags = project.technologies.slice(0, 3).map(tech => 
            `<span class="project-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='images/project-1.png'">
                <div class="project-tags">
                    ${techTags}
                </div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        `;
        
        projectCard.addEventListener('click', () => openProjectModal(project.id));
        projectsGrid.appendChild(projectCard);
    });
}

// ========== Project Modal ==========
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');

    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProjectModal);
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

function openProjectModal(projectId) {
    console.log('Opening modal for project:', projectId);
    
    const project = projectsData.find(p => p.id === projectId);
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }
    
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    const techList = project.technologies.map(tech => 
        `<span class="modal-tech-item">${tech}</span>`
    ).join('');
    
    const githubLink = project.github !== '#' 
        ? `<a href="${project.github}" class="modal-link" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"></i> View on GitHub
           </a>` 
        : '';
    
    const liveLink = project.live !== '#' 
        ? `<a href="${project.live}" class="modal-link" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-box-arrow-up-right"></i> Live Demo
           </a>` 
        : '';
    
    modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-image" onerror="this.src='images/project-1.png'">
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-description">${project.fullDescription}</p>
        
        <h3 class="modal-section-title">Technologies Used</h3>
        <div class="modal-tech-list">
            ${techList}
        </div>
        
        <h3 class="modal-section-title">Project Links</h3>
        <div class="modal-links">
            ${githubLink}
            ${liveLink}
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ========== Contact Form ==========
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const mailtoLink = `mailto:mandalrakesh628@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            window.location.href = mailtoLink;
        });
    }
}

// ========== Fade-in Animations ==========
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.skill-category, .timeline-item, .project-card, .hobby-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}
