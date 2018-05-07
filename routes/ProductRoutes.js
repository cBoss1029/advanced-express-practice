let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/ProductControllers');


router.get('/products', list); //Whole array
router.get('/products/:id', show); // Single item
router.post('/products', create);
router.put('/products/:id', update);
router.delete('/products/:id', remove);
module.exports =  router;