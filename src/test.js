// Option 1: Import the entire three.js core library.
import * as THREE from 'three';

const scene = new THREE.Scene();


// Option 2: Import just the parts you need.
import { Scene } from 'three';

const scene = new Scene();

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
  });
  
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(30);
  camera.position.setX(-3);
  
  renderer.render(scene, camera);
  
  // Torus
  
  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
  const torus = new THREE.Mesh(geometry, material);
  
  scene.add(torus);
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

var msg = 'Hello World';
console.log(msg);
