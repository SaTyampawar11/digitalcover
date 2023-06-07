// function init(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });


// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }

// init()

var circle1 = document.querySelector("#page4 #circle")
var text = document.querySelector("#page4 #text")


window.addEventListener("mousemove",function(dets){
    gsap.to(circle1,{
        x: dets.clientX,
        y: dets.clientY,
        duration:.3,
        ease:Expo
    });
});
text.addEventListener("mousemove",function(dets){
    gsap.to(circle1,{
        scale:2
    });
});

text.addEventListener("mouseleave",function(dets){
    gsap.to(circle1,{
        scale:1,
    });
});


var tl1 = gsap.timeline();

tl1 
.to("#home #overlay", {
    duration:1,
    opacity:0,
    ease:Power3,
    delay:7,
})

.to(".loader" ,{
    duration:2,
    opacity:1,
    ease: Circ.easeInOut,
    delay:"-1"
})
.to("#home .loader", {
    height: "0%",
    duration:1,
    opacity:0,
    ease:Power3,
    delay:3
})

.to("#home #red" ,{
    duration:1,
    top:0,
    height: "100%",
    ease: Circ.easeInOut,
    delay:"-2"
})
.to("#home #red", {
    height: "0%",
    duration:.5,
    opacity:0,
    ease:Power3,
})

tl1.from("#home>img" ,{
    scale:0,
    duration:1,
    rotateY:"180deg",
    delay:.1,
})
.from("#home>h1" , {
    top:"20%",
    opacity:0,
    duration:1,
}, "s1")

tl1.from("#home>h2" , {
    top:"80%",
    opacity:0,
    duration:1,
    delay:.4
}, "s1")

tl1.from("#home #text" ,{
    top:"90%",
    opacity:0,
})
tl1.from("#home #nav" ,{
    top:"-30%",
    opacity:0,
    ease:Power2,
    duration:1
})
tl1.to("#home #circle" ,{
    opacity:1,
    delay:"-.4"
})

function homepage(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#home",
            scroller :"body",
            start:"top top",
            scrub:1,
            // markers:true,
        }
    })
    tl2
    .to("#home>h1" , {
        left: "-120%",
        duration: .4,
        ease :Power2
    } ,"s2")
    .to("#home>h2" , {
        left: "120%",
        duration: .4,
        ease :Power2
    } ,"s2")
    .to("#home #text h3" , {
        top: "-120%",
        duration: .4,
        ease :Power2,
    } ,"s2")
};
homepage();

function page2(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page2",
            scroller :"body",
            start:"top 20%",
            scrub:1,
        }
    });
    tl3
    .to("#page2 #text" ,{
        top:"30%",
        duration:1,
        opacity: 1,
    })
    .to("#page2 #circle" ,{
        top:"10%",
        duration:1,
    })
};
page2();


function page4(){
    var tl5 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page4",
            scroller :"body",
            start:"top 100%",
            scrub:1,
        }
    });
    tl5
    .from("#page4 img" ,{
        opacity:0,
        duration:1,
    },"s3")
    .from("#page4 h1",{
        top:"15%",
        duration: .4,
        opacity:0,
        delay:.3
    },"s3")
    .from("#page4 h2",{
        top:"35%",
        duration: .4,
        opacity:0,
        delay:.4,
    },"s3")
    .from("#page4 h3",{
        top:"55%",
        duration: .4,
        opacity:0,
        delay:.4
    },"s3")
}
page4();

function page5(){
    var tl6 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page5",
            scroller :"body",
            start:"top 100%",
            end:"top 50%",
            scrub:1,
        }
    })
    // tl6
    // .from("#page5 img" ,{
    //     opacity:0,
    //     duration:1,
    // })

}
page5();

function page6(){
    var tl8 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page6",
            scroller :"body",
            start:"top 100%",
            scrub:1,
        }
    })
    tl8
    .from("#page6 #imgbox1",{
        opacity:0,
        duration:1
    })
    .from("#page6 #imgbox2",{
        opacity:0,
        duration:1
    })
    .from("#page6 #imgbox3",{
        opacity:0,
        duration:1
    })
    .from("#page6 #imgbox4",{
        opacity:0,
        duration:1,
        delay:"-.5"
    })

}
page6();
function page7(){
    var tl7 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page7",
            scroller :"body",
            start:"top 100%",
            scrub:1,
        }
    })
    tl7
    .from("#page7 h1",{
        opacity:0,
        duration:1,
    })

}
page7();

function pagesx(){
    var tlsx = gsap.timeline({
        scrollTrigger:{
            trigger:"#pagesx",
            scroller :"body",
            start:"top 40%",
            end:"top 80%",
            scrub:1,
        }
    });
    tlsx
    .from("#pagesx img",{
        opacity:0,
        duration:1,
    })
};
pagesx();

function container(){
    var tls = gsap.timeline({
        scrollTrigger:{
            trigger:".container",
            scroller :"body",
            start:"top 40%",
            end:"top 80%",
            scrub:1,
        }
    });
    tls
    .from(".container",{
        opacity:0,
        duration:1,
    })
};
container();

function section(){
    var tls = gsap.timeline({
        scrollTrigger:{
            trigger:"section",
            scroller :"body",
            start:"top 40%",
            end:"top 80%",
            scrub:1,
        }
    });
    tls
    .from("section",{
        opacity:0,
        duration:1,
    })
};
section();