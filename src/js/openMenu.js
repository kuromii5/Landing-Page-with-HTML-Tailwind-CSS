const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('navigation');

let open = false;

menuToggle.addEventListener('click', function () {
    open = !open;
    if (open) {
        menu.classList.add('top-14', 'opacity-100');
        menu.classList.remove('top-[-500px]', 'opacity-0');
    } else {
        menu.classList.remove('top-14', 'opacity-100');
        menu.classList.add('top-[-500px]', 'opacity-0');
    }
});