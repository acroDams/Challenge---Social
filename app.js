const btn = document.getElementById('btn')
const socialNav = document.querySelector('.social-icons')

btn.addEventListener('click', () => {
    socialNav.classList.toggle('active')
})