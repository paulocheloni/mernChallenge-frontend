import dbConnect from '../../../backend/utils/dbconnects';

const Job = require('../../models/schemas/job');

dbConnect();

export default async function (req, res) {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const allJobs = await Job.methods.getAll();
        res.status(200).json({ sucess: true, data: allJobs });
      } catch (error) {
        res.status(400).json({ sucess: false, message: 'something went wrong' });
      }
      break;
    case 'POST':
      try {
        const { jobName } = JSON.parse(req.body);
        console.warn(jobName, 'line 13 api');
        const postResponse = await Job.createJob(jobName);
        res.status(201).json({ sucess: true, data: postResponse });
      } catch (err) {
        res.status(400).json({ sucess: false, error: err.message });
        console.warn(err.message);
      }
      break;
    default:
      res.status(400).json({ sucess: false });
      break;
  }
}
