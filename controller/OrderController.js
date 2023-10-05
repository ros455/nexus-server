import OrderModel from '../models/Order.js';

export const create = async (req,res) => {
    try {
        const {siteTypes, siteDesign, siteAdaptive, siteManagementSystem, siteAdditionalFunctionality, siteAdditionalServices, description, technicaTask, numberOfPage, language, totalPrice, comunication} = req.body;
        const data = await OrderModel.create({
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
            comunication
        })
        res.json(data)
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getAll = async (req,res) => {
    try {
        const data = await OrderModel.find();
        res.json(data)

    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Calculate Page Not Found' });
    }
}