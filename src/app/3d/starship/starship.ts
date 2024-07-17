import * as THREE from 'three';
import { Hull } from './parts/hull/hull';
import { MainEngine } from './parts/mainEngine/mainEngine';
import { StarshipPart } from './parts/abstract.shipPart';
import { SideEngines } from './parts/sideEngine/sideEngine';

export interface ShipModelParts {
  hull: Hull | undefined;
  mainEngine: MainEngine | undefined;
  sideEngines: SideEngines | undefined;
}

export class StarshipModel {
  // complete starship
  group = new THREE.Group();

  parts: ShipModelParts = {
    hull: undefined,
    mainEngine: undefined,
    sideEngines: undefined,
  };

  removePart(part: StarshipPart) {
    switch (true) {
      case part instanceof Hull:
        if (this.parts.hull) {
          this.group.remove(this.parts.hull.mesh);
        }
        break;
      case part instanceof SideEngines:
        if (this.parts.sideEngines) {
          this.group.remove(this.parts.sideEngines.mesh);
        }
        break;
      case part instanceof MainEngine:
        if (this.parts.mainEngine) {
          // group and single mesh
          this.group.remove(this.parts.mainEngine.mesh);
          this.group.remove(this.parts.mainEngine.group);
        }
        break;
      // case part instanceof Wings:
      //   // this.group.remove(this.wings.mesh)
      //   console.log('wings in progress');
      //   break;
      default:
        console.log(part);
    }
  }

  addPart(part: StarshipPart) {
    switch (true) {
      case part instanceof Hull:
        this.removePart(part);
        this.addHull(part);
        break;
      case part instanceof SideEngines:
        this.removePart(part);
        this.addSideEngines(part);
        break;
      case part instanceof MainEngine:
        this.removePart(part);
        this.addMainEngine(part);
        break;
    }
  }

  addToGroup(element: StarshipPart) {
    this.group.add(element.mesh);
  }

  addHull(hull: Hull) {
    this.parts.hull = hull;
    this.group.add(this.parts.hull.mesh);
  }

  addMainEngine(mainEngine: MainEngine) {
    this.parts.mainEngine = mainEngine;
    if (this.parts.hull) {
      const mainEngine = this.parts.mainEngine;

      const [x, y, z] = this.parts.hull.mainEngineAttachPoint;
      //   later we will remove single mesh, and use only groups for all elements of spaceship
      //   if created engine is made of group of objects
      if (mainEngine.group) {
        this.group.add(mainEngine.group);
        mainEngine.group.position.set(x, y, z);
        // if its created of single mesh
      } else {
        mainEngine.mesh.position.set(x, y, z);
        this.group.add(mainEngine.mesh);
      }
    }
  }

  addSideEngines(sideEngines: SideEngines) {
    this.parts.sideEngines = sideEngines;
    if (this.parts.hull) {
      const [x, y, z] = this.parts.hull.sideEngineAttachPoint;
      this.parts.sideEngines.mesh.position.set(x, y, z);
      this.group.add(this.parts.sideEngines.mesh);
    }
  }

  logParts() {
    for (let part in this.parts) {
      console.log(this.parts[part as keyof ShipModelParts]);
    }
  }

  moveSideEngines(y: number, z: number) {
    if (this.parts.sideEngines) {
      if (y !== 0) {
        this.parts.sideEngines.mesh.position.y = y;
      }
      if (z !== 0) {
        this.parts.sideEngines.mesh.position.z = z;
      }
    }
  }

  get totalMass() {
    return Object.values(this.parts).reduce((total, part) => {
      if (part) {
        total += part.mass;
      }
      return total;
    }, 0);
  }
}
