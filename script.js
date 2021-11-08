const toggleMenu = document.querySelector('ul');
const toggleImage = document.querySelector('img');

const makeWhite = document.querySelector('#listWhite');
const makeRed = document.querySelector('#listRed'); 
const makeOrange = document.querySelector('#listOrange');
const makePurple = document.querySelector('#listPurple');
const makeGreen = document.querySelector('#listGreen');

const rbWhite = document.querySelector('#rbWhite');
const rbRed = document.querySelector('#rbRed');
const rbOrange = document.querySelector('#rbOrange');
const rbPurple = document.querySelector('#rbPurple');
const rbGreen = document.querySelector('#rbGreen ');



const myMenu = function () {
    if (toggleMenu.style.display === 'none') {
        toggleMenu.style.display = 'block';
    } else {
            toggleMenu.style.display = 'none';
    }
};
toggleImage.addEventListener('click', myMenu, false);
toggleImage.addEventListener('mouseover', myMenu, false);
toggleMenu.addEventListener('click', myMenu, false);




const whiteFunction = function (event) {
    document.querySelector('#rbWhite').checked = true;  
    document.body.style.backgroundColor = "white";
    document.querySelector('#bigtext').innerHTML = "White!" 
    
}
makeWhite.addEventListener('click',whiteFunction, false);
rbWhite.addEventListener('click',whiteFunction, false);


const redFunction = function (event) {
    document.querySelector('#rbRed').checked = true;     
    document.body.style.backgroundColor = "red";
    document.querySelector('#bigtext').innerHTML = "Red!" 
}
makeRed.addEventListener('click',redFunction, false);
rbRed.addEventListener('click',redFunction, false);
   
const orangeFunction = function (event) {
    document.querySelector('#rbOrange').checked = true;     
    document.body.style.backgroundColor = "orange";
    document.querySelector('#bigtext').innerHTML = "Orange!" 
}
makeOrange.addEventListener('click',orangeFunction, false);
rbOrange.addEventListener('click',orangeFunction, false);


const purpleFunction = function (event) {
    document.querySelector('#rbPurple').checked = true;     
    document.body.style.backgroundColor = "purple";
    document.querySelector('#bigtext').innerHTML = "Purple!" 
}
makePurple.addEventListener('click',purpleFunction, false);
rbPurple.addEventListener('click',purpleFunction, false);

const greenFunction = function (event) {
    document.querySelector('#rbGreen').checked = true;     
    document.body.style.backgroundColor = "green";
    document.querySelector('#bigtext').innerHTML = "Green!" 
}
makeGreen.addEventListener('click',greenFunction, false);
rbGreen.addEventListener('click',greenFunction, false);

const changeByKeypress = function (event){
    if (event.keyCode === 49 ) {
        whiteFunction();
    }
    else if (event.keyCode === 50) {
        redFunction();
    }
    else if (event.keyCode === 51) {
        orangeFunction();
    }
    else if (event.keyCode === 52) {
        purpleFunction();
    }
    else if (event.keyCode === 53)
        greenFunction();
};

document.addEventListener ('keydown', changeByKeypress, true);
   
    
    
    
    

    12