// ParentPay-Branded Resume - Interactive JavaScript
// Payment Platform Inspired Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all ParentPay-inspired interactive features
    initParentPayAnimations();
    initContactInteractions();
    initKPICounters();
    initSkillInteractions();
    initSectionReveal();
    initProjectInteractions();
    initPrintFunctionality();
    initAccessibilityFeatures();
    initPaymentPlatformEffects();
    initKeyboardNavigation();
});

/**
 * ParentPay-inspired animations and effects
 */
function initParentPayAnimations() {
    // Animate ParentPay header elements
    const headerElements = document.querySelectorAll('.candidate-name, .candidate-title, .experience-indicator');
    headerElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 200 + (index * 200));
    });
    
    // Animate contact cards with stagger
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(50px)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 600 + (index * 150));
    });
    
    // Add floating effect to experience indicator dots
    const expDots = document.querySelectorAll('.exp-dot');
    expDots.forEach(dot => {
        setInterval(() => {
            dot.style.transform = 'scale(1.2)';
            setTimeout(() => {
                dot.style.transform = 'scale(1)';
            }, 200);
        }, 2000 + Math.random() * 1000);
    });
}

/**
 * Enhanced contact interactions with ParentPay UX patterns
 */
function initContactInteractions() {
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach(card => {
        const contactValue = card.querySelector('.contact-value').textContent;
        const contactLabel = card.querySelector('.contact-label').textContent.toLowerCase();
        
        // Add click functionality for actual contact information
        if (contactLabel === 'email' && contactValue.includes('@')) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                window.location.href = `mailto:${contactValue}`;
                addPaymentProcessingEffect(this);
            });
            
            card.addEventListener('mouseenter', function() {
                this.querySelector('.contact-icon').textContent = '✉️';
            });
            
            card.addEventListener('mouseleave', function() {
                this.querySelector('.contact-icon').textContent = '📧';
            });
        }
        
        if (contactLabel === 'phone' && contactValue.includes('+91')) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                window.location.href = `tel:${contactValue}`;
                addPaymentProcessingEffect(this);
            });
            
            card.addEventListener('mouseenter', function() {
                this.querySelector('.contact-icon').textContent = '📞';
            });
            
            card.addEventListener('mouseleave', function() {
                this.querySelector('.contact-icon').textContent = '📱';
            });
        }
        
        if (contactLabel === 'linkedin') {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                window.open('https://linkedin.com/in/manish-ghorpade-2902a5150/', '_blank');
                addPaymentProcessingEffect(this);
            });
            
            card.addEventListener('mouseenter', function() {
                this.querySelector('.contact-icon').textContent = '🔗';
            });
            
            card.addEventListener('mouseleave', function() {
                this.querySelector('.contact-icon').textContent = '💼';
            });
        }
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.25)';
            this.style.backdropFilter = 'blur(15px)';
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
            this.style.backdropFilter = 'blur(10px)';
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/**
 * Payment processing-style effect for interactions
 */
function addPaymentProcessingEffect(element) {
    const originalBackground = element.style.background;
    
    element.style.background = 'rgba(40, 167, 69, 0.2)';
    element.style.borderColor = '#28A745';
    
    // Add processing dots
    const processingDots = document.createElement('div');
    processingDots.innerHTML = '<span style="animation: pulse 1s infinite;">●</span><span style="animation: pulse 1s infinite 0.2s;">●</span><span style="animation: pulse 1s infinite 0.4s;">●</span>';
    processingDots.style.cssText = 'position: absolute; top: 5px; right: 10px; font-size: 0.6rem; color: #28A745;';
    
    element.style.position = 'relative';
    element.appendChild(processingDots);
    
    setTimeout(() => {
        element.style.background = originalBackground;
        element.style.borderColor = '';
        if (processingDots.parentNode) {
            processingDots.remove();
        }
    }, 1500);
}

/**
 * Animated KPI counters with ParentPay dashboard style
 */
function initKPICounters() {
    const kpiCards = document.querySelectorAll('.kpi-card');
    
    const kpiObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateKPICounter(entry.target);
                kpiObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });
    
    kpiCards.forEach(card => {
        kpiObserver.observe(card);
        
        // Add dashboard-style hover effects
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #00AEEF 0%, #0095D1 100%)';
            this.style.color = 'white';
            this.style.transform = 'translateY(-8px) scale(1.05)';
            
            const kpiNumber = this.querySelector('.kpi-number');
            const kpiLabel = this.querySelector('.kpi-label');
            if (kpiNumber) kpiNumber.style.color = 'white';
            if (kpiLabel) kpiLabel.style.color = 'rgba(255, 255, 255, 0.9)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = '#FFFFFF';
            this.style.color = '';
            this.style.transform = 'translateY(0) scale(1)';
            
            const kpiNumber = this.querySelector('.kpi-number');
            const kpiLabel = this.querySelector('.kpi-label');
            if (kpiNumber) kpiNumber.style.color = '#00AEEF';
            if (kpiLabel) kpiLabel.style.color = '#666666';
        });
    });
}

