/**
 * Axiom Lelang — Main JavaScript (v2.0 Performance Optimized)
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // ── 1. Announcement Bar Close ──
  const announcementBar = document.getElementById('announcement-bar');
  const announcementClose = document.getElementById('announcement-close');

  if (announcementClose && announcementBar) {
    if (sessionStorage.getItem('announcementClosed') === 'true') {
      announcementBar.style.display = 'none';
    }

    announcementClose.addEventListener('click', () => {
      announcementBar.style.display = 'none';
      sessionStorage.setItem('announcementClosed', 'true');
    });
  }

  // ── 2. Navbar Scroll Effect (Optimized with Passive Listener & rAF) ──
  const navbar = document.getElementById('navbar');
  let ticking = false;

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ── 3. Mobile Navigation Menu Toggle ──
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }

  // ── 4. Problem vs Solution Tab Switcher ──
  const tabManual = document.getElementById('tab-btn-manual');
  const tabAxiom = document.getElementById('tab-btn-axiom');
  const panelManual = document.getElementById('panel-manual');
  const panelAxiom = document.getElementById('panel-axiom');

  if (tabManual && tabAxiom && panelManual && panelAxiom) {
    tabManual.addEventListener('click', () => {
      tabManual.classList.add('active');
      tabManual.setAttribute('aria-selected', 'true');
      tabAxiom.classList.remove('active');
      tabAxiom.setAttribute('aria-selected', 'false');

      panelManual.classList.add('active');
      panelAxiom.classList.remove('active');
    });

    tabAxiom.addEventListener('click', () => {
      tabAxiom.classList.add('active');
      tabAxiom.setAttribute('aria-selected', 'true');
      tabManual.classList.remove('active');
      tabManual.setAttribute('aria-selected', 'false');

      panelAxiom.classList.add('active');
      panelManual.classList.remove('active');
    });
  }

  // ── 5. FAQ Accordion (Optimized Layout Batching) ──
  const faqAccordion = document.getElementById('faq-accordion');

  if (faqAccordion) {
    const faqItems = faqAccordion.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      const panel = item.querySelector('.faq-panel');

      if (trigger && panel) {
        trigger.addEventListener('click', () => {
          const isActive = item.classList.contains('active');

          // Batch reads and writes using requestAnimationFrame
          window.requestAnimationFrame(() => {
            faqItems.forEach(otherItem => {
              otherItem.classList.remove('active');
              const otherTrigger = otherItem.querySelector('.faq-trigger');
              const otherPanel = otherItem.querySelector('.faq-panel');
              if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
              if (otherPanel) otherPanel.style.maxHeight = null;
            });

            if (!isActive) {
              item.classList.add('active');
              trigger.setAttribute('aria-expanded', 'true');
              const scrollHeight = panel.scrollHeight;
              panel.style.maxHeight = scrollHeight + 'px';
            }
          });
        });
      }
    });
  }

  // ── 6. Scroll Reveal Animation (IntersectionObserver) ──
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ── 7. Smooth Scroll Offset for Anchor Links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
