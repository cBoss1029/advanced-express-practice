let comments = require("../server/comments");



module.exports.list =  function list(request, response) {
return response.json(comments);
}
module.exports.show =  function show(request, response) {
    const id = request.params.id;
    return  response.json(comments.find(comment => comment._id == id));
}
module.exports.create =  function create(request, response) {
    let newComment = request.body;
    comments.push(newComment);
    response.json(newComment);
}
module.exports.update =  function update(request, response) {
 return response.json({theId: request.params.id});
}
module.exports.remove =  function remove(request, response) {
return response.json({});
}