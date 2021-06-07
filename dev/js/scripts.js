
// gsap

import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

// import
import { logoDrawTL } from "./logoDraw"
import { screen2TL } from "./device-fp"
;


// tl
let mainTL = gsap.timeline();

mainTL.add(logoDrawTL)
mainTL.add(screen2TL)




GSDevTools.create();

