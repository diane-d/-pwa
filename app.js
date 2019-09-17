/*let bouton_menu = document.querySelector(".burger-bar");
let menu = document.querySelector("header nav"); 
console.log(bouton_menu);*/
document.addEventListener("click",afficheMenu);
function afficheMenu() {
    var menu=document.querySelector('header nav');
    console.log(event.target.matches("header"));
    if ( event.target.matches(".burger-bar") || event.target.matches("header nav") ) {
        menu.classList.add('active');
    }
        else{
            menu.classList.remove('active');
        }

};
   