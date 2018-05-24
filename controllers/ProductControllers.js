let ProductModel = require("../models/Product")


module.exports.list =  function list(request, response) {
    ProductModel.find({}).exec()
    .then(products => {
        response.json(products);
    })
}
module.exports.show =  function show(request, response) {
    const id = request.params.id;
    ProductModel.findById(id).exec()
    .then(product => {
        response.json(product);
    })
}
module.exports.create =  function create(request, response) {
    let newProduct = new ProductModel(
        request.body
    );
    newProduct.save()
    .then(savedProduct => {
        response.json(savedProduct);
    })
}
module.exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
module.exports.remove =  function remove(request, response) {
return response.json({});
}