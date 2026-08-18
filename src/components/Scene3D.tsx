import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function DNAHelix() {
  const group = useRef<THREE.Group>(null);

  const helixData = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const count = 60;
    const radius = 1.4;
    const height = 6;
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const angle = t * Math.PI * 6;
      const y = (t - 0.5) * height;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
      points.push(new THREE.Vector3(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius));
    }
    return points;
  }, []);

  const rungData = useMemo(() => {
    const rungs: { a: THREE.Vector3; b: THREE.Vector3 }[] = [];
    const count = 60;
    const radius = 1.4;
    const height = 6;
    for (let i = 0; i < count; i += 2) {
      const t = i / count;
      const angle = t * Math.PI * 6;
      const y = (t - 0.5) * height;
      rungs.push({
        a: new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius),
        b: new THREE.Vector3(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius),
      });
    }
    return rungs;
  }, []);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.3;
  });

  return (
    <group ref={group}>
      {/* Strand A */}
      <Points positions={Float32Array.from(helixData.filter((_, i) => i % 2 === 0).flatMap((p) => [p.x, p.y, p.z]))} limit={200}>
        <PointMaterial color="#5eead4" size={0.08} sizeAttenuation transparent opacity={0.9} />
      </Points>
      {/* Strand B */}
      <Points positions={Float32Array.from(helixData.filter((_, i) => i % 2 !== 0).flatMap((p) => [p.x, p.y, p.z]))} limit={200}>
        <PointMaterial color="#38bdf8" size={0.08} sizeAttenuation transparent opacity={0.9} />
      </Points>
      {/* Rungs */}
      {rungData.map((r, i) => {
        const mid = r.a.clone().lerp(r.b, 0.5);
        const dir = r.b.clone().sub(r.a);
        const len = dir.length();
        const quat = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          dir.normalize()
        );
        return (
          <mesh key={i} position={[mid.x, mid.y, mid.z]} quaternion={quat}>
            <cylinderGeometry args={[0.012, 0.012, len, 6]} />
            <meshBasicMaterial color="#a78bfa" transparent opacity={0.35} />
          </mesh>
        );
      })}
    </group>
  );
}

function FloatingMolecules() {
  const molRefs = useRef<THREE.Mesh[]>([]);
  const mols = useMemo(
    () =>
      Array.from({ length: 14 }, () => ({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4 - 2,
        ] as [number, number, number],
        scale: 0.15 + Math.random() * 0.25,
        speed: 0.3 + Math.random() * 0.5,
      })),
    []
  );

  useFrame((state) => {
    molRefs.current.forEach((mesh, i) => {
      if (mesh) {
        mesh.position.y += Math.sin(state.clock.elapsedTime * mols[i].speed) * 0.002;
        mesh.rotation.x += 0.003;
        mesh.rotation.y += 0.004;
      }
    });
  });

  return (
    <>
      {mols.map((m, i) => (
        <Float key={i} speed={m.speed * 2} rotationIntensity={1} floatIntensity={1.5}>
          <mesh
            ref={(el) => {
              if (el) molRefs.current[i] = el;
            }}
            position={m.position}
            scale={m.scale}
          >
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? '#5eead4' : i % 3 === 1 ? '#38bdf8' : '#a78bfa'}
              wireframe
              transparent
              opacity={0.5}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function ParticleField() {
  const positions = useMemo(() => {
    const arr = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} limit={2000}>
      <PointMaterial color="#5eead4" size={0.03} sizeAttenuation transparent opacity={0.4} />
    </Points>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} />
      <DNAHelix />
      <FloatingMolecules />
      <ParticleField />
    </Canvas>
  );
}
