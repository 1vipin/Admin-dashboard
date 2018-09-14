const express = require('express');
const router = express.Router();
const {ObjectID} = require('mongodb');
const order = require('./../server/models/order.js');

router.get('/app/orders', (req, res) => {
    res.render('orders', {pageTitle: "Orders"});
});

// router.post('/app/orders', (req, res) => {
//     res.render('orders', {pageTitle: "Orders"});
// });

router.post('/app/orders', (req, res) => {
    var orders = order({
        ProductName:(req.body.ProductName),
        OrderId: (req.body.OrderId),
        Quantity: Quantity,
        Dispatchdate: Dispatchdate,
        DateOfdelivery: DateOfdelivery
    });

   orders.save().then((order) => {
       cosole.log(order);
        res.status(200).redirect('/app');
    })
    .catch((err) => {
        console.log(err);
        res.status(400).redirect('/app');
    });
});

router.get('/app/getorders', (req, res) => {
order.find({})
.then((orders) => {
    res.status(200).send(orders);
})
.catch((err) => {
    console.log(err);
    res.status(400).send();
});
});

router.put('/app/updateorder/:orderId', (req, res) => {
orderId = req.params.orderId;
order.findOneAndUpdate({
    order
}, {
    "$set": {
        "name": password,
        "price": price
     }
},{
    new: true
})
.then((order) => {
    res.redirect('/app/order/' + order);
})
.catch((err) => {
    console.log(err);
    res.redirect('/app/order/' + order);
});
});

router.delete('/order', (req, res) => {
    Order.remove({ order: req.params.order})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Order deleted'
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