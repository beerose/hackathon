
const bgShader = () => /*glsl*/`precision highp float;

uniform sampler2D uScene;
uniform sampler2D uCodeTexture;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uTime;
uniform float uScroll;
uniform float uOpacity;

uniform float uRedOffset;
uniform float uGreenOffset;
uniform float uBlueOffset;
uniform float uIntensity;

uniform float uDistortion;
uniform float uDistortion2;
uniform float uSpeed;

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;

  float noise = max(0.0, snoise(vec2(uTime, uv.y * 0.3)) - 0.3) * uDistortion;
  noise += (snoise(vec2(uTime * 10.0 * uSpeed, uv.y * 2.4)) - 0.5) * uDistortion2;

  float rPos =  - noise * noise * 0.25;
  float gPos =  - noise * noise * 0.11;
  float bPos =  - noise * noise * 0.01;

  float rOffset = 0.001 * uRedOffset * uIntensity;
  float gOffset = 0.001 * uGreenOffset * uIntensity;
  float bOffset = 0.001 * uBlueOffset * uIntensity;

  float r = texture2D(uScene, (uv + vec2(rPos, 0.)) * (1.0 + rOffset) - (rOffset / 2.0)).r;
  float g = texture2D(uScene, (uv + vec2(gPos, 0.)) * (1.0 + gOffset) - (gOffset / 2.0)).g;
  float b = texture2D(uScene, (uv + vec2(bPos, 0.)) * (1.0 + bOffset) - (bOffset / 2.0)).b;

  vec4 bg = mix(
    vec4(0.),
    texture2D(
      uCodeTexture,
      gl_FragCoord.xy / max(uResolution.x, uResolution.y) +
        vec2(-rPos / 10., -uScroll/2.)),
    0.7
  );

  float alpha = 1. - bg.a;
  if (r + g + b > 0.) {
    alpha = 0.95;
  }

  vec3 color = mix(bg.rgb * (1.-uScroll), vec3(r, g, b), alpha);
  gl_FragColor = vec4(color * uOpacity, 0.01);
}`;


export default bgShader;