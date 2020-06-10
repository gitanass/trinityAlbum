import * as THREE from 'three'
import darkkNormalImageSource from './images/darkk.jpg'




/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const globedarkkDiffuseTexture = textureLoader.load(darkkNormalImageSource)



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
renderer.setClearColor(0x09090f , 1)
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

/**
 * poste procing effect
 */



// Globes
{
const globe = new THREE.Mesh(
    new THREE.SphereBufferGeometry(10, 64, 64),
    new THREE.MeshBasicMaterial({
        map: globedarkkDiffuseTexture,
    })
)

globe.position.x =-3
globe.position.y =6
globe.position.z =-40
scene.add(globe)
}
/**
 * Loop
 */
const loop = () =>
{
    window.requestAnimationFrame(loop)

    // Render
    renderer.render(scene, camera)
}


loop()