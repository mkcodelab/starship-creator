import {
  createTorusBarrel,
  createTripleEngine,
  generateStandardEngine,
} from '../../../../utils/geometries/proceduralGeom';
import {
  BasicSteelMaterial,
  DefaultMaterial,
} from '../../../materials/materials';
import { MainEngine } from './mainEngine';

export const MainEnginesArray = [
  new MainEngine({
    name: 'Standard Main Engine',
    geom: createTorusBarrel(2, 0.2, 0.4),
    material: BasicSteelMaterial,
  }),

  new MainEngine({
    name: 'testEngine',
    geom: createTorusBarrel(4, 0.2, 0.4),
    material: DefaultMaterial,
    group: generateStandardEngine(),
  }),

  new MainEngine({
    name: 'Triple Engine',
    group: createTripleEngine(BasicSteelMaterial),
  }),
];
