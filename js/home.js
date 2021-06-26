// IMPORT
import { Clock } from "./components/clock/Clock.js";
// import { socials } from "./components/socials/socials.js"; //render socials function import
import { socialsData } from "./data/socialsData.js";
import { clockData } from './data/clockData.js';
import { progressBarData } from './data/progressBarData.js';
import { ProgressBar } from './components/progres-bar/ProgressBar.js'
import { Socials } from './components/socials/SocialsOOP.js'
import { Form } from "./components/form/Form.js";



// EXECUTION
new Clock('#clock_1', clockData);
// socials('footer .socials', socialsData); //old function execution
new ProgressBar('.left-column', progressBarData);
new Socials('footer .socials', socialsData); //OOP socials execution

new Form('.hero form');
new Form('main form');












/*intervaai ir procesai*/
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