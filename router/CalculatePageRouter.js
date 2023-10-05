import { Router } from "express";

import * as CalculatePageController from '../controller/CalculatePageController.js';

const router = new Router();

router.post('/create-calculate-page',CalculatePageController.create);
router.get('/get-all-calculate-page',CalculatePageController.getAll);
router.get('/get-one-calculate-page/:id',CalculatePageController.getOne);

export default router;