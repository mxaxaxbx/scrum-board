const express = require('express');
const router  = express.Router();

const roleController = require('../controllers/role.controller');

console.log('\x1b[33m%s\x1b[0m', 'Registring roles routing /api/roles');

console.log('[POST] /register ');
router.post('/register', roleController.register);

console.log('[GET] /list ');
router.get('/list/', roleController.list);

module.exports = router;
