/**
 * Genesis Main JavaScript
 * Handles animations, interactions, and form handling
 */

(function() {
    'use strict';

    // ==================== //
    // RIGHT-CLICK DISABLE  //
    // ==================== //

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable common keyboard shortcuts for viewing source
    document.addEventListener('keydown', function(e) {
        // Disable Ctrl+U (View Source)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }
        // Disable Ctrl+Shift+I (DevTools)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }
        // Disable F12 (DevTools)
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
    });

    // ==================== //
    // SCROLL ANIMATIONS    //
    // ==================== //

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    function initAnimations() {
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }

    // ==================== //
    // SMOOTH SCROLLING     //
    // ==================== //

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ==================== //
    // FORM HANDLING        //
    // ==================== //

    function initFormHandling() {
        const form = document.querySelector('.cta-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = this.querySelector('.cta-input');
                const email = emailInput.value;

                // Get translated success message
                const successMsg = typeof i18n !== 'undefined'
                    ? i18n.t('cta.success')
                    : 'Thanks for registering! We\'ll be in touch at';

                alert(`${successMsg} ${email}`);
                this.reset();
            });
        }
    }

    // ==================== //
    // LANGUAGE SELECTOR    //
    // ==================== //

    function initLanguageSelector() {
        const langBtn = document.querySelector('.lang-btn');
        const langDropdown = document.querySelector('.lang-dropdown');
        const langOptions = document.querySelectorAll('.lang-option');

        if (!langBtn || !langDropdown) return;

        // Toggle dropdown
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!langDropdown.contains(e.target) && !langBtn.contains(e.target)) {
                langDropdown.classList.remove('open');
            }
        });

        // Handle language selection
        langOptions.forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.dataset.lang;
                if (typeof i18n !== 'undefined') {
                    i18n.setLanguage(lang);
                }
                langDropdown.classList.remove('open');
            });
        });

        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                langDropdown.classList.remove('open');
            }
        });
    }

    // ==================== //
    // NAVIGATION SCROLL    //
    // ==================== //

    function initNavScroll() {
        const nav = document.querySelector('.nav');
        if (!nav) return;

        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            // Add shadow on scroll
            if (currentScroll > 10) {
                nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                nav.style.boxShadow = 'none';
            }

            lastScroll = currentScroll;
        });
    }

    // ==================== //
    // INITIALIZATION       //
    // ==================== //

    function init() {
        initAnimations();
        initSmoothScroll();
        initFormHandling();
        initLanguageSelector();
        initNavScroll();

        // Initialize i18n if available
        if (typeof i18n !== 'undefined') {
            i18n.updatePage();
            i18n.updateLanguageSelector();
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
