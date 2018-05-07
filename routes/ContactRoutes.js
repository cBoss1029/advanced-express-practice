let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/ContactControllers');

router.get('/contacts', list); //Whole array
router.get('/contacts/:id', show); // Single item
router.post('/contacts', create);
router.put('/contacts/:id', update);
router.delete('/contacts/:id', remove);
module.exports =  router;