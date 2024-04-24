
const bgShader = () => /*glsl*/`precision highp float;

uniform sampler2D uScene;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uTime;
uniform float uScroll;
uniform float uOpacity;


void main()
{
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  vec4 tex = sRGBTransferOETF(texture2D(uScene, uv));

  gl_FragColor = vec4(vec3(tex.r, 0., 0.) * uOpacity, 1.);
}`;


export default bgShader;
