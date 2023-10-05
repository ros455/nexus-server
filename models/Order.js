import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    siteTypes: {
        name: String,
        price: Number
    },
    siteDesign: {
        name: String,
        price: Number,
        link: String
    },
    siteAdaptive: {
        name: String,
        price: Number
    },
    siteManagementSystem: {
        name: String,
        price: Number
    },
    siteAdditionalFunctionality: [
        {
            name: String,
            price: Number
        }
    ],
    siteAdditionalServices: [
        {
            name: String,
            price: Number
        }
    ],
    description: String,
    technicaTask: {
        name: String,
        price: Number
    },
    numberOfPage: {
        count: Number,
        total: Number
    },
    language: {
        numberOfLanguage: Number,
        price: Number,
        total: Number
    },
    totalPrice: Number,
    comunication: {
        method: String,
        address: String,
        date: String,
        time: String
    }
},{timestamps: true,})

export default mongoose.model('Order',OrderSchema)