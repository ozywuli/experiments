/**
 * SCENE SETUP
 */
var scene;
var camera;
var renderer;
var controls;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera( 10, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set(-5, 12, 10);
camera.lookAt( scene.position );

renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

/**
 * TRACKBALL CONTROLLER
 */

controls = new THREE.TrackballControls( camera );
controls.rotateSpeed = 5.0;
controls.zoomSpeed = 3.2;
controls.panSpeed = 0.8;
controls.noZoom = false;
controls.noPan = true;
controls.staticMoving = false;
controls.dynamicDampingFactor = 0.2;

 /**
  * LIGHTING
  */
var iphone_color = '#FAFAFA';
var ambientLight = new THREE.AmbientLight('#EEEEEE');
var hemiLight = new THREE.HemisphereLight(iphone_color, iphone_color, 0);
var light = new THREE.PointLight(iphone_color, 1, 100);

hemiLight.position.set(0, 50, 0);
light.position.set(0, 20, 10);

scene.add(ambientLight);
scene.add(hemiLight);
scene.add(light);


/**
 * Utilities
 */

var axisHelper = new THREE.AxisHelper( 1.25 );
scene.add( axisHelper );

/**
 * RENDER LOOP
 */
function renderPhone() {
    renderer.render( scene, camera );
}

controls.addEventListener( 'change', renderPhone );

function animationLoop() {
    requestAnimationFrame(animationLoop);
    controls.update();
}

animationLoop();

/**
 * Window Resizing
 */
window.addEventListener( 'resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    controls.handleResize();
    renderPhone();
}, false );

/**
 * OBJECT LOADER
 */
var dae;
var loader = new THREE.ColladaLoader();

function loadCollada( collada ) {
    dae = collada.scene;
    dae.position.set(0.4, 0, 0.8);
    scene.add(dae);
    renderPhone();
}


loader.load( 'iphone6/model.dae', loadCollada);