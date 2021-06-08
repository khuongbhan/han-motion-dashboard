import { gsap } from "gsap";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// gsap.registerPlugin(MorphSVGPlugin);


export let screen3TL = gsap.timeline();

gsap.set("#black-rec-3",{x:"320px",y:"20px",scaleX:2,transformOrigin:"bottom right"});
gsap.set("#speed-loading",{y:"175px",transformOrigin:"center left"});
gsap.set("#speed-shape",{x:"479px",y:"439px"});
gsap.set("#clip-box",{x:"-150",y:"100"});
gsap.set("#black-rec-4",{x:"320px",y:"140px",scaleY:2,transformOrigin:"bottom right"});
// gsap.set("#identify-modeon",{opacity:0});
gsap.set(".audio-trig-bottom",{transformOrigin:"bottom center"});
gsap.set(".audio-trig-top",{transformOrigin:"bottom center"});
gsap.set("#find-signal",{opacity:0});
gsap.set("#black-rec-5",{x:"-80px",y:"250px",transformOrigin:"bottom right"});
gsap.set("#black-rec-6",{x:"-80px",y:"280px",transformOrigin:"bottom right"});


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
.to("#speed-loading-l",{duration:.2, opacity:0},"spdmStart7")
.to("#speed-loading-r",{duration:.2, opacity:0},"spdmStart8")
.to("#speed-loading-l",{duration:.2, opacity:1},"spdmStart8")
.to("#speed-loading-r",{duration:.2, opacity:1},"spdmStart9")
.to("#speed-loading-l",{duration:.2, opacity:0},"spdmStart9")
.to("#speed-loading-r",{duration:.2, opacity:0},"spdmStart91")

.to("#black-rec-4",{duration:.75,scaleX:"0"},"spdmStart2")

.to("#clip-box",{duration:2, y:"-=450"},"spdmStart6")
.to("#clip-box",{duration:2, x:"+=240"},"-=0.7")
.fromTo("#speed-number",{opacity: 0},{duration:.3, opacity:1,repeat: 2},"-=1.5")


// audio
.from("#audio-line",{duration:.3, drawSVG:"50% 50%",opacity:0,y:"-=50"},"spdmStart")
.to("#find-signal",{duration:.25, opacity:1,repeat: 3},"spdmStart")
.from(".audio-trig-top , .audio-trig-bottom",{duration:.5,scaleY:0},"spdmStart1")
.fromTo("#signal-found",{opacity: 0},{duration:.5, opacity:1,repeat: 3},"spdmStart1")
.to("#find-signal",{duration:.5,opacity:0},"spdmStart1")
.to("#audio-trig-1,#audio-trig-3,#audio-trig-6,#audio-trig-9,#audio-trig-12,#audio-trig-32,#audio-trig-25,#audio-trig-40,#audio-trig-13,#audio-trig-17,#audio-trig-42",{duration:.5,scaleY:.5,ease:"none"},"spdmStart2")
.to("#audio-trig-27,#audio-trig-19,#audio-trig-4,#audio-trig-22,#audio-trig-33,#audio-trig-36,#audio-trig-20,#audio-trig-44,#audio-trig-10,#audio-trig-14,#audio-trig-41",{duration:.5,scaleY:1.5,ease:"none"},"spdmStart2")
.to("#audio-trig-2,#audio-trig-24,#audio-trig-26,#audio-trig-39,#audio-trig-15,#audio-trig-5,#audio-trig-7,#audio-trig-8,#audio-trig-11,#audio-trig-16,#audio-trig-38,#audio-trig-43",{duration:.5,scaleY:2,ease:"none"},"spdmStart2")
.to("#audio-trig-18,#audio-trig-21,#audio-trig-23,#audio-trig-28,#audio-trig-29,#audio-trig-30,#audio-trig-31,#audio-trig-32,#audio-trig-34,#audio-trig-35,#audio-trig-37",{duration:.5,scaleY:1.75,ease:"none"},"spdmStart2")
.to("#audio-trig-1,#audio-trig-3,#audio-trig-6,#audio-trig-9,#audio-trig-12,#audio-trig-32,#audio-trig-25,#audio-trig-40,#audio-trig-13,#audio-trig-17,#audio-trig-42",{duration:.5,scaleY:1.5,ease:"none"},"spdmStart3")
.to("#audio-trig-27,#audio-trig-19,#audio-trig-4,#audio-trig-22,#audio-trig-33,#audio-trig-36,#audio-trig-20,#audio-trig-44,#audio-trig-10,#audio-trig-14,#audio-trig-41",{duration:.5,scaleY:2.2,ease:"none"},"spdmStart3")
.to("#audio-trig-2,#audio-trig-24,#audio-trig-26,#audio-trig-39,#audio-trig-15,#audio-trig-5,#audio-trig-7,#audio-trig-8,#audio-trig-11,#audio-trig-16,#audio-trig-38,#audio-trig-43",{duration:.5,scaleY:.5,ease:"none"},"spdmStart3")
.to("#audio-trig-18,#audio-trig-21,#audio-trig-23,#audio-trig-28,#audio-trig-29,#audio-trig-30,#audio-trig-31,#audio-trig-32,#audio-trig-34,#audio-trig-35,#audio-trig-37",{duration:.5,scaleY:.2,ease:"none"},"spdmStart4")
.to("#audio-trig-1,#audio-trig-3,#audio-trig-6,#audio-trig-9,#audio-trig-12,#audio-trig-32,#audio-trig-25,#audio-trig-40,#audio-trig-13,#audio-trig-17,#audio-trig-42",{duration:.5,scaleY:1,ease:"none"},"spdmStart4")
.to("#audio-trig-27,#audio-trig-19,#audio-trig-4,#audio-trig-22,#audio-trig-33,#audio-trig-36,#audio-trig-20,#audio-trig-44,#audio-trig-10,#audio-trig-14,#audio-trig-41",{duration:.5,scaleY:1,ease:"none"},"spdmStart4")
.to("#audio-trig-2,#audio-trig-24,#audio-trig-26,#audio-trig-39,#audio-trig-15,#audio-trig-5,#audio-trig-7,#audio-trig-8,#audio-trig-11,#audio-trig-16,#audio-trig-38,#audio-trig-43",{duration:1,scaleY:2,ease:"none"},"spdmStart4")
.to("#audio-trig-18,#audio-trig-21,#audio-trig-23,#audio-trig-28,#audio-trig-29,#audio-trig-30,#audio-trig-31,#audio-trig-32,#audio-trig-34,#audio-trig-35,#audio-trig-37",{duration:.5,scaleY:1,ease:"none"},"spdmStart4")

