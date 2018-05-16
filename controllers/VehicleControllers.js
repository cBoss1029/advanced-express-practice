let VehicleModel = require("../models/Vehicle")


module.exports.list =  function list(request, response) {
    VehicleModel.find({}).exec()
    .then(vehicles => {
        response.json(vehicles);
    })
}
module.exports.show =  function show(request, response) {
    const id = request.params.id;
    VehicleModel.findById(id).exec()
    .then(vehicle => {
        response.json(vehicle);
    })
}
module.exports.create =  function create(request, response) {
    let newVehicle = new VehicleModel(
        request.body
    );
    newVehicle.save()
    .then(savedVehicle => {
        response.json(savedVehicle);
    })
}
module.exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
module.exports.remove =  function remove(request, response) {
return response.json({});
}