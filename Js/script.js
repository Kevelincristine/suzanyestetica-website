// Script simples para interatividade

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para links da navegação
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Formulário de contato (simulação)
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✅ Mensagem enviada com sucesso! Em breve entraremos em contato. ✨');
            contactForm.reset();
        });
    }

    // Efeito de scroll na navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    console.log('%cSuzane Estética - Site carregado com sucesso! ✨', 'color: #5a1e3c; font-weight: bold;');
});