import React from "react";

const Summary = ({ data }) => {
  const totalClients = data.length;
  const totalOpportunityValue = data
    .filter((item) => item.status === "Active")
    .reduce((sum, item) => sum + item.opportunityValue, 0);

  return (

    <div className="summary border">
      <h5
        className="d-flex justify-content-center align-items-center text-danger"
        style={{
          textShadow: "2px 2px 5px rgba(164, 115, 115, 0.3)",
        }}
      >Summary</h5>
      <p className="text-success">Total Clients: {totalClients}</p>
      <p className="text-success">Total Opportunity Value: ${totalOpportunityValue}</p>
    </div>
  );
};

export default Summary;
