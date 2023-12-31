import { Suspense, useEffect, useMemo, useState } from "react";
import { Box, Scroll, ScrollControls } from "@react-three/drei";

import ScrollManager from "../../../Global/ScrollManager";
import Section from "../../../Global/Section";
import { Sections } from "./Sections";
import { Display } from "./Display";
import { useThree } from "@react-three/fiber";

const MiniMap = ({
  visible,
  section,
  sections,
  setSection,
}: {
  visible: boolean;
  section: number;
  sections: Sections;
  setSection: (section: number) => void;
}) => {
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

const ProjectDescTemplate = ({
  sections,
  source,
}: {
  sections: Sections;
  source: string;
}) => {
  const [section, setSection] = useState(0);
  const NUM_PAGES = useMemo(() => Object.keys(sections).length, [sections]);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    return () => setVisible(false);
  }, []);

  return (
    <>
      <ScrollControls pages={NUM_PAGES} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection} />

        <Suspense>
          <Display source={source} />
        </Suspense>

        <MiniMap
          visible={visible}
          section={section}
          sections={sections}
          setSection={setSection}
        />
        <Scroll html>
          <div className="h-fit min-h-full text-white flex flex-col justify-between">
            {Object.keys(sections).map((section, index) => {
              return (
                <Section key={index}> {sections[section].section} </Section>
              );
            })}
          </div>
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default ProjectDescTemplate;
