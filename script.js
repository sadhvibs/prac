gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollSmoother);

const elementWidth = document.querySelector(".square1").offsetWidth;
const screenWidth = window.innerWidth;
gsap.to(".boxc", {
    x: 900,
    rotation: 360,
    duration: 3,
    scrollTrigger: {
        trigger: ".boxc",
        toggleActions: "restart pause resume reverse",
        start: "top center",
        end: "bottom",
    }
});

gsap.to(".square1", {
    x: 960,
    duration: 3,
    scrollTrigger: {
        trigger: ".square1",
        toggleActions: "restart reverse restart revese",
        start: "top center",
        end: "bottom"
    }
})
gsap.to(".square2", {
    x: -960,
    duration: 3,
    scrollTrigger: {
        trigger: ".square1",
        toggleActions: "restart reverse restart revese",
        start: "top center",
        end: "bottom "
    }
})

gsap.to(".square", {
    x: "83vw",
    y: "70vh",
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        toggleActions: "restart reverse restart revese",
        start: "top center",
        end: "bottom "
    },
});

gsap.to(".square3", {
    x: "-83vw",
    y: "70vh",
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        toggleActions: "restart reverse restart revese",
        start: "top center",
        end: "bottom"
    },
});

const st = gsap.timeline({ repeat: -1 });
st.to(".box", { x: 500, duration: 2 })
    .to(".box", { y: 200, duration: 1 })
    .to(".box", { x: 0, duration: 2 })
    .to(".box", { y: -100, duration: 1 })


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav button").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            gsap.to(window, { duration: 1, scrollTo: { y: "#section" + (index + 1), offsetY: 70 } });
        });
    });
});



jQuery(".section").mousemove(function (e) {
    var t = jQuery(window).width(),
        n = jQuery(window).height(),
        o = e.pageX - this.offsetLeft,
        i = e.pageY - this.offsetTop,
        r = o - t / 2,
        a = i - n / 2;

    jQuery(".parallax", jQuery(this)).each(function () {
        var e = jQuery(this).attr("data-parallax-speed") / 10;
        var timeline = new TimelineMax();
        timeline.to(jQuery(this), 1, { x: 1 - r * e, y: 1 - a * e });
        timeline.play();
    })
});