import PortfolioModel from "../models/Portfolio.js";

export const create  = async (req, res) => {
    try {
        const {title, mainImage, images, url, price, categoryUa, categoryEn, technology, description, tags} = req.body;
        
        const project = await PortfolioModel.create({
            title,
            mainImage,
            images,
            url,
            price,
            categoryUa,
            categoryEn,
            technology,
            description,
            tags
        })

        res.json(project)
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getAll  = async (req, res) => {
    try {
        const data = await PortfolioModel.find();

        res.json(data);
        
    } catch(error) {
        console.log('error',error);
        console.log(error);
        res.status(500).json({ error: 'Portfolios Not Found' });
    }
}

export const getOne  = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('id',id);
        const data = await PortfolioModel.findById(id);

        res.json(data);
        
    } catch(error) {
        console.log('error',error);
        res.status(500).json({ error: 'Portfolio Not Found' });
    }
}