import * as THREE from 'three'

// Nieuwe scene maken
const scene = new THREE.Scene()

// Camera instellen
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

// Geometry toevoegen
const geometry = new THREE.SphereGeometry()

// Material toevoegen
const material = new THREE.MeshStandardMaterial({ wireframe: true, color: 0xf98f2b, metalness: 0.13 })

// Mesh toevoegen
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// Helper
// const helper = new THREE.SkeletonHelper( THREE.SkinnedMesh )
// scene.add(helper)

// Light
const directionalLight = new THREE.DirectionalLight(0x9090aa)
directionalLight.position.set(-10, 10, -10).normalize()
scene.add(directionalLight)

const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444)
hemisphereLight.position.set(1, 1, 1)
scene.add(hemisphereLight)

// Animation
const animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.003
    cube.rotation.y += 0.002
    renderer.render(scene, camera)
}

// Renderer
let renderer 

export const createScene = (canvas) => {
    renderer = new THREE.WebGLRenderer({ canvas })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.render(scene, camera)
    animate()
}

