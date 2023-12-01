// gsap.registerPlugin(ScrollTrigger)

gsap.to("#gif-n", {
    scrollTrigger: {
        trigger: "#gif-n",
        start: "top",
        end: "max",
        scrub: true,
        scrub: 0.2,
    },
    rotation: -180, // Rotate the image 360 degrees
    x: () => -((window.innerWidth / 2) - (document.getElementById('gif-n').clientWidth / 2)),
    scale: 1.5,
    ease: "none"
});

gsap.to("#gif-plus", {
    scrollTrigger: {
        trigger: "#gif-plus",
        start: "top",
        end: "max",
        scrub: true,
        scrub: 0.2,
    },
    rotation: 180, // Rotate the image 360 degrees
    x: () => (window.innerWidth / 2) - (document.getElementById('gif-plus').clientWidth / 2),
    scale: 1.5,
    ease: "none"
});

// .contact-us - with scroll, change opacity from 0 to 100
gsap.to(".contact-us", {
    scrollTrigger: {
        trigger: ".contact-us",
        start: "top",
        end: "max",
        scrub: true,
        scrub: 0.2,
    },
    opacity: 1,
    ease: "none"
});

// .background - with scroll, change opacity from 0 to 100
gsap.to(".background", {
    scrollTrigger: {
        trigger: ".background",
        start: "top",
        end: "max",
        scrub: true,
        scrub: 0.2,
    },
    opacity: 1,
    ease: "none"
});
