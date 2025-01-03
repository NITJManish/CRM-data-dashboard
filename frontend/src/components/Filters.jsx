import React, { useState } from "react";

const Filters = ({ onFilter }) => {
  const [status, setStatus] = useState("All");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100000);

  const handleFilterChange = () => {
    onFilter({ status, minValue, maxValue });
  };

  return (
    <div className="d-flex justify-content-between mb-4">
      <div>
        <label>Status:</label>
        <select
          className="form-control"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
      <div>
        <label>Opportunity Value Range:</label>
        <input
          type="number"
          className="form-control"
          placeholder="Min"
          value={minValue}
          onChange={(e) => setMinValue(Number(e.target.value))}
        />
        <input
          type="number"
          className="form-control mt-2"
          placeholder="Max"
          value={maxValue}
          onChange={(e) => setMaxValue(Number(e.target.value))}
        />
      </div>
      <button className="btn btn-primary" onClick={handleFilterChange}>
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;




