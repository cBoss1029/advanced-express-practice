let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/ContactController');
router.get('/path', list); //Whole array
router.get('/path/:id', show); // Single item
router.post('/path', create);
router.put('/path/:id', update);
router.delete('/path/:id', remove);
module.exports =  router;