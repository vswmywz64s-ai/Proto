'use strict';

/* ═══════════════════════════════════════════════════════
   REVIEWS DATA
═══════════════════════════════════════════════════════ */
const REVIEWS = [
  {
    name: 'Sarah Mitchell',
    initials: 'SM',
    color: '#1a2e52',
    date: '2 weeks ago',
    stars: 5,
    text: 'Absolutely wonderful stay! The breakfast alone is worth booking for — full Scottish with the most amazing Stornoway black pudding and freshly baked bread. The room was beautifully furnished with lovely Victorian touches. The staff were so warm and helpful with Edinburgh recommendations. We\'ll definitely be back!'
  },
  {
    name: 'James & Helen Porter',
    initials: 'JP',
    color: '#7c3aed',
    date: '1 month ago',
    stars: 5,
    text: 'Gem of a find in Edinburgh! We stayed in the Garden View room and it was stunning — roll-top bath, four-poster bed, gorgeous garden view. The location is perfect, just a short bus ride from the Royal Mile. Incredibly attentive hosts who went above and beyond to make our anniversary special.'
  },
  {
    name: 'Björn Lindqvist',
    initials: 'BL',
    color: '#065f46',
    date: '3 weeks ago',
    stars: 5,
    text: 'Came from Sweden for the Edinburgh Festival and this was the perfect base. Quiet, elegant, and genuinely comfortable. The breakfast was extraordinary — I had the smoked salmon and scrambled eggs every morning without fail. The Victorian building is stunning and very well maintained. Highly recommend!'
  },
  {
    name: 'Patricia O\'Sullivan',
    initials: 'PO',
    color: '#92400e',
    date: '2 months ago',
    stars: 5,
    text: 'This is my third visit to Allison House and it just gets better every time. The owners clearly take enormous pride in their hotel. Fresh flowers in the room, luxury toiletries, and that incredible breakfast. Free parking is a massive bonus in Edinburgh. Already booked for New Year!'
  },
  {
    name: 'David & Karen Walsh',
    initials: 'DW',
    color: '#be123c',
    date: '1 month ago',
    stars: 5,
    text: 'We stayed here for our 25th wedding anniversary and couldn\'t have asked for more. The Superior room with the roll-top bath was pure luxury. Staff surprised us with champagne and chocolates — such a thoughtful touch! Breakfast is phenomenal. Edinburgh is lucky to have such a gem.'
  },
  {
    name: 'Thomas Andersen',
    initials: 'TA',
    color: '#0f766e',
    date: '3 months ago',
    stars: 5,
    text: 'Visited Edinburgh for a conference and Allison House was the perfect retreat. Peaceful, spotlessly clean, beautifully decorated. The free WiFi was fast and reliable for my work. Breakfast set me up perfectly for long conference days. The staff knew the best restaurants in the city too — their tips were spot on!'
  },
  {
    name: 'Fiona MacGregor',
    initials: 'FM',
    color: '#4338ca',
    date: '6 weeks ago',
    stars: 5,
    text: 'As a Scot living away from home, visiting Allison House felt like being welcomed back. Genuine Scottish hospitality at its finest. The building is gorgeous, the rooms are immaculate, and the breakfast — och, the breakfast! Locally sourced ingredients, made with love. 10/10 would recommend to anyone visiting Edinburgh.'
  },
  {
    name: 'Michael & Jenny Thornton',
    initials: 'MT',
    color: '#b45309',
    date: '2 months ago',
    stars: 5,
    text: 'Stayed in the Family Suite with our two teenagers and everyone was happy — which is no small achievement! Spacious room, great WiFi, and the kids actually loved the Victorian décor. Breakfast was a proper event: too many amazing choices! The staff were great with the children. Perfect Edinburgh family base.'
  },
  {
    name: 'Amélie Dubois',
    initials: 'AD',
    color: '#7e22ce',
    date: '5 weeks ago',
    stars: 5,
    text: 'Magnifique! My first time in Scotland and Allison House made it absolutely perfect. The Victorian architecture, the cosy rooms, the incredible breakfasts... I felt completely at home. The neighbourhood is quiet and beautiful, yet so well connected to everything. I will tell all my friends in Paris to stay here!'
  }
];

/* ═══════════════════════════════════════════════════════
   GALLERY DATA
═══════════════════════════════════════════════════════ */
const GALLERY_LABELS = [
  'Victorian Facade',
  'Scottish Breakfast',
  'Superior Room',
  'Walled Garden',
  'Guest Lounge',
  'Roll-top Bath'
];

