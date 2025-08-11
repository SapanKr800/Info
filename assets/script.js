
gsap.from(".profilecard img ", {


    y: -30,
    opacity: 0,
    delay: 1,
    duration: 1

});

gsap.from(".profilecard h3", {
    y: 50,
    duration: 1,
    opacity: 0,
    delay: 1
});

gsap.from(".profilecard h6", {
    y: 50,
    duration: 1,
    scale: 0,
    delay: 1.5
});

gsap.from(".icons a", {
    y: 20, // Start from below
    opacity: 0,    // Start invisible
    duration: 1,
    stagger: 0.5,  // Delay between each box
    delay: 1.7

});


gsap.from(".nav button", {
    y: -50, // Start from below
    opacity: 0,    // Start invisible
    duration: 1,
    stagger: 0.2,  // Delay between each box
    delay: 1
});

function animateProject() {

    // Split text into lines
    const split = new SplitText(".tab-pane p", { type: "lines" });

    // Animate each line
    gsap.from(split.lines, {
        y: 50,          // Start from above
        opacity: 0,      // Start invisible
        duration: 1,
        stagger: 0.2,    // Delay between each line
        delay: 1,
        ease: "power2.out"
    });

    gsap.from(".skills h3", {
        y: 50, // Start from below
        opacity: 0,    // Start invisible
        duration: 1,
        stagger: 0.2,  // Delay between each box
        delay: 1.2
    });

    gsap.from(".skills span", {
        y: 50, // Start from below
        opacity: 0,    // Start invisible
        duration: 1,
        stagger: 0.2,  // Delay between each box
        delay: 1.4
    });

};


animateProject()


const home = document.querySelector("#nav-home-tab");
const profile = document.querySelector("#nav-profile-tab");

home.addEventListener("click", () => {

    animateProject()

});

profile.addEventListener("click", () => {

    gsap.from(".projects h3, .Project", {
        y: 50, // Start from below
        opacity: 0,    // Start invisible
        duration: 1,
        stagger: 0.2,  // Delay between each box
        delay: 1
    });



});
