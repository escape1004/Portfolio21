window.addEventListener("scroll", function () {
    let scrollTop = (document.documentElement.scrollTop || window.scrollY || window.pageYOffset);

    // left-a
    if (scrollTop >= 1600) {
        document.querySelector(".section1 .left .a-1 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .a-1 .blind").style.opacity = "1";
    }

    if (scrollTop >= 5200) {
        document.querySelector(".section1 .left .a-2 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .a-2 .blind").style.opacity = "1";
    }

    if (scrollTop >= 1) {
        document.querySelector(".section1 .left .a-3 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .a-3 .blind").style.opacity = "1";
    }

    if (scrollTop >= 3200) {
        document.querySelector(".section1 .left .a-4 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .a-4 .blind").style.opacity = "1";
    }

    if (scrollTop >= 1200) {
        document.querySelector(".section1 .left .a-5 .blind").style.opacity = "0";
        document.querySelector(".section1 .left .a-5 .blind2").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .a-5 .blind").style.opacity = "1";
        document.querySelector(".section1 .left .a-5 .blind2").style.opacity = "1";
    }

    if (scrollTop >= 4400) {
        document.querySelector(".section1 .left .a-6 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .a-6 .blind").style.opacity = "1";
    }

    if (scrollTop >= 6000) {
        document.querySelector(".section1 .left .a-7 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .a-7 .blind").style.opacity = "1";
    }

    if (scrollTop >= 2400) {
        document.querySelector(".section1 .left .a-8 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .a-8 .blind").style.opacity = "1";
    }

    // left-b
    if (scrollTop >= 800) {
        document.querySelector(".section1 .left .b-1 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .b-1 .blind").style.opacity = "1";
    }

    if (scrollTop >= 6400) {
        document.querySelector(".section1 .left .b-2 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .b-2 .blind").style.opacity = "1";
    }

    if (scrollTop >= 2000) {
        document.querySelector(".section1 .left .b-3 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .b-3 .blind").style.opacity = "1";
    }

    if (scrollTop >= 3600) {
        document.querySelector(".section1 .left .b-4 .blind").style.opacity = "0";
        document.querySelector(".section1 .left .b-4 .blind2").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .b-4 .blind").style.opacity = "1";
        document.querySelector(".section1 .left .b-4 .blind2").style.opacity = "1";
    }

    if (scrollTop >= 5600) {
        document.querySelector(".section1 .left .b-5 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .b-5 .blind").style.opacity = "1";
    }

    if (scrollTop >= 4000) {
        document.querySelector(".section1 .left .b-6 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .b-6 .blind").style.opacity = "1";
    }

    if (scrollTop >= 400) {
        document.querySelector(".section1 .left .b-7 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .b-7 .blind").style.opacity = "1";
    }

    if (scrollTop >= 4800) {
        document.querySelector(".section1 .left .b-8 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .b-8 .blind").style.opacity = "1";
    }

    if (scrollTop >= 2800) {
        document.querySelector(".section1 .left .b-9 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .left .b-9 .blind").style.opacity = "1";
    }

    // right-a
    if (scrollTop >= 1400) {
        document.querySelector(".section1 .right .a-1 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .a-1 .blind").style.opacity = "1";
    }

    if (scrollTop >= 4600) {
        document.querySelector(".section1 .right .a-2 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .a-2 .blind").style.opacity = "1";
    }

    if (scrollTop >= 200) {
        document.querySelector(".section1 .right .a-3 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .a-3 .blind").style.opacity = "1";
    }

    if (scrollTop >= 5400) {
        document.querySelector(".section1 .right .a-4 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .a-4 .blind").style.opacity = "1";
    }

    if (scrollTop >= 3800) {
        document.querySelector(".section1 .right .a-5 .blind").style.opacity = "0";
        document.querySelector(".section1 .right .a-5 .blind2").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .a-5 .blind").style.opacity = "1";
        document.querySelector(".section1 .right .a-5 .blind2").style.opacity = "1";
    }

    if (scrollTop >= 2600) {
        document.querySelector(".section1 .right .a-6 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .a-6 .blind").style.opacity = "1";
    }

    if (scrollTop >= 6200) {
        document.querySelector(".section1 .right .a-7 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .a-7 .blind").style.opacity = "1";
    }

    if (scrollTop >= 1800) {
        document.querySelector(".section1 .right .a-8 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .a-8 .blind").style.opacity = "1";
    }

    // right-b
    if (scrollTop >= 600) {
        document.querySelector(".section1 .right .b-1 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .b-1 .blind").style.opacity = "1";
    }

    if (scrollTop >= 6600) {
        document.querySelector(".section1 .right .b-2 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .b-2 .blind").style.opacity = "1";
    }

    if (scrollTop >= 3400) {
        document.querySelector(".section1 .right .b-3 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .b-3 .blind").style.opacity = "1";
    }

    if (scrollTop >= 5800) {
        document.querySelector(".section1 .right .b-4 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .b-4 .blind").style.opacity = "1";
    }

    if (scrollTop >= 2200) {
        document.querySelector(".section1 .right .b-5 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .b-5 .blind").style.opacity = "1";
    }

    if (scrollTop >= 5000) {
        document.querySelector(".section1 .right .b-6 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .b-6 .blind").style.opacity = "1";
    }

    if (scrollTop >= 4200) {
        document.querySelector(".section1 .right .b-7 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .b-7 .blind").style.opacity = "1";
    }

    if (scrollTop >= 1000) {
        document.querySelector(".section1 .right .b-8 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .b-8 .blind").style.opacity = "1";
    }

    if (scrollTop >= 3000) {
        document.querySelector(".section1 .right .b-9 .blind").style.opacity = "0";
    } else {
        document.querySelector(".section1 .right .b-9 .blind").style.opacity = "1";
    }
});