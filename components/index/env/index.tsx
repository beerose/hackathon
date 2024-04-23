'use client';

import {useState, useEffect} from 'react';

import { Canvas } from '@react-three/fiber';
import { PerformanceMonitor, StatsGl } from '@react-three/drei'
// import Environment from "./env";
import {PatchedView} from "../view";
import {useWebgl} from "../hasWebgl";

type ThreeOptions = {
  eventSource?: React.MutableRefObject<HTMLElement>
}

function ThreeCore({eventSource}: ThreeOptions) {
  const nativeDpr = typeof window == 'undefined' ? 1 : window.devicePixelRatio;
  const maxDpr = Math.min(nativeDpr, 2.);

  return <>
    <Canvas
          className="fixed top-0 left-0 right-0 z-0"
          eventSource={eventSource}
          eventPrefix="client"
          gl={{antialias: false}}
          style={{height: '115vh', position: 'fixed', pointerEvents: 'none'}}
          dpr={maxDpr}
          camera={{ fov: 20, near: 0.1, far: 1000, position: [0, 0, 25] }}
        >

      {/* <Environment lowPerf={lowPerf} /> */}
      <PatchedView.Port />

      <StatsGl />

      {/* <PerformanceMonitor
        flipflops={0}
        bounds={(refreshrate) => (refreshrate > 90 ? [50, 90] : [50, 60])}
        onDecline={
          () => {
            setDpr(1);
            setMaxDpr(1);
            setLowPerf(true);
          }
        }
      /> */}
    </Canvas>
  </>
}

function Three({eventSource}: ThreeOptions) {
  const hasWebgl = useWebgl();

  return <>
    {hasWebgl ? <ThreeCore eventSource={eventSource} /> : null}
  </>
}

export default Three;
