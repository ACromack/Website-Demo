varying vec3 fNormal;
varying vec3 fPosition;
varying vec2 fUV;

void main()
{
  fNormal = normalize(normalMatrix * normal);
  vec4 pos = modelViewMatrix * vec4(position, 1.0);
  fPosition = pos.xyz;
  fUV = uv;
  gl_Position = projectionMatrix * pos;
}
