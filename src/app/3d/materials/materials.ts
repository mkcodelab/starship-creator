import * as THREE from 'three';
import {
  generatedTextureMap,
  generatedTextureNormalMap,
} from '../../utils/textures/generatedTextures';

export const BasicSteelMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.9,
  roughness: 0.2,
  map: generatedTextureMap,
  normalMap: generatedTextureNormalMap,
  // roughnessMap: generatedTextureMap,
  bumpMap: generatedTextureMap,
});
