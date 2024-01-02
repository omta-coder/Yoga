
var tl = gsap.timeline();

tl.from("#nav h2,#nav h5,#nav i",{
    y:-100,
    duration:1,
    // delay:1,
    opacity:0,
    stagger:0.2
})
tl.from("#left h1,#left h3,#left p,button",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:0.3
})
tl.from("#right img",{
    x:100,
    duration:1,
    scale:0,
    stagger:0.5
})