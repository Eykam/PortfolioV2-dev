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

const DroneStereoProject = () => {
  const description = `
    A custom drone project aiming to achieve real-time 3D mapping of environments 
    through a stereo camera setup (visual SLAM). The system leverages pose data from an MPU (IMU), 
    synchronizes stereo camera frames over Wi-Fi, decodes them on a processing server, 
    and visualizes the output in an OpenGL renderer. Ultimately, the rendered scene 
    and camera viewpoint should dynamically follow the estimated pose derived from 
    the IMU and visual odometry.
    
    This project merges embedded systems, low-latency video streaming, hardware-accelerated 
    video decoding, sensor fusion (MPU and visual odometry), and advanced rendering techniques 
    to create an interactive and responsive 3D exploration experience.
  `;

  const backgroundDescription = (
    <>
      <p>
        This project evolved from an initial desire to map indoor environments
        in 3D using drones. Early attempts involved LiDAR sensors, but the
        current focus is transitioning towards stereo cameras to achieve richer
        spatial understanding and potentially better feature tracking for
        photogrammetry.
      </p>
      <br />
      <p>
        The system consists of a Raspberry Pi Zero 2W paired with the Raspberry
        Pi Camera Module 3. Two such units form a stereo rig that simulates
        human binocular vision with a known baseline (6 cm apart), enabling
        depth estimation from parallax. Another device, originally an ESP32
        flight controller, is being phased out for some tasks, as the developer
        moves towards integrating control and sensor processing directly on the
        Raspberry Pi.
      </p>
      <br />
      <p>
        On the software side, the pipeline comprises:
        <br />
        <br />
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>
            <strong>Capture:</strong>{" "}
            <span style={{ color: "rgb(200,200,200)" }}>
              Raspberry Pi Zero 2W capturing frames at a chosen resolution.
            </span>
          </li>
          <li>
            <strong>Transmission:</strong>{" "}
            <span style={{ color: "rgb(200,200,200)" }}>
              Video frames streamed over Wi-Fi using raw UDP or RTP, with
              ongoing experiments to minimize latency.
            </span>
          </li>
          <li>
            <strong>Decoding:</strong>{" "}
            <span style={{ color: "rgb(200,200,200)" }}>
              A remote server running FFmpeg libraries that receives the
              compressed stream, decodes it using hardware acceleration, and
              passes YUV420 frames to the OpenGL renderer for visualization.
            </span>
          </li>
          <li>
            <strong>Pose Estimation:</strong>{" "}
            <span style={{ color: "rgb(200,200,200)" }}>
              An MPU-9250 IMU (accelerometer, gyroscope and magnetometer)
              provides orientation data, filtered through a Madgwick filter to
              correct sensor drift. Eventually, visual odometry derived from
              stereo frames will fuse with the IMU data for a robust pose
              estimation.
            </span>
          </li>
        </ul>
      </p>
      <br />
      <p>
        This integration aims to allow a user to "walk around" the reconstructed
        scene virtually. The camera's view in the 3D environment corresponds to
        the drone’s orientation and position in real space. This project is
        currently a work in progress, focusing on improving video latency,
        refining sensor fusion, and smoothing the transition from ESP32-based
        control to Raspberry Pi-based processing.
      </p>
    </>
  );

  const implementationDescription = (
    <>
      <p>
        <Chip
          className="text-sm xl:text-lg p-0 xl:p-2"
          label={"Embedded Firmware (Raspberry Pi Zero 2W):"}
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
        The Pi Zero 2W currently runs a camera capture program (e.g., using{" "}
        <code>libcamera-vid</code>) at a stable frame rate and resolution. It
        streams frames over Wi-Fi directly to a processing server. The current
        network setup might involve creating a dedicated Wi-Fi access point on
        the server machine to minimize latency, bypassing intermediate routers.
      </p>
      <br />
      <br />
      <p>
        <Chip
          className="text-sm xl:text-lg p-0 xl:p-2"
          label={"Processing Server (Zig + FFmpeg):"}
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
        The backend, written in Zig, integrates with FFmpeg libraries to decode
        incoming H.264 video streams. Hardware-accelerated decoding (CUDA,
        VAAPI, etc.) is tested for lower latency. Once decoded, the video frames
        (YUV420) are uploaded as textures into an OpenGL application. The code
        snippet provided shows the pipeline setup and frame extraction logic.
      </p>
      <br />
      <br />
      <p>
        <Chip
          className="text-sm xl:text-lg p-0 xl:p-2"
          label={"OpenGL Renderer:"}
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
        The renderer visualizes the decoded frames as textured quads or
        integrated video planes within a 3D scene. It applies transformations
        based on the drone’s estimated pose. The pose node in the OpenGL scene
        hierarchy is updated based on IMU and, in the future, stereo-based
        visual odometry measurements. As the drone moves or rotates, the
        rendered scene (including the projected camera view) will update in
        real-time, giving a "walk around the reconstructed environment" feel.
      </p>
      <br />
      <p>
        <strong>Stereo Camera Housing & Hardware:</strong>{" "}
        <span style={{ color: "rgb(200,200,200)" }}>
          A 3D-printed mount ensures the two Pi cameras are precisely 6 cm apart
          to emulate human binocular vision. I'm also considering adding a
          rechargeable LiPo battery setup for a completely wireless setup.
        </span>
      </p>
    </>
  );

  const challengesDescription = (
    <>
      <p>
        <Chip
          className="text-sm xl:text-lg p-0 xl:p-2"
          label={"Low-Latency Video Streaming:"}
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
        Achieving minimal latency is essential. The current setup experiments
        with raw UDP and RTP streaming directly from the Pi to the server.
        Creating a dedicated Wi-Fi AP on the server machine is under
        investigation to bypass router-induced delays. Adjusting bitrate,
        resolution, and hardware acceleration options also plays a role in
        optimizing latency.
      </p>
      <br />
      <br />
      <p>
        <Chip
          className="text-sm xl:text-lg p-0 xl:p-2"
          label={"Sensor Drift and IMU Fusion:"}
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
        The MPU-9250 data suffers from drift over time. The Madgwick filter is
        being tuned to reduce drift and improve orientation accuracy. Further
        steps include blending visual odometry from stereo frames, aligning both
        sources of pose information to achieve stable, drift-resistant motion
        tracking.
      </p>
      <br />
      <br />
      <p>
        <Chip
          className="text-sm xl:text-lg p-0 xl:p-2"
          label={"Transitioning From ESP32 to Raspberry Pi:"}
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
        Initially, the ESP32 served as a flight controller and a sensor data
        transmitter. The project now aims to consolidate control onto the Pi.
        This involves rewriting sensor code and BLHeli_S motor control logic for
        Linux-based systems, as well as ensuring timing-critical tasks can be
        handled effectively outside of a real-time RTOS environment.
      </p>
      <br />
      <br />
      <p>
        <Chip
          className="text-sm xl:text-lg p-0 xl:p-2"
          label={"Synchronizing Stereo Streams and NTP:"}
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
        To perform proper stereo matching, frames from both cameras must be
        aligned in time. NTP synchronization is under exploration to ensure that
        both Pi cameras capture frames aligned with the server’s clock, enabling
        accurate disparity calculation for depth estimation.
      </p>
    </>
  );

  const conclusionDescription = (
    <>
      <p>
        This drone stereo camera project is a work in progress focused on
        combining high-quality, low-latency video streaming with accurate pose
        tracking. By merging IMU data (filtered with Madgwick) and future
        stereo-based visual odometry, the system aims to offer a stable and
        responsive 3D environment mapping experience.
      </p>
      <br />
      <p>
        As the project matures, better latency optimization, more robust sensor
        fusion, and direct Raspberry Pi-based motor control will bring it closer
        to the goal: a drone autonomously exploring and mapping spaces in
        real-time, with users viewing the reconstructed scene and controlling
        the vehicle interactively.
      </p>
    </>
  );

  const videoDemonstrationDescription = (
    <div className="w-full h-full flex justify-center align-middle">
      <div className="w-3/4 md:w-3/4 lg:w-1/2 flex flex-col justify-center">
        <span className="font-bold text-3xl md:text-4xl text-neutral-200">
          Video Streaming
        </span>
        <br />
        <div className="bg-neutral-900 bg-opacity-60 rounded-xl p-[5%] flex flex-col justify-between">
          <p className="text-neutral-300">
            Here is a short clip of my current low latency streaming solution
            from the Raspberry Pi Zero 2W & camera module 3 to my OpenGL
            rendering pipeline
          </p>
          <br />
          <video className="w-full" controls style={{ borderRadius: "8px" }}>
            <source src="/DroneStudio_Streaming_low.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );

  const mpuDemonstrationDescription = (
    <div className="w-full h-full flex justify-center align-middle">
      <div className="w-3/4 md:w-3/4 lg:w-1/2 flex flex-col justify-center">
        <span className="font-bold text-3xl md:text-4xl text-neutral-200">
          Pose Estimation from IMU
        </span>
        <br />
        <div className="bg-neutral-900 bg-opacity-60 rounded-xl p-[5%] flex flex-col justify-between">
          <p className="text-neutral-300">
            Here is a short clip of pose estimation from the IMU in real time
            using a Madgwick Filter to fuse the accelerometer, gyroscope and
            magnetometer readings
          </p>

          <br />

          <video
            className="w-full"
            controls
            style={{ borderRadius: "8px" }}
            muted
          >
            <source
              src="https://video.twimg.com/dm_video/1867779050774614016/vid/avc1/1280x720/Y0VYuH6YB3rc70lPvGaW2am2K7yBPoI0I2OwBmeT-aw.mp4?tag=1"
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
        <span className="font-bold text-3xl md:text-4xl text-neutral-200">
          Setup & Configuration
        </span>
        <br />
        <div className="bg-neutral-900 bg-opacity-60 rounded-xl p-[5%] flex flex-col justify-center items-center">
          <p className="text-neutral-300">
            Instructions for setting up Raspberry Pi cameras, enabling
            hardware-accelerated decoding on the server, and configuring the
            Wi-Fi AP will be documented as the project moves from prototype to a
            more stable state. The primary steps will involve:
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>Flashing Raspberry Pi OS and enabling the camera modules.</li>
              <li>
                Installing the statically compiled binaries containing all the
                libraries needed given the target OS
              </li>
              <li>
                Configuring hostapd on the server machine for a dedicated Wi-Fi
                AP.
              </li>
              <li>
                Synchronizing system clocks (NTP) for proper stereo alignment.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );

  const sections: Sections = {
    Overview: {
      name: "Overview",
      section: (
        <Overview
          projectName="Stereo Drone Mapping"
          githubUrl="https://github.com/Eykam/DroneStudio"
          description={description}
        />
      ),
    },
    VideoDemonstration: {
      name: "Video Streaming",
      section: videoDemonstrationDescription,
    },
    PoseDemonstration: {
      name: "Pose Estimation",
      section: mpuDemonstrationDescription,
    },
    Stack: {
      name: "Stack",
      section: (
        <Stack
          stack={{
            Firmware: [
              "Raspberry Pi OS",
              "libcamera",
              "C/C++",
              "Rust / Zig for sensor drivers",
            ],
            Backend: [
              "Zig",
              "FFmpeg (libavcodec, libavformat)",
              "CUDA",
              "OpenGL",
              "UDP/RTP Networking",
              "NTP Time Sync",
            ],
            Frontend: [
              "OpenGL Renderer",
              "ImGui for UI Overlays",
              "C/C++/Zig for GPU Interop",
            ],
            DevOps: [
              "Git",
              "Local Builds",
              "Cross-Compiling for multiple platforms",
              "Linux Networking Config",
            ],
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
        source={ProjectList["DroneStudio"].thumbnail} // You may replace with a relevant thumbnail
      />
    </>
  );
};

export default DroneStereoProject;
