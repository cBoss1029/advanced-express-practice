let ContactModel = require("../models/Contact")

module.exports.list =  function list(request, response) {
    ContactModel.find({}).exec()
    .then(contacts => {
        response.json(contacts);
    })
}
module.exports.show =  function show(request, response) {
    const id = request.params.id;
    ContactModel.findById(id).exec()
    .then(contact => {
        response.json(contact);
    })
}
module.exports.create =  function create(request, response) {
    let newContact = new ContactModel(
        request.body
    );
    newContact.save()
    .then(savedContact => {
        response.json(savedContact);
    })
}
module.exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
module.exports.remove =  function remove(request, response) {
return response.json({});
}
