
const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobile-nav')
const desktopNav = document.querySelector('.navbar-desktop')

const mobileArrow = mobileNav.querySelectorAll('.arrow')
const mobileArrowImg = mobileNav.querySelectorAll('.arrow-img')
const mobileDropDownList = mobileNav.querySelectorAll('.nav-li')

const desktopArrow = desktopNav.querySelectorAll('.desktop-arrow')
const desktopArrowImg = desktopNav.querySelectorAll('.desktop-arrow-img')
const desktopDropDownList = desktopNav.querySelectorAll('.desktop-nav-li')

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    mobileNav.classList.toggle('opened')
})

// Dropdown

for (let i = 0; i < mobileArrow.length; i++) {
    
    mobileArrow[i].addEventListener('click', ()=>{
        mobileArrowImg[i].classList.toggle('flipped');
        mobileDropDownList[i].classList.toggle('show');
    })
    
}

for (let i = 0; i < desktopArrow.length; i++) {
    
    desktopArrow[i].addEventListener('click', ()=>{
        desktopArrowImg[i].classList.toggle('flipped');
        desktopDropDownList[i].classList.toggle('show');
    })
    
}
