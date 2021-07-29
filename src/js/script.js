import '../css/style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import * as CONTROL from './controls'

/**
 * Variables
 */
// Sizes
const sizes = {
    width: window.innerWidth * .8,
    height: window.innerHeight
}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Debug
// const gui = new dat.GUI()
// const CONTROLS = new CONTROL.Controls(gui)
// CONTROLS.LightControls(pointLight)
// CONTROLS.ObjectControls(planeMesh)

// Scene
const scene = new THREE.Scene()

/**
 * Texture loader
 */
const loader = new THREE.TextureLoader()
const clouds = loader.load('/heightMap.png')
const texture = loader.load('/rockMap.jpg')
const alpha = loader.load('/bumpMap.jpg')

/**
 * Objects
 */
const planeGeo = new THREE.PlaneBufferGeometry(10, 10, 65, 65)
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 'gray',
    map: texture,
    displacementMap: clouds,
    displacementScale: 1,
    // adding alpha map to remove hard edges
    alphaMap: alpha,
    transparent: true,
    depthTest: false,
})
const planeMesh = new THREE.Mesh(planeGeo, planeMaterial)
scene.add(planeMesh)
planeMesh.rotation.x = 200

/**
 * Lights
 */
const pointLight = new THREE.PointLight(0x7f28d7, 3)
pointLight.position.x = 2
pointLight.position.y = 10
pointLight.position.z = 10
scene.add(pointLight)

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)
camera.position.x = -1.7
camera.position.y = 1.2
camera.position.z = 2
scene.add(camera)

/**
 * Controls
 */
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
let mouseY = 0
document.addEventListener('mousemove', (e) => {
    mouseY = e.clientY
})

const animateDisplacementMap = (prevScale) => {
    const current= {
        displacementScale: .3 + Math.floor(Math.random() * 550) * .0003 
    }

    const tween = new TWEEN.Tween({displacementScale: prevScale})
    .to({ displacementScale: current.displacementScale }, 2000)
    .onUpdate(function() {
        planeMesh.material.displacementScale = current.displacementScale
    })
    .start();
}

const clock = new THREE.Clock()
const animate = () => {
    const elapsedTime = clock.getElapsedTime()
    
    // Animate objects
    planeMesh.material.displacementScale = .3 + mouseY * .004
    
    // const interval = setInterval(function() {
    //     animateDisplacementMap(1)
    //     TWEEN.update();
    // }, 1000);

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}
animate()

/**
 * Window resize
 */
window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})