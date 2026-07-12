/* Lenis smooth scroll for the Pacific Edge static site.
   Loaded after vendor/lenis.min.js on every page. Respects reduced-motion. */
(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (typeof Lenis === "undefined") return;

  // Lenis' required base styles (kept minimal, injected once).
  var css =
    "html.lenis,html.lenis body{height:auto}" +
    ".lenis.lenis-smooth{scroll-behavior:auto!important}" +
    ".lenis.lenis-smooth [data-lenis-prevent]{overscroll-behavior:contain}" +
    ".lenis.lenis-stopped{overflow:hidden}" +
    ".lenis.lenis-smooth iframe{pointer-events:none}";
  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  function start() {
    var lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 0.9,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    window.__lenis = lenis;

    // Keep same-page anchor links smooth (Lenis disables native smooth scroll).
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var hash = a.getAttribute("href");
      if (!hash || hash.length < 2) return;
      var el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -72 });
    });
  }

  if (document.readyState !== "loading") start();
  else document.addEventListener("DOMContentLoaded", start);
})();
