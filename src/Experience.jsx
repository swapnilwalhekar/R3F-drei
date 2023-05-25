import { Html, OrbitControls, PivotControls } from "@react-three/drei";
import { useRef } from "react";

export default function Experience() {
    const cube = useRef();
    const sphere = useRef();
  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <PivotControls anchor={[0, 2, 1]} depthTest={false}>
        <mesh position-x={-2}>
          <sphereGeometry ref={sphere}/>
          <meshStandardMaterial color="orange" />
          <Html 
            position={[0,1.2,0]}
            wrapperClass='label'
            center
            distanceFactor={4}
            occlude={[sphere, cube]}
          >
            Swapnil
        </Html>
        </mesh>
      </PivotControls>

      <mesh ref={cube} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
