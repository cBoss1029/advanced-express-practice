let CommentModel = require("../models/Comment");



module.exports.list =  function list(request, response) {
    CommentModel.find({}).exec()
    .then(comments => {
        response.json(comments);
    })
}
module.exports.show =  function show(request, response) {
    const id = request.params.id;
    CommentModel.findById(id).exec()
    .then(comment => {
        response.json(comment);
    })
}
module.exports.create =  function create(request, response) {
    let newComment = new CommentModel(
        request.body
    );
    newComment.save()
    .then(savedComment => {
        response.json(savedComment);
    })
}
module.exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
module.exports.remove =  function remove(request, response) {
return response.json({});
}