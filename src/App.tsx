import Header from "./Global/Header";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  //   PerformanceMonitor,
} from "@react-three/drei";
import { Grid } from "./Global/Grid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
// import MeshGrid from "./Global/MeshGrid";

const RenderRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="h-[100vh] w-[100vw] overflow-hidden">
        <Header />

        <Suspense>
          <Canvas
            camera={{ position: [0, 15, 100], fov: 60 }}
            style={{ minHeight: "100vh", minWidth: "100vw" }}
          >
            {/* <OrbitControls /> */}
            {/* <PerformanceMonitor /> */}

            <Suspense>
              <Grid />
            </Suspense>
            {/* <MeshGrid /> */}

            <Suspense>
              <RenderRoutes />
            </Suspense>
          </Canvas>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

useGLTF.preload("/models/laptop.glb");

export default App;
