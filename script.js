 // 1. modo oscuro 
    const btnTheme  = document.getElementById('btn-theme');
    const html      = document.documentElement;

    // Recuperar preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      html.setAttribute('data-theme', savedTheme);
      btnTheme.textContent = savedTheme === 'dark' ? '🌙 Tema' : '☀️ Tema';
    }

    btnTheme.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next    = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      btnTheme.textContent = next === 'dark' ? '🌙 Tema' : '☀️ Tema';
    });


    // 2. menu hamburgusa ─
    const hamburger = document.getElementById('hamburger');
    const nav       = document.getElementById('main-nav');

    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar menú al hacer clic
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });


    // 3. validar la formula
    const form       = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function showError(inputId, errorId, show) {
      const input = document.getElementById(inputId);
      const error = document.getElementById(errorId);
      input.classList.toggle('error', show);
      error.classList.toggle('show', show);
    }

    function validateField(id, errorId, condition) {
      const val = document.getElementById(id).value.trim();
      const valid = condition(val);
      showError(id, errorId, !valid);
      return valid;
    }

    // Limpiar error
    ['nombre', 'email', 'asunto', 'mensaje'].forEach(id => {
      document.getElementById(id).addEventListener('input', () => {
        showError(id, 'err-' + id, false);
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault(); 

      const okNombre  = validateField('nombre',  'err-nombre',  v => v.length >= 2);
      const okEmail   = validateField('email',   'err-email',   v => emailRegex.test(v));
      const okAsunto  = validateField('asunto',  'err-asunto',  v => v.length >= 3);
      const okMensaje = validateField('mensaje', 'err-mensaje', v => v.length >= 10);

      if (okNombre && okEmail && okAsunto && okMensaje) {
        // simular el envio 
        form.style.display = 'none';
        formSuccess.classList.add('show');
      }
    });


    // 4. animacion de entrada
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  
    // Cursor animacion
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');

    document.addEventListener('mousemove', e => {
      dot.style.transform  = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      ring.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`;
    });

    // 
    document.querySelectorAll('a, button, .card').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('expand'));
      el.addEventListener('mouseleave', () => ring.classList.remove('expand'));
    });

    // particaulas para el click
    document.addEventListener('click', e => {
      const count = 8;
      for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'click-particle';
        const angle = (360 / count) * i;
        const dist  = 40 + Math.random() * 30;
        const rad   = angle * Math.PI / 180;
        p.style.setProperty('--dx', `${Math.cos(rad) * dist}px`);
        p.style.setProperty('--dy', `${Math.sin(rad) * dist}px`);
        p.style.left = e.clientX - 3 + 'px';
        p.style.top  = e.clientY - 3 + 'px';
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 600);
      }
    });

    // scroll progreso
    const scrollBar = document.getElementById('scroll-bar');
    document.addEventListener('scroll', () => {
      const total   = document.body.scrollHeight - window.innerHeight;
      const percent = (window.scrollY / total) * 100;
      scrollBar.style.width = percent + '%';
    });

    // ─ paralax en hero 
    const heroText = document.querySelector('.hero-text');
    document.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth  - .5) * 12;
      const y = (e.clientY / window.innerHeight - .5) * 8;
      if (heroText) heroText.style.transform = `translate(${x}px, ${y}px)`;
    });

    // ─ GLOW en tarjetas
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.querySelector('::before'); // trigger
        card.style.setProperty('--mx', x + 'px');
        card.style.setProperty('--my', y + 'px');
        const glow = card.querySelector('.card::before') || card;
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, color-mix(in srgb, var(--accent) 8%, var(--surface)), var(--surface))`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.background = '';
      });
    });
