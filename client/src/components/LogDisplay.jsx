import React, { useState, useEffect } from "react";
import axios from "../services/api.js";
import "../style/LogDisplay.css";
const LogDisplay = () => {
  const [logs, setLogs] = useState([]);
  const [showLogs, setShowLogs] = useState(false);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get("/");
        // Set logs state with received data
        setLogs(response.data);
      } catch (error) {
        // Handle error
        console.log(error);
        throw error;
      }
    };
    fetchLogs();
  }, []);

  const handleClick = () => {
    setShowLogs(!showLogs);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {showLogs ? "Hide Logs" : "Show Logs"}
      </button>
      {showLogs && (
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Message</th>

              <th>Resource ID</th>
              <th>Timestamp</th>
              <th>Trace ID</th>
              <th>Span ID</th>
              <th>Commit</th>
              <th>Parent Resource ID</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log.level}</td>
                <td>{log.message}</td>

                <td>{log.resourceId}</td>
                <td>{log.timestamp}</td>
                <td>{log.traceId}</td>
                <td>{log.spanId}</td>
                <td>{log.commit}</td>
                <td>{log.metadata.parentResourceId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LogDisplay;
