import * as THREE from 'three';
export class Lights {
  private light: THREE.AmbientLight;
  private spotLight: THREE.SpotLight;
  private spotlightHelper: THREE.SpotLightHelper;

  public lightsGroup = new THREE.Group();

  constructor() {
    this.initLights();
  }

  initLights() {
    this.light = new THREE.AmbientLight(0x444444);
    this.light.position.z = 10;

    this.spotLight = new THREE.SpotLight(0xffffff, 1, 5, 15, 0.2, 1.5);
    this.spotLight.position.set(0, 2, 0);

    this.spotlightHelper = new THREE.SpotLightHelper(this.spotLight);

    this.spotLight.lookAt(0, 0, 0);

    this.lightsGroup.add(this.light, this.spotLight, this.spotlightHelper);
  }

  moveSpotlight(value: number) {
    this.spotLight.position.y = value;
    // does not work?
    this.spotlightHelper.position.y = value;
  }
}
