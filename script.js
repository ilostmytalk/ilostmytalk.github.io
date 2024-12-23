
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


const welcomeModal = document.getElementById('welcomeModal');
const modalBlogBtn = document.getElementById('modalBlogBtn');
const modalChartBtn = document.getElementById('modalChartBtn');


const blogPostSection = document.getElementById('blogPostSection');
const analysisChartSection = document.getElementById('analysisChartSection');
const header = document.querySelector('.site-header');
const topNav = document.querySelector('.top-nav');


const goToChartLink = document.getElementById('goToChartLink');
const backToBlogBtn = document.getElementById('backToBlogBtn');


window.addEventListener('load', () => {
  welcomeModal.classList.add('show-modal');
});


modalBlogBtn.addEventListener('click', () => {
  welcomeModal.classList.remove('show-modal');
  
  blogPostSection.style.display = 'block';
  analysisChartSection.style.display = 'none';
  header.style.display = 'block';
  topNav.style.display = 'block';
});


modalChartBtn.addEventListener('click', () => {
  welcomeModal.classList.remove('show-modal');
  
  blogPostSection.style.display = 'none';
  analysisChartSection.style.display = 'block';
  header.style.display = 'none';
  topNav.style.display = 'none';
});


goToChartLink.addEventListener('click', (e) => {
  e.preventDefault();
  
  blogPostSection.style.display = 'none';
  analysisChartSection.style.display = 'block';
  header.style.display = 'none';
  topNav.style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


backToBlogBtn.addEventListener('click', () => {
  
  analysisChartSection.style.display = 'none';
  blogPostSection.style.display = 'block';
  header.style.display = 'block';
  topNav.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


modalBlogBtn.addEventListener('click', () => {
  welcomeModal.classList.add('fade-out');
  setTimeout(() => {
    welcomeModal.classList.remove('show-modal', 'fade-out');
    
  }, 400); 
});
