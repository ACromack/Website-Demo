//The texture
uniform sampler2D mainTexture;

//The light direction
uniform vec3 lightDir;

varying vec3 fPosition;
varying vec3 fNormal;
varying vec2 fUV;


void main()
{
  //Calculate the lambertian reflectance
  float lambert = max(0.0, dot(normalize(fNormal), normalize(lightDir)));

  //Ambient light
  vec3 ambient = vec3(1) * 0.025;

  //The unlit texture value at this point
  vec3 textureValue = texture2D(mainTexture, fUV).rgb;

  //Find camera position and calculate rim light
  vec3 eye = normalize(-fPosition.xyz);
  float rimValue = smoothstep(0.5, 1.0, 1.0 - dot(fNormal, eye));
  vec3 rimValueVec = clamp(rimValue, 0.0, 1.0) * vec3(1);

  //The final colour that we will pass to gl_FragColor
  vec3 finalColor = (textureValue * lambert) + ambient + rimValueVec;

  gl_FragColor = vec4(finalColor, 1.0);
}
