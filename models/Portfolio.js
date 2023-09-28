import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
    title: String,
    mainImage: String,
    url: String,
    price: Number,
    category: String,
    technology: String,
    description: String,
    tags: [String]
},{timestamps: true,})

export default mongoose.model('Portfolio',PortfolioSchema)