.to("#black-rec-5",{duration:1,scaleX:"0"},"spdmStart2")
.to("#black-rec-6",{duration:1,scaleX:"0"},"spdmStart3")

// mode menu

.from("#mode-a",{duration:.25,opacity:0},"scr3Start1")
.from("#mode-i",{duration:.5,opacity:0,x:"-=100"},"scr3Start2")
.from("#mode-z",{duration:.5,opacity:0,x:"+=100"},"scr3Start2")
.from("#mode-s",{duration:.75,opacity:0,x:"-=200"},"scr3Start2")
.from("#mode-d",{duration:.75,opacity:0,x:"+=200"},"scr3Start2")
.from("#audio-modeon, #speed-modeon",{duration:.1,opacity:0},"spdmStart")

.from("#mode-hover-circle",{duration:.5, drawSVG: "0",ease:"power2.out"},"-=3")
.from("#mode-audio",{duration:.5, opacity:0},"-=3")
.to("#mode-hover-circle",{duration:.25, x:"-=118",ease:"power2.out"},"-=2.5")
.to("#mode-audio",{duration:.25, opacity:0},"-=2.5")
.from("#mode-zoom",{duration:.5, opacity:0},"-=2.5")
.to("#mode-hover-circle",{duration:.25, x:"-=118",ease:"power2.out"},"-=2")
.to("#mode-zoom",{duration:.25, opacity:0},"-=2")
.from("#mode-distance",{duration:.5, opacity:0},"-=2")
.to("#mode-hover-circle",{duration:.25, x:"+=118",ease:"power2.out"},"-=1.5")
.fromTo("#mode-distance",{duration:.15, opacity:1},{opacity:0},"-=1.5")
.fromTo("#mode-zoom",{duration:.25, opacity:0},{opacity:1},"-=1.5")
.to("#mode-hover-circle",{duration:.25, x:"+=118",ease:"power2.out"},"-=1")
.fromTo("#mode-zoom",{duration:.15, opacity:1},{opacity:0},"-=1")
.fromTo("#mode-audio",{duration:.25, opacity:0},{opacity:1},"-=1")
.to("#mode-hover-circle",{duration:.25, x:"+=118",ease:"power2.out"},"-=.5")
.fromTo("#mode-audio",{duration:.25, opacity:1},{opacity:0},"-=.5")
.fromTo("#mode-identify",{duration:.5, opacity:0},{opacity:1},"-=.5")
.to("#mode-hover-circle",{duration:.25, x:"+=118",ease:"power2.out"},"startHover6")
.fromTo("#mode-identify",{duration:.25, opacity:1},{opacity:0},"startHover6")
.fromTo("#mode-speed",{duration:.5, opacity:0},{opacity:1},"startHover6")
.to("#mode-hover-circle",{duration:.25, x:"-=118",ease:"power2.out"},"startHover7")
.fromTo("#mode-speed",{duration:.25, opacity:1},{opacity:0},"startHover7")
.fromTo("#mode-identify",{duration:.5, opacity:0},{opacity:1},"startHover7")

