const User = require('../models/User');

// Controller function to update supervisor profile
const updateSupervisorProfile = async (req, res) => {
  const { fullName, regNo, email, phoneNo, designation, interestedArea, projectType, program, levelOfStudies } = req.body;

  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user profile details
    user.profile.fullName = fullName || user.profile.fullName;
    user.profile.regNo = regNo || user.profile.regNo;
    user.profile.email = email || user.profile.email;
    user.profile.phoneNo = phoneNo || user.profile.phoneNo;
    user.profile.designation = designation || user.profile.designation;
    user.profile.interestedArea = interestedArea || user.profile.interestedArea;
    user.profile.projectType = projectType || user.profile.projectType;
    user.profile.program = program || user.profile.program;
    user.profile.levelOfStudies = levelOfStudies || user.profile.levelOfStudies;

    await user.save();

    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { updateSupervisorProfile };
