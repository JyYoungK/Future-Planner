import React, { useRef, useEffect, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

export function Earth({ step }) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const [animationComplete, setAnimationComplete] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  const earthRef = useRef();
  const cloudsRef = useRef();
  const clockRef = useRef(new THREE.Clock());

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  useEffect(() => {
    const earthMesh = earthRef.current;
    const cloudMesh = cloudsRef.current;

    const animate = () => {
      const delta = clockRef.current.getDelta();

      if (!animationComplete && step === 2) {
        setPosition((prevPosition) => ({
          x: prevPosition.x,
          y: prevPosition.y + 0.3 * delta,
          z: prevPosition.z,
        }));
        // console.log(controlsRef.current);
        // controlsRef.current.autoRotate = false; // stop auto rotation
        // controlsRef.current.target.set(0, position.y, 0); // set new target position
      }

      earthMesh.position.set(position.x, position.y, position.z);
      cloudMesh.position.set(position.x, position.y, position.z);
    };

    const render = () => {
      requestAnimationFrame(render);
      animate();
    };
    render();

    return () => {
      cancelAnimationFrame(render);
    };
  }, [animationComplete, position, step]);

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh ref={earthRef}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>

      <OrbitControls
        enableZoom={false}
        enablePan={true}
        enableRotate={step === 1}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
        autoRotate={step === 1}
        autoRotateSpeed={0.4} // adjust the speed as needed
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]}
        minDistance={2}
        maxDistance={10}
        position={[0, 0, step === 2 ? 6 : 4]}
      />
    </>
  );
}
