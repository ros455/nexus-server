import { Router } from "express";

import * as OrderController from '../controller/OrderController.js';

const router = new Router();

router.post('/create-order',OrderController.create);

export default router;