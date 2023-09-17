import { WebGLRenderer, Scene, PerspectiveCamera, AxesHelper, AmbientLight, MeshStandardMaterial,
  Mesh, PlaneGeometry, GridHelper, DoubleSide, DirectionalLight
 } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { getCore } from './elements/core'
import { coreConfig } from './config'
import { getCoreHeight } from './utils/utils'

const { innerWidth, innerHeight } = window

const renderer = new WebGLRenderer()
const scene = new Scene()
const camera = new PerspectiveCamera(
  45,
  innerWidth / innerHeight,
  0.1,
  1000
)
const orbitControls = new OrbitControls(camera, renderer.domElement)
const axesHelper = new AxesHelper(100)
const gridHelper = new GridHelper(30, 30)

renderer.setSize(innerWidth, innerHeight)

document.body.appendChild(renderer.domElement)

camera.position.set(-10, 30, 30)
orbitControls.update()

const planeGeometry = new PlaneGeometry(30, 30)
const planeMaterial = new MeshStandardMaterial({ 
  color: 0xFFFFFF,
  side: DoubleSide
})
const plane = new Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -0.5 * Math.PI


const ambientLight = new AmbientLight(0xFFFFFF)

const directionalLight = new DirectionalLight(0xFFBFFF, 1.9)
directionalLight.position.set(-30, 20, 10)

scene.add(ambientLight)
scene.add(directionalLight)
scene.add(axesHelper)
scene.add(plane)
scene.add(gridHelper)

/* tree object */
const core = getCore(coreConfig)
core.position.set(0, getCoreHeight(coreConfig) / 2, 0)
scene.add(core)

const animate = () => { renderer.render(scene, camera) }

renderer.setAnimationLoop(animate)
