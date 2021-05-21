// IMPORT
import { Clock } from "./components/clock/Clock.js";
import { socials } from "./components/socials/socials.js";
import { socialsData } from "./data/socialsData.js";
import { clockData } from './data/clockData.js'


// EXECUTION
new Clock('#clock_1', clockData);
socials('footer .socials', socialsData);