import { Box, Scroll, ScrollControls } from "@react-three/drei";
import ScrollManager from "../../Global/ScrollManager";
import Section from "../../Global/Section";
import useScrollStore from "../../Store";
import { sections } from "./Components/Sections";
import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";

const MiniMap = ({ visible }: { visible: boolean }) => {
  const { section, setSection } = useScrollStore((state) => ({
    section: state.section,
    setSection: state.setSection,
  }));

  const { width } = useThree((state) => state.viewport);
  const innerWidth = window.innerWidth;

  return (
    <group>
      {Object.keys(sections).map((_, index) => (
        <Box
          visible={visible}
          key={index}
          material-color={index === section ? "blue" : "purple"}
          castShadow
          receiveShadow
          onClick={(e) => setSection(index)}
          onPointerDown={(e) => setSection(index)}
          scale={
            index === section
              ? innerWidth < 700
                ? 0.04
                : 0.03
              : innerWidth < 700
              ? 0.03
              : 0.02
          }
          position={
            innerWidth < 700
              ? [0.55, 14.9 - index * 0.07, 98]
              : [
                  (17.5 * width) / 1920 + index * 0.008,
                  14.75 - index * 0.05,
                  98,
                ]
          }
        />
      ))}
    </group>
  );
};

const Home = ({ initialSection }: { initialSection?: number }) => {
  const { section, setSection } = useScrollStore((state) => ({
    section: state.section,
    setSection: state.setSection,
  }));

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    return () => setVisible(false);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (initialSection) {
        console.log("setting section", initialSection);
        setSection(initialSection);
      }
    }, 500);
  }, [initialSection, setSection]);

  return (
    <>
      <ScrollControls pages={Object.keys(sections).length} damping={0.1}>
        <ScrollManager
          section={section}
          onSectionChange={setSection}
          numSections={Object.keys(sections).length}
        />

        <MiniMap visible={visible} />
        <Scroll html>
          <div className="h-fit min-h-full w-full text-white flex flex-col justify-between">
            {Object.keys(sections).map((section, index) => {
              return (
                <Section key={index}> {sections[section].section()} </Section>
              );
            })}
          </div>
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Home;
