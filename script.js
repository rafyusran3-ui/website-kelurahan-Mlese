// MODERN SCRIPT: Animations, mobile menu, scroll reveal, dynamic year
document.addEventListener('DOMContentLoaded', () => {
    // Salam function (global)
    window.salam = function() {
        alert("✨ Selamat Datang di Website Kelurahan Mlese ✨\nTemukan informasi terbaru dan layanan terbaik untuk masyarakat.");
    };

    // Scroll reveal dengan Intersection Observer
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });
    
    revealElements.forEach(el => observer.observe(el));

    // Dynamic copyright year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) yearSpan.innerText = new Date().getFullYear();

    // Mobile hamburger menu
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.modern-header nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('show');
        });
        // Tutup jika klik di luar
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('show')) {
                nav.classList.remove('show');
            }
        });
    }

    // Animasi tambahan: efek hover smooth untuk semua card, dan tombol
    const cards = document.querySelectorAll('.layanan-card, .foto-card, .vm-card, .nilai-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.2s ease';
        });
    });
    
    // Tambahkan animasi load untuk hero jika belum
    const heroText = document.querySelector('.hero-text');
    if (heroText && !heroText.classList.contains('animate-hero')) {
        heroText.classList.add('animate-hero');
    }

    // Prevent image broken silent (optional)
    const allImgs = document.querySelectorAll('img');
    allImgs.forEach(img => {
        img.addEventListener('error', function() {
            if (!this.dataset.fallback) {
                this.src = 'https://placehold.co/600x400/f8f4ef/631411?text=Gambar+Mlese';
                this.dataset.fallback = 'true';
            }
        });
    });
    
    // Add active class to current page nav
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});