const hamburgerIcon = document.querySelector('.hamburger-icon')
const headerLinksMobile = document.querySelector('.header-links-mobile')
const header = document.querySelector('.header')
const headerText = document.querySelector('.header-text')

hamburgerIcon.addEventListener('click', function() {
    header.classList.toggle('active')
    headerText.classList.toggle('active')
    headerLinksMobile.classList.toggle('active')
    if (this.classList.contains('active')) {
        this.innerHTML = `
         <img src="./images/icon-hamburger.svg" alt="">
         `
    } else {
        this.innerHTML = `
        <img src="./images/icon-close.svg" alt="">
        `
    }
    this.classList.toggle('active')
    // this.innerHTML = `
    // <img src="./images/icon-close.svg" alt="">
    // `
})