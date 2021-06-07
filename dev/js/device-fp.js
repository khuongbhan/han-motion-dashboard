import { gsap } from "gsap";
export let screen2TL = gsap.timeline();

gsap.set("#device-process",{transformOrigin:"center center"});
gsap.set("#porsche-o",{transformOrigin:"center center"});
gsap.set("#black-rec-1",{transformOrigin:"bottom right"});
gsap.set("#scanner-line-device",{y:"-550px", transfromOrigin: "center center"});
gsap.set("#insert-device",{y:"150px", transfromOrigin: "center center"});



screen2TL
// logo fade
.to("#porsche-p, #porsche-r, #porsche-s, #porsche-h, #porsche-e",{duration:1,opacity:0},"start2")


//verification and battery 

// .from("#verify-text",{duration: 1,opacity:0},"start2")
.to("#black-rec-1",{duration:.75,scaleX:"0"},"start2")

.from("#battery-box",{duration: .25, drawSVG:0, opacity:0},"start")
.from("#battery-line",{duration: .1,opacity:0},"start")
.from("#battery-right",{duration: .1,opacity:0})
.from("#battery-middle",{duration: .1,opacity:0})
.from("#battery-left",{duration: .1,opacity:0})
.from("#battery-percent",{duration: .25,opacity:0})


// device

.to("#porsche-o",{duration:.5, opacity: 0},"start")
.from("#device-top",{duration:.75, opacity:0, x:"+=150", y:"+=250"},"start")
.from("#device-bottom",{duration:.75, opacity:0, x:"-=150", y:"-=250"},"start")
.to("#device-bottom, #device-top",{duration:.1, opacity:0,repeat: 2},"start3")
.to("#device-bottom, #device-top",{opacity:1})
// .fromTo("#scanner-line-device",{opacity: 0},{duration:.15, opacity:1,repeat:2})
.from("#scanner-line-device",{duration:.3, drawSVG:"50% 50%",opacity:0})
.fromTo("#insert-device",{opacity: 0},{duration:.1, opacity:1,repeat: 3},"startScan")
.to("#scanner-line-device",{duration:2.5, y:"+=550",ease:"power2.out"},"startScan")
.to("#insert-device",{opacity: 0},"-=1")
.fromTo("#device-connected",{opacity: 0},{duration:.1, opacity:1,repeat: 3},"deviceDone")
.from("#device-check-circle, #device-tick", {duration:0.5,drawSVG:"50% 50%",opacity:0},"deviceDone")


