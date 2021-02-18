const User = require('../models/schemas/user');

const isValidAge = (age) => {
  if (age < 18) return { valid: false };
  return { valid: true };
};

async function userService() {
  const userData = await User.methods.getUser('josue');
  return isValidAge(userData.age);
}

module.exports = userService;
