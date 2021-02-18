import dbConnect from '../../../backend/utils/dbconnects';

const User = require('../../models/schemas/user');

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      break;
    case 'POST':
      try {
        const { text } = JSON.parse(req.body);
        console.warn(text);
        const postResponse = await User.methods.CreateUser(text);
        res.status(201).json({ sucess: true, data: postResponse });
      } catch (err) {
        res.status(400).json({ sucess: false, err });
        console.warn(err.message);
      }
      break;
    default:
      res.status(400).json({ sucess: false });
      break;
  }
};
