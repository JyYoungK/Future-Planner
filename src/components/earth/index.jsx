import React, { useRef, useEffect, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  const [animationComplete, setAnimationComplete] = useState(false);
  const clockRef = useRef(new THREE.Clock());
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const earthMesh = earthRef.current;
    const cloudsMesh = cloudsRef.current;

    const animate = () => {
      const delta = clockRef.current.getDelta();

      if (!animationComplete) {
        setPosition((prevPosition) => ({
          x: prevPosition.x - 0.1 * delta,
          y: prevPosition.y,
          z: prevPosition.z,
        }));
      }

      earthMesh.position.set(position.x, position.y, position.z);
      cloudsMesh.position.set(position.x, position.y, position.z);
    };

    const render = () => {
      requestAnimationFrame(render);
      animate();
    };
    render();

    return () => {
      cancelAnimationFrame(render);
    };
  }, [animationComplete, position]);

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
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}
