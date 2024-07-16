import * as THREE from 'three';
export class Lights {
  private light: THREE.AmbientLight;
  private spotlight: THREE.SpotLight;
  private spotlight2: THREE.SpotLight;
  private spotlightHelper: THREE.SpotLightHelper;
  private dirLight: THREE.DirectionalLight;

  public lightsGroup = new THREE.Group();

  constructor() {
    this.initLights();
  }

  initLights() {
    this.light = new THREE.AmbientLight(0xffffff, 0.2);
    this.light.position.z = 10;

    this.dirLight = new THREE.DirectionalLight(0xffffdd, 1);
    this.dirLight.position.set(-5, 8, 10);

    this.dirLight.lookAt(0, 0, 0);
    // this.dirLight.castShadow = true;
    this.dirLight.shadow.bias = -0.001;
    this.dirLight.shadow.normalBias = 0.1;

    const dirlightHelper = new THREE.DirectionalLightHelper(this.dirLight);

    this.spotlight = new THREE.SpotLight(0xffffff, 1, 5, 15, 0.2, 1.5);
    this.spotlight.position.set(0, 2, 0);
    this.spotlight.castShadow = true;

    this.spotlight2 = new THREE.SpotLight(0xffffff, 1, 5, 15, 0.2, 1.5);
    this.spotlight2.position.set(1, 3, 1);
    this.spotlight2.castShadow = true;

    this.spotlightHelper = new THREE.SpotLightHelper(this.spotlight);

    this.spotlight.lookAt(0, 0, 0);

    this.lightsGroup.add(
      this.light,
      this.spotlight,
      this.spotlight2,
      this.dirLight,
      dirlightHelper
    );
  }

  moveSpotlight(value: number) {
    this.spotlight.position.y = value;
    // does not work?
    // this.spotlightHelper.position.y = value;
  }
}
