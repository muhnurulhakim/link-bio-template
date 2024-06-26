document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.src = 'https://img.icons8.com/ios-filled/50/fff/moon-symbol.png';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.src = 'https://img.icons8.com/ios-filled/50/fff/sun.png';
            localStorage.setItem('theme', 'light');
        }
    });
});