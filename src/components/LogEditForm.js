import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LogEditForm = () => {
  const { index } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: 0,
    mistakesWereMadeToday: false,
  });

  useEffect(() => {
    const fetchLog = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/logs/${index}`);
        setLog(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLog();
  }, [index]);

  const handleChange = (event) => {
    const { id, value, checked, type } = event.target;
    setLog({ ...log, [id]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/logs/${index}`, log);
      navigate(`/logs/${index}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleChange}
          required
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          onChange={handleChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea id="post" name="post" value={log.post} onChange={handleChange} />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleChange}
          checked={log.mistakesWereMadeToday}
        />
        <br />
        <input type="submit" />
      </form>
      <button>
        <Link to="/logs">Back</Link>
      </button>
    </div>
  );
};

export default LogEditForm;
