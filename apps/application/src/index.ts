import path from 'path';
import Bree from 'bree';

import { lib } from '@nx-bree-typescript/lib';

console.log(lib); // <--- works

const bree = new Bree({
  root: path.join(__dirname, 'jobs'),
  jobs: ['job'],
});

bree.start();
