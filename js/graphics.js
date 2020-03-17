//When the window is loaded fully, call initScene
window.addEventListener("load", initScene);

function initScene(){
	
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	
	//Variables to hold the assortment of vertex/fragment shaders
	var shadersDiff;
	var geometry;
	
	//Load in the shaders
	shadersDiff = ShaderLoader.getShaders("shaders/default.vert", "shaders/diffuse.frag");
	
	var material = new THREE.ShaderMaterial(
	{
		uniforms: {},
		vertexShader: shadersDiff.vertex,
		fragmentShader: shadersDiff.fragment
	});

	
	//Create a mesh from this geometry and material
	cube = new THREE.Mesh(geometry, material);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	var geometry = new THREE.BoxGeometry();
	var cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	camera.position.z = 5;

	function animate(){
		requestAnimationFrame(animate);
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		renderer.render(scene, camera);
	}

	animate();
}