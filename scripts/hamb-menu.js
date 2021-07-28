const toggle = document.getElementById('toggle');
const navBar = document.getElementById('nav-items');

document.onclick = function(e) {
    if(e.target.id !== 'nav-items' && e.target.id !== 'toggle'){
        toggle.classList.remove('active');
        navBar.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    navBar.classList.toggle('active');
}