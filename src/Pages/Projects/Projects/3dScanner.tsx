import ProjectDescTemplate from "../components/ProjectDescTemplate";
import { ProjectList } from "../../../Store";
import Overview from "../components/Overview";
import Background from "../components/Background";
import Implementation from "../components/Implementation";
import Challenges from "../components/Challenges";
import Conclusion from "../components/Conclusion";
import { Sections } from "../components/Sections";
import Stack from "../components/Stack";
import Chip from "@mui/material/Chip";

const Scanner = () => {
  const description = `
    A custom-built 3D scanning system that uses a LiDAR sensor mounted on stepper motors 
    to capture a full 360° field of view at multiple vertical increments. The device streams 
    distance data over Wi-Fi to a backend server, where it is processed into a 3D point cloud 
    and visualized in real-time through a browser-based frontend interface.
    
    This project merges embedded systems, network programming, and 3D rendering to create 
    an interactive scanning experience.
  `;

  const backgroundDescription = (
    <>
      <p>
        This project began as an exploration into combining hardware-level
        sensor data with real-time data visualization techniques. The goal was
        to build a system that could autonomously gather spatial measurements
        from the environment and render them as a three-dimensional point cloud.
      </p>
      <br />
      <p>
        The chosen hardware includes an ESP32 microcontroller, stepper motors to
        control angular and vertical positions, and a VL53L1X LiDAR sensor for
        precise distance measurements. Each measurement is recorded along with
        its corresponding polar coordinates (horizontal angle and vertical
        height). Over time, these measurements create a dense point cloud
        representing the scanned space.
      </p>
      <br />
      <p>
        On the software side, the firmware runs on FreeRTOS to orchestrate
        timing, sensor reads, and motor movements. Data is sent over UDP to a
        backend server (written in Zig) that aggregates, transforms, and
        provides HTTP endpoints for the frontend to consume. The frontend, a
        React and Three.js application, renders the data in 3D, allowing users
        to pause scanning, restart the process, and adjust visualization
        settings.
      </p>
    </>
  );

  const implementationDescription = (
    <>
      <p>
        <Chip
          className="text-sm xl:text-lg p-0 xl:p-2"
          label={"Firmware (ESP32 + FreeRTOS):"}
          style={{
            background: "rgb(200,200,200)",
            color: "rgb(25,25,25)",
            margin: "0px",
            borderRadius: "7px",
            fontWeight: "bold",
            marginBottom: "4px",
          }}
        />
        <br />
        The ESP32 runs code that controls the stepper motors to rotate and lift
        the LiDAR sensor. Each data point (distance, horizontal steps, vertical
        steps) is recorded and sent via UDP packets to the backend. The firmware
        also maintains the scanner's state machine (e.g., Offline, Initializing,
        Scanning, Paused, Done) and stores vertical rail position in
        non-volatile memory for repeatable scans.
      </p>
      <br />
      <br />
      <p>
        <Chip
          className="text-sm xl:text-lg p-0 xl:p-2"
          label={"Backend (Zig):"}
          style={{
            background: "rgb(200,200,200)",
            color: "rgb(25,25,25)",
            margin: "0px",
            borderRadius: "7px",
            fontWeight: "bold",
            marginBottom: "4px",
          }}
        />
        <br />
        The backend listens on a UDP socket for incoming data from the ESP32.
        Once a batch of points is received, it makes them available through a
        JSON endpoint. The backend also provides a status endpoint to query and
        change the scanning state. This service acts as a bridge, ensuring the
        frontend has timely access to fresh data and can command the scanner to
        start, stop, or reset.
      </p>
      <br />
      <br />
      <p>
        <Chip
          className="text-sm xl:text-lg p-0 xl:p-2"
          label={"Frontend (React + Three.js):"}
          style={{
            background: "rgb(200,200,200)",
            color: "rgb(25,25,25)",
            margin: "0px",
            borderRadius: "7px",
            fontWeight: "bold",
            marginBottom: "4px",
          }}
        />
        <br />
        The frontend fetches point cloud data at regular intervals and renders
        them as a 3D scene using Three.js. Users can watch the scanning progress
        in real-time, pause the process, or restart it. Settings for
        visualization (e.g., wireframe mode, shadows, and rendering speed) are
        adjustable. The user experience is interactive, with a clean UI, making
        the complex scanning process approachable.
      </p>
    </>
  );

  const challengesDescription = (
    <>
      <p>
        <Chip
          className="text-sm xl:text-lg p-0 xl:p-2"
          label={"Synchronization and Real-Time Data:"}
          style={{
            background: "rgb(200,200,200)",
            color: "rgb(25,25,25)",
            margin: "0px",
            borderRadius: "7px",
            fontWeight: "bold",
            marginBottom: "4px",
          }}
        />
        <br />
        Ensuring that the firmware, backend, and frontend remained in sync was
        crucial. Timing issues and packet loss had to be handled gracefully.
        Buffering data and using queues on both the firmware and backend sides
        proved essential for maintaining consistent data flow.
      </p>
      <br />
      <br />
      <p>
        <Chip
          className="text-sm xl:text-lg p-0 xl:p-2"
          label={"Precision and Calibration:"}
          style={{
            background: "rgb(200,200,200)",
            color: "rgb(25,25,25)",
            margin: "0px",
            borderRadius: "7px",
            fontWeight: "bold",
            marginBottom: "4px",
          }}
        />
        <br />
        Achieving accurate distance measurements and stable motor control
        required careful calibration. Vertical rail positioning and horizontal
        rotation increments needed to be reliable. The firmware leveraged
        non-volatile storage to remember the last vertical position, simplifying
        the restart process.
      </p>
      <br />
      <br />
      <p>
        <Chip
          className="text-sm xl:text-lg p-0 xl:p-2"
          label={
            " Non-Uniform Resolution and Origin Complexity (Polar Coordinates):"
          }
          style={{
            background: "rgb(200,200,200)",
            color: "rgb(25,25,25)",
            margin: "0px",
            borderRadius: "7px",
            fontWeight: "bold",
            marginBottom: "4px",
          }}
        />
        <br />
        Because the scanner relies on a rotating turntable and polar
        coordinates, spatial resolution varies significantly depending on the
        distance from the center. Near the edge of the turntable, a small
        angular increment translates into fine linear resolution, but closer to
        the center, the same angular increment corresponds to a much coarser
        linear resolution. To achieve acceptable resolution at the outer edges,
        the turntable must rotate in extremely small angular steps, often
        requiring gearing down or more sophisticated motion control than what a
        standard stepper motor can directly provide.
        <br />
        <br />
        Additionally, movements near the center present extreme acceleration and
        deceleration challenges. A tiny linear displacement at the center can
        correspond to a large angular rotation of the turntable, effectively
        demanding "infinite" rotational speed to achieve certain movements. This
        makes mechanical design more complex, as precise bearings and minimal
        wobble become critical. Balancing these mechanical and kinematic
        constraints is essential to ensure stable, consistent data collection
        across the entire scanning area.
      </p>
      <br />
      <br />
      <p>
        <Chip
          className="text-sm xl:text-lg p-0 xl:p-2"
          label={"Synchronization and Real-Time Data:"}
          style={{
            background: "rgb(200,200,200)",
            color: "rgb(25,25,25)",
            margin: "0px",
            borderRadius: "7px",
            fontWeight: "bold",
            marginBottom: "4px",
          }}
        />
        <br />
        Since data points accumulate quickly, managing performance both on the
        backend (efficiently serving JSON responses) and on the frontend (smooth
        rendering of large point clouds) was challenging. Techniques like
        reducing point size, adjusting render frequency, and using efficient
        data structures helped keep the UI responsive.
      </p>
    </>
  );

  const conclusionDescription = (
    <>
      <p>
        This 3D scanner project successfully combined embedded hardware control,
        real-time data streaming, and interactive 3D visualization. The result
        is a system that can capture spatial information from the environment
        and display it as an intuitive 3D representation on the web.
      </p>
      <br />
      <p>
        Beyond the technical accomplishments, this project highlights the power
        of integrating diverse technologies: firmware-level timing and control,
        a lightweight Zig-based backend, and a flexible, visually rich frontend
        using React and Three.js. Future enhancements may include denser point
        clouds, advanced sensor fusion, or even machine learning-based feature
        recognition to unlock new insights in spatial analysis.
      </p>
    </>
  );

  const demonstrationDescription = (
    <div className="w-full h-full flex justify-center align-middle">
      <div className="w-3/4 md:w-3/4 lg:w-1/2 flex flex-col justify-center">
        <span className="font-bold text-3xl md:text-4xl  text-neutral-200">
          In Action
        </span>

        <br />

        <div className=" bg-neutral-900 bg-opacity-60 rounded-xl p-[5%] flex flex-col justify-between">
          <video width="100%" controls style={{ borderRadius: "8px" }}>
            <source
              src="https://video.twimg.com/ext_tw_video/1836201450528985088/pu/vid/avc1/1280x548/o9VpdosE7pm9MWwJ.mp4?tag=12"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );

  const setupDescription = (
    <div className="w-full h-full flex justify-center align-middle">
      <div className="w-3/4 md:w-3/4 lg:w-1/2 flex flex-col justify-center">
        <span className="font-bold text-3xl md:text-4xl  text-neutral-200">
          In Action
        </span>

        <br />

        <div className=" bg-neutral-900 bg-opacity-60 rounded-xl p-[5%] flex flex-col justify-center items-center">
          <video
            className="w-2/3 lg:w-1/2"
            controls
            style={{ borderRadius: "8px" }}
          >
            <source
              src="https://video.twimg.com/ext_tw_video/1836201450533208064/pu/vid/avc1/480x852/XeIaAORXbEqKBIja.mp4?tag=12"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );

  const sections: Sections = {
    Overview: {
      name: "Overview",
      section: (
        <Overview
          projectName="3D Scanner"
          githubUrl="https://github.com/Eykam/3D-Scanner"
          description={description}
        />
      ),
    },
    Demonstration: {
      name: "Demonstration",
      section: demonstrationDescription,
    },
    Stack: {
      name: "Stack",
      section: (
        <Stack
          stack={{
            Firmware: [
              "C",
              "FreeRTOS",
              "ESP-IDF",
              "NVS",
              "VL53L1X LiDAR Driver",
            ],
            Backend: ["Zig", "Posix", "TCP/UDP Networking", "JSON"],
            Frontend: [
              "React",
              "TypeScript",
              "Three.js",
              "Zustand",
              "CSS/Material UI",
            ],
            DevOps: ["Git", "Local Builds", "ESP32 Toolchain"],
          }}
        />
      ),
    },
    Background: {
      name: "Background",
      section: <Background description={backgroundDescription} />,
    },
    Implementation: {
      name: "Implementation",
      section: <Implementation description={implementationDescription} />,
    },
    Setup: {
      name: "Set up",
      section: setupDescription,
    },
    Challenges: {
      name: "Challenges",
      section: <Challenges description={challengesDescription} />,
    },
    Conclusion: {
      name: "Conclusion",
      section: <Conclusion description={conclusionDescription} />,
    },
  };

  return (
    <>
      <ProjectDescTemplate
        sections={sections}
        source={ProjectList["3D-Scanner"].thumbnail}
      />
    </>
  );
};

export default Scanner;
