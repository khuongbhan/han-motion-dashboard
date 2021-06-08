import { gsap } from "gsap";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// gsap.registerPlugin(MorphSVGPlugin);


export let screen3TL = gsap.timeline();

gsap.set("#black-rec-3",{x:"320px",y:"20px",scaleX:2,transformOrigin:"bottom right"});
gsap.set("#speed-loading",{y:"175px",transformOrigin:"center left"});
gsap.set("#speed-shape",{x:"479px",y:"439px"});
gsap.set("#clip-box",{x:"-150",y:"100"});
gsap.set("#black-rec-4",{x:"320px",y:"140px",scaleY:2,transformOrigin:"bottom right"});

screen3TL

// screen 2 transitions

.to("#verify-text",{duration:.25,opacity:0},"scr3Start")

.to("#device-check-circle, #device-tick", {duration:0.5,drawSVG:"50% 0",opacity:0},"scr3Start")
.to("#device-connected",{duration:.1,opacity:0,repeat: 2},"scr3Start")
.to("#scanner-line-device",{duration:.2, drawSVG:"50% 50%",opacity:0},"scr3Start")
.to("#device-bottom, #device-top",{duration:.1, opacity:0,repeat: 2},"scr3Start")
.to("#device-bottom, #device-top",{opacity:1},"scr3Start1")
.to("#device-top",{duration:.75, opacity:0, x:"+=150", y:"+=250"},"scr3Start2")
.to("#device-bottom",{duration:.75, opacity:0, x:"-=150", y:"-=250"},"scr3Start2")

.to("#finger-check-circle, #finger-tick", {duration:0.5,drawSVG:"50% 0",opacity:0},"-=1.2")
.to("#finger-text",{duration:.1,opacity:0,repeat: 2},"-=1")
.to("#finger-circle",{duration:.5, drawSVG: "50% 50%",ease:"power2.out"},"-=.5")


// speedometer

.from("#speedm-out",{duration:.5, drawSVG: "50% 50%",ease:"power2.out"},"spdmStart")
.from("#speedm-in",{duration:.5, drawSVG: "50% 50%",ease:"power2.out"},"spdmStart")
.to("#black-rec-3",{duration:1.25,scaleX:"0"},"spdmStart")
// .to("#speed-loading-l",{duration:.2, opacity:0,repeat:4},"spdmStart3")
// .to("#speed-loading-r",{duration:.2, opacity:0,repeat:4},"spdmStart3")
.from("#speed-loading-l",{duration:.2, opacity:0},"spdmStart1")
.from("#speed-loading-r",{duration:.2, opacity:0},"spdmStart2")
.to("#speed-loading-l",{duration:.2, opacity:1},"spdmStar2")
.to("#speed-loading-r",{duration:.2, opacity:1},"spdmStart3")
.to("#speed-loading-l",{duration:.2, opacity:0},"spdmStart3")
.to("#speed-loading-r",{duration:.2, opacity:0},"spdmStart4")
.to("#speed-loading-l",{duration:.2, opacity:1},"spdmStar4")
.to("#speed-loading-r",{duration:.2, opacity:1},"spdmStart5")
.to("#speed-loading-l",{duration:.2, opacity:0},"spdmStart5")
.to("#speed-loading-r",{duration:.2, opacity:0},"spdmStart6")
.to("#speed-loading-l",{duration:.2, opacity:1},"spdmStar6")
.to("#speed-loading-r",{duration:.2, opacity:1},"spdmStart7")

.to("#black-rec-4",{duration:.75,scaleX:"0"},"spdmStart2")

.to("#clip-box",{duration:2, y:"-=450"},"spdmStart6")
.to("#clip-box",{duration:2, x:"+=240"},"-=0.7")


// mode menu



// audio

