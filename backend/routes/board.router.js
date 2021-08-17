const express = require('express');
const router  = express.Router();
// controller
const { saveTask } = require('../controllers/board.controller');
// Middleware
const auth = require('../middleware/auth');
const validateUser = require('../middleware/validateUser');

console.log('\x1b[33m%s\x1b[0m', 'Registring board routing /api/board');

console.log('[POST] MW /save/task ');
router.post('/save/task', auth, validateUser, saveTask);

module.exports = router;
