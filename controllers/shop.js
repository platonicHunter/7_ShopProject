const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Product',
      path: '/product-list',
      
    });
  });
};

exports.getIndex =(req,res,next) =>{
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
}


exports.getCart =(req,res,next) =>{
  Product.fetchAll(products => {
    res.render('shop/cart', {
      pageTitle: 'Cart',
      path: '/cart'
    });
  });
}


exports.getOrder =(req,res,next) =>{
  Product.fetchAll(products => {
    res.render('shop/order', {
      pageTitle: 'Order',
      path: '/order'
    });
  });
}



exports.getCheckOut =(req,res,next) =>{
  Product.fetchAll(products => {
    res.render('shop/checkout', {
      pageTitle: 'CheckOut',
      path: '/checkout'
    });
  });
}


