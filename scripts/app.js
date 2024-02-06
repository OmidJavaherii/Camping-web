const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav-menu")
let navOpen = false;
navBtn.addEventListener("click", function() {
    if (navOpen) {
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove("nav-menu--open")
        navOpen = false
    }
    else {
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("nav-menu--open")
        navOpen = true
    }
})

const likeBtn = document.querySelectorAll(".place__like-icon")

likeBtn.forEach(function(item) {
    let like = false;
    item.addEventListener("click", function() {
        if (like) {
            this.classList.remove("place__like-icon--fill")
            like = false
        }
        else {
            this.classList.add("place__like-icon--fill")
            like = true
        }
    })
})