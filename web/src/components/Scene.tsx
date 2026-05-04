import { Canvas } from "@react-three/fiber";

interface SceneProps {
  children: React.ReactNode;
}

function SceneContent({ children }: SceneProps) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 15, 10]} intensity={1} />
      <fog attach="fog" args={["#0f172a", 60, 120]} />
      <color attach="background" args={["#0f172a"]} />
      {children}
    </>
  );
}

export function Scene({ children }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 10, 20], fov: 60, near: 0.1, far: 200 }}
      style={{ width: "100%", height: "100%" }}
    >
      <SceneContent>{children}</SceneContent>
    </Canvas>
  );
}
