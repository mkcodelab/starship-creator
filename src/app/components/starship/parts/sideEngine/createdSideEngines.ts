import { BasicSteelMaterial } from '../../../../3d/materials/materials';
import { generateSideEngineGeom } from '../../../../utils/geometries/proceduralGeom';
import { SideEngines } from './sideEngine';

export const StandardSideEngine = new SideEngines({
  name: 'Standard Side Engine',
  geom: generateSideEngineGeom(),
  material: BasicSteelMaterial,
});

export const SideEnginesArray = [StandardSideEngine];