/**
 * Animate KPI counter with payment platform styling
 */
function animateKPICounter(card) {
    const numberElement = card.querySelector('.kpi-number');
    if (!numberElement) return;
    
    const text = numberElement.textContent.trim();
    const hasPercent = text.includes('%');
    const hasPlus = text.includes('+');
    const hasDot = text.includes('.');
    
    let targetNumber = parseFloat(text.replace(/[^\d.]/g, ''));
    if (isNaN(targetNumber)) return;
    
    let currentNumber = 0;
    const duration = 2500;
    const startTime = performance.now();
    
    function updateCounter(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Smooth easing function for payment platform feel
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        currentNumber = targetNumber * easeOutCubic;
        
        let displayValue;
        if (hasPercent) {
            displayValue = Math.round(currentNumber) + '%';
        } else if (hasPlus && !hasDot) {
            displayValue = Math.round(currentNumber) + '+';
        } else if (hasDot) {
            displayValue = currentNumber.toFixed(1);
        } else {
            displayValue = Math.round(currentNumber).toString();
        }
        
        numberElement.textContent = displayValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            // Add completion effect
            card.style.boxShadow = '0 10px 30px rgba(0, 174, 239, 0.3)';
            setTimeout(() => {
                card.style.boxShadow = '';
            }, 500);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

/**
 * Skill pill interactions with ParentPay UX patterns
 */
function initSkillInteractions() {
    const skillPills = document.querySelectorAll('.skill-pill');
    const skillWidgets = document.querySelectorAll('.skill-widget');
    
    skillPills.forEach(pill => {
        pill.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 8px 20px rgba(0, 174, 239, 0.4)';
        });
        
        pill.addEventListener('mouseleave', function() {
            if (!this.classList.contains('skill-selected')) {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            }
        });
        
        pill.addEventListener('click', function() {
            // Remove selection from other pills
            skillPills.forEach(otherPill => {
                otherPill.classList.remove('skill-selected');
                otherPill.style.transform = 'translateY(0) scale(1)';
                otherPill.style.boxShadow = 'none';
            });
            
            // Select this pill
            this.classList.add('skill-selected');
            this.style.transform = 'translateY(-3px) scale(1.08)';
            this.style.boxShadow = '0 12px 25px rgba(0, 174, 239, 0.5)';
            
            
            // Clear selection after delay
            setTimeout(() => {
                this.classList.remove('skill-selected');
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            }, 3000);
        });
        
        // Keyboard accessibility
        pill.setAttribute('tabindex', '0');
        pill.setAttribute('role', 'button');
        pill.setAttribute('aria-label', `${pill.textContent} skill - click to highlight`);
        
        pill.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Skill widget hover effects
    skillWidgets.forEach(widget => {
        widget.addEventListener('mouseenter', function() {
            const pills = this.querySelectorAll('.skill-pill');
            pills.forEach((pill, index) => {
                setTimeout(() => {
                    pill.style.transform = 'translateY(-2px)';
                }, index * 50);
            });
        });
        
        widget.addEventListener('mouseleave', function() {
            const pills = this.querySelectorAll('.skill-pill');
            pills.forEach(pill => {
                if (!pill.classList.contains('skill-selected')) {
                    pill.style.transform = 'translateY(0)';
                }
            });
        });
    });
}

/**
 * Section reveal animations with ParentPay dashboard timing
 */
function initSectionReveal() {
    const sections = document.querySelectorAll('.dashboard-section');
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealSection(entry.target);
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    sections.forEach(section => {
        // Initialize hidden state
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        sectionObserver.observe(section);
    });
}

/**
 * Reveal section with dashboard-style animations
 */
function revealSection(section) {
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
    section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    
    // Animate section title
    const sectionTitle = section.querySelector('.section-title');
    if (sectionTitle) {
        setTimeout(() => {
            sectionTitle.style.transform = 'translateX(0)';
            sectionTitle.style.opacity = '1';
        }, 200);
    }
    
    // Stagger child element animations
    const childElements = section.querySelectorAll('.kpi-card, .skill-widget, .experience-card, .project-widget, .alignment-card, .cert-item');
    childElements.forEach((child, index) => {
        child.style.opacity = '0';
        child.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
            child.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 150 + (index * 100));
    });
}

/**
 * Project interactions with payment platform styling
 */
function initProjectInteractions() {
    const projectWidgets = document.querySelectorAll('.project-widget');
    
    projectWidgets.forEach(widget => {
        widget.addEventListener('mouseenter', function() {
            // Animate tech tags
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'translateY(-2px) scale(1.05)';
                    tag.style.boxShadow = '0 4px 12px rgba(0, 174, 239, 0.2)';
                }, index * 30);
            });
            
            // Animate impact metrics
            const impactMetrics = this.querySelectorAll('.impact-metric');
            impactMetrics.forEach(metric => {
                metric.style.background = '#00AEEF';
                metric.style.color = 'white';
                metric.style.transform = 'translateY(-2px)';
            });
        });
        
        widget.addEventListener('mouseleave', function() {
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
                tag.style.transform = 'translateY(0) scale(1)';
                tag.style.boxShadow = 'none';
            });
            
            const impactMetrics = this.querySelectorAll('.impact-metric');
            impactMetrics.forEach(metric => {
                metric.style.background = '#F5F5F5';
                metric.style.color = '';
                metric.style.transform = 'translateY(0)';
            });
        });
        
        // Click interaction for project focus
        widget.addEventListener('click', function() {
            const projectTitle = this.querySelector('.project-title').textContent;
            
            // Add temporary highlight
            this.style.borderColor = '#00AEEF';
            this.style.boxShadow = '0 0 30px rgba(0, 174, 239, 0.3)';
            
            setTimeout(() => {
                this.style.borderColor = '';
                this.style.boxShadow = '';
            }, 2000);
        });
    });
}

