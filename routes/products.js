const express = require('express');
const router = express.Router();
const {ObjectID} = require('mongodb');
const product = require('./../server/models/product.js');

router.get('/app/products', (req, res) => {
    res.render('products', {pageTitle: "Products"});
});

// router.post('/app/products', (req, res) => {
//     res.render('products', {pageTitle: "Products"});
// }); 

router.post('/app/products', (req, res) => {
        var products = Product({
            Name: (req.body.Name),
            Price: (req.body.lastName),
            Size: size,
            DateOfmanufactured:  DateOfmanufactured,
            DateOfexpired:  DateOfexpired
        });

       products.save().then((product) => {
            res.status(200).redirect('/app');
        })
        .catch((err) => {
            console.log(err);
            res.status(400).redirect('/app');
        });
   });

router.get('/app/getproducts', (req, res) => {
   product.find({}).then((products) => {
        res.status(200).send(products);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send();
    });
});

router.put('/app/updateproduct/:productId', (req, res) => {
    productId = req.params.productId;
   product.findOneAndUpdate({
        product
    }, {
        "$set": {
            "name": password,
            "price": price
         }
    },{
        new: true
    })
    .then((product) => {
        res.redirect('/app/product/' + product);
    })
    .catch((err) => {
        console.log(err);
        res.redirect('/app/product/' + product);
    });
});

router.delete('/product', (req, res) => {
    Product.remove({ product: req.params.product})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Product deleted'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;