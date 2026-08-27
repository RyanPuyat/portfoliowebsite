import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { useGraphContext } from '../context/GraphContext';

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
        edges.push([i, j]);
      }
    }
  }

  return { nodes, edges, linePositions };
}

const INTRO_SPEED = 22;   // fast spin on load
const BASE_SPEED = 1.1;   // slow steady ambient rotation
const INTRO_DECAY = 1.4;  // how quickly it eases down (higher = faster settle)

// projectNodes: [{ id, title }] — the first N graph nodes are reserved to
// represent real featured projects and get their own clickable/hoverable
// mesh + label; every other node renders as part of the plain point field
// (the original, denser "starfield" look).
export default function NetworkGraph({ nodeCount = 46, projectNodes = [] }) {
  const { nodes, edges, linePositions } = useMemo(
    () => buildGraph(nodeCount),
    [nodeCount]
  );

  const navigate = useNavigate();
  const { activeIndex, setActiveIndex } = useGraphContext();
  const [hovered, setHovered] = useState(null);

  const controlsRef = useRef();
  const pulseRef = useRef();
  const nextPulseAt = useRef(0);
  const activePulse = useRef(null);

  useEffect(() => {
    if (controlsRef.current) controlsRef.current.autoRotateSpeed = INTRO_SPEED;
  }, []);

  const reservedCount = projectNodes.length;
  const pointPositions = useMemo(() => {
    const arr = [];
    for (let i = reservedCount; i < nodes.length; i++) {
      arr.push(nodes[i].x, nodes[i].y, nodes[i].z);
    }
    return new Float32Array(arr);
  }, [nodes, reservedCount]);

  const pointsGeom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
    return g;
  }, [pointPositions]);

  const lineGeom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    return g;
  }, [linePositions]);

  useFrame((state, delta) => {
    if (controlsRef.current) {
      controlsRef.current.autoRotateSpeed = THREE.MathUtils.lerp(
        controlsRef.current.autoRotateSpeed,
        BASE_SPEED,
        Math.min(delta * INTRO_DECAY, 1)
      );
    }

    const t = state.clock.elapsedTime;
    if (t > nextPulseAt.current) {
      nextPulseAt.current = t + 1.4;
      const edge = edges[Math.floor(Math.random() * edges.length)];
      activePulse.current = { from: nodes[edge[0]], to: nodes[edge[1]], t: 0 };
    }
    if (activePulse.current && pulseRef.current) {
      activePulse.current.t = Math.min(activePulse.current.t + delta * 0.7, 1);
      pulseRef.current.position.lerpVectors(
        activePulse.current.from,
        activePulse.current.to,
        activePulse.current.t
      );
      pulseRef.current.visible = activePulse.current.t < 1;
    }
  });

  return (
    <group>
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        autoRotate
        rotateSpeed={0.5}
      />

      <lineSegments geometry={lineGeom}>
        <lineBasicMaterial color="#4ade80" transparent opacity={0.12} />
      </lineSegments>

      <points geometry={pointsGeom}>
        <pointsMaterial
          color="#4ade80"
          size={0.22}
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.14, 8, 8]} />
        <meshBasicMaterial color="#ffb454" />
      </mesh>

      {projectNodes.map((project, i) => {
        const pos = nodes[i];
        const isHovered = hovered === i;
        const isContextActive = activeIndex === i;
        const isActive = isHovered || isContextActive;

        return (
          <mesh
            key={i}
            position={pos}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHovered(i);
              setActiveIndex(i);
              document.body.style.cursor = 'pointer';
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setHovered(null);
              setActiveIndex(null);
              document.body.style.cursor = 'auto';
            }}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/projects/${project.id}`);
            }}
            scale={isActive ? 1.8 : 1.3}
          >
            <sphereGeometry args={[0.22, 12, 12]} />
            <meshBasicMaterial color={isActive ? '#ffb454' : '#4ade80'} />
            {isActive && (
              <Html center distanceFactor={22}>
                <div className="font-mono text-[10px] whitespace-nowrap bg-[#0A0E12] border border-[var(--sig-green)] text-[var(--sig-green)] px-2 py-1 pointer-events-none">
                  {project.title}
                </div>
              </Html>
            )}
          </mesh>
        );
      })}
    </group>
  );
}
