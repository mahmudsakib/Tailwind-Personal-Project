(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function l(){const o=document.createElement("header");o.className="w-full text-white bg-[var(--primary)]",o.innerHTML=`
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <a href="/index.html" class="text-xl font-bold">Your Name</a>
        </div>
        <nav class="hidden md:flex gap-4">
          <a href="/index.html" class="hover:underline">Home</a>
          <a href="/about.html" class="hover:underline">About</a>
          <a href="/projects.html" class="hover:underline">Projects</a>
          <a href="/contact.html" class="hover:underline">Contact</a>
        </nav>
        <div class="md:hidden">
          <button id="nav-toggle" aria-label="Toggle navigation" class="px-3 py-2 rounded bg-[var(--secondary)]/90">Menu</button>
        </div>
      </div>
    </div>
    <div id="mobile-nav" class="hidden bg-[var(--primary)]/95 md:hidden">
      <div class="px-4 pb-4 space-y-2">
        <a href="/index.html" class="block">Home</a>
        <a href="/about.html" class="block">About</a>
        <a href="/projects.html" class="block">Projects</a>
        <a href="/contact.html" class="block">Contact</a>
      </div>
    </div>
  `,document.body.prepend(o);const r=o.querySelector("#nav-toggle"),n=o.querySelector("#mobile-nav");r&&n&&r.addEventListener("click",()=>{n.classList.toggle("hidden")})}typeof window<"u"&&(window.__portfolio_header_injected||(l(),window.__portfolio_header_injected=!0));const i=document.getElementById("btn");i&&i.addEventListener("click",()=>{i.textContent="Clicked!",i.classList.add("opacity-80")});console.log("Vite + Tailwind project loaded");
