import React from "react";

const Summary = ({ data }) => {
  const totalClients = data.length;
  const totalOpportunityValue = data
    .filter((client) => client.status === "Active")
    .reduce((sum, client) => sum + client.opportunityValue, 0);

  return (
    <div className="mb-4">
      <h4>Summary</h4>
      <p>Total Clients: {totalClients}</p>
      <p>Total Opportunity Value (Active): ${totalOpportunityValue}</p>
    </div>
  );
};

export default Summary;