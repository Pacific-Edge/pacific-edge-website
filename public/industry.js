/* Pacific Edge AI - shared behaviour for industry landing pages.
   Plain vanilla JS, no libraries. Three small features:
   1) scroll-reveal  2) number count-up  3) animated text-message demo
   All of them respect the user's "reduce motion" setting. */
(function () {
  'use strict';

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     1. SCROLL REVEAL
     Adds the class "in" to any .reveal element once it scrolls
     into view, which triggers the CSS fade-up transition.
  --------------------------------------------------------- */
  function setupReveal() {
    var items = document.querySelectorAll('.reveal');
    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { obs.observe(el); });
  }

  /* ---------------------------------------------------------
     2. NUMBER COUNT-UP
     Any <span class="count" data-to="40" data-suffix="%">
     counts from 0 to data-to when it first appears on screen.
  --------------------------------------------------------- */
  function animateCount(el) {
    var to = parseFloat(el.getAttribute('data-to'));
    var dec = (el.getAttribute('data-to').indexOf('.') > -1) ? 1 : 0;
    var prefix = el.getAttribute('data-prefix') || '';
    var dur = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      el.firstChild ? (el.childNodes[0].nodeValue = prefix + (to * eased).toFixed(dec))
                    : (el.textContent = prefix + (to * eased).toFixed(dec));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function setupCounts() {
    var nums = document.querySelectorAll('.count');
    if (reduce || !('IntersectionObserver' in window)) {
      nums.forEach(function (el) {
        var prefix = el.getAttribute('data-prefix') || '';
        el.textContent = prefix + el.getAttribute('data-to');
      });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    nums.forEach(function (el) { obs.observe(el); });
  }

  /* ---------------------------------------------------------
     3. ANIMATED TEXT-MESSAGE DEMO
     Plays the bubbles inside [data-chat] one after another,
     pausing on a "typing" indicator to feel like a real text
     thread. Replays nothing - it runs once when scrolled to.
  --------------------------------------------------------- */
  function playChat(chat) {
    var nodes = Array.prototype.slice.call(chat.children);

    if (reduce) {
      nodes.forEach(function (n) {
        if (n.classList.contains('typing')) { n.remove(); }
        else { n.classList.add('in'); }
      });
      return;
    }

    var i = 0;
    function next() {
      if (i >= nodes.length) return;
      var n = nodes[i];
      if (n.classList.contains('typing')) {
        var hold = parseInt(n.getAttribute('data-typing') || '1100', 10);
        n.classList.add('in');
        setTimeout(function () {
          n.classList.remove('in');
          setTimeout(function () { i++; next(); }, 160);
        }, hold);
      } else if (n.classList.contains('bubble') || n.classList.contains('chat-badge')) {
        var wait = parseInt(n.getAttribute('data-delay') || '260', 10);
        setTimeout(function () {
          n.classList.add('in');
          chat.scrollTop = chat.scrollHeight;
          i++; next();
        }, wait);
      } else { // static rows like the timestamp
        n.classList.add('in');
        i++; next();
      }
    }
    next();
  }

  function setupChats() {
    var chats = document.querySelectorAll('[data-chat]');
    if (!('IntersectionObserver' in window)) {
      chats.forEach(playChat);
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { playChat(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.35 });
    chats.forEach(function (c) { obs.observe(c); });
  }

  /* ---------------------------------------------------------
     3b. ANIMATED MOCK FEED
     .mock[data-live] cards populate their rows one after another
     when scrolled into view, the same "alive" feel as the phone.
     A .mock-typing row shows for a beat, then hands off to the
     row that follows (used for the "Janice is drafting" review).
  --------------------------------------------------------- */
  function playMock(mock) {
    var rows = Array.prototype.slice.call(mock.children).filter(function (n) {
      return n.classList && (n.classList.contains('mock-row') ||
        n.classList.contains('mock-typing') || n.classList.contains('mock-reply'));
    });
    if (reduce) {
      rows.forEach(function (r) {
        if (r.classList.contains('mock-typing')) { r.style.display = 'none'; }
        else { r.classList.add('in'); }
      });
      return;
    }
    var i = 0;
    function next() {
      if (i >= rows.length) return;
      var r = rows[i];
      if (r.classList.contains('mock-typing')) {
        var hold = parseInt(r.getAttribute('data-typing') || '1200', 10);
        r.classList.add('in');
        setTimeout(function () {
          r.classList.remove('in');
          setTimeout(function () { r.style.display = 'none'; i++; next(); }, 180);
        }, hold);
      } else {
        var wait = parseInt(r.getAttribute('data-delay') || '480', 10);
        setTimeout(function () { r.classList.add('in'); i++; next(); }, wait);
      }
    }
    next();
  }

  function setupMocks() {
    var mocks = document.querySelectorAll('.mock[data-live]');
    if (!('IntersectionObserver' in window)) {
      mocks.forEach(playMock);
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { playMock(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    mocks.forEach(function (m) { obs.observe(m); });
  }

  /* ---------------------------------------------------------
     4. FAQ - keep only one answer open at a time (nicer UX)
  --------------------------------------------------------- */
  function setupFaq() {
    var items = document.querySelectorAll('.faq-item');
    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (item.open) {
          items.forEach(function (other) {
            if (other !== item) other.open = false;
          });
        }
      });
    });
  }

  /* ---------------------------------------------------------
     5. Resize embedded dashboard iframe to its content height
  --------------------------------------------------------- */
  function setupDashFrame() {
    window.addEventListener('message', function (e) {
      if (e.data && e.data.type === 'pe-dash-height') {
        var f = document.getElementById('idash');
        if (f && e.data.height > 200) f.style.height = e.data.height + 'px';
      }
    });
  }

  function init() {
    setupReveal();
    setupCounts();
    setupChats();
    setupMocks();
    setupFaq();
    setupDashFrame();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();

/* Pause CSS animations inside off-screen sections, saves battery, keeps it smooth */
(function(){
  try{
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;
    var s = document.createElement('style');
    s.textContent = '.anim-off, .anim-off *{animation-play-state:paused !important}';
    (document.head || document.documentElement).appendChild(s);
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ e.target.classList.toggle('anim-off', !e.isIntersecting); });
    }, { rootMargin: '160px 0px' });
    function arm(){ document.querySelectorAll('header, section, footer').forEach(function(el){ io.observe(el); }); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arm); else arm();
  }catch(e){}
})();

