import * as THREE from 'three';
import {
  basicSteelTextureMap,
  basicSteelTextureNormalMap,
  circleTextureTestMap,
  circleTextureTestNormalMap,
} from '../../utils/textures/generatedTextures';

export const BasicSteelMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.9,
  roughness: 0.2,
  map: basicSteelTextureMap,
  normalMap: basicSteelTextureNormalMap,
  // roughnessMap: generatedTextureMap,
  //   bumpMap: generatedTextureMap,
  flatShading: true,
});

export const AlienMetalMaterial = new THREE.MeshStandardMaterial({
  color: 0xddffdd,
  metalness: 0.8,
  roughness: 0.2,
  map: circleTextureTestMap,
  normalMap: circleTextureTestNormalMap,
  // roughnessMap: generatedTextureMap,
  bumpMap: circleTextureTestMap,
});

export const CorrugatedCopperMaterial = new THREE.MeshStandardMaterial({
  map: circleTextureTestMap,
  normalMap: circleTextureTestNormalMap,
  color: 0xfabfab,
  metalness: 0.8,
  roughness: 0.3,
  flatShading: true,
});

export const DefaultMaterial = new THREE.MeshBasicMaterial({
  color: 0xcccccc,
});
