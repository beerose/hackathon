'use client';

import {
  WebGLProgramParametersWithUniforms,
  Mesh,
  Group,
  MeshStandardMaterial,
  Box3,
  FrontSide,
  Color,
  ShaderMaterial,
  BufferGeometry
} from 'three'
import React, { Suspense, useEffect, useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import * as geom from "./geom";

import {PatchedView} from "./view";

const hands_model_path = '/3d/hands.glb';
useGLTF.preload(hands_model_path);

const FRAG = /*glsl*/`
  varying vec3 vBarycentric;
  varying vec3 vPosition;

  uniform float thickness;
  uniform vec3 stroke;
  uniform vec3 fill;

  float aastep (float threshold, float dist) {
    float afwidth = fwidth(dist) * 0.8;
    return smoothstep(threshold - afwidth, threshold + afwidth, dist);
  }

  vec4 getStyledWireframe (vec3 barycentric) {
    // this will be our signed distance for the wireframe edge
    float d = min(min(barycentric.x, barycentric.y), barycentric.z);

    // compute the anti-aliased stroke edge
    float edge = 1.0 - aastep(thickness, d);

    vec3 norm = normalize(cross(dFdx(vPosition), dFdy(vPosition)));
    float nDotL = clamp(dot(vec3(1.), norm), 0.6, 1.0);

    return vec4(mix(fill * nDotL, stroke, edge), 1.);
  }

  void main () {
    gl_FragColor = getStyledWireframe(vBarycentric);
  }
`;

const VERT = /*glsl*/`
  attribute vec3 barycentric;
  varying vec3 vBarycentric;
  varying vec3 vPosition;

  void main () {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.0);
    vBarycentric = barycentric;
    vPosition = position.xyz;
  }
`;

type GLTFResult = GLTF & {
  nodes: {
    Hand_L: Mesh
    Hand_R: Mesh
  }
  materials: {
    hand_fill: MeshStandardMaterial
  }
}

function HandModel({left}: {left: boolean}) {
  const ref = React.useRef<Group>(null!);

  const {nodes} = useGLTF(hands_model_path) as GLTFResult;
  const node = left ? nodes.Hand_L : nodes.Hand_R;

  const material = useRef<ShaderMaterial>();
  const geometry = useRef<BufferGeometry>();

  useEffect(() => {
    const box3 = new Box3().setFromObject(node, true);
    const width = box3.max.x - box3.min.x;
    ref.current.scale.setScalar(1 / width);
  }, []);

  useMemo(() => {
    geometry.current = node.geometry.toNonIndexed();
    geom.addBarycentricCoordinates(geometry.current, false);

    material.current = new ShaderMaterial({
      transparent: true,
      side: FrontSide,
      uniforms: {
        fill: { value: new Color('#eee') },
        stroke: { value: new Color('#ff5555') },
        thickness: { value: 0.027 },
      },
      fragmentShader: FRAG,
      vertexShader: VERT
    });
  }, [node]);

  return (
    <group dispose={null} ref={ref}>
      <mesh
        geometry={geometry.current}
        material={material.current}
      />
    </group>
  )
}

export function LeftHand() {
  const viewRef = useRef<HTMLDivElement>(null!);

  return <PatchedView
        className="absolute top-0 left-0 right-0 bottom-0 z-0"
        ref={viewRef} index={2} skipScissor={true}>
    <group position={[0, 0, 0]} scale={10.}>
      <HandModel left={true} />
    </group>
  </PatchedView>;
}

export function RightHand() {
  const viewRef = useRef<HTMLDivElement>(null!);

  return <PatchedView
        className="absolute top-0 left-0 right-0 bottom-0 z-0"
        ref={viewRef} index={2} skipScissor={true}>
    <group position={[0, 0, 0]} scale={10.}>
    <HandModel left={false} />
    </group>
  </PatchedView>;
}
