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
    // CONFIDENCE COUNTER   //
    // ==================== //

    function initConfidenceCounter() {
        const percentEl = document.querySelector('.confidence-percent');
        if (!percentEl) return;

        const target = parseInt(percentEl.dataset.target, 10) || 67;
        const duration = 2000; // 2 seconds
        const startDelay = 500; // Match the fill animation delay
        let hasAnimated = false;

        function animateCounter() {
            if (hasAnimated) return;
            hasAnimated = true;

            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Ease-out cubic for smooth deceleration
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentValue = Math.round(easeOut * target);

                percentEl.textContent = currentValue;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            }

            requestAnimationFrame(updateCounter);
        }

        // Start counter after delay
        setTimeout(animateCounter, startDelay);
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

    // API endpoint - update this after deploying to Vercel
    const API_ENDPOINT = 'https://genesis-api.vercel.app/api/register-interest';

    // Get UTM parameters from URL
    function getUtmParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            utmSource: params.get('utm_source') || '',
            utmMedium: params.get('utm_medium') || '',
            utmCampaign: params.get('utm_campaign') || ''
        };
    }

    // Show form feedback message
    function showFeedback(form, message, isSuccess) {
        const feedback = form.parentElement.querySelector('.form-feedback');
        if (feedback) {
            feedback.textContent = message;
            feedback.className = 'form-feedback ' + (isSuccess ? 'form-feedback--success' : 'form-feedback--error');
            feedback.style.display = 'block';
        }
    }

    // Hide form feedback
    function hideFeedback(form) {
        const feedback = form.parentElement.querySelector('.form-feedback');
        if (feedback) {
            feedback.style.display = 'none';
        }
    }

    // Handle form submission
    async function handleFormSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const emailInput = form.querySelector('input[type="email"]');
        const submitBtn = form.querySelector('button[type="submit"]');
        const email = emailInput.value;

        // Store original button text
        const originalText = submitBtn.textContent;

        // Set loading state
        submitBtn.disabled = true;
        submitBtn.textContent = typeof i18n !== 'undefined' ? i18n.t('cta.loading') || 'Submitting...' : 'Submitting...';
        hideFeedback(form);

        // Determine source based on form class
        const source = form.classList.contains('blog-newsletter-form')
            ? 'blog-newsletter'
            : 'get-your-first-profile';

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    source,
                    ...getUtmParams()
                })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                // Success
                const successMsg = typeof i18n !== 'undefined'
                    ? i18n.t('cta.success') || 'Thanks! Check your inbox for confirmation.'
                    : 'Thanks! Check your inbox for confirmation.';
                showFeedback(form, successMsg, true);
                form.reset();
            } else {
                // API returned an error
                throw new Error(data.error || 'Submission failed');
            }
        } catch (error) {
            // Network or other error
            const errorMsg = typeof i18n !== 'undefined'
                ? i18n.t('cta.error') || 'Something went wrong. Please try again.'
                : 'Something went wrong. Please try again.';
            showFeedback(form, errorMsg, false);
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }

    function initFormHandling() {
        // Main CTA form
        const ctaForm = document.querySelector('.cta-form');
        if (ctaForm) {
            ctaForm.addEventListener('submit', handleFormSubmit);
        }

        // Blog newsletter form
        const blogForm = document.querySelector('.blog-newsletter-form');
        if (blogForm) {
            blogForm.addEventListener('submit', handleFormSubmit);
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
        initConfidenceCounter();

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
