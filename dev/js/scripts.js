
// thingies

import { gsap } from "gsap";

// import $ from "jquery";

import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

// import
import { logoDrawTL } from "./logoDraw"
import { screen2TL } from "./device-fp"
import { screen3TL } from "./spd-audio"
// import { speedCounter } from "./speedCounter"
;


// tl
let mainTL = gsap.timeline();

mainTL.add(logoDrawTL)
mainTL.add(screen2TL)
mainTL.add(screen3TL)

// $(document).ready(function () {

//     // let numberToCount = document.getElementById("speedTag");
//     // console.log(numberToCount);
//     speedCounter();
// });




GSDevTools.create();

