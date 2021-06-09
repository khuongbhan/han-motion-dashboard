
// gsap

import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


// gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

// import
import { logoDrawTL } from "./logoDraw"
import { screen2TL } from "./device-fp"
import { screen3TL } from "./spd-audio"
import { screen4TL } from "./cameraScreen"
;


// tl
let mainTL = gsap.timeline();

mainTL
.add(logoDrawTL)
.add(screen2TL)
.addLabel("marker")
.add(screen3TL)
.add(screen4TL)

mainTL.play("marker");


// GSDevTools.create();

