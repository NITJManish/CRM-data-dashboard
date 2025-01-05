// import React from "react";

// const CRMTable = ({ data }) => {
//   return (
//     <div className="table-responsive">
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Opportunity Value</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>${item.opportunityValue}</td>
//               <td>{item.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CRMTable;

import React, { useState } from "react";

const CRMTable = ({ data,onSort }) => {
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
    <div className="table-responsive overflow-auto" style={{ maxHeight: "240px" }}>
      <table className="table table-striped table-dark">
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
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>${item.opportunityValue}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CRMTable;
