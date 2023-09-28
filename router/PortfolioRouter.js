import { Router } from "express";
import multer from 'multer';
import * as PortfolioController from '../controller/PortfolioController.js';

const router = new Router();

const storage = multer.diskStorage({
    destination: (_,__,cd) => {
        if(!fs.existsSync('uploadsProjects')) {
            fs.mkdirSync('uploadsProjects');
        }
        cd(null,'uploadsProjects')
    },
    filename: (_,file,cd) => {
        cd(null, file.originalname)
    },
})

const upload = multer({storage})

router.post('/create-project',PortfolioController.create);
router.get('/get-all-portfolio',PortfolioController.getAll);
router.get('/get-one-portfolio/:id', PortfolioController.getOne);

export default router;