import { GameShell, GameTopbar } from "@freegamestore/games";
import { Scene } from "./components/Scene";

export default function App() {
  return (
    <GameShell topbar={<GameTopbar title="APPNAME" score={0} />}><div className="flex flex-col items-center justify-center h-full gap-4">
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
    </div></GameShell>
  );
}
