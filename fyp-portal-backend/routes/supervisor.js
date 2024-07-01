const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { 
  getAllSupervisors, 
  getSupervisorById, 
  updateSupervisorProfile, 
  createSupervisor, 
  deleteSupervisor, 
  getProfile, 
  updateProfile 
} = require('../Controllers/supervisorController');

// Routes for supervisor's own profile
router.get('/profile', protect, authorize('supervisor'), getProfile);
router.put('/profile', protect, authorize('supervisor'), updateProfile);

// CRUD routes for supervisors managed by admin
router.get('/', protect, authorize('admin'), getAllSupervisors);
router.get('/supervisors/:id', protect, authorize('admin'), getSupervisorById);
router.post('/supervisors', protect, authorize('admin'), createSupervisor);
router.put('/supervisors/:id', protect, authorize('admin'), updateSupervisorProfile);
router.delete('/supervisors/:id', protect, authorize('admin'), deleteSupervisor);

module.exports = router;
