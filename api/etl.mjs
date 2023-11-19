import dotenv from "dotenv";
import mongoose from "mongoose";
import mysql from "mysql2/promise";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const LogSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  level: String,
  message: String,
  resourceId: String,
  timestamp: Date,
  traceId: String,
  spanId: String,
  commit: String,
  metadata: mongoose.Schema.Types.Mixed,
});

const Log = mongoose.model("Log", LogSchema);

const mysqlConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

(async () => {
  try {
    const logs = await Log.find({}).lean().exec();

    const transformedData = logs.map((item) => [
      item._id,
      item.level,
      item.message,
      item.resourceId,
      item.timestamp,
      item.traceId,
      item.spanId,
      item.commit,
      JSON.stringify(item.metadata),
    ]);

    const connection = await mysql.createConnection(mysqlConfig);

    const sql =
      "INSERT INTO logsTable (id, level, message, resourceId, timestamp, traceId, spanId, commit, metadata) VALUES ?";
    await connection.query(sql, [transformedData]);

    console.log("Data inserted into MySQL.");

    connection.end();
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
})();
