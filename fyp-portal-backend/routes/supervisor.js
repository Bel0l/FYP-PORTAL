const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { updateSupervisorProfile } = require('../controllers/supervisorController');

router.post('/profile', protect, authorize('supervisor'), updateSupervisorProfile);
router.get('/profile', protect,updateSupervisorProfile);
module.exports = router;
