// import { Component, ElementRef, ViewChild } from '@angular/core';
// import * as THREE from 'three';

// @Component({
//   standalone: true,
//   template: ` <canvas id="rendererCanvas" #rendererCanvas></canvas> `,
//   selector: 'canvas-box',
//   styles: `
//     #rendererCanvas {
//         border: 2px solid black;
//     }
//   `,
// })
// export class CanvasBoxComponent {
//   ngOnInit() {
//     //   this.canvas = (document.getElementById('canvas-box') ?? undefined) as HTMLCanvasElement
//     this.initScene();
//     this.createBox();
//     this.render();
//   }

//   width = 500;
//   height = 500;

//   get aspect() {
//     return this.width / this.height;
//   }

//   @ViewChild('rednererCanvas', { read: ElementRef })
//   rendererCanvas: HTMLCanvasElement;

//   scene = new THREE.Scene();
//   camera = new THREE.PerspectiveCamera(75, this.aspect, 0.1, 1000);

//   renderer: THREE.WebGLRenderer;

//   mainLight = new THREE.AmbientLight(0xffffff, 0.7);

//   createBox(): void {
//     const material = new THREE.MeshToonMaterial();

//     // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     // this.scene.add(ambientLight);

//     // const pointLight = new THREE.PointLight(0xffffff, 0.5);
//     // pointLight.position.x = 2;
//     // pointLight.position.y = 2;
//     // pointLight.position.z = 2;
//     // this.scene.add(pointLight);

//     const box = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), material);

//     const torus = new THREE.Mesh(
//       new THREE.TorusGeometry(5, 1.5, 16, 100),
//       material
//     );

//     this.scene.add(torus, box);
//   }

//   initScene() {
//     this.renderer = new THREE.WebGLRenderer({
//       canvas: this.rendererCanvas,
//     });

//     this.scene.add(this.mainLight);
//     this.scene.add(this.camera);

//     this.renderer.setSize(this.width, this.height);

//     this.renderer.setClearColor(0x222222);
//   }

//   render() {
//     this.renderer.render(this.scene, this.camera);
//   }
// }
