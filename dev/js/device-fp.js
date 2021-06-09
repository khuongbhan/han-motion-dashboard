import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

export let screen2TL = gsap.timeline();


gsap.set("#device-process",{transformOrigin:"center center"});
gsap.set("#porsche-o",{transformOrigin:"center center"});
gsap.set("#black-rec-1",{transformOrigin:"bottom right"});
gsap.set("#scanner-line-device",{y:"-550px", transfromOrigin: "center center"});
gsap.set("#insert-device",{y:"150px", transfromOrigin: "center center"});
gsap.set("#porsche-c",{transfromOrigin: "center center"});
gsap.set("#finger-in",{transfromOrigin: "center center"});
gsap.set("#finger-done",{transfromOrigin: "center center", y:"+=180"});
// gsap.set("#finger-circle",{transfromOrigin: "center center", x:"200px",y:"-50px"});



screen2TL
// logo fade
.to("#porsche-p, #porsche-r, #porsche-s, #porsche-h, #porsche-e",{duration:1,opacity:0},"start2")


//verification and battery 

// .from("#verify-text",{duration: 1,opacity:0},"start2")
.to("#black-rec-1",{duration:.5,scaleX:"0"},"start")

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
.to("#device-bottom, #device-top",{opacity:1},"start32")
// .fromTo("#scanner-line-device",{opacity: 0},{duration:.15, opacity:1,repeat:2})
.from("#scanner-line-device",{duration:.3, drawSVG:"50% 50%",opacity:0})
.fromTo("#insert-device",{opacity: 0},{duration:.1, opacity:1,repeat: 3},"startScan")
.to("#scanner-line-device",{duration:2.5, y:"+=550",ease:"power2.out"},"startScan")
.to("#insert-device",{opacity: 0},"-=1")
.fromTo("#device-connected",{opacity: 0},{duration:.1, opacity:1,repeat: 3},"deviceDone")
.from("#device-check-circle, #device-tick", {duration:0.5,drawSVG:"50% 50%",opacity:0},"deviceDone")

// fingerprint

// .to("#porsche-c",{duration:.5, x:"+=100", opacity: 0},"start")
.to("#porsche-c",{duration:1, morphSVG: "#finger-circle", x:"+=480", y:"-=90",ease:"power2.out"},"start")
.to("#porsche-c",{duration:.3,opacity:0},"start3")
.from("#finger-circle",{duration:.2,opacity:0},"start3")
.to("#finger-circle",{duration:.1, opacity:0,repeat: 2},"start32")
.to("#finger-circle",{opacity:1},"-=3.25")

.from(".fingerprint-lines",{duration:1, drawSVG:0,opacity:0},"startScan")
.to("#finger-1",{duration: .2, stroke:"#65D8F1"},"-=2")
.to("#finger-2",{duration: .2, stroke:"#65D8F1"},"-=1.8")
.to("#finger-3",{duration: .2, stroke:"#65D8F1"},"-=1.9")
.to("#finger-4",{duration: .2, stroke:"#65D8F1"},"-=1.7")
.to("#finger-5",{duration: .2, stroke:"#65D8F1"},"-=1.6")



.to("#finger-in",{duration:.5, scale: 0, opacity:0, transformOrigin:"center center", rotation:360}, "-=1")

.fromTo("#finger-text",{opacity: 0},{duration:.2, opacity:1,repeat: 2},"-=0.25")
.from("#finger-check-circle, #finger-tick", {duration:1,drawSVG:"50% 50%",opacity:0},"-=0.25")



