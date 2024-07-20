// Learning

// gsap.to("#page2 img", {
//     width: "100%",
//     scrollTrigger: {
//         trigger: "#page2", // Jab bhi ham yaha par pin ka use karte hai to children ko target na karte hue uske parent ko target krte hai
//         scroller: "body",
//         markers: true,
//         start: "top 0",
//         end: "top -100%",
//         scrub: 2,
//         pin: true
//     }
// });

// Practise
gsap.to("#page2 h1", {
  transform: "translateX(-110%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers: true,
    start: "top 0",
    end: "top -100%",
    scrub: 5,
    pin: true,
  },
});
