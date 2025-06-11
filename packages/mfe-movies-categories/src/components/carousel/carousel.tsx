import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import styles from "./carousel.module.css";

type CarouselProps = {
  children: React.ReactNode;
};

export const Carousel = ({ children }: CarouselProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = 200 * 2;
      sliderRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const scrollAmount = 200 * 2;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={styles.sliderContainer}>
      <button
        className={`${styles.sliderButton} ${styles.sliderButtonLeft}`}
        onClick={scrollLeft}
        aria-label="scroll left"
      >
        <ChevronLeft />
      </button>
      <div className={styles.slider} ref={sliderRef}>
        {children}
      </div>
      <button
        className={`${styles.sliderButton} ${styles.sliderButtonRight}`}
        onClick={scrollRight}
        aria-label="scroll right"
      >
        <ChevronRight />
      </button>
    </div>
  );
};
