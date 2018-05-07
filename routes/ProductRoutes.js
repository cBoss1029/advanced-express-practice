let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/ProductControllers');


router.get('/products', list); //Whole array
router.get('/product/:id', show); // Single item
router.post('/products', create);
router.put('/product/:id', update);
router.delete('/product/:id', remove);
module.exports =  router;