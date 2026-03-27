document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scroll
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
                
                // Fecha o menu mobile se estiver aberto
                closeMobileMenu();
            }
        });
    });

    // Formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✅ Mensagem enviada com sucesso! Em breve entraremos em contato. ✨');
            contactForm.reset();
            closeMobileMenu(); // fecha menu caso esteja aberto
        });
    }

    // Efeito de scroll na navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // ==================== MENU HAMBÚRGUER ====================
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobile-menu');

    // Cria o conteúdo do menu mobile
    mobileMenu.innerHTML = `
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="serviços.html">Serviços</a></li>
            <li><a href="sobre.html">Sobre</a></li>
            <li><a href="contato.html">Contato</a></li>
        </ul>
        <a href="#contato" class="btn-agendar">Agendar Horário</a>
    `;

    document.body.appendChild(mobileMenu);

    // Função para abrir/fechar menu
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Previne scroll do body quando menu está aberto
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    function closeMobileMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Evento do hambúrguer
    hamburger.addEventListener('click', toggleMobileMenu);

    // Fechar menu ao clicar em um link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Fechar menu ao clicar fora (opcional)
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });

    console.log('%cSuzane Estética - Site carregado com sucesso! ✨', 
                'color: #5a1e3c; font-weight: bold;');
});