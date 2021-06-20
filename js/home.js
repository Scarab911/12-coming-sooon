// IMPORT
import { Clock } from "./components/clock/Clock.js";
import { socials } from "./components/socials/socials.js";
import { socialsData } from "./data/socialsData.js";
import { clockData } from './data/clockData.js'
// import { scroll } from './components/back-to-top/back-to-top.js'


// EXECUTION
new Clock('#clock_1', clockData);
socials('footer .socials', socialsData);

let count = 0;

// const scroll = document.getElementById('scroll');
// console.log(scroll);



/* setTimeout(() => {
    console.log(count++);
}, 3000); vienkartinis procesas
*/

/*const timer1 = setInterval(() => {
    if(count < 10){
    console.log(count++);
    } else{
        clearInterval(timer1)
    }
}, 1000);
*/