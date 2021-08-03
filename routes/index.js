var express = require('express');
var router = express.Router();


const userController = require('../controllers/userController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/users', userController.listUser);
router.get('/users/:id', userController.readUser);
router.post('/users/register', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id/delete', userController.deleteUser)

module.exports = router;
