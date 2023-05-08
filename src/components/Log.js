import React from "react";

const Log = ({ log, index }) => {
  const { mistakesWereMadeToday, captainName, title } = log;
  const statusSymbol = mistakesWereMadeToday ? "💥" : "   ";

  return (
    <tr className="Log">
      <td>{statusSymbol}</td>
      <td>{captainName}</td>
      <td>
        <a href={`/logs/${index}`}>{title}</a>
      </td>
    </tr>
  );
};

export default Log;
