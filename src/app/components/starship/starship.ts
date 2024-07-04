import * as THREE from 'three';
import { Hull } from './parts/hull/hull';
import { MainEngine } from './parts/mainEngine/mainEngine';
import { StarshipPart } from './parts/abstract.shipPart';
import { SideEngines } from './parts/sideEngine/sideEngine';

export class StarshipModel {
  // complete starship
  group = new THREE.Group();

  hull: Hull;
  mainEngine: MainEngine;
  sideEngines: SideEngines;

  addHull(hull: Hull) {
    this.hull = hull;
    this.group.add(this.hull.mesh);
  }

  removeHull() {
    if (this.hull) {
      this.group.remove(this.hull.mesh);
    }
  }

  addToGroup(element: StarshipPart) {
    this.group.add(element.mesh);
  }

  addMainEngine(mainEngine: MainEngine) {
    this.mainEngine = mainEngine;

    const [x, y, z] = this.hull.mainEngineAttachPoint;
    this.mainEngine.mesh.position.set(x, y, z);
    this.group.add(this.mainEngine.mesh);
  }

  logParts() {
    console.log(this.hull.name, this.mainEngine.name);
  }

  addSideEngines(sideEngines: SideEngines) {
    this.sideEngines = sideEngines;
    const [x, y, z] = this.hull.sideEngineAttachPoint;
    this.group.add(this.sideEngines.mesh);
    this.sideEngines.mesh.position.set(x, y, z);
  }

  moveSideEngines(y: number, z: number) {
    if (y !== 0) {
      this.sideEngines.mesh.position.y = y;
    }
    if (z !== 0) {
      this.sideEngines.mesh.position.z = z;
    }
  }
}
