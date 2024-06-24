document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".loader", {
    display: "flex",
  });
});

window.addEventListener("load", () => {
  let tl = gsap.timeline();
  tl.to(".loader", {
    opacity: 0,
  }).to(".loader", {
    display: "none",
  });
});

function page1Animation() {
  gsap.set(".marquee-container", {
    scale: 3,
  });

  gsap.from(".text-1-p span", {
    opacity: 0,
    stagger: 0.02,
    duration: 1,
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-1-content",
      start: "top top",
      end: "bottom top",
      scrub: 2,
    },
  });

  tl.to(
    ".page-1-content video",
    {
      "--clip": 0,
    },
    "a"
  )

    .to(
      ".marquee-container",
      {
        scale: 1,
      },
      "a"
    )

    .to(
      ".text-1 span",
      {
        opacity: 1,
        stagger: 0.01,
        delay: -0.3,
      },
      "b"
    )

    .to(
      ".left",
      {
        xPercent: -20,
      },
      "b"
    )

    .to(
      ".right",
      {
        xPercent: 20,
      },
      "b"
    );
}

function page2Animation() {
  const boxes = document.querySelectorAll(".content-box");

  boxes.forEach((box) => {
    gsap.to(box, {
      scale: 1.1,
      scrollTrigger: {
        trigger: box,
        start: "top 50%",
        end: "top 30%",
        scrub: 2,
      },
    });
  });
}

function page3Animation() {
  let tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".page-3",
        start: "top top",
        end: "top -280%",
        scrub: 2,
      },
    })
    .to(".slide", {
      xPercent: -300,
    })

    .to(".slide", {
      duration: 0.1,
      opacity: 0,
    });
}

function page4Animation() {
  function rowOpacityAnimation() {
    gsap.from(".page-4-row", {
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".page-4-row",
        start: "top 40%",
        ease: "power2",
      },
    });
  }

  function rowAnimation() {
    document
      .querySelectorAll(".page-4-row")

      .forEach((row) => {
        row.addEventListener("mouseenter", (e) => {
          gsap.to(row.querySelector(".img-popup"), {
            opacity: 1,
            ease: "ease.inOut",
          });
        });
        row.addEventListener("mousemove", (e) => {
          gsap.to(row.querySelector(".img-popup"), {
            opacity: 1,
            x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, e.clientX),
            ease: "ease.inOut",
          });
        });

        row.addEventListener("mouseleave", function (e) {
          gsap.to(row.querySelector(".img-popup"), {
            opacity: 0,
            ease: "power2",
          });
        });
      });
  }

  function overlayAnimation() {
    document.querySelectorAll(".page-4-row").forEach((row) => {
      row.addEventListener("mouseenter", () => {
        gsap.to(row.querySelector(".overlay"), {
          opacity: 1,
          ease: "power4",
        });
      });

      row.addEventListener("mouseleave", () => {
        gsap.to(row.querySelector(".overlay"), {
          opacity: 0,
          ease: "power4",
        });
      });
    });
  }

  rowOpacityAnimation();
  rowAnimation();
  overlayAnimation();
}

function page6Animation() {
  gsap.set(".capsule-right", {
    transform: "rotate(-15deg) translateY(30%)",
  });

  gsap.set(".capsule-left", {
    transform: "rotate(-15deg) translateY(-10%)",
  });

  gsap.to(".capsule-right", {
    transform: "rotate(-15deg) translateY(0)",
    scrollTrigger: {
      trigger: ".page-6",
      start: "top 40%",
    },
  });

  gsap.to(".capsule-left", {
    transform: "rotate(-15deg) translateY(0)",
    scrollTrigger: {
      trigger: ".page-6",
      start: "top 40%",
    },
  });

  gsap.from(".page-6-left p", {
    opacity: 0,
    ease: "expo.inOut",
    duration: 1,
    scrollTrigger: {
      trigger: ".page-6",
      start: "top 50%",
    },
  });
}

