import * as THREE from 'three';
import { Hull } from './hull';
import {
  createExtrudeGeom,
  createHexHull,
  createTorusBarrel,
  createTrapezoid,
} from '../../../../utils/geometries/proceduralGeom';

import {
  AlienMetalMaterial,
  BasicSteelMaterial,
  CorrugatedCopperMaterial,
  PerlinTextureMaterial,
  PerlinTextureMaterial2,
} from '../../../../3d/materials/materials';

export const HullsArray = [
  new Hull({
    name: 'Standard Hull',
    hpModifier: 10,
    geom: new THREE.BoxGeometry(1, 1, 3),
    material: BasicSteelMaterial,
  }),

  new Hull({
    name: 'Improved Hull',
    hpModifier: 90,
    geom: new THREE.BoxGeometry(1, 2, 4),
    material: AlienMetalMaterial,
    mass: 300,
  }),

  new Hull(
    {
      name: 'Hex Hull',
      hpModifier: 50,
      geom: new THREE.CylinderGeometry(0.5, 0.8, 4, 6),
      material: BasicSteelMaterial,
      group: createHexHull(AlienMetalMaterial),
      mainEngineAttachPoint: new THREE.Vector3(0, 0, -2.5),
    }
    // true
  ),

  new Hull({
    name: 'Bevel Hull',
    hpModifier: 60,
    geom: createExtrudeGeom(0.4, 1, 2),
    material: CorrugatedCopperMaterial,
    mainEngineAttachPoint: new THREE.Vector3(0, 0, -2.5),
    mass: 230,
  }),

  new Hull({
    name: 'Torus Hull',
    hpModifier: 100,
    geom: createTorusBarrel(10, 0.4, 0.4),
    material: CorrugatedCopperMaterial,
    mainEngineAttachPoint: new THREE.Vector3(0, 0, -2),
    mass: 150,
  }),

  new Hull({
    name: 'Trapezoid',
    hpModifier: 20,
    geom: createTrapezoid(),
    //   material: BasicSteelMaterial,
    material: PerlinTextureMaterial2,
  }),
];

// todo: create class responsible for generating mesh, with many methods for adding shapes to bufferGeometry or something
