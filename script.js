document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Check for saved theme preference or default to light theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/moon-symbol.png';
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/moon-symbol.png';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.src = 'https://img.icons8.com/ios-filled/50/000000/sun.png';
            localStorage.setItem('theme', 'light');
        }
    });
});