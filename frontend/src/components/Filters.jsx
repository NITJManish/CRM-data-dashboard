import React from "react";

const Filters = ({ filters, setFilters, applyFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filters border">
      <h5
        className="d-flex justify-content-center align-items-center text-danger"
        style={{
          textShadow: "2px 2px 5px rgba(148, 76, 76, 0.3)",
        }}
      >Filters</h5>
      <div className="form-group">
        <label className="text-warning">Status</label>
        <select
          name="status"
          className="form-control"
          value={filters.status}
          onChange={handleInputChange}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="form-group">
        <label className="text-warning">Opportunity Value</label>
        <input
          type="number"
          name="min"
          className="form-control"
          placeholder="Min"
          value={filters.min}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="max"
          className="form-control mt-2"
          placeholder="Max"
          value={filters.max}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary mt-3" onClick={applyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
