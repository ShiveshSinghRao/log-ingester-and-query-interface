import Logs from "../modules/Logs.js";

export const createLog = async (req, res, next) => {
  console.log(req.body);
  const newLog = new Logs(req.body);
  try {
    const savedLog = await newLog.save();
    res.status(201).json(savedLog);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getLogs = async (req, res, next) => {
  try {
    const allLogs = await Logs.find(req.query);
    res.status(200).json(allLogs);
  } catch (err) {
    next(err);
  }
};
