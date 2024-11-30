import { Router } from 'express';

import task01Routes from './task01.js';
import task02Routes from './task02.js';
import task03Routes from './task03.js';

const router = Router();

router.use('/task01/sci/4c/abc', task01Routes);
router.use('/task02', task02Routes);
router.use('/task03/pokemon', task03Routes);

export default router;