const GALLERY_COLORS = [
  'linear-gradient(145deg, #0f1c36 0%, #1a2e52 60%, #223666 100%)',
  'linear-gradient(145deg, #3d2b1f 0%, #6b4226 60%, #8b5e3c 100%)',
  'linear-gradient(145deg, #1e3a5f 0%, #2c5282 100%)',
  'linear-gradient(145deg, #1a3a1a 0%, #2d5a2d 60%, #3a7a3a 100%)',
  'linear-gradient(145deg, #2e1a1a 0%, #5a2d2d 60%, #8b4444 100%)',
  'linear-gradient(145deg, #1a2e3a 0%, #2d4a5a 60%, #3a6680 100%)'
];

/* ═══════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════ */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
})();

/* ═══════════════════════════════════════════════════════
   PARALLAX HERO
═══════════════════════════════════════════════════════ */
(function initParallax() {
  const el = document.getElementById('heroParallax');
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        el.style.transform = `translateY(${scrolled * 0.35}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ═══════════════════════════════════════════════════════
   COUNTER ANIMATION
═══════════════════════════════════════════════════════ */
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const isFloat = String(target).includes('.');
  const duration = 1800;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = eased * target;
    el.textContent = isFloat ? value.toFixed(1) : Math.floor(value).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ═══════════════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════════════ */
(function initReveal() {
  const counters = new Set(document.querySelectorAll('[data-target]'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-visible');
      if (counters.has(el)) animateCounter(el);
      io.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, [data-target]').forEach((el, i) => {
    if (!el.classList.contains('reveal')) { io.observe(el); return; }
    el.style.transitionDelay = `${(i % 4) * 60}ms`;
    io.observe(el);
  });
})();

/* ═══════════════════════════════════════════════════════
   REVIEWS CAROUSEL
═══════════════════════════════════════════════════════ */
(function initReviews() {
  const carousel = document.getElementById('reviewsCarousel');
  const prevBtn = document.getElementById('reviewPrev');
  const nextBtn = document.getElementById('reviewNext');
  const dotsContainer = document.getElementById('carouselDots');

  function getPerPage() {
    if (window.innerWidth < 480) return 1;
    if (window.innerWidth < 900) return 2;
    return 3;
  }

  let perPage = getPerPage();
  let current = 0;
  let total = Math.ceil(REVIEWS.length / perPage);
  let autoTimer;

  function renderStars() {
    return Array.from({ length: 5 }, () =>
      `<svg width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
    ).join('');
  }

  function renderGoogleIcon() {
    return `<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" class="google-icon">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>`;
  }

  function buildCarousel() {
    perPage = getPerPage();
    total = Math.ceil(REVIEWS.length / perPage);
    if (current >= total) current = total - 1;

    const track = document.createElement('div');
    track.className = 'reviews-track';
    track.style.width = `${total * 100}%`;

    for (let page = 0; page < total; page++) {
      const group = document.createElement('div');
      group.style.cssText = `display:flex;width:${100 / total}%;gap:0;`;

      const pageReviews = REVIEWS.slice(page * perPage, page * perPage + perPage);
      pageReviews.forEach(r => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.style.minWidth = `${100 / perPage}%`;
        card.innerHTML = `
          <div class="review-inner">
            <span class="review-quote" aria-hidden="true">"</span>
            <div class="review-header">
              <div class="reviewer-avatar" style="background:${r.color}">${r.initials}</div>
              <div class="reviewer-info">
                <div class="reviewer-name">${r.name}</div>
                <div class="reviewer-meta">
                  <div class="review-stars" aria-label="5 stars">${renderStars()}</div>
                  <span class="reviewer-date">${r.date}</span>
                </div>
              </div>
              ${renderGoogleIcon()}
            </div>
            <p class="review-text">${r.text}</p>
          </div>`;
        group.appendChild(card);
      });

      track.appendChild(group);
    }

    carousel.innerHTML = '';
    carousel.appendChild(track);

    // Dots
    dotsContainer.innerHTML = '';
    dotsContainer.setAttribute('aria-label', `${total} pages of reviews`);
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.className = `carousel-dot${i === current ? ' active' : ''}`;
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Go to review page ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }

    goTo(current, false);
  }

  function goTo(idx, animate = true) {
    current = Math.max(0, Math.min(idx, total - 1));
    const track = carousel.querySelector('.reviews-track');
    if (track) {
      track.style.transition = animate ? 'transform 0.4s cubic-bezier(0.4,0,0.2,1)' : 'none';
      track.style.transform = `translateX(-${current * (100 / total)}%)`;
    }
    dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    resetAuto();
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      goTo(current < total - 1 ? current + 1 : 0);
    }, 5500);
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  let startX = 0;
  carousel.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
  });

  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (!lb.hidden) return;
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newPerPage = getPerPage();
      if (newPerPage !== perPage) buildCarousel();
    }, 200);
  });

  buildCarousel();
  resetAuto();
})();

