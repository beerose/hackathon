'use client';

import {useState, useEffect, useRef} from 'react';

import { Canvas, useFrame } from '@react-three/fiber';
import { PerformanceMonitor, StatsGl } from '@react-three/drei'
import Environment from "./env";
import {PatchedView} from "../view";
import {useWebgl} from "../hasWebgl";

function ThreeCore() {
  const nativeDpr = typeof window == 'undefined' ? 1 : window.devicePixelRatio;
  const maxDpr = Math.min(nativeDpr, 1.);

  return <>
    <Canvas
          className="fixed top-0 left-0 right-0"
          gl={{antialias: false}}
          style={{
            height: '115vh',
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: '-2'
          }}
          dpr={maxDpr}
          camera={{ fov: 20, near: 0.1, far: 1000, position: [0, 0, 25] }}
        >

      <Environment lowPerf={false} />
      <PatchedView.Port />

      <CameraControls />

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

function CameraControls() {

  const width = useRef<number>(window.innerWidth);
  const height = useRef<number>(window.innerHeight);
  const posX = useRef<number>(0);
  const posY = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: any) => {
      posX.current = e.pageX / width.current - 0.5;
      posY.current = e.pageY / height.current - 0.5;
    };

    document.removeEventListener('mousemove', onMove);
    document.addEventListener('mousemove', onMove, {passive: true});

    const onResize = () => {
      width.current = window.innerWidth;
      height.current = window.innerHeight;
    };

    window.removeEventListener('resize', onResize);
    window.addEventListener('resize', onResize, {passive: true});

    return () => {
      document.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
    }
  }, []);

  useFrame(({camera}) => {
    camera.position.x = posX.current / 2.;
    camera.position.y = -posY.current / 2.;
  });

  return <group></group>
}

function Three() {
  const hasWebgl = useWebgl();

  return <>
    {hasWebgl ? <ThreeCore /> : null}
  </>
}

export default Three;
