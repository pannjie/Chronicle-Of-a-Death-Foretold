import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as d3 from 'd3';

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.step').forEach((el, i) => {
  gsap.from(el, {
    opacity: 0.8,
    y: 40,
    duration: 0.8,
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      scrub: 1.5,
    },
  });
});

gsap.utils.toArray('.step').forEach((el, i) => {
  ScrollTrigger.create({
    trigger: el,
    start: 'top center',
    end: 'bottom center',
    onEnter:     () => { showVideo(i); showWallets(i); },
    onEnterBack: () => { showVideo(i); showWallets(i); },
  });
});

function showVideo(i) {
  gsap.to('[data-visual]', { opacity: 0, duration: 0.8, ease: 'power2.inOut' });
  gsap.to(`[data-visual="${i}"]`, { opacity: 1, duration: 0.8, ease: 'power2.inOut' });

  if (i === 5) {
    gsap.from('.wallet-card', {
      duration: 0.5,
      scale: 0.1,
      y: 40,
      ease: 'power2.inOut',
      stagger: { grid: [7, 15], from: 'center', ease: 'power2.in', amount: 0.5 },
      onComplete: function() {
        gsap.set('.wallet-card', { clearProps: 'transform' });
        this.targets().forEach(el => {
          el.classList.add('hover:scale-125', 'transition-transform', 'duration-200', 'ease-in-out');
        });
      }
    });
  }
}

function showWallets(i) {
  if (i >= 5 && i <= 7) {
    gsap.to('[data-visual="5"]', { opacity: 1, duration: 0.8, ease: 'power2.inOut' });
  } else {
    gsap.to('[data-visual="5"]', { opacity: 0, duration: 0.8, ease: 'power2.inOut' });
  }
}

const hoverEls = document.querySelectorAll('.hover-animate');

hoverEls.forEach(el => {
  gsap.set(el, { backgroundColor: 'rgba(10, 228, 72, 0)', padding: '0 3px' });

  el.addEventListener('mouseenter', () => {
    gsap.to(el, { backgroundColor: 'rgba(10, 228, 72, 1)', color: '#262a33', duration: 0.3, ease: 'power2.out' });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { backgroundColor: 'rgba(10, 228, 72, 0)', color: 'white', duration: 0.3, ease: 'power2.inOut' });
  });
});