function titleAnimation() {
  gsap.from(".title span", {
    opacity: 0,
    transform: "translateY(70%)",
    ease: "circ.out",
    stagger: 0.07,
    delay: 0.4,
    scrollTrigger: {
      trigger: ".title",
      toggleActions: "play reset play reset",
    },
  });
}

function textSplit() {
  let h1s = document.querySelectorAll(".text-split");

  h1s.forEach((text) => {
    let textinner = text.textContent;
    let clutter = "";
    textinner.split("").forEach((e) => {
      if (e === " ") {
        clutter += `<span>&nbsp</span>`;
      } else {
        clutter += `<span>${e}</span>`;
      }
    });
    text.innerHTML = clutter;
  });
}

function textAnimation() {
  function page2TextAnimation() {
    gsap.from(".text-2 span", {
      scrollTrigger: {
        trigger: ".page-2",
        start: "top 40%",
      },
      opacity: 0,
      transform: `translateY(100%) scaleY(0) `,
      stagger: 0.03,
    });
  }

  function page3TextAnimation() {
    gsap.from(".text-3 span", {
      scrollTrigger: {
        trigger: ".page-3",
        start: "top 40%",
      },
      opacity: 0,
      transform: `translateY(100%) scaleY(0) `,
      stagger: 0.03,
    });
  }

  function footerTextAnimation() {
    gsap.from(".text-ft span", {
      scrollTrigger: {
        trigger: ".footer-top",
        start: "top 40%",
      },
      opacity: 0,
      transform: `translateY(100%) scaleY(0) `,
      stagger: 0.03,
    });
  }

  function page5TextAnimation() {
    gsap.from(".text-5 span", {
      scrollTrigger: {
        trigger: ".page-5",
        start: "top 40%",
      },
      opacity: 0,
      transform: `translateY(100%) scaleY(0) `,
      stagger: 0.03,
    });
  }
  function page6TextAnimation() {
    gsap.from(".text-6 span", {
      scrollTrigger: {
        trigger: ".page-6-lbottom",
        start: "top 40%",
      },
      opacity: 0,
      transform: `translateY(100%) scaleY(0) `,
      stagger: 0.03,
    });
  }

  page2TextAnimation();
  page3TextAnimation();
  page5TextAnimation();
  page6TextAnimation();
  footerTextAnimation();
}

function bodyColorChanger() {
  document.querySelectorAll(".section").forEach((section) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 10%",
        onEnter: () => {
          document.body.setAttribute("theme", section.dataset.color);
          document.querySelector(`link[rel="shortcut icon"]`).href =
            section.dataset.favicon;
        },
        onEnterBack: () => {
          document.body.setAttribute("theme", section.dataset.color);
          document.querySelector(`link[rel="shortcut icon"]`).href =
            section.dataset.favicon;
        },
      },
    });
  });
}

function lenis() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

function navHover() {
  let navbar = document.querySelector(".navbar");

  navbar.addEventListener("mouseenter", () => {
    document.querySelector(".main").style.opacity = 0.2;
  });

  navbar.addEventListener("mouseleave", () => {
    document.querySelector(".main").style.opacity = 1;
  });
}

function underlineAnimation() {
  let underlines = document.querySelectorAll(".underline");

  underlines.forEach((underline) => {
    underline.addEventListener("mouseenter", () => {
      gsap.to(underline, {
        "--width": "100%",
      });
    });

    underline.addEventListener("mouseleave", () => {
      let tl = gsap.timeline();

      tl.to(underline, {
        "--left": "none",
        "--right": 0,
        "--width": "0",
      }).to(underline, {
        duration: 0,
        "--width": "0",
        "--left": 0,
        "--right": "none",
      });
    });
  });
}

lenis();
navHover();
textSplit();
textAnimation();
titleAnimation();
page6Animation();
page4Animation();
page3Animation();
page2Animation();
page1Animation();
bodyColorChanger();
underlineAnimation();
