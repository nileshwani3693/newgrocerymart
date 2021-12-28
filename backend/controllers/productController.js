
const Product= require("../models/productModel")
const ApiFeatures = require("../utils/apifeatures");


//create product-- Admin

exports.createProduct = async (req,res)=>{
   
    const product = await Product.create(req.body);
  

    res.status(201).json({
        success:true,
        product,
        
    }) 
}

//get all products 

exports.getAllProducts= async(req,res)=>{

    const ApiFeature= new ApiFeatures(Product.find(),req.query).search();
        const products = await ApiFeature.query;
        res.status(200).json({
            success:true,
            products,

        })
}

// Get Product details

exports.getProductDetails = async(req,res)=>{
  
    const product= await Product.findById(req.params.id);
  
  
    if(!product){
        return res.status(500).json({ 
            success: false,
            message:"Product not found"
        });
    }

    res.status(200).json({
        success:true,   
        product

    })

}



// Update product--admin

exports.updateProduct=async(req,res, next)=>{
    let product= await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success: false,
            message:"Product not found"
        });
    }

     product= await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product

    })

}

//Delete product

exports.deleteProduct = async(req,res,next)=>{

   const product= await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success: false,
            message:"Product not found"
        });
    }

    await product.remove();

    res.status(200).json({
        success:true,
        message: "Product is Deleted Successfully"

    })
}

