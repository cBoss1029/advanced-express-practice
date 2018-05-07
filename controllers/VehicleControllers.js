let vehicles = require("../server/vehicles")


module.exports.list =  function list(request, response) {
return response.json(vehicles);
}
module.exports.show =  function show(request, response) {
return  response.json(vehicles.find(vehicle => vehicle._id == request.params.id));
}
module.exports.create =  function create(request, response) {
return response.json({});
}
module.exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
module.exports.remove =  function remove(request, response) {
return response.json({});
}