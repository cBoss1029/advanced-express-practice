let contacts = require("../server/contacts")

module.exports.list =  function list(request, response) {
return response.json(contacts);
}
module.exports.show =  function show(request, response) {
    const id = request.params.id;
    return  response.json(contacts.find(contact => contact._id == id));
}
module.exports.create =  function create(request, response) {
    let newContact = request.body;
    contacts.push(newContact);
    response.json(newContact);
}
module.exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
module.exports.remove =  function remove(request, response) {
return response.json({});
}
