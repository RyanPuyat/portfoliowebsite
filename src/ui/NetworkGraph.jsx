import { useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function buildGraph(nodeCount = 46, radius = 11, maxDist = 6.5) {
  const nodes = [];
  for (let i = 0; i < nodeCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / nodeCount);
    const theta = Math.sqrt(nodeCount * Math.PI) * phi;
    const r = radius * (0.7 + Math.random() * 0.3);
    nodes.push(
      new THREE.Vector3(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      )
    );
  }

  const edges = [];
  const linePositions = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < maxDist) {
        linePositions.push(
          nodes[i].x, nodes[i].y, nodes[i].z,
          nodes[j].x, nodes[j].y, nodes[j].z
        );
        edges.push([nodes[i], nodes[j]]);
      }
    }
  }

  return { nodes, edges, linePositions };
}

export default function NetworkGraph({ nodeCount = 46 }) {
  const { nodes, edges, linePositions } = useMemo(
    () => buildGraph(nodeCount),
    [nodeCount]
  );

  const groupRef = useRef();
  const pulseRef = useRef();
  const [pulse, setPulse] = useState(null); // { edge, t }
  const nextPulseAt = useRef(0);

  const pointsGeom = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(nodes),
    [nodes]
  );
  const lineGeom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    return g;
  }, [linePositions]);

  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.06;
      groupRef.current.rotation.y +=
        (pointer.x * 0.3 - groupRef.current.rotation.y) * 0.02;
      groupRef.current.rotation.x +=
        (pointer.y * 0.2 - groupRef.current.rotation.x) * 0.02;
    }

    const t = state.clock.elapsedTime;
    if (t > nextPulseAt.current) {
      nextPulseAt.current = t + 1.4;
      setPulse({ edge: edges[Math.floor(Math.random() * edges.length)], t: 0 });
    }
    if (pulse && pulseRef.current) {
      const nt = Math.min(pulse.t + delta * 0.7, 1);
      pulseRef.current.position.lerpVectors(pulse.edge[0], pulse.edge[1], nt);
      pulseRef.current.visible = nt < 1;
      pulse.t = nt;
    }
  });

  return (
    <group ref={groupRef}>
      <points geometry={pointsGeom}>
        <pointsMaterial
          color="#4ade80"
          size={0.22}
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments geometry={lineGeom}>
        <lineBasicMaterial color="#4ade80" transparent opacity={0.12} />
      </lineSegments>
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.14, 8, 8]} />
        <meshBasicMaterial color="#ffb454" />
      </mesh>
    </group>
  );
}
