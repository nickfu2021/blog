import express from 'express';
import { getCM006, getSystem, insertCM006, updateCM006, deleteCM006, getCM007, getClno, insertCM007, updateCM007 } from '../controllers/common.js';

const router = express.Router();

router.post('/getCM006/', getCM006);
router.get('/getSystem', getSystem);
router.get('/getClno:id', getClno);
router.post('/insertCM006', insertCM006);
router.post('/updateCM006', updateCM006);
router.post('/deleteCM006', deleteCM006);
// PGA003
router.post('/getCM007', getCM007);
router.post('/insertCM007', insertCM007);
router.post('/updateCM007', updateCM007);

export default router;
