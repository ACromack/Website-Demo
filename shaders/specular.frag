precision highp float;
varying vec3 fPosition;
varying vec3 fNormal;

vec3 lightDir =  vec3(0,1,0);
float alpha = 105.0;

void main()
{
  vec3 viewDir = normalize(-fPosition);

  //Calculate the halfway vector between the light and view directions
  vec3 halfVector = normalize(lightDir + viewDir);

  //Define the ambient lighting of the object
  vec3 ambient = vec3(1,0,0) * 0.45;

  //Calculate the diffuse lighting of the object using lambertian reflectance
  vec3 diffuse = vec3(1,0,0) * max(0.0, dot(lightDir, normalize(fNormal))) * 0.6;

  //Calculate the specular highlights on the object
  vec3 specular = vec3(1) * pow(max(0.0, dot(normalize(fNormal), viewDir)), alpha) * 1.0;

  //Output the final combined colour
  gl_FragColor = vec4(ambient + diffuse + specular, 1.0);
}
