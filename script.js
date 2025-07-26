 // Dark / Light Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// Check if user already selected a theme (from localStorage)
if (localStorage.getItem('theme') === 'dark') {
  root.style.setProperty('--bg-color', '#121212');
  root.style.setProperty('--text-color', '#ffffff');
  themeToggleBtn.textContent = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
  if (root.style.getPropertyValue('--bg-color') === '#121212') {
    // Switch to light mode
    root.style.setProperty('--bg-color', '#ffffff');
    root.style.setProperty('--text-color', '#333333');
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    // Switch to dark mode
    root.style.setProperty('--bg-color', '#121212');
    root.style.setProperty('--text-color', '#ffffff');
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});

// Form Validation (Simple)
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields!');
    return;
  }

  // Show success message
  alert('Thank you! Your message has been sent.');

  // Clear form
  form.reset();
});
