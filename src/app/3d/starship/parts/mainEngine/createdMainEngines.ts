import {
  createTorusBarrel,
  generateStandardEngine,
} from '../../../../utils/geometries/proceduralGeom';
import {
  BasicSteelMaterial,
  DefaultMaterial,
} from '../../../materials/materials';
import { MainEngine } from './mainEngine';

export const StandardMainEngine = new MainEngine({
  name: 'Standard Main Engine',
  geom: createTorusBarrel(2, 0.2, 0.4),
  material: BasicSteelMaterial,
});

export const TestMainEngine = new MainEngine({
  name: 'testEngine',
  geom: createTorusBarrel(4, 0.2, 0.4),
  material: DefaultMaterial,
  group: generateStandardEngine(),
});

export const MainEnginesArray = [StandardMainEngine, TestMainEngine];
