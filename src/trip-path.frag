precision highp float;

varying vec4 fragColor;
varying float discardMe;

void main() {
  if (fragColor[3] == 0.0 || discardMe == 1.0) {
    discard;
  }
  gl_FragColor = fragColor;
}
