let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/VehicleControllers');


router.get('/vehicles', list); //Whole array
router.get('/vehicles/:id', show); // Single item
router.post('/vehicles', create);
router.put('/vehicles/:id', update);
router.delete('/vehicles/:id', remove);
module.exports =  router;