// gsap.registerPlugin(ScrollTrigger)

const isMobile = window.innerWidth < 600;

gsap.to("#gif-n", {
    scrollTrigger: {
        trigger: "#gif-n",
        start: "top",
        end: "max",
        scrub: true,
        scrub: 0.2,
    },
    rotation: -180, // Rotate the image 360 degrees
    x: isMobile
        ? -((window.innerWidth / 1.1) - (document.getElementById('gif-n').clientWidth))
        : () => -((window.innerWidth / 2) - (document.getElementById('gif-n').clientWidth / 2) + 16),
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
    x: isMobile
        ? () => (window.innerWidth / 1.1) - (document.getElementById('gif-plus').clientWidth)
        : () => (window.innerWidth / 2) - (document.getElementById('gif-plus').clientWidth / 2) + 16,
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
// gsap.to(".background", {
//     scrollTrigger: {
//         trigger: ".background",
//         start: "top",
//         end: "max",
//         scrub: true,
//         scrub: 0.2,
//     },
//     opacity: 0.8,
//     ease: "none"
// });

gsap.to(".bg-top-right", {
    scrollTrigger: {
        trigger: ".background",
        start: "top",
        end: "max",
        scrub: true,
        scrub: 0.2,
    },
    height: "26%",
    ease: "none"
});

gsap.to(".bg-bottom-left", {
    scrollTrigger: {
        trigger: ".background",
        start: "top",
        end: "max",
        scrub: true,
        scrub: 0.2,
    },
    height: "26%",
    ease: "none"
});

// .scroll-down - with scroll, change opacity from 100 to 0
gsap.to(".scroll-down", {
    scrollTrigger: {
        trigger: ".scroll-down",
        start: "top",
        end: "200%",
        scrub: true,
        scrub: 0.2,
    },
    opacity: 0,
    ease: "none"
});
