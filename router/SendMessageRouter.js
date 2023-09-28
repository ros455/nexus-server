import { Router } from "express";

import { SendMessage } from '../controller/SendMessage.js';

const router = new Router();

router.post('/send-message',SendMessage)

export default router;