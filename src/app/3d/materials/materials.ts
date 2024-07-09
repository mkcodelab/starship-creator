import * as THREE from 'three';
import {
  alienMetalMap,
  alienMetalNormalMap,
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

export const AlienMetalMaterial = new THREE.MeshStandardMaterial({
  color: 0xddffdd,
  metalness: 0.8,
  roughness: 0.2,
  map: alienMetalMap,
  normalMap: alienMetalNormalMap,
  // roughnessMap: generatedTextureMap,
  bumpMap: alienMetalNormalMap,
});
