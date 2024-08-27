function toggleText() {
  var text = document.querySelector(".hidden-text");
  var btn = document.querySelector(".read-more-btn");
  if (text.style.display === "none") {
    text.style.display = "block";
    btn.textContent = "Read Less";
  } else {
    text.style.display = "none";
    btn.textContent = "Read More";
  }
}

gsap.from("#title", {
  x: 90,
  delay: 0.8,
  duration: 1,
  opacity: 0,
});

gsap.from(".container", {
  delay: 1.6,
  opacity: 0,
  duration: 1,
  y: 30,
});

gsap.from(".readmore", {
  opacity: 0,
  delay: 2.1,
  y: 20,
  durarion: 0.5,
});

gsap.from(".australia img", {
    scale:0.9,
  x: -50,
  opacity: 0,
  ease: "power1.out",
  scrollTrigger: {
    scroller: "body",
    trigger: "#imga",
    start: "top 40%",
    end: "top 10%",
    // markers:true,
    scrub: 1,
  },
});

gsap.from(".romania img", {
    scale:0.9,
  x: 150,
  opacity: 0,
  ease: "power1.out",
  scrollTrigger: {
    scroller: "body",
    trigger: "#imgb",
    start: "top 40%",
    end: "top 10%",
    // markers:true,
    scrub: 1,
  },
});

gsap.from(".switzerland img", {

 scale:0.9,
  
  x: -150,
  opacity: 0,
  ease: "power1.out",
  scrollTrigger: {
    scroller: "body",
    trigger: "#imgc",
    start: "top 40%",
    end: "top 10%",
    // markers:true,
    scrub: 1,
  },
});

gsap.from(".egypt img", {
    scale:0.9,
  x: 150,
  opacity: 0,
  ease: "power1.out",
  scrollTrigger: {
    scroller: "body",
    trigger: "#imgd",
    start: "top 40%",
    end: "top 10%",
    // markers:true,
    scrub: 1,
  },
});

gsap.from(".p2r", {
  opacity: 0,
  y: 20,
  duration: 0.5,
  scrollTrigger: {
    scroller: "body",
    trigger: ".p2r",
    start: "top 60%",
    end: "top 25%",
    scrub: 1,
    // markers: true,
  },
});



gsap.from(".p3r",{
    opacity:0,
    y:50,
    duration:0.5,
    scrollTrigger:{
        scroller: "body",
        trigger:".p3r",
        start: "top 60%",
        end:"top 25%",
        scrub:1,
        // markers:true,
        
    }
})

gsap.from(".p4r",{
    opacity:0,
    y:50,
    duration:0.5,
    scrollTrigger:{
        scroller: "body",
        trigger:".p4r",
        start: "top 60%",
        end:"top 25%",
        scrub:1,
        // markers:true,
        
    }
})

gsap.from(".p5r",{
    opacity:0,
    y:50,
    duration:0.5,
    scrollTrigger:{
        scroller: "body",
        trigger:".p5r",
        start: "top 60%",
        end:"top 25%",
        scrub:1,
        // markers:true,
        
    }
})

gsap.from(".page2 #detail", {
    stagger: 1,
    opacity: 0,
    x: 200,
    duration: 1.5,
    scrollTrigger: {
      scroller: "body",
      trigger: "#detail",
      start: "top 90%",
      end: "top 30%",
      scrub: 2,
      // markers:true,
    },
  });

  gsap.from(".page3 #detail3", {
    stagger: 1,
    opacity: 0,
    x: -200,
    duration: 1.5,
    scrollTrigger: {
      scroller: "body",
      trigger: "#detail3",
      start: "top 90%",
      end: "top 30%",
      scrub: 2,
      // markers:true,
    },
  });

  gsap.from(".page4 #detail4", {
    stagger: 1,
    opacity: 0,
    x: 200,
    duration: 1.5,
    scrollTrigger: {
      scroller: "body",
      trigger: "#detail4",
      start: "top 90%",
      end: "top 30%",
      scrub: 2,
      // markers:true,
    },
  });

  gsap.from(".page5 #detail5", {
    stagger: 1,
    opacity: 0,
    x: -200,
    duration: 1.5,
    scrollTrigger: {
      scroller: "body",
      trigger: "#detail5",
      start: "top 90%",
      end: "top 30%",
      scrub: 2,
      // markers:true,
    },
  });



