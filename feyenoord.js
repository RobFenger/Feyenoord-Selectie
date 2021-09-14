let teams = document.getElementById("teams");
let menu = document.getElementById("dropdown");
let club = document.getElementById("club");
let menu2 = document.getElementById("dropdown2");
let supporters = document.getElementById("supporters");
let menu3 = document.getElementById("dropdown3");
let menus = [menu, menu2, menu3];
let headMenu = document.getElementById("headmenu");
let menuIcon = document.getElementById("icon-container");
let teams1 = document.getElementById("teams1");
let club1 = document.getElementById("club1");
let supporters1 = document.getElementById("supporters1");


teams.onclick = () => {
    if (menu.style.visibility === 'hidden') {
    menu.style.visibility = 'visible';
    menu2.style.visibility = 'hidden';
    menu3.style.visibility = 'hidden'
    } else {
        menu.style.visibility = 'hidden';
    } 
}



club.onclick = () => {
    if(menu2.style.visibility === 'hidden') {
        menu2.style.visibility = 'visible';
        menu.style.visibility = 'hidden';
        menu3.style.visibility = 'hidden';
    } else {
        menu2.style.visibility = 'hidden';
    } 
}

supporters.onclick = () => {
    if(menu3.style.visibility === 'hidden') {
        menu3.style.visibility = 'visible';
        menu.style.visibility = 'hidden';
        menu2.style.visibility = 'hidden';
    } else {
        menu3.style.visibility = 'hidden';
    } 
}

menuIcon.onclick = () => {
    if (headMenu.style.visibility === 'hidden') {
        headMenu.style.visibility = 'visible';
    } else {
        headMenu.style.visibility = 'hidden';
    }
}

teams1.onclick = () => {
    if (menu.style.visibility === 'hidden') {
    menu.style.visibility = 'visible';
    menu2.style.visibility = 'hidden';
    menu3.style.visibility = 'hidden';
    headMenu.style.visibility = 'hidden';
    } else {
        menu.style.visibility = 'hidden';
    } 
}



club1.onclick = () => {
    if(menu2.style.visibility === 'hidden') {
        menu2.style.visibility = 'visible';
        menu.style.visibility = 'hidden';
        menu3.style.visibility = 'hidden';
        headMenu.style.visibility = 'hidden';
    } else {
        menu2.style.visibility = 'hidden';
    } 
}

supporters1.onclick = () => {
    if(menu3.style.visibility === 'hidden') {
        menu3.style.visibility = 'visible';
        menu.style.visibility = 'hidden';
        menu2.style.visibility = 'hidden';
        headMenu.style.visibility = 'hidden';
    } else {
        menu3.style.visibility = 'hidden';
    } 
}

/*teams.onclick = () => {
    if (menuIcon.style.visibility === 'visible') {
        headMenu.style.visibility = 'hidden';
    }
}
   
club.onclick = () => {
    if (menuIcon.style.visibility === 'visible') {
        headMenu.style.visibility = 'hidden';
    }
}

supporters.onclick = () => {
    if (menuIcon.style.visibility === 'visible') {
        headMenu.style.visibility = 'hidden';
    }
}*/


document.onmouseup = (event) => {

    for (let i=0; i < menus.length; i++) {
        if (menus[i].style.visibility === 'visible' && event.target !== menus[i]) {
            menus[i].style.visibility = 'hidden';
        }
    }  
}

let pic1 = document.getElementById("kuipimg");
let pic2 = document.getElementById("selectieimg");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let imagetxt = document.getElementById("imagetext");



next.onclick = () => {
    if (pic1.style.opacity === '1') {
        pic1.style.opacity = '0';
        pic2.style.opacity = '1';
        imagetxt.style.opacity = '0';
    } else {
        pic1.style.opacity = '1';
        pic2.style.opacity = '0';
        imagetxt.style.opacity = '1';
    }
}

prev.onclick = () => {
    if (pic1.style.opacity === '1') {
        pic1.style.opacity = '0';
        pic2.style.opacity = '1';
        imagetxt.style.opacity = '0';
    } else {
        pic1.style.opacity = '1';
        pic2.style.opacity = '0';
        imagetxt.style.opacity = '1';
    }
}






