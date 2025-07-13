
gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(" #aboutus, #products, #contactus").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%", 
      toggleActions: "play none none reverse",
    },
  });
});



