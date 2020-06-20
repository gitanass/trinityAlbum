
/**
 * Scene
 */
const scene = new THREE.Scene()

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () =>
{
    // Save sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight


    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
})


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 300)
scene.add(camera)

/**
 * Renderer
 */


const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)
renderer.setClearColor( 0x000000, 0 );
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffcccc, 0.2)
scene.add(ambientLight)

const sunLight = new THREE.PointLight(0xffcccc, 1)
sunLight.position.x = 0
sunLight.position.y = 0
sunLight.position.z = 0
scene.add(sunLight)


// load a texture, set wrap mode to repeat
const texture = new THREE.TextureLoader().load( "images/leyl.jpg" );


// Globes


{
// 
const loader = new THREE.TextureLoader();
var geometry = new THREE.SphereBufferGeometry( 13, 60, 60 );
var material = new THREE.MeshBasicMaterial( { map: loader.load('images/leyl.jpg'),} );
var sphere = new THREE.Mesh( geometry, material );


sphere.position.x =-3
sphere.position.y =6
sphere.position.z =-40
scene.add( sphere );

}

/**
 * Loop
 */
const loop = () =>
{
    
    window.requestAnimationFrame(loop)

    // Render
    renderer.render(scene, camera)

    if (keyboard.z == false) sphere.rotation.y += -0.006
}

/**
 * keyevents
 */

const keyboard = {}
keyboard.z = false
document.addEventListener('keydown', (_event) =>
{
    switch(_event.code) {
        case 'KeyW':
            keyboard.z = true
            break;
    }
})
document.addEventListener('keyup', (_event) =>
{
    switch(_event.code)
    {
        case 'KeyW':
        keyboard.z = false
        break;
    }
})


loop()
