// script.js

const skipPromptKey = 'skipPrompt';

// Dark Mode Toggle
const body = document.body;
const toggleBtn = document.getElementById('darkModeToggle');

if (toggleBtn) {
  // Initialize theme based on localStorage
  const savedTheme = localStorage.getItem('theme') || 'dark';
  body.classList.add(`${savedTheme}-mode`);
  toggleBtn.textContent = savedTheme === 'dark' ? '☽' : '☀';

  toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      toggleBtn.textContent = '☀';
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      toggleBtn.textContent = '☽';
    }
  });
}

// References Page Buttons (references.html)
const btnBlog = document.getElementById('btnBlog');
const btnAnalysis = document.getElementById('btnAnalysis');

if (btnBlog) {
  btnBlog.addEventListener('click', () => {
    localStorage.setItem(skipPromptKey, 'true');
    window.location.href = 'index.html#goToBlog';
  });
}

if (btnAnalysis) {
  btnAnalysis.addEventListener('click', () => {
    localStorage.setItem(skipPromptKey, 'true');
    window.location.href = 'index.html#analysisChartSection';
  });
}

// Welcome Modal Elements (index.html)
const welcomeModal = document.getElementById('welcomeModal');
const modalBlogBtn = document.getElementById('modalBlogBtn');
const modalChartBtn = document.getElementById('modalChartBtn');

// Sections on index.html
const blogPostSection = document.getElementById('blogPostSection');
const analysisChartSection = document.getElementById('analysisChartSection');

// Buttons on index.html
const backToBlogBtn = document.getElementById('backToBlogBtn');
const goToReferencesBtn = document.getElementById('goToReferencesBtn');

// Navigation Animation Logic
function updateNavigation(view) {
    const nav = document.querySelector('.top-nav ul');
    const menuItems = nav.querySelectorAll('li');

    menuItems.forEach((item) => {
        const link = item.querySelector('a');
        if (!link) return;

        // Identify menu items by their id
        if (link.id === 'referencesLink') {
            // References should always be visible
            item.classList.remove('hidden');
            return;
        }

        if (link.id === 'blogPostLink') {
            if (view === 'poem') {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
            return;
        }

        // Handle other menu items
        if (view === 'blog') {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Define showBlogPost and showPoemAnalysis if they aren't already defined
if (typeof window.showBlogPost !== 'function') {
  window.showBlogPost = function() {
    if (blogPostSection) {
      // Animate showing the blog post section
      blogPostSection.style.display = 'block';
      blogPostSection.classList.remove('hidden-section');
      blogPostSection.classList.add('visible-section');
    }
    if (analysisChartSection) {
      // Animate hiding the poem analysis section
      analysisChartSection.classList.remove('visible-section');
      analysisChartSection.classList.add('hidden-section');
      // After animation, set display to none
      setTimeout(() => {
        analysisChartSection.style.display = 'none';
      }, 600); // Match the CSS transition duration (0.6s)
    }
    updateNavigation('blog');
  };
}

if (typeof window.showPoemAnalysis !== 'function') {
  window.showPoemAnalysis = function() {
    if (blogPostSection) {
      // Animate hiding the blog post section
      blogPostSection.classList.remove('visible-section');
      blogPostSection.classList.add('hidden-section');
      // After animation, set display to none
      setTimeout(() => {
        blogPostSection.style.display = 'none';
      }, 600); // Match the CSS transition duration (0.6s)
    }
    if (analysisChartSection) {
      // Animate showing the poem analysis section
      analysisChartSection.style.display = 'block';
      analysisChartSection.classList.remove('hidden-section');
      analysisChartSection.classList.add('visible-section');
    }
    updateNavigation('poem');
  };
}

// Handle initial state based on URL hash
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash === '#analysisChartSection') {
        showPoemAnalysis();
    } else if (hash === '#goToBlog') {
        showBlogPost();
    } else {
        // Default behavior: show blog post section
        if (blogPostSection) {
            blogPostSection.style.display = 'block';
            blogPostSection.classList.add('visible-section');
        }
        if (analysisChartSection) {
            analysisChartSection.style.display = 'none';
            analysisChartSection.classList.add('hidden-section');
        }
        updateNavigation('blog');
    }
});

// Handle hash changes
window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (hash === '#analysisChartSection') {
        showPoemAnalysis();
    } else if (hash === '#goToBlog') {
        showBlogPost();
    } else {
        // Default behavior: show blog post section
        if (blogPostSection) {
            blogPostSection.style.display = 'block';
            blogPostSection.classList.remove('hidden-section');
            blogPostSection.classList.add('visible-section');
        }
        if (analysisChartSection) {
            analysisChartSection.style.display = 'none';
            analysisChartSection.classList.remove('visible-section');
            analysisChartSection.classList.add('hidden-section');
        }
        updateNavigation('blog');
    }
});

// Function to Show Both Sections (Default)
function showBothSections() {
    if (blogPostSection) {
        blogPostSection.style.display = 'block';
        blogPostSection.classList.add('visible-section');
    }
    if (analysisChartSection) {
        analysisChartSection.style.display = 'block';
        analysisChartSection.classList.add('visible-section');
    }
}

// Show the welcome modal only once per session (index.html)
if (welcomeModal && !localStorage.getItem(skipPromptKey)) {
    window.addEventListener('load', () => {
        welcomeModal.classList.add('show-modal');
    });
}

// If user picks "Blog Post" in the modal (index.html)
if (modalBlogBtn) {
    modalBlogBtn.addEventListener('click', () => {
        localStorage.setItem(skipPromptKey, 'true');
        welcomeModal.classList.remove('show-modal');
        showBlogPost();
    });
}

// If user picks "Poem Analysis" in the modal (index.html)
if (modalChartBtn) {
    modalChartBtn.addEventListener('click', () => {
        localStorage.setItem(skipPromptKey, 'true');
        welcomeModal.classList.remove('show-modal');
        showPoemAnalysis();
    });
}

// "Go to Blog Post" Button in Poem Analysis Section (index.html)
if (backToBlogBtn) {
    backToBlogBtn.addEventListener('click', () => {
        localStorage.setItem(skipPromptKey, 'true');
        window.location.href = 'index.html#goToBlog';
    });
}

// "View References" Button in Blog Post Section (index.html)
if (goToReferencesBtn) {
    goToReferencesBtn.addEventListener('click', () => {
        localStorage.setItem(skipPromptKey, 'true');
        window.location.href = 'references.html';
    });
}
