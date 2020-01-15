// Grab and return window height and width as variable array.  
const getViewPortWidth = () =>  [window.innerHeight, window.innerWidth];


//When the start logo is clicked: 
const logoWasClicked = () => {
    const logo = document.querySelector('#logo-startBtn'); 
    logo.addEventListener('click', () => fadeIn(getList(), logo));
        //call the fadeIn function to do fancy fade effects, getList grabs the html collection, pass in logo so we don't have to repeat that data grab later. 
}

const getList = () => {
    const navList = document.querySelectorAll('.list-item'); //grab the navlist collection.
    return navList; //passed into the fadeIn function.
}; 


// control function for the fade in and
const fadeIn = (list, logo) => {
    //grab nav elements, apply fade effects.
    const navBar = document.querySelector('.navBar');
    const liList = document.querySelectorAll('li'); 
    liList.forEach(li => li.setAttribute('class', 'moveToTop'));
    navBar.style.visibility="visible";
    navBar.classList.add("animated", "zoomIn", "delay-1.2s", "moveToTop"); 
    
    // grab logo element, apply fadeout effects.
    logo.classList.add('logoClicked', 'animated', 'fadeOut', 'delay-1.5s');
}

window.onload = logoWasClicked;





