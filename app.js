let scene, camera, renderer;

function init() {
    // Create scene
    scene = new THREE.Scene();

    // Set up camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);  // Position camera

    // Set up renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add objects to the scene
    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Set cube position for distance calculation
    cube.position.set(2, 2, -5);

    // Render loop
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);

        // Calculate the distance between camera and cube
        let distance = camera.position.distanceTo(cube.position);
        console.log("Distance to cube: ", distance);
    }
    animate();
}

init();

