import { Shell } from "./components/Shell";
import { Scene } from "./components/Scene";

export default function App() {
  return (
    <Shell>
      <div className="relative w-full h-full min-h-[400px]">
        <Scene>
          {/* Add your 3D game objects here */}
          <mesh position={[0, 1, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#2563eb" />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color="#374151" />
          </mesh>
        </Scene>
      </div>
    </Shell>
  );
}
