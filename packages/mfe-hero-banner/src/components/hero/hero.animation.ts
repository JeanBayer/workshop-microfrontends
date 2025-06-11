import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export class HeroContentAnimation {
  public static title() {
    const splitTitle = new SplitText('[class*="title"]', {
      type: "words",
    });

    const splitDescription = new SplitText('[class*="description"]', {
      type: "words",
    });

    let tl = gsap.timeline({
      defaults: {
        duration: 1,
        opacity: 0,
        x: 0,
        y: 10,
        stagger: 0.05,
        filter: "blur(5px)",
      },
    });
    tl.from(splitTitle.words, {
      scale: 1.2,
    }).from(
      splitDescription.words,
      {
        duration: 2,
      },
      "-=0.5"
    );
  }

  public static image() {
    gsap.to("#hero-image", {
      duration: 3,
      scaleX: 1.1,
      scrollTrigger: {
        trigger: "#hero-image",
        start: 0,
        end: 800,
        scrub: true,
      },
    });
  }
}
