import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils';
import { BasicSteelMaterial } from '../../3d/materials/materials';

// add some weird parameters here for customization
export function generateSideEngineGeom(): THREE.BufferGeometry {
  //   width / height/ depth
  //   left engine
  const leftGeom = new THREE.BoxGeometry(0.5, 0.5, 2);
  //   right engine
  const rightGeom = new THREE.BoxGeometry(0.5, 0.5, 2);
  //   connector
  const centerGeom = new THREE.BoxGeometry(2, 0.4, 0.6);
  leftGeom.translate(1, 0, 0);
  rightGeom.translate(-1, 0, 0);

  return mergeGeometries([leftGeom, rightGeom, centerGeom]);
}

export function createExtrudeGeom(
  width: number,
  length: number,
  depth: number
) {
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
// add more parameters
export function createTorusBarrel(
  quantity: number,
  tubeThickness: number,
  spread: number
): THREE.BufferGeometry {
  const toruses = [];
  for (let i = 0; i < quantity; i++) {
    const torus = new THREE.TorusGeometry(0.5, tubeThickness, 6, 6);
    torus.translate(0, 0, i * spread);
    toruses.push(torus);
  }

  const mergedGeom = mergeGeometries(toruses);
  //   mergedGeom.translate(0, 0, -2);
  return mergedGeom;
}

export function createTrapezoid() {
  const height = 3;
  const trapezoid = new THREE.CylinderGeometry(
    0.3,
    0.6,
    height,
    3,
    2,
    false,
    0,
    Math.PI
  );
  trapezoid.rotateX(degToRad(90));
  trapezoid.rotateZ(degToRad(90));
  trapezoid.translate(0, 0, -height / 10);

  return trapezoid;
}

// add params for material / multiple materials etc...
export function createHexHull(material: THREE.Material): THREE.Group {
  const cylinder = new THREE.CylinderGeometry(0.5, 0.8, 4, 6);

  const cylinderMesh = new THREE.Mesh(cylinder, material);

  cylinderMesh.rotateX(degToRad(90));
  cylinderMesh.rotateY(degToRad(30));

  const group = new THREE.Group();
  group.add(cylinderMesh);
  return group;
}

// testing standard engine group mesh
// procedurally generated meshes are added to group that is returned
// doing so, we can have multiple materials on element
export function generateStandardEngine(): THREE.Group {
  const torus = createTorusBarrel(4, 0.2, 0.3);
  const cylinder = new THREE.CylinderGeometry(0.3, 0.3, 0.4);

  const torusMesh = new THREE.Mesh(torus, BasicSteelMaterial);
  const cylinderMesh = new THREE.Mesh(
    cylinder,
    new THREE.MeshPhongMaterial({
      color: 0xff8822,
      emissive: 0xff8822,
      emissiveIntensity: 0.5,
    })
  );

  cylinderMesh.rotateX(degToRad(90));

  const group = new THREE.Group();
  group.add(torusMesh, cylinderMesh);
  return group;
}

export function createTripleEngine(material: THREE.Material): THREE.Group {
  const spread = 0.3;
  const barrelLength = 1;
  const leftGeom = new THREE.CylinderGeometry(0.2, 0.2, barrelLength);
  leftGeom.translate(spread, 0, 0);

  const rightGeom = new THREE.CylinderGeometry(0.2, 0.2, barrelLength);
  rightGeom.translate(-spread, 0, 0);

  const bottomGeom = new THREE.CylinderGeometry(0.2, 0.2, barrelLength);
  bottomGeom.translate(0, 0, -spread);

  const engineHull = new THREE.CylinderGeometry(0.6, 0.6, 0.3, 6);
  engineHull.translate(0, 0, -0.1);

  const mergedCylinderGeoms = mergeGeometries([
    leftGeom,
    rightGeom,
    bottomGeom,
    engineHull,
  ]);

  const cylindersMesh = new THREE.Mesh(mergedCylinderGeoms, material);

  const group = new THREE.Group();
  group.add(cylindersMesh);

  group.rotateX(degToRad(90));
  return group;
}

// function deg2rad(deg: number) {
//   return (deg * Math.PI) / 180;
// }
