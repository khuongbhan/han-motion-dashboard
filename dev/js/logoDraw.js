import { gsap } from "gsap";
export let logoDrawTL = gsap.timeline();



gsap.set("#porsche-logo", {transformOrigin: "center center" });

logoDrawTL
// .from("#porsche-logo",{duration:2, opacity:0})

.from("#porsche-p, #porsche-o, #porsche-r, #porsche-s, #porsche-c, #porsche-h, #porsche-e",{duration:1.5, drawSVG:0,ease:"power1.out"},"logo")
.to("#porsche-p, #porsche-o, #porsche-r, #porsche-s, #porsche-c, #porsche-h, #porsche-e",{duration:1, fill:"#fff"})



// logoDrawTL
// .fromTo("#porsche-p",{drawSVG:"0% 10%" },{duration:1, drawSVG:"95% 100%", ease:"bounce.out"})
//     .to("#porsche-p",{duration:1, drawSVG:"0% 100%"})