/* Email links always do something visible: still open the mail app, but also copy the
   address and confirm, so "Apply Now" / "Email Us" never feel dead on devices with no mail app set up. */
(function(){
  var EMAIL = 'hello@pacificedge.ai';
  function toast(msg){
    var t = document.createElement('div');
    t.textContent = msg;
    t.setAttribute('style','position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(18px);background:#04130f;color:#eafff6;font:600 14px/1.35 Outfit,system-ui,sans-serif;padding:13px 20px;border-radius:12px;box-shadow:0 18px 44px -16px rgba(0,0,0,.5);z-index:99999;opacity:0;transition:opacity .3s ease,transform .3s ease;max-width:88vw;text-align:center;pointer-events:none');
    document.body.appendChild(t);
    requestAnimationFrame(function(){ t.style.opacity='1'; t.style.transform='translateX(-50%) translateY(0)'; });
    setTimeout(function(){ t.style.opacity='0'; t.style.transform='translateX(-50%) translateY(18px)'; setTimeout(function(){ if(t.parentNode) t.parentNode.removeChild(t); }, 360); }, 3600);
  }
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href^="mailto:"]');
    if(!a) return;
    try{ if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(EMAIL); }catch(_){}
    toast('✉️  ' + EMAIL + ', copied. Email us and we’ll get right back to you!');
  });
})();
