import CalculatePageModel from '../models/CalculatePage.js';

export const create = async (req,res) => {
    try {
        const {siteTypes, siteDesign, siteAdaptive, siteManagementSystem, siteAdditionalFunctionality, siteAdditionalServices, description, technicaTask, numberOfPage, language, totalPrice} = req.body;
        const data = await CalculatePageModel.create({
            siteTypes,
            siteDesign,
            siteAdaptive,
            siteManagementSystem,
            siteAdditionalFunctionality,
            siteAdditionalServices,
            description,
            technicaTask,
            numberOfPage,
            language,
            totalPrice,
        })
        res.json(data)
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getAll = async (req,res) => {
    try {
        const data = await CalculatePageModel.find();
        res.json(data)

    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Calculate Page Not Found' });
    }
}

export const getOne  = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await CalculatePageModel.findById(id);
        console.log('data',data);

        res.json(data);
        
    } catch(error) {
        console.log('error',error);
        res.status(500).json({ error: 'Portfolio Not Found' });
    }
}