/**
 * Enhanced print functionality with ParentPay branding
 */
function initPrintFunctionality() {
    // Create ParentPay-styled print button
    const printButton = document.createElement('button');
    printButton.innerHTML = '🖨️ Print ParentPay Resume';
    printButton.className = 'parentpay-print-button';
    printButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #00AEEF 0%, #0095D1 100%);
        color: white;
        border: none;
        padding: 16px 24px;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(0, 174, 239, 0.4);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1000;
        font-family: "Poppins", sans-serif;
        display: flex;
        align-items: center;
        gap: 10px;
        border: 2px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
    `;
    
    printButton.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, #0095D1 0%, #003366 100%)';
        this.style.transform = 'translateY(-4px) scale(1.05)';
        this.style.boxShadow = '0 15px 40px rgba(0, 174, 239, 0.5)';
    });
    
    printButton.addEventListener('mouseleave', function() {
        this.style.background = 'linear-gradient(135deg, #00AEEF 0%, #0095D1 100%)';
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0, 174, 239, 0.4)';
    });
    
    printButton.addEventListener('click', function() {
        // Visual feedback with ParentPay colors
        this.style.background = 'linear-gradient(135deg, #28A745 0%, #20A039 100%)';
        this.innerHTML = '✓ Preparing ParentPay Resume...';
        
        optimizeForParentPayPrint();
        
        setTimeout(() => {
            try {
                window.print();
            } catch (error) {
            }
            
            // Reset button
            setTimeout(() => {
                this.style.background = 'linear-gradient(135deg, #00AEEF 0%, #0095D1 100%)';
                this.innerHTML = '🖨️ Print ParentPay Resume';
            }, 2000);
        }, 1200);
    });
    
    document.body.appendChild(printButton);
    
    // Handle print events
    window.addEventListener('beforeprint', optimizeForParentPayPrint);
    window.addEventListener('afterprint', restoreAfterPrint);
}

/**
 * Optimize layout for ParentPay-branded printing
 */
function optimizeForParentPayPrint() {
    // Make all sections visible
    const sections = document.querySelectorAll('.dashboard-section');
    sections.forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
        section.style.pageBreakInside = 'avoid';
    });
    
    // Reset all animations for clean print
    const animatedElements = document.querySelectorAll('.kpi-card, .skill-widget, .experience-card, .project-widget, .alignment-card, .cert-item');
    animatedElements.forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.animation = 'none';
        element.style.transition = 'none';
    });
    
    // Hide print button
    const printButton = document.querySelector('.parentpay-print-button');
    if (printButton) {
        printButton.style.display = 'none';
    }
}

/**
 * Restore normal view after printing
 */
function restoreAfterPrint() {
    const printButton = document.querySelector('.parentpay-print-button');
    if (printButton) {
        printButton.style.display = 'flex';
    }
}

/**
 * Payment platform-inspired effects
 */
function initPaymentPlatformEffects() {
    // Add subtle pulse to ParentPay alignment section
    const alignmentCards = document.querySelectorAll('.alignment-card');
    alignmentCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, rgba(0, 174, 239, 0.05) 0%, rgba(0, 174, 239, 0.1) 100%)';
            this.style.borderColor = '#00AEEF';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = '#FFFFFF';
            this.style.borderColor = '#E0E0E0';
        });
        
        // Add payment processing-style click effect
        card.addEventListener('click', function() {
            const title = this.querySelector('.alignment-title').textContent;
            
            // Add temporary glow effect
            this.style.boxShadow = '0 0 30px rgba(0, 174, 239, 0.4), inset 0 0 20px rgba(0, 174, 239, 0.1)';
            setTimeout(() => {
                this.style.boxShadow = '';
            }, 1500);
        });
    });
    
    // Add wave effect to footer
    const footer = document.querySelector('.parentpay-footer');
    if (footer) {
        footer.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #003366 0%, #00AEEF 100%)';
        });
        
        footer.addEventListener('mouseleave', function() {
            this.style.background = '#003366';
        });
    }
}

/**
 * Accessibility features with ParentPay compliance
 */
function initAccessibilityFeatures() {
    // Add ARIA labels for interactive elements
    const interactiveElements = document.querySelectorAll('.skill-pill, .contact-card, .project-widget, .alignment-card');
    interactiveElements.forEach(element => {
        element.setAttribute('role', 'button');
        element.setAttribute('tabindex', '0');
    });
    
    // Enhanced focus management
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // High contrast mode support
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast-mode');
    }
    
    // Reduced motion support
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        const style = document.createElement('style');
        style.textContent = `
            .reduced-motion * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Keyboard navigation with ParentPay UX patterns
 */
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Ctrl+P for print
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            const printButton = document.querySelector('.parentpay-print-button');
            if (printButton) {
                printButton.click();
            }
        }
        
        // Escape to dismiss notifications
        if (e.key === 'Escape') {
            dismissAllNotifications();
        }
        
        // Alt + Arrow keys for section navigation
        if (e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
            e.preventDefault();
            navigateParentPaySections(e.key === 'ArrowDown' ? 1 : -1);
        }
        
        // Spacebar for skill highlighting
        if (e.key === ' ' && e.target.classList.contains('skill-pill')) {
            e.preventDefault();
            e.target.click();
        }
    });
}

