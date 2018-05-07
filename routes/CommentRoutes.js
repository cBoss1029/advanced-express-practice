let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/CommentControllers');


router.get('/comments', list); //Whole array
router.get('/comment/:id', show); // Single item
router.post('/comments', create);
router.put('/comment/:id', update);
router.delete('/comment/:id', remove);
module.exports =  router;