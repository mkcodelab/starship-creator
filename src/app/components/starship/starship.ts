import * as THREE from 'three';
import { Hull } from './parts/hull/hull';
import { MainEngine } from './parts/mainEngine/mainEngine';
import { StarshipPart } from './parts/abstract.shipPart';

export class StarshipModel {
  // complete starship
  public group = new THREE.Group();

  hull: Hull;
  mainEngine: MainEngine;

  addHull(hull: Hull) {
    this.hull = hull;
    this.group.add(this.hull.mesh);
  }

  addToGroup(element: StarshipPart) {
    this.group.add(element.mesh);
  }

  //   add mainEngineSelected as param, selectable from ui list
  addMainEngine(mainEngine: MainEngine) {
    this.mainEngine = mainEngine;

    const attachPoint = this.hull.mainEngineAttachPoint;

    this.mainEngine.mesh.position.set(
      attachPoint.x,
      attachPoint.y,
      attachPoint.z
    );
    this.mainEngine.mesh.rotateX(THREE.MathUtils.degToRad(90));
    this.group.add(this.mainEngine.mesh);
  }

  logParts() {
    console.log(this.hull.name, this.mainEngine.name);
  }
}
