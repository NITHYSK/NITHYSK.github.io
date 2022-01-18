// シーンの準備
const scene = new THREE.Scene()

// カメラの準備
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)

// レンダラーの準備
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);

// 立方体の準備
const geometry = new THREE.BoxGeometry() // ジオメトリ
const material = new THREE.MeshPhongMaterial({color: 0x00ff00}) // マテリアル
const cube = new THREE.Mesh(geometry, material) // キューブ
scene.add(cube)
camera.position.z = 5

function animate() {
	cube.rotation.x += 0.01
	cube.rotation.y += 0.01
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}
animate()

// ライトの準備
const directionalLight = new THREE.DirectionalLight('#aaaaff', 1)
directionalLight.position.set(0, 10, 10)
scene.add(directionalLight)

