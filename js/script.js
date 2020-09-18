var home = document.getElementById('home');
var cv = document.getElementById('cv');
var hobby = document.getElementById('hobby');

var b1 = document.getElementById('btnP');
var b2 = document.getElementById('btnC');
var b3 = document.getElementById('btnH');


function personal() {
    home.style.transform = 'translateX(0)';
    cv.style.transform = 'translateX(100%)';
    hobby.style.transform = 'translateX(100%)';

    b1.style.fontSize = '19pt';
    b2.style.fontSize = '13pt';
    b3.style.fontSize = '13pt';

    home.style.transitionDelay = '.6s';
    cv.style.transitionDelay = '0s';
    hobby.style.transitionDelay = '0s';



}
function myCv() {
    home.style.transform = 'translateX(100%)';
    cv.style.transform = 'translateX(0)';
    hobby.style.transform = 'translateX(100%)';

    b1.style.fontSize = '13pt';
    b2.style.fontSize = '19pt';
    b3.style.fontSize = '13pt';

    home.style.transitionDelay = '0s';
    cv.style.transitionDelay = '.6s';
    hobby.style.transitionDelay = '0s';



    
}
function favouriteHobby() {
    home.style.transform = 'translateX(100%)';
    cv.style.transform = 'translateX(100%)';
    hobby.style.transform = 'translateX(0)';

    b1.style.fontSize = '13pt';
    b2.style.fontSize = '13pt';
    b3.style.fontSize = '19pt';


    home.style.transitionDelay = '0';
    cv.style.transitionDelay = '0s';
    hobby.style.transitionDelay = '.6s';

  
   
}