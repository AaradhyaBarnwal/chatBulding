import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x87ceeb);
const geometry = new THREE.PlaneGeometry(20,20);
const mesh = new THREE.MeshStandardMaterial({color: 0x000999})
const floor = new THREE.Mesh(geometry, mesh);
scene.add(floor);

camera.position.set(10, 60, 10);
camera.lookAt(0, 0, 0);

renderer.render(scene, camera);