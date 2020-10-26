const toggle = document.querySelector(".menu-mobile__line")

toggle.addEventListener('click', function () {
    const nav = document.querySelector('.window-mobile')

    this.classList.toggle("is-active")
    nav.classList.toggle('is-active')
    document.body.classList.toggle('is-active')
})