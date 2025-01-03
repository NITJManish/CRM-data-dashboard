// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import CRMTable from "./components/CRMTable";
// import Filters from "./components/Filters";
// import Summary from "./components/Summary";
// import BarChart from "./components/BarChart";
// import axios from "axios";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("/crm-data")
//       .then((response) => {
//         setData(response.data);
//         setFilteredData(response.data);
//       })
//       .catch((err) => {
//         setError("Failed to fetch CRM data.");
//       });
//   }, []);

//   const handleFilter = (filters) => {
//     let filtered = data;

//     if (filters.status !== "All") {
//       filtered = filtered.filter((client) => client.status === filters.status);
//     }

//     if (filters.minValue !== null && filters.maxValue !== null) {
//       filtered = filtered.filter(
//         (client) =>
//           client.opportunityValue >= filters.minValue &&
//           client.opportunityValue <= filters.maxValue
//       );
//     }

//     setFilteredData(filtered);
//   };

//   const handleSort = (key, direction) => {
//     const sortedData = [...filteredData].sort((a, b) => {
//       if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
//       if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
//       return 0;
//     });
//     setFilteredData(sortedData);
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center">CRM Dashboard</h1>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <Filters onFilter={handleFilter} />
//       <Summary data={filteredData} />
//       <BarChart data={data} />
//       <CRMTable data={filteredData} onSort={handleSort} />
//     </div>
//   );
// };

// export default App;

// src/App.js
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CRMTable from "./components/CRMTable";
import Filters from "./components/Filters";
import Summary from "./components/Summary";
import BarChart from "./components/BarChart";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);

  // Dummy data for CRM
  const dummyData = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      opportunityValue: 5000,
      status: "Active",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      opportunityValue: 12000,
      status: "Inactive",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      opportunityValue: 8000,
      status: "Active",
    },
    {
      id: 4,
      name: "Diana Prince",
      email: "diana.prince@example.com",
      opportunityValue: 3000,
      status: "Inactive",
    },
    {
      id: 5,
      name: "Ethan Hunt",
      email: "ethan.hunt@example.com",
      opportunityValue: 15000,
      status: "Active",
    },
  ];

  useEffect(() => {
    try {
      // Simulating an API call with dummy data
      setData(dummyData);
      setFilteredData(dummyData);
    } catch (err) {
      setError("Failed to load CRM data.");
    }
  }, []);

  const handleFilter = (filters) => {
    let filtered = data;

    if (filters.status !== "All") {
      filtered = filtered.filter((client) => client.status === filters.status);
    }

    if (filters.minValue !== null && filters.maxValue !== null) {
      filtered = filtered.filter(
        (client) =>
          client.opportunityValue >= filters.minValue &&
          client.opportunityValue <= filters.maxValue
      );
    }

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
    <div className="container mt-4">
      <h1 className="text-center">CRM Dashboard</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <Filters onFilter={handleFilter} />
      <Summary data={filteredData} />
      <BarChart data={data} />
      <CRMTable data={filteredData} onSort={handleSort} />
    </div>
  );
};

export default App;
