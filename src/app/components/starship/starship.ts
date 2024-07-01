import * as THREE from 'three';
import { Hull } from './parts/hull/hull';
import { MainEngine } from './parts/mainEngine/mainEngine';
// Hull | Tail | Wings | etc
export type StarshipElement = Hull | MainEngine;

export class StarshipModel {
  // complete starship
  public group = new THREE.Group();

  hull: Hull;
  mainEngine: MainEngine;

  addHull(hull: Hull) {
    this.hull = hull;
  }

  addToGroup(element: StarshipElement) {
    this.group.add(element.mesh);
  }

  createTestHull() {
    this.hull = new Hull();
    this.group.add(this.hull.mesh);
  }

  //   add mainEngineSelected as param, selectable from ui list
  addMainEngine() {
    this.mainEngine = new MainEngine();

    const attachPoint = this.hull.mainEngineAttachPoint;

    this.mainEngine.mesh.position.set(
      attachPoint.x,
      attachPoint.y,
      attachPoint.z
    );
    this.mainEngine.mesh.rotateX(THREE.MathUtils.degToRad(90));
    this.group.add(this.mainEngine.mesh);
  }
}
