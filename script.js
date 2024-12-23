

const skipPromptKey = 'skipPrompt';

const body = document.body;
const toggleBtn = document.getElementById('darkModeToggle');

if (toggleBtn) {
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


const welcomeModal = document.getElementById('welcomeModal');
const modalBlogBtn = document.getElementById('modalBlogBtn');
const modalChartBtn = document.getElementById('modalChartBtn');


const blogPostSection = document.getElementById('blogPostSection');
const analysisChartSection = document.getElementById('analysisChartSection');


const backToBlogBtn = document.getElementById('backToBlogBtn');
const goToReferencesBtn = document.getElementById('goToReferencesBtn');


function updateNavigation(view) {
    const nav = document.querySelector('.top-nav ul');
    const menuItems = nav.querySelectorAll('li');

    menuItems.forEach((item) => {
        const link = item.querySelector('a');
        if (!link) return;

        
        if (link.id === 'referencesLink') {
            
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

        
        if (view === 'blog') {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}


if (typeof window.showBlogPost !== 'function') {
  window.showBlogPost = function() {
    if (blogPostSection) {
      
      blogPostSection.style.display = 'block';
      blogPostSection.classList.remove('hidden-section');
      blogPostSection.classList.add('visible-section');
    }
    if (analysisChartSection) {
      
      analysisChartSection.classList.remove('visible-section');
      analysisChartSection.classList.add('hidden-section');
      
      setTimeout(() => {
        analysisChartSection.style.display = 'none';
      }, 600); 
    }
    updateNavigation('blog');
  };
}

if (typeof window.showPoemAnalysis !== 'function') {
  window.showPoemAnalysis = function() {
    if (blogPostSection) {
      
      blogPostSection.classList.remove('visible-section');
      blogPostSection.classList.add('hidden-section');
      
      setTimeout(() => {
        blogPostSection.style.display = 'none';
      }, 600); 
    }
    if (analysisChartSection) {
      
      analysisChartSection.style.display = 'block';
      analysisChartSection.classList.remove('hidden-section');
      analysisChartSection.classList.add('visible-section');
    }
    updateNavigation('poem');
  };
}


document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash === '#analysisChartSection') {
        showPoemAnalysis();
    } else if (hash === '#goToBlog') {
        showBlogPost();
    } else {
        
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


window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (hash === '#analysisChartSection') {
        showPoemAnalysis();
    } else if (hash === '#goToBlog') {
        showBlogPost();
    } else {
        
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


if (welcomeModal && !localStorage.getItem(skipPromptKey)) {
    window.addEventListener('load', () => {
        welcomeModal.classList.add('show-modal');
    });
}


if (modalBlogBtn) {
    modalBlogBtn.addEventListener('click', () => {
        localStorage.setItem(skipPromptKey, 'true');
        welcomeModal.classList.remove('show-modal');
        showBlogPost();
    });
}


if (modalChartBtn) {
    modalChartBtn.addEventListener('click', () => {
        localStorage.setItem(skipPromptKey, 'true');
        welcomeModal.classList.remove('show-modal');
        showPoemAnalysis();
    });
}


if (backToBlogBtn) {
    backToBlogBtn.addEventListener('click', () => {
        localStorage.setItem(skipPromptKey, 'true');
        window.location.href = 'index.html#goToBlog';
    });
}


if (goToReferencesBtn) {
    goToReferencesBtn.addEventListener('click', () => {
        localStorage.setItem(skipPromptKey, 'true');
        window.location.href = 'references.html';
    });
}
