// ===== Navigation Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Typewriter Effect =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typewriter effect
const typewriterElement = document.querySelector('.typewriter');
if (typewriterElement) {
    const text = typewriterElement.getAttribute('data-text');
    setTimeout(() => {
        typeWriter(typewriterElement, text, 100);
    }, 1000);
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.about-content, .skill-category, .project-card, .timeline-item, .achievement-card, .interest-card, .contact-card'
    );
    
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// Skill progress bars removed - no longer needed

// ===== Project Modal =====
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTags = document.getElementById('modalTags');
const modalDemo = document.getElementById('modalDemo');
const modalCode = document.getElementById('modalCode');

// Project data
const projectData = {
    1: {
        title: 'Machine Learning Projects',
        description: `
            <p><strong>Disease Prediction | Recommendation System | Sentiment Analysis</strong></p>
            <p>Developed multiple machine learning solutions focused on healthcare analytics, user personalization, and text understanding. These projects demonstrate strong fundamentals in data preprocessing, feature engineering, model training, and evaluation.</p>
            
            <h4>Key Contributions:</h4>
            <ul>
                <li>Built disease prediction models using clinical and demographic attributes to assist early diagnosis</li>
                <li>Designed a user-based recommendation system using collaborative filtering techniques</li>
                <li>Implemented sentiment analysis models to classify text data into positive, negative, and neutral categories</li>
                <li>Performed data cleaning, feature extraction, model selection, and performance evaluation</li>
                <li>Worked with end-to-end ML pipelines suitable for deployment-ready use cases</li>
            </ul>
        `,
        tags: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn'],
        demo: '#',
        code: '#'
    },
    2: {
        title: 'Rock Paper Scissors Game',
        description: `
            <p><strong>Description:</strong></p>
            <p>Developed an interactive console-based game using Python to demonstrate logical thinking and problem-solving skills.</p>
            
            <h4>Key Contributions:</h4>
            <ul>
                <li>Implemented game logic using conditional statements and loops</li>
                <li>Added randomization for computer-generated moves</li>
                <li>Handled user input validation and score tracking across multiple rounds</li>
                <li>Designed a clean and interactive game flow</li>
            </ul>
        `,
        tags: ['Python'],
        demo: '#',
        code: '#'
    }
};

// Open modal
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const data = projectData[projectId];
        
        if (data) {
            modalTitle.textContent = data.title;
            modalDescription.innerHTML = data.description;
            
            // Clear and add tags
            modalTags.innerHTML = '';
            data.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'tag';
                tagElement.textContent = tag;
                modalTags.appendChild(tagElement);
            });
            
            modalDemo.href = data.demo;
            modalCode.href = data.code;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// ===== Copy Email Functionality =====
const copyEmailCard = document.getElementById('copyEmail');
const emailText = document.getElementById('emailText');
const copyText = document.getElementById('copyText');

if (copyEmailCard) {
    copyEmailCard.addEventListener('click', () => {
        const email = emailText.textContent;
        
        // Create temporary textarea to copy text
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            document.execCommand('copy');
            copyText.textContent = 'Copied!';
            copyText.style.color = '#10b981';
            
            setTimeout(() => {
                copyText.textContent = 'Copy';
                copyText.style.color = '';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
            copyText.textContent = 'Failed';
        }
        
        document.body.removeChild(textarea);
    });
}

// ===== Download Resume =====
const downloadResume = document.getElementById('downloadResume');
if (downloadResume) {
    downloadResume.addEventListener('click', (e) => {
        e.preventDefault();
        // Update 'resume.pdf' with your actual resume filename
        const resumeFile = 'resume.pdf';
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = resumeFile;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.2)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== Parallax Effect for Hero =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroBackground = document.querySelector('.hero-background');
    
    if (hero && heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Add active class styling =====
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ===== Staggered Animation for Cards =====
function addStaggeredAnimation() {
    const cards = document.querySelectorAll('.project-card, .skill-card, .achievement-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    addStaggeredAnimation();
});

// ===== Button Micro-interactions =====
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = '';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// ===== Console Welcome Message =====
console.log('%c👋 Welcome to Bhargavi Dongari\'s Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ using modern web technologies', 'color: #64748b; font-size: 14px;');