/**
 * Navigate between sections with ParentPay-style feedback
 */
function navigateParentPaySections(direction) {
    const sections = Array.from(document.querySelectorAll('.dashboard-section'));
    const currentSection = sections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
    });
    
    if (currentSection) {
        const currentIndex = sections.indexOf(currentSection);
        const targetIndex = currentIndex + direction;
        
        if (targetIndex >= 0 && targetIndex < sections.length) {
            sections[targetIndex].scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            const sectionTitle = sections[targetIndex].querySelector('.section-title').textContent;
        }
    }
}

/**
 * Dismiss all notifications
 */
function dismissAllNotifications() {
    const notifications = document.querySelectorAll('[style*="position: fixed"][style*="top:"]');
    notifications.forEach(notification => {
        if (notification.innerHTML.includes('💙') || notification.innerHTML.includes('✅') || notification.innerHTML.includes('⚠️') || notification.innerHTML.includes('❌')) {
            notification.click();
        }
    });
}

/**
 * Export ParentPay Resume functionality
 */
window.ParentPayResumeApp = {
    navigateSections: navigateParentPaySections,
    optimizePrint: optimizeForParentPayPrint,
    dismissNotifications: dismissAllNotifications
};

/**
 * Initialize ParentPay theme detection
 */
function initParentPayTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    function handleThemeChange(e) {
        if (e.matches) {
            document.body.classList.add('parentpay-dark-mode');
        } else {
            document.body.classList.remove('parentpay-dark-mode');
        }
    }
    
    prefersDark.addEventListener('change', handleThemeChange);
    handleThemeChange(prefersDark);
}

// Initialize ParentPay theme
initParentPayTheme();

// Add ParentPay-specific performance monitoring
console.log('🎯 ParentPay Resume loaded successfully!');
console.log('💙 Showcasing Manish Ghorpade\'s alignment with ParentPay\'s mission');
console.log('🚀 Ready for ParentPay application review');
