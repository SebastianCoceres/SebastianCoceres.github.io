const header = document.querySelector("header");
const sectionOne = document.querySelector(".relleno");

const sectionOneObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            header.classList.add("header-out");
            toggle.classList.add("toogle-out");
        } else {
            header.classList.remove("header-out");
            toggle.classList.remove("toogle-out");
        }
    })
});

sectionOneObserver.observe(sectionOne);