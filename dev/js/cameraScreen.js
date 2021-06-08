import { gsap } from "gsap";

export let screen4TL = gsap.timeline();

gsap.set("#mode-hover-circle",{transformOrigin: "bottom center"})

screen4TL

// select I mode

.to("#mode-hover-circle",{duration:.25, scale:.85},"click")
.to("#mode-hover-circle",{duration:.25, scale:1},"click2")
.from("#identify-modeon",{duration:.25, opacity:0},"click2")
