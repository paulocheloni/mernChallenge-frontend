function getUserMethods() {
  const methods = {};
  methods.getAll = function getAll() {
    this.model('User').find({});
  };

  methods.getUser = function getUser(userName) {
    this.model('User').find({ userName }, { _id: 0, userName: 1 });
  };

  methods.CreateUser = function CreateUser(userName) {
    this.model('User').create({ userName });
  };

  return methods;
}

module.exports = getUserMethods;