/* ═══════════════════════════════════════════════════════
   GALLERY LIGHTBOX
═══════════════════════════════════════════════════════ */
(function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const imgEl = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');

  let currentIdx = 0;

  function show(idx) {
    currentIdx = ((idx % GALLERY_LABELS.length) + GALLERY_LABELS.length) % GALLERY_LABELS.length;
    imgEl.style.background = GALLERY_COLORS[currentIdx];
    imgEl.style.display = 'flex';
    imgEl.style.alignItems = 'center';
    imgEl.style.justifyContent = 'center';
    imgEl.style.color = 'rgba(255,255,255,0.2)';
    caption.textContent = GALLERY_LABELS[currentIdx];
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function hide() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.gallery-item').forEach(btn => {
    btn.addEventListener('click', () => show(parseInt(btn.dataset.index || '0', 10)));
  });

  closeBtn.addEventListener('click', hide);
  prevBtn.addEventListener('click', () => show(currentIdx - 1));
  nextBtn.addEventListener('click', () => show(currentIdx + 1));

  lightbox.addEventListener('click', e => { if (e.target === lightbox) hide(); });

  document.addEventListener('keydown', e => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') hide();
    if (e.key === 'ArrowLeft') show(currentIdx - 1);
    if (e.key === 'ArrowRight') show(currentIdx + 1);
  });
})();

/* ═══════════════════════════════════════════════════════
   BOOKING FORM
═══════════════════════════════════════════════════════ */
(function initBookingForm() {
  const form = document.getElementById('bookingForm');
  const checkin = document.getElementById('checkin');
  const checkout = document.getElementById('checkout');
  const guests = document.getElementById('guests');
  const submitBtn = document.getElementById('checkAvailBtn');
  const successEl = document.getElementById('formSuccess');

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  checkin.min = today;
  checkout.min = today;

  checkin.addEventListener('change', () => {
    if (checkin.value) {
      const next = new Date(checkin.value);
      next.setDate(next.getDate() + 1);
      checkout.min = next.toISOString().split('T')[0];
      if (checkout.value && checkout.value <= checkin.value) {
        checkout.value = next.toISOString().split('T')[0];
      }
    }
    clearError('checkin');
  });

  checkout.addEventListener('change', () => clearError('checkout'));
  guests.addEventListener('change', () => clearError('guests'));

  function showError(fieldId, msg) {
    const field = document.getElementById(fieldId);
    const errEl = document.getElementById(fieldId + '-error');
    if (field) field.classList.add('error');
    if (errEl) errEl.textContent = msg;
  }

  function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errEl = document.getElementById(fieldId + '-error');
    if (field) field.classList.remove('error');
    if (errEl) errEl.textContent = '';
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    if (!checkin.value) { showError('checkin', 'Please select a check-in date'); valid = false; }
    else clearError('checkin');

    if (!checkout.value) { showError('checkout', 'Please select a check-out date'); valid = false; }
    else if (checkout.value <= checkin.value) { showError('checkout', 'Check-out must be after check-in'); valid = false; }
    else clearError('checkout');

    if (!guests.value) { showError('guests', 'Please select number of guests'); valid = false; }
    else clearError('guests');

    if (!valid) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin 1s linear infinite" aria-hidden="true"><path d="M21 12a9 9 0 11-6.219-8.56"/></svg>
      Checking...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Check Availability`;
      successEl.hidden = false;
      successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 1400);
  });
})();

/* ═══════════════════════════════════════════════════════
   BACK TO TOP
═══════════════════════════════════════════════════════ */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    const show = window.scrollY > 400;
    btn.hidden = !show;
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ═══════════════════════════════════════════════════════
   CSS ANIMATION FOR SPINNER
═══════════════════════════════════════════════════════ */
const spinStyle = document.createElement('style');
spinStyle.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(spinStyle);
