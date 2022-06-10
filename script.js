let schedules = document.getElementById("schedule-btn")
let form = document.getElementById("form")
let body = document.getElementById("body")
let nav = document.getElementById("side-nav")
let div2 = document.getElementById("div2")
schedules.addEventListener('click', ()=> {
    form.style.visibility= 'visible';
    nav.style.opacity= 0.5;
    div2.style.opacity= 0.5;
})
