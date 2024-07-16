import * as THREE from 'three';
import { Hull } from './parts/hull/hull';
import { MainEngine } from './parts/mainEngine/mainEngine';
import { StarshipPart } from './parts/abstract.shipPart';
import { SideEngines } from './parts/sideEngine/sideEngine';

export type PartName = 'hull' | 'mainEngine' | 'sideEngines' | 'wings';

export interface ShipModelParts {
  hull: Hull | undefined;
  mainEngine: MainEngine | undefined;
  sideEngines: SideEngines | undefined;
}

export class StarshipModel {
  // complete starship
  group = new THREE.Group();

  //   remove those props, and use parts object
  hull: Hull;
  mainEngine: MainEngine;
  sideEngines: SideEngines;

  parts: ShipModelParts = {
    hull: undefined,
    mainEngine: undefined,
    sideEngines: undefined,
  };

  removePart(part: StarshipPart) {
    switch (true) {
      case part instanceof Hull:
        if (this.hull) {
          this.group.remove(this.hull.mesh);
        }
        break;
      case part instanceof SideEngines:
        if (this.sideEngines) {
          this.group.remove(this.sideEngines.mesh);
        }
        break;
      case part instanceof MainEngine:
        if (this.mainEngine) {
          this.group.remove(this.mainEngine.mesh);
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
    this.hull = hull;
    this.group.add(this.hull.mesh);
  }

  addMainEngine(mainEngine: MainEngine) {
    this.mainEngine = mainEngine;
    this.parts.mainEngine = mainEngine;

    const [x, y, z] = this.hull.mainEngineAttachPoint;
    this.mainEngine.mesh.position.set(x, y, z);
    this.group.add(this.mainEngine.mesh);
  }

  addSideEngines(sideEngines: SideEngines) {
    this.sideEngines = sideEngines;
    this.parts.sideEngines = sideEngines;
    const [x, y, z] = this.hull.sideEngineAttachPoint;
    this.group.add(this.sideEngines.mesh);
    this.sideEngines.mesh.position.set(x, y, z);
  }

  logParts() {
    // console.log(this.hull, this.mainEngine, this.sideEngines);
    for (let part in this.parts) {
      console.log(this.parts[part as keyof ShipModelParts]);
    }
  }

  moveSideEngines(y: number, z: number) {
    if (y !== 0) {
      this.sideEngines.mesh.position.y = y;
    }
    if (z !== 0) {
      this.sideEngines.mesh.position.z = z;
    }
  }

  get totalMass() {
    let total = 0;
    let parts = Object.values(this.parts);

    parts.forEach((part) => {
      if (part) {
        total += part.mass;
      }
      //   console.log(part);
      //   total += part.mass;
    });
    // console.log(partsValues);
    // for (let part in this.parts) {
    //   const partIndex = part as keyof ShipModelParts;

    //   if (this.parts[partIndex]) {
    //     console.log(this.parts[partIndex]);
    //     // total += this.parts[partIndex].mass;
    //   }
    // }
    // if (this.hull) {
    //   total += this.hull.mass;
    // }
    // if (this.mainEngine) {
    //   total += this.mainEngine.mass;
    // }
    // if (this.sideEngines) {
    //   total += this.sideEngines.mass;
    // }
    return total;
  }
}
