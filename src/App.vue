<template>
  <div class="canvasContainer" ref="canvasContainer"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvasContainer = ref(null);

onMounted(() => {
  //初始化场景
  const scene = new THREE.Scene();
  //初始化相机
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.set(1.5, 1, 1.5);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  //加载背景纹理

  const loader = new THREE.TextureLoader();
  const bgTexture = loader.load("./assets/imgs/050.jpg");
  //环境纹理映射
  bgTexture.mapping = THREE.EquirectangularRefractionMapping;

  scene.background = bgTexture;
  scene.environment = bgTexture;
  //添加环境光

   const light = new THREE.AmbientLight(0xffffff,1); // soft white light
  scene.add(light);

  //加载小熊模型
  const gltfLoader = new GLTFLoader();
  gltfLoader.load("./assets/model/bear.gltf", (gltf) => {
    console.log(gltf);
    const model = gltf.scene.children[0];
    model.material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      envMap: bgTexture,
      refractionRatio: 0.7,
      reflectivity: 0.99,
    });
    scene.add(model);
  });



  
 
  //初始化渲染器
  const renderer = new THREE.WebGLRenderer();
  //设置渲染器大小
  renderer.setSize(window.innerWidth, window.innerHeight);

  //监听屏幕尺寸
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
  canvasContainer.value.appendChild(renderer.domElement);

  //添加控制器
  const control = new OrbitControls(camera, renderer.domElement);
  control.enableDamping = true;
  const render = () => {
    control.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  render();
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
