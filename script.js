function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/moon-symbol.png';
        themeIcon.alt = 'Moon icon';
    } else {
        themeIcon.src = 'https://img.icons8.com/ios-filled/50/000000/sun.png';
        themeIcon.alt = 'Sun icon';
    }
}

// Tambahkan event listener untuk tombol toggle tema
document.querySelector('.toggle-theme-container').addEventListener('click', toggleTheme);