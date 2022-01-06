// Importáld be a HumanHero és TransformerHero osztályokat.
import {HumanHero} from './hero';
import {TransformerHero} from './transformer';

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
  new HumanHero(1, 'Bob', 'male', 30, 50, 'photoBob'),
  new HumanHero(2, 'Miriam', 'female', 25, 50, 'photoMiriam'),
  new HumanHero(3, 'Joy', 'female', 30, 50, 'photoJoy'),

];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} humans
 */
export const transformers: TransformerHero[] = [
  new TransformerHero(1, 'Tex', 2, 2, 'bluewing', 'photoTex'),
  new TransformerHero(2, 'Wi', 2, 2, 'greenwing', 'photoWi'),
  new TransformerHero(3, 'Hoppy', 2, 2, 'hoppers', 'photoHoppy'),
];
