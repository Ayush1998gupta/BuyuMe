const Product = require('../../models/product');

// controller for updating quantity
module.exports.edit = async function (req, res) {
    const items = req.body.items;
    try {
     items.forEach(item => {
      const filter = { productId: item.productId };
      const update = item.operation === 'add' 
        ?  { quantity: item.quantity } 
        :  { quantity: -item.quantity } ;
      inventoryCollection.updateOne(filter, update);
    });
        return res.status(200).json({
            success: true,
            message : 'Qty updated successfully',
        });
    } catch (error) {
        return res.status(500).json({
            error : error.message,
            message : "Internal server Error"
        });
    }
}