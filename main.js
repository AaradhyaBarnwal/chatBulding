import * as THREE from "three";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500,
);

const scene = new THREE.Scene();

const sun = new THREE.DirectionalLight("#ffffff", 10);
sun.position.set(10, 20, 10);
scene.add(sun);

scene.background = new THREE.Color("#aae2f8");
const geometry = new THREE.PlaneGeometry(20, 20);
const mesh = new THREE.MeshStandardMaterial({ color: "#3d1c1c" });
const floor = new THREE.Mesh(geometry, mesh);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

function makeWall(width, depth, x, z) {
  const wallGeo = new THREE.BoxGeometry(width, 3, depth);
  const wallMesh = new THREE.MeshStandardMaterial({ color: "#753819" });
  const wall = new THREE.Mesh(wallGeo, wallMesh);
  wall.position.set(x, 1.5, z);
  scene.add(wall);
}

makeWall(20, 1, 0, -10);
makeWall(20, 1, 0, 10);
makeWall(1, 20, -10, 0);
makeWall(1, 20, 10, 0);

camera.position.set(0, 25, 10);
camera.lookAt(0, 0, 0);

/// p1
const p1G = new THREE.CapsuleGeometry(0.3, 1, 4, 8);
const p1M = new THREE.MeshStandardMaterial({ color: "#e639c3" });
const p1 = new THREE.Mesh(p1G, p1M);

p1.position.set(0, 1, 0);
scene.add(p1);

const btn = [];
window.addEventListener("keydown", (e) => {
  btn[e.code] = true;
});

window.addEventListener("keyup", (e) => {
  btn[e.code] = false;
});

function varRender() {
  if (btn["KeyW"] && p1.position.z >= -8.5) {
    p1.position.z -= 0.5;
  }
  if (btn["KeyS"] && p1.position.z <= 8.5) {
    p1.position.z += 0.5;
  }

  if (btn["KeyA"] && p1.position.x >= -8.5) {
    p1.position.x -= 0.5;
  }
  if (btn["KeyD"] && p1.position.x <= 8.5) {
    p1.position.x += 0.5;
  }
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(varRender);
