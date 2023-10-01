import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
    title: String,
    mainImage: String,
    images: [String],
    url: String,
    price: Number,
    categoryUa: String,
    categoryEn: String,
    technology: String,
    description: {
        ua: String,
        en: String
    },
    tags: {
        ua: [String],
        en: [String]
    }
},{timestamps: true,})

export default mongoose.model('Portfolio',PortfolioSchema)