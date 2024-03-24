import  {Product} from "../models/productModel.js";

const getProducts = async(req ,res) => {

    
    try{
        const allproducts =await Product.find({})
       
        return (res.status(200).json(allproducts));
    }

    catch(error){
        return res.status(500).json(error.message)
    }

}
export {getProducts}