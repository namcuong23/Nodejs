import { number } from "joi";
import mongoose from "mongoose";
 const productSchema = mongoose.Schema({
    name: {
        type: "String",
    },
    price: {
        type: "number",
    },
    disc: {
        type: "String",
    },
    status: {
        type: "Boolean",
    },
    quality: {
        type: "number",
    }


 })

 export default mongoose.model("nodejs", productSchema);