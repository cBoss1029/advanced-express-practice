let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/CommentControllers');


router.get('/comments', list); //Whole array
router.get('/comments/:id', show); // Single item
router.post('/comments', create);
router.put('/comments/:id', update);
router.delete('/comments/:id', remove);
module.exports =  router;