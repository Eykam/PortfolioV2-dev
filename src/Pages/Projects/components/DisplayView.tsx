import { Environment, View } from "@react-three/drei";
import { Suspense } from "react";
import { Display } from "./Display";

export const DisplayView = ({
  laptopView,
  source,
}: {
  laptopView: React.MutableRefObject<HTMLElement>;
  source: string;
}) => {
  return (
    <View track={laptopView}>
      <Suspense>
        <Display source={source} />
        <Environment preset="night" />
      </Suspense>
    </View>
  );
};
