import * as THREE from 'three';
import { Hull } from './hull';

export const StandardHull = new Hull({
  name: 'Standard Hull',
  hpModifier: 10,
  geom: new THREE.BoxGeometry(1, 1, 4),
  material: new THREE.MeshPhongMaterial({
    color: 0xcccccc,
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
    geom: new THREE.CylinderGeometry(1, 1.2, 4, 6),
    material: new THREE.MeshPhongMaterial({
      color: 0xfabfab,
      shininess: 0.8,
    }),
  },
  true
);

export const HullsArray = [StandardHull, ImprovedHull, HexHull];
