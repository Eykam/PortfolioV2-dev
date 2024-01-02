import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef, useMemo } from "react";
import { sections } from "../Pages/Home/Components/Sections";

const ScrollManager = (props: {
  section: number;
  numSections: number;
  onSectionChange: (num: number) => void;
}) => {
  const { section, numSections, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);
  // const NUM_SECTIONS = useMemo(() => Object.keys(sections).length, []);

  useEffect(() => {
    data.fill.classList.add("top-0");
    data.fill.classList.add("absolute");
  }, [data.fill]);

  useEffect(() => {
    gsap.to(data.el, {
      duration: 0.3,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section, data.el]);

  useFrame(() => {
    const getCurrSection = () => {
      const section = Math.floor(data.offset * numSections);
      return section;
    };

    if (isAnimating.current) {
      lastScroll.current = data.offset;
      return;
    }

    const section = getCurrSection();

    if (section !== lastScroll.current) {
      onSectionChange(section);
    }

    lastScroll.current = section;
  });

  return null;
};

export default ScrollManager;
