import React, { useState } from "react";
import { Table } from "react-bootstrap";

const CRMTable = ({ data, onSort }) => {
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    onSort(key, direction);
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr style={{ cursor: "pointer" }}>
          <th onClick={() => handleSort("id")}>ID</th>
          <th onClick={() => handleSort("name")}>Name</th>
          <th>Email</th>
          <th onClick={() => handleSort("opportunityValue")}>Opportunity Value</th>
          <th onClick={() => handleSort("status")}>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((client) => (
          <tr key={client.id}>
            <td>{client.id}</td>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>${client.opportunityValue}</td>
            <td>{client.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CRMTable;
