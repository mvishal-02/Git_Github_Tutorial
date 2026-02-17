// ============================================
// GIT TUTORIAL - INTERACTIVE JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initProgress();
    initSmoothScroll();
});

// ============================================
// THEME TOGGLE
// ============================================
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        if (themeToggle) {
            themeToggle.querySelector('.theme-icon').textContent = '☀️';
        }
    }
    
    // Toggle theme on click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark');
            const isDark = body.classList.contains('dark');
            themeToggle.querySelector('.theme-icon').textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
}

// ============================================
// SCROLL PROGRESS BAR
// ============================================
function initProgress() {
    const progressBar = document.getElementById('progress');
    if (!progressBar) return;
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
}

// ============================================
// COPY TO CLIPBOARD
// ============================================
function copyCode(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast();
    }).catch(err => {
        console.error('Copy failed:', err);
    });
}

// ============================================
// TOAST NOTIFICATION
// ============================================
let toastTimeout;

function showToast() {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    // Clear existing timeout
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Hide after 2 seconds
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}
