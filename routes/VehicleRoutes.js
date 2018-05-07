let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/VehicleControllers');


router.get('/vehicles', list); //Whole array
router.get('/vehicle/:id', show); // Single item
router.post('/vehicles', create);
router.put('/vehicle/:id', update);
router.delete('/vehicle/:id', remove);
module.exports =  router;

