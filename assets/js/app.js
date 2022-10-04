
const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobile-nav')

const arrow = mobileNav.querySelectorAll('.arrow')
const arrowImg = mobileNav.querySelectorAll('.arrow-img')
const dropdownList = mobileNav.querySelectorAll('.nav-li')

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    mobileNav.classList.toggle('opened')
})

// Dropdown

for (let i = 0; i < arrow.length; i++) {
    
    arrow[i].addEventListener('click', ()=>{
        arrowImg[i].classList.toggle('flipped');
        dropdownList[i].classList.toggle('show');
    })
    
}
