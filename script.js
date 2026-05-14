// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobileBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
}

// GSAP Animations
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // Hero Section
  if (document.querySelector('.hero-content')) {
    gsap.to('.hero-content', { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: 'power3.out' });
    gsap.from('.hero-content', { x: -50 });
  }

  if (document.querySelector('.hero-image-container')) {
    gsap.to('.hero-image-container', { opacity: 1, scale: 1, duration: 1, delay: 0.4, ease: 'back.out(1.7)' });
    gsap.from('.hero-image-container', { scale: 0.8 });
  }

  // Glass Cards Stagger
  const cards = gsap.utils.toArray('.glass-card');
  if (cards.length > 0) {
    gsap.to(cards, {
      scrollTrigger: {
        trigger: cards[0],
        start: 'top 85%'
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }

  // Skill Bars
  const skillBars = gsap.utils.toArray('.skill-bar-fill');
  if (skillBars.length > 0) {
    skillBars.forEach(bar => {
      let width = bar.getAttribute('data-width');
      gsap.to(bar, {
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%'
        },
        width: width + '%',
        duration: 1.5,
        ease: 'power2.out'
      });
    });
  }

  // Timeline Items Stagger
  const timelineItems = gsap.utils.toArray('.timeline-item');
  if (timelineItems.length > 0) {
    gsap.to(timelineItems, {
      scrollTrigger: {
        trigger: timelineItems[0],
        start: 'top 85%'
      },
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }
});
