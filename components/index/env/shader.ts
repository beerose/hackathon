
const bgShader = () => /*glsl*/`precision highp float;

uniform sampler2D uScene;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uTime;
uniform float uScroll;
uniform float uOpacity;

uniform float uRedOffset;
uniform float uGreenOffset;
uniform float uBlueOffset;
uniform float uIntensity;


vec3 chroma(vec2 uv) {
  float rOffset = 0.001 * uRedOffset * uIntensity;
  float gOffset = 0.001 * uGreenOffset * uIntensity;
  float bOffset = 0.001 * uBlueOffset * uIntensity;

  float r = texture2D(uScene, uv * (1.0 + rOffset) - (rOffset / 2.0)).r;
  float g = texture2D(uScene, uv * (1.0 + gOffset) - (gOffset / 2.0)).g;
  float b = texture2D(uScene, uv * (1.0 + bOffset) - (bOffset / 2.0)).b;

  return vec3(r, g, b);
}

void main()
{
  vec2 uv = gl_FragCoord.xy / uResolution.xy;

  vec3 color = chroma(uv);
  gl_FragColor = vec4(color, .0);
}`;


export default bgShader;
