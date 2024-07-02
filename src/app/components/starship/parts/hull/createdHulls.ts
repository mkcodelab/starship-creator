import * as THREE from 'three';
import { Hull } from './hull';

export const StandardHull = new Hull({
  name: 'Standard Hull',
  hpModifier: 10,
  geom: new THREE.BoxGeometry(1, 1, 4),
});
