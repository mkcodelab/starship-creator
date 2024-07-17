import * as THREE from 'three';
import { Hull } from './hull';
import { createExtrudeGeom } from '../../../../utils/geometries/proceduralGeom';

import {
  AlienMetalMaterial,
  BasicSteelMaterial,
  CorrugatedCopperMaterial,
} from '../../../../3d/materials/materials';

export const StandardHull = new Hull({
  name: 'Standard Hull',
  hpModifier: 10,
  geom: new THREE.BoxGeometry(1, 1, 3),
  material: BasicSteelMaterial,
});

export const ImprovedHull = new Hull({
  name: 'Improved Hull',
  hpModifier: 90,
  geom: new THREE.BoxGeometry(1, 2, 4),
  material: AlienMetalMaterial,
  mass: 300,
});

export const HexHull = new Hull(
  {
    name: 'Hex Hull',
    hpModifier: 50,
    geom: new THREE.CylinderGeometry(0.5, 0.8, 4, 6),
    material: BasicSteelMaterial,
  },
  true
);

export const BevelHull = new Hull({
  name: 'Bevel Hull',
  hpModifier: 60,
  geom: createExtrudeGeom(0.4, 1, 3),
  material: CorrugatedCopperMaterial,
  mass: 230,
});

export const HullsArray = [StandardHull, ImprovedHull, HexHull, BevelHull];

// todo: create class responsible for generating mesh, with many methods for adding shapes to bufferGeometry or something
