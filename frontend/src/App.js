import React, { useState, useEffect } from "react";
import Filters from "./components/Filters";
import Summary from "./components/Summary";
import DataTable from "./components/CRMTable";
import BarChart from "./components/BarChart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const App = () => {
  // Dummy data
  const dummyData = [
    { id: 1, name: "John Doe", email: "john@example.com", opportunityValue: 50000, status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", opportunityValue: 30000, status: "Inactive" },
    { id: 3, name: "Alice Brown", email: "alice@example.com", opportunityValue: 70000, status: "Active" },
    { id: 4, name: "Bob Johnson", email: "bob@example.com", opportunityValue: 20000, status: "Inactive" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", opportunityValue: 45000, status: "Active" },

  ];

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({ status: "All", min: 0, max: 100000 });

  useEffect(() => {
    // Set initial filtered data to dummy data
    setData(dummyData);
    setFilteredData(dummyData);
  }, []);

  const applyFilters = () => {
    const { status, min, max } = filters;
    const filtered = data.filter((item) => {
      const statusMatch = status === "All" || item.status === status;
      const valueMatch = item.opportunityValue >= min && item.opportunityValue <= max;
      return statusMatch && valueMatch;
    });
    setFilteredData(filtered);
  };
  const handleSort = (key, direction) => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setFilteredData(sortedData);
  };

  return (
    <>
      <div className="container">
        <h1
          className="d-flex justify-content-center align-items-center text-primary"
          style={{
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          CRM-Data Dashboard
        </h1>
        <div className="row">
          {/* Filters and Summary */}
          <div className="col-md-6 border">
            <Filters filters={filters} setFilters={setFilters} applyFilters={applyFilters} />
            <Summary className="border" data={filteredData} />
          </div>
          {/* Bar Chart */}
          <div className="col-md-6 border">
            <BarChart data={filteredData} />
          </div>
        </div>
        {/* Data Table */}
        <div className="row mt-4 border">
          <DataTable data={filteredData} onSort={handleSort} />
        </div>
      </div>
    </>
  );
};

export default App;










// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Filters from "./components/Filters";
// import Summary from "./components/Summary";
// import DataTable from "./components/BarChart";
// import BarChart from "./components/BarChart";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [filters, setFilters] = useState({ status: "All", min: 0, max: 100000 });

//   useEffect(() => {
//     // Fetch data from backend
//     axios
//       .get("http://localhost:3001/crmData")
//       .then((response) => {
//         setData(response.data);
//         setFilteredData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const applyFilters = () => {
//     const { status, min, max } = filters;
//     const filtered = data.filter((item) => {
//       const statusMatch = status === "All" || item.status === status;
//       const valueMatch = item.opportunityValue >= min && item.opportunityValue <= max;
//       return statusMatch && valueMatch;
//     });
//     setFilteredData(filtered);
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {/* Filters and Summary */}
//         <div className="col-md-4">
//           <Filters filters={filters} setFilters={setFilters} applyFilters={applyFilters} />
//           <Summary data={filteredData} />
//         </div>
//         {/* Bar Chart */}
//         <div className="col-md-8">
//           <BarChart data={filteredData} />
//         </div>
//       </div>
//       {/* Data Table */}
//       <div className="row mt-4">
//         <DataTable data={filteredData} />
//       </div>
//     </div>
//   );
// };

// export default App;