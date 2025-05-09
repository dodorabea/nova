const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById("vertical");
const col_left = document.querySelector(".col_left");
const timeln = gsap.timeline({ paused: true });

timeln.fromTo(col_left, {y: 0}, {y: '170vh', duration: 1, ease: 'none'}, 0);

const scroll_1 = ScrollTrigger.create({
  animation: timeln,
  trigger: section_1,
  start: 'top top',
  end: 'bottom center',
  scrub: true
});
/*============================================================*/
let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
      scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset"
      }
  });

  tl.set(container, {
      autoAlpha: 1
  });
  tl.from(container, 1.5, {
      xPercent: -100,
      ease: Power2.out
  });
  tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out
  });
});
// const section_2 = document.getElementById("horizontal");
// let box_items = gsap.utils.toArray(".horizontal__item");

// gsap.to(box_items, {
// xPercent: -100 * (box_items.length - 1),
// ease: "sine.out",
// scrollTrigger: {
//   trigger: section_2,
//   pin: true,
//   scrub: 3,
//   snap: 1 / (box_items.length - 1),
//   end: "+=" + section_2.offsetWidth
// }
// });