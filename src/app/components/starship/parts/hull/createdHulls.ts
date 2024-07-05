import * as THREE from 'three';
import { Hull } from './hull';
import { generateCanvasTexture } from '../../../../utils/textures/canvasTexture';

const hullMaterial = generateCanvasTexture();

export const generatedTextureMap = new THREE.CanvasTexture(hullMaterial.map);
generatedTextureMap.wrapS = generatedTextureMap.wrapT = THREE.RepeatWrapping;
generatedTextureMap.repeat.set(2, 2);

// generatedTextureMap.wrapS = generatedTextureMap.wrapT = THREE.RepeatWrapping;
export const generatedTextureNormalMap = new THREE.CanvasTexture(
  hullMaterial.normalMap
);
generatedTextureNormalMap.wrapS = generatedTextureNormalMap.wrapT =
  THREE.RepeatWrapping;
generatedTextureNormalMap.repeat.set(2, 2);

export const StandardHull = new Hull({
  name: 'Standard Hull',
  hpModifier: 10,
  geom: new THREE.BoxGeometry(1, 1, 3),
  material: new THREE.MeshStandardMaterial({
    color: 0xdddddd,
    metalness: 1,
    roughness: 0.5,
    map: generatedTextureMap,
    normalMap: generatedTextureNormalMap,
  }),
});

export const ImprovedHull = new Hull({
  name: 'Improved Hull',
  hpModifier: 50,
  geom: new THREE.BoxGeometry(1, 2, 4),
  material: new THREE.MeshPhongMaterial({
    color: 0xeeeeee,
    shininess: 0.8,
  }),
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
    color: 0xfabfab,
    metalness: 0.8,
    roughness: 0.3,
    flatShading: true,
  }),
});

export const HullsArray = [StandardHull, ImprovedHull, HexHull, BevelHull];

function createExtrudeGeom(width: number, length: number, depth: number) {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0, width);
  shape.lineTo(length, width);
  shape.lineTo(length, 0);
  shape.lineTo(0, 0);

  const extrudeSettings = {
    steps: 2,
    depth: depth,
    bevelEnabled: true,
    bevelThickness: 0.8,
    bevelSize: 0.2,
    bevelOffset: 0,
    bevelSegments: 1,
  };

  const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geom.translate(-length / 2, 0, -depth / 2);
  return geom;
}
