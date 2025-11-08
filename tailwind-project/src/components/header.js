// Inject a reusable top bar (header) into every page that loads /src/main.js
// Uses CSS variables --primary and --secondary defined in main.css

function createHeader() {
  const header = document.createElement('header')
  header.className = 'w-full text-white bg-[var(--primary)]'
  header.innerHTML = `
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
  `

  // Prepend the header so it's at top of the page
  document.body.prepend(header)

  // mobile toggle
  const toggle = header.querySelector('#nav-toggle')
  const mobileNav = header.querySelector('#mobile-nav')
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden')
    })
  }
}

// Only run once
if (typeof window !== 'undefined') {
  if (!window.__portfolio_header_injected) {
    createHeader()
    window.__portfolio_header_injected = true
  }
}
