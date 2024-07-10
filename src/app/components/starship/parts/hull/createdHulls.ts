import * as THREE from 'three';
import { Hull } from './hull';
import { createExtrudeGeom } from '../../../../utils/geometries/proceduralGeom';
import {
  circleTextureTestMap,
  circleTextureTestNormalMap,
  generatedTextureMap,
  generatedTextureNormalMap,
} from '../../../../utils/textures/generatedTextures';
import {
  AlienMetalMaterial,
  BasicSteelMaterial,
} from '../../../../3d/materials/materials';

// import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture';

// const flakeTex = new THREE.CanvasTexture(new FlakesTexture());

// const flakeMat = new THREE.MeshBasicMaterial({
//   map: flakeTex,
// });

export const StandardHull = new Hull({
  name: 'Standard Hull',
  hpModifier: 10,
  geom: new THREE.BoxGeometry(1, 1, 3),
  material: BasicSteelMaterial,
});

export const ImprovedHull = new Hull({
  name: 'Improved Hull',
  hpModifier: 50,
  geom: new THREE.BoxGeometry(1, 2, 4),
  material: AlienMetalMaterial,
  //   material: flakeMat,
  //   material: new THREE.MeshPhongMaterial({
  //     color: 0xeeeeee,
  //     shininess: 0.8,
  //   }),
});

export const HexHull = new Hull(
  {
    name: 'Hex Hull',
    hpModifier: 50,
    geom: new THREE.CylinderGeometry(0.5, 0.8, 4, 6),
    material: new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.8,
      roughness: 0.2,
      flatShading: true,
      map: generatedTextureMap,
      normalMap: generatedTextureNormalMap,
    }),
  },
  true
);

export const BevelHull = new Hull({
  name: 'Bevel Hull',
  hpModifier: 60,
  geom: createExtrudeGeom(0.4, 1, 3),
  material: new THREE.MeshStandardMaterial({
    map: circleTextureTestMap,
    normalMap: circleTextureTestNormalMap,
    color: 0xfabfab,
    metalness: 0.8,
    roughness: 0.3,
    flatShading: true,
  }),
});

export const HullsArray = [StandardHull, ImprovedHull, HexHull, BevelHull];
