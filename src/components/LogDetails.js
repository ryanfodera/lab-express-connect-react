import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./LogDetails.css"
import axios from "axios";

function LogDetails() {
  const [log, setLog] = useState([]);
    let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/logs/${index}`)
      .then((response) => {
        console.log(response);
        setLog(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/logs/${index}`)
      .then(() => {
        navigate("/logs");
      });
  };

  return (
    <div className="logDeatails">
    <article>
          <h2>{log.title} - By {log.captainName}</h2> 
      <p>{log.post}</p>
      <p><strong>Days since last crisis:</strong> {log.daysSinceLastCrisis}</p>
      </article>
      <div className="showNavigation">
        <div>
          <button>
          <Link to={`/logs`}>
            Back
          </Link>
          </button>
        </div>
        <div>
        <button>
            <Link to={`/logs/${index}/edit`}>
            Edit
          </Link>
          </button>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      </div>

  );
}

export default LogDetails;