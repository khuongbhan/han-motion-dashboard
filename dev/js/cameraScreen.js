import { gsap } from "gsap";

export let screen4TL = gsap.timeline();

gsap.set("#mode-hover-circle",{transformOrigin: "bottom center"});
gsap.set("#clip-oval",{x:"-=70",y:"-=40",transformOrigin: "top center"});
gsap.set("#battery",{transformOrigin: "top right"});
gsap.set("#camera-first-step",{y: "-=70"});
gsap.set("#cam-opening-text",{transformOrigin: "center center"});
gsap.set("#camera-loading",{transformOrigin: "center center"});
gsap.set("#camera-loading-process",{transformOrigin: "center center"});
gsap.set("#cam-area",{transformOrigin: "center center"});
gsap.set("#scanner-line-camera",{x:"-4px",y:"-350px", transfromOrigin: "center center"});
gsap.set("#clip-img",{x:"-=120",y:"-=150"});
gsap.set("#scan-text-cam",{x:"-=47",y:"+=10"});
gsap.set("#lp-box-scanned",{x:"+=25",y:"-=30"});
gsap.set("#forward",{y:"-=50"});
gsap.set("#result-text",{y:"+=80"});
gsap.set("#fwd-bar",{scaleX:0,transformOrigin:"center left"});
gsap.set("#black-rec-7",{x:"-=100",y:"+=50",scaleX:0});


screen4TL

// select I mode

.to("#mode-hover-circle",{duration:.25, scale:.85},"click")
.to("#mode-hover-circle",{duration:.25, scale:1},"click2")
.from("#identify-modeon",{duration:.25, opacity:0},"click2")
.to("#mode-identify",{duration:.25, opacity:0},"click3")

.to("#mode-hover-circle",{duration: .75,scale: 2, y:"-=140"},"click3")
.to("#mode-a, #mode-d, #mode-i, #mode-s, #mode-z",{duration: .75, y:"-=160"},"click3")
.to("#audio-modeon, #speed-modeon, #identify-modeon",{duration: .75, y:"-=110"},"click3")
.to("#battery",{duration: .75,scale: .75, x:"+=20"},"click3")

.to("#speed-shape",{duration:.5, opacity:0},"click4")
.to("#speedm-out",{duration:.75, drawSVG: 0,ease:"power2.out"},"click4")
.to("#speedm-in",{duration:.75, drawSVG: 0,ease:"power2.out"},"click4")
.to("#target-speed-text",{duration: .5, opacity:0},"click4")
.to("#speed-number",{duration:.75,x:"+=170",y:"+=75",scale:0.5,ease:"power2.out"},"click5")
.to("#mph",{duration:.75,x:"-=13",y:"+=95",scale:0.7,ease:"power2.out"},"click5")

.to("#signal-found",{duration:.25, opacity:0},"click4")
.to("#audio-graph",{duration:.75, y:"+=260",scale:.5,ease:"power2.out"},"click5")
.to("#decibel-text, #hertz-text",{duration:.75,y:"+=80",scale:.8,ease:"power2.out"},"click5")

.from("#cam-load-out",{duration:.75, drawSVG: "30% 30%",ease:"power2.out"},"click5")
.from("#cam-load-in",{duration:.75, drawSVG: "80% 80%",ease:"power2.out"},"click5")
.fromTo("#cam-opening-text",{opacity: 0},{duration:.5, opacity:1,repeat: 2},"click6")

.to("#clip-oval",{duration:1.5, x:"-=20",y:"+=20",scale:6},"click6")
// .to("#clip-oval",{duration:.75,scale:6},"-=1.6")
.to("#cam-load-red",{duration:.25, fill:"#65D8F1"},"click7")
.to("#camera-loading-process",{duration:.5,scale:0,opacity:0,ease:"power2.in"},"click8")
.from("#cam-area",{duration:1,scale:0,opacity:0,ease:"power2.out"},"click9")
.fromTo("#cam-area",{opacity: 0},{duration:.25, opacity:1,repeat: 2},"click91")
.to("#clip-img",{duration:1, x:"+=700"},"click91")
.from("#scanner-line-camera",{duration:.5, drawSVG:"50% 50%",opacity:0},"click92")

.to("#scanner-line-camera",{duration:2, y:"+=360",ease:"power3.out"},"click93StartScan")
.from("#scan-boxes",{duration:.25,opacity:0},"-=1.65")
.fromTo("#lp-scan",{opacity: 0},{duration:.25, opacity:1,repeat: 2},"-=1.4")
.fromTo("#scan-text-cam",{opacity: 0},{duration:.25, opacity:1,repeat: 2},"-=.5")

.to("#clip-img",{duration:2, y:"-=400"},"click94")
.to("#scanner-line-camera",{duration:1, drawSVG:"50% 50%",opacity:0},"click94")
.to("#scan-text-cam",{duration:.5, opacity:0},"click94")
.to("#scan-boxes",{duration:.5, opacity:0},"-=1")
.to("#cam-area",{duration:1,scale:0,opacity:0,ease:"power2.out"},"click95")
.to("#lp-scan",{duration:1,scale:1.5,y:"-=40",x:"-=250",ease:"power2.out"},"click95")
.from("#fwd-load-box",{duration:1, drawSVG:0,opacity:0},"click95")

.fromTo("#fwd-text",{opacity: 0},{duration:.5, opacity:1,repeat: 3},"click96")
.to("#fwd-bar",{duration:1,scaleX:2.3},"click96")
.to("#fwd-bar",{duration:.25,fill:"#65D8F1"},"-=1")
.from("#fwd-check",{duration:.25,drawSVG:0,ease:"none"},"-=1")
.from("#lp-box-scanned",{duration: .5,drawSVG:"80% 80%",ease: "power2.out"},"click96")

.to("#lp-box-scanned, #lp-scan",{duration:1,x:"+=225",y:"+=20",ease: "power2.out"},"click97")
.to("#fwd-group-s",{duration:.5,x:"-=125",y:"-=40",opacity: 0,ease: "power2.out"},"click97")
.to("#black-rec-7",{duration:1.5,scaleX:2.5,ease: "power2.out"},"-=1")
.fromTo("#lp-scan, #lp-box-scanned",{opacity: 1},{duration:.2, opacity:0,repeat: 2},"-=.55")
.to("#lp-box-scanned, #lp-scan",{opacity:1},"-=.15")