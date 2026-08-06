/**
 * Axiom Lelang — Main JavaScript (v2.0 Gladia Redesign)
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // ── 1. Announcement Bar Close ──
  const announcementBar = document.getElementById('announcement-bar');
  const announcementClose = document.getElementById('announcement-close');

  if (announcementClose && announcementBar) {
    // Check if previously closed in session
    if (sessionStorage.getItem('announcementClosed') === 'true') {
      announcementBar.style.display = 'none';
    }

    announcementClose.addEventListener('click', () => {
      announcementBar.style.display = 'none';
      sessionStorage.setItem('announcementClosed', 'true');
    });
  }

  // ── 2. Navbar Scroll Effect ──
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ── 3. Mobile Navigation Menu Toggle ──
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    // Close menu when clicking links
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

  // ── 5. FAQ Accordion ──
  const faqAccordion = document.getElementById('faq-accordion');

  if (faqAccordion) {
    const faqItems = faqAccordion.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      const panel = item.querySelector('.faq-panel');

      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
          otherItem.querySelector('.faq-panel').style.maxHeight = null;
        });

        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  }

  // ── 6. Scroll Reveal Animation (IntersectionObserver) ──
  const revealElements = document.querySelectorAll('.reveal');

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
