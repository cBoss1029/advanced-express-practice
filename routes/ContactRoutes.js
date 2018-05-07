let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/ContactControllers');

router.get('/contacts', list); //Whole array
router.get('/contact/:id', show); // Single item
router.post('/contacts', create);
router.put('/contact/:id', update);
router.delete('/contact/:id', remove);
module.exports =  router;