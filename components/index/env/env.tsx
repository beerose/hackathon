import {
  BufferGeometry,
  Float32BufferAttribute,
  OrthographicCamera,
  Scene,
  ShaderMaterial,
  WebGLRenderTarget,
  SRGBColorSpace,
  Vector2,
  RGBAFormat,
  NoBlending,
  Mesh,
  LinearToneMapping,
} from 'three'
import { useEffect, useState, useMemo, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

import bgShader from "./shader";


const vertexShader = `precision highp float;
void main() {
  gl_Position = vec4(position, 1.0);
}`;

const getFullscreenTriangle = () => {
  const geometry = new BufferGeometry();

  geometry.setAttribute(
    'position',
    new Float32BufferAttribute([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)
  );

  geometry.setAttribute(
    'uv',
    new Float32BufferAttribute([0, 2, 0, 0, 2, 0], 2)
  );

  return geometry;
};

type EnvironmentProps = {
  lowPerf: boolean
}

function Environment({lowPerf}: EnvironmentProps) {
  const {gl} = useThree();

  const frameNumber = useRef<number>(0);
  const bgCamera = useRef<OrthographicCamera>();
  const bgScene = useRef<Scene>();
  const bgMaterial = useRef<ShaderMaterial>();
  const currentDpr = useRef<number>(-1);
  const needPointer = useRef<boolean>(false);
  const target = useRef<WebGLRenderTarget>();

  const calcScroll = () =>
    document.documentElement.scrollTop / window.innerHeight;

  useEffect(() => {
    const onScroll = () => {
      if (bgMaterial.current != null) {
        const scrollOffset = calcScroll();
        bgMaterial.current.uniforms.uScroll.value = scrollOffset;
      }
    };

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, {passive: true});

    const onResize = () => {
      const res = gl.getDrawingBufferSize(new Vector2());

      if (bgMaterial.current != null) {
        bgMaterial.current.uniforms.uResolution.value = res;
      }
      if (target.current != null) {
        target.current.setSize(res.x, res.y);
      }
    };

    window.removeEventListener('resize', onResize);
    window.addEventListener('resize', onResize, {passive: true});

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    }
  }, [bgMaterial.current]);

  useMemo(() => {
    const ctx = gl.getContext();
    const MAX_SHADERS = ctx.getParameter(ctx.MAX_FRAGMENT_UNIFORM_VECTORS);

    gl.outputColorSpace = SRGBColorSpace;
    gl.toneMapping = LinearToneMapping;

    bgCamera.current = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const resolution = gl.getDrawingBufferSize(new Vector2());

    const _target = new WebGLRenderTarget(
      resolution.x,
      resolution.y,
      {
        format: RGBAFormat,
        stencilBuffer: false,
        depthBuffer: true,
        samples: (lowPerf || MAX_SHADERS <= 512) ? 0 : 3,
      }
    );
    _target.texture.colorSpace = SRGBColorSpace;
    _target.texture.generateMipmaps = false;
    target.current = _target;

    const _bgScene = new Scene();
    bgScene.current = _bgScene;

    const defines: any = {
    };

    const _bgMaterial = new ShaderMaterial({
      transparent: false,
      depthTest: false,
      depthWrite: false,
      blending: NoBlending,
      defines,
      fragmentShader: bgShader(),
      vertexShader,
      uniforms: {
        uTime: { value: 0 },
        uScroll: { value: calcScroll() },
        uResolution: { value: resolution },
        uScene: { value: _target.texture },
        uOpacity: { value: 0 },

        uRedOffset: {
          value: 10.0,
        },
        uGreenOffset: {
          value: 5.0,
        },
        uBlueOffset: {
          value: 3.0,
        },
        uIntensity: {
          value: 10.0,
        },
      },
    });
    bgMaterial.current = _bgMaterial;

    const bgTriangle = new Mesh(getFullscreenTriangle(), _bgMaterial);
    bgTriangle.frustumCulled = false;
    _bgScene.add(bgTriangle);
  }, [
    lowPerf,
  ]);

  useFrame(({gl}) => {
    if (!target.current || !bgMaterial.current ||
      !bgCamera.current || !bgScene.current
    ) {
      return;
    }

    const dpr = gl.getPixelRatio();
    if (currentDpr.current != dpr) {
      const res = gl.getDrawingBufferSize(new Vector2());
      target.current.setSize(res.x, res.y);
      bgMaterial.current.uniforms.uResolution.value = res;
      currentDpr.current = dpr;
    }

    // Prepare to draw the views
    gl.setRenderTarget(target.current);
    // Important to clear the buffer before rendering the views,
    // and after, otherwise the screen is flickering on resize
    gl.clear();
  }, 0);

  useFrame(({gl, clock, pointer}) => {
    if (!target.current || !bgMaterial.current ||
        !bgCamera.current || !bgScene.current
    ) {
      return;
    }

    frameNumber.current += 1;
    if (frameNumber.current > 10000) {
      frameNumber.current = 10;
    }
    const opacity = Math.min(frameNumber.current / 10.0, 1);

    gl.setRenderTarget(null);
    bgMaterial.current.uniforms.uScene.value = target.current.texture;
    bgMaterial.current.uniforms.uTime.value = clock.getElapsedTime();
    bgMaterial.current.uniforms.uOpacity.value = opacity;
    if (needPointer.current) {
      bgMaterial.current.uniforms.uMouse.value = pointer;
    }
    gl.render(bgScene.current, bgCamera.current);

    // Besides fixing flickering, on relatively slow devices (iphone)
    // a lot of frame skipping can occur which can result in 'target'
    // buffer never being cleared properly, so make sure it's empty.
    gl.setRenderTarget(target.current);
    gl.clear();
  }, 99);

  return <>
    <group></group>
  </>
}

export default Environment;
