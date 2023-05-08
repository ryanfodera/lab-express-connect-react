import { useState, useEffect } from "react";
import "./Logs.css";
import axios from "axios";
import Log from "./Log";

const Logs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/logs`);
        setLogs(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Mistakes</th>
            <th>Captain Name</th>
            <th>See this log</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <Log key={index} log={log} index={index} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Logs;
