// Grab and return window height and width as variable array.  
const getViewPortWidth = () =>  [window.innerHeight, window.innerWidth];


//When the start logo is clicked: 
const logoWasClicked = () => {
    const isSmallViewport = getViewPortWidth()[1] < 551;
changeColor(0);

    const logo = document.querySelector('#logo-startBtn'); 
    logo.addEventListener('click', () => fadeIn(getList(), logo));
        //call the fadeIn function to do fancy fade effects, getList grabs the html collection, pass in logo so we don't have to repeat that data grab later. 
}

const getList = () => {
    const navList = document.querySelectorAll('.list-item'); //grab the navlist collection.
    return navList; //passed into the fadeIn function.
}; 


// control function for the fade in and
const fadeIn = (logo) => {
    //grab nav elements, apply fade effects.
    const navBar = document.querySelector('.navBar');
    const liList = document.querySelectorAll('li'); 
    liList.forEach(li => li.setAttribute('class', 'moveToTop'));
    navBar.style.visibility="visible";
    navBar.classList.add("animated", "zoomIn", "delay-1.2s", "moveToTop", "box-shadow"); 
    
    // grab logo element, apply fadeout effects.
    logo.classList.add('animated', 'fadeOut', 'delay-1.5s');
    logo.style.display="none";
}

window.onload = logoWasClicked;

const changeColor = (i) =>{
    // define array.  can be dynamically generated later.  
    const colorArray = [
        'white', 
        'black',
    ];


    // Grab the body background, set it to whatever i argument is set as at function runtime.

    
    setInterval(function() {
        let listArray = document.querySelectorAll('li');  
        for(let j= 0 ; j < listArray.length ; j++) {
            listArray[j].style.background=colorArray[i]; 
        }}, 1000);
    
     if (i < colorArray.length) { // if i is still within the bounds of the color array.  
        setTimeout(function() { // set a timeout
             i++;  // that increases whatever number i is at b 1.  
            changeColor(i); // then recursively calls the function again, with the updated value of i.  
        }, 1000) // and this function can fire off ever y second. 
      };

};


