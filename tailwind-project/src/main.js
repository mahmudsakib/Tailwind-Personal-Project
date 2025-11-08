import './main.css'
import './components/header.js'

const btn = document.getElementById('btn')
if (btn) {
  btn.addEventListener('click', () => {
    btn.textContent = 'Clicked!'
    btn.classList.add('opacity-80')
  })
}

console.log('Vite + Tailwind project loaded')
