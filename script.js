// Dark mode toggle (unchanged)
const body = document.body;
const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    this.textContent = '☽'; 
  } else {
    this.textContent = '☀'; 
  }
});

// Modal
const welcomeModal = document.getElementById('welcomeModal');
const modalBlogBtn = document.getElementById('modalBlogBtn');
const modalChartBtn = document.getElementById('modalChartBtn');

// Sections
const blogPostSection = document.getElementById('blogPostSection');
const analysisChartSection = document.getElementById('analysisChartSection');
const header = document.querySelector('.site-header');
const topNav = document.querySelector('.top-nav');

// Links/Buttons
const goToChartLink = document.getElementById('goToChartLink');
const backToBlogBtn = document.getElementById('backToBlogBtn');

// Show Modal on page load
window.addEventListener('load', () => {
  welcomeModal.classList.add('show-modal');
});

// If user chooses "Blog Post"
modalBlogBtn.addEventListener('click', () => {
  welcomeModal.classList.remove('show-modal');
  // Show blog post, hide chart, show header/nav
  blogPostSection.style.display = 'block';
  analysisChartSection.style.display = 'none';
  header.style.display = 'block';
  topNav.style.display = 'block';
});

// If user chooses "Poem Analysis Chart"
modalChartBtn.addEventListener('click', () => {
  welcomeModal.classList.remove('show-modal');
  // Hide blog post, show chart, hide header/nav
  blogPostSection.style.display = 'none';
  analysisChartSection.style.display = 'block';
  header.style.display = 'none';
  topNav.style.display = 'none';
});

// If user clicks "Poem Analysis Chart" in the nav
goToChartLink.addEventListener('click', (e) => {
  e.preventDefault();
  // Hide blog post, show chart, hide header/nav
  blogPostSection.style.display = 'none';
  analysisChartSection.style.display = 'block';
  header.style.display = 'none';
  topNav.style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// If user clicks "Return to Blog Post"
backToBlogBtn.addEventListener('click', () => {
  // Hide chart, show blog post, show header/nav
  analysisChartSection.style.display = 'none';
  blogPostSection.style.display = 'block';
  header.style.display = 'block';
  topNav.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Example fade-out approach (optional)
modalBlogBtn.addEventListener('click', () => {
  welcomeModal.classList.add('fade-out');
  setTimeout(() => {
    welcomeModal.classList.remove('show-modal', 'fade-out');
    // your existing code that shows the blog, etc.
  }, 400); // matches 0.4s transition
});
