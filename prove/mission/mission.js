const themeSelector = document.querySelector('#theme-selector');
const body = document.body;
const logo = document.querySelector('.logo');

function changeTheme() {
    if (themeSelector.value === 'dark') {
        body.classList.add('dark');
        logo.src = 'byuilogo-white.png';
    } else if (themeSelector.value === 'light') {
        body.classList.remove('dark');
        logo.src = 'byuilogo.png';
    }
}

themeSelector.addEventListener('change', changeTheme);
