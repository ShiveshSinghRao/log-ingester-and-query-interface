import React, { useState } from "react";
import axios from "../services/api.js";
import { useTable, DefaultColumnFilter } from "react-table";
import "../style/QueryInterfaceForm.css";

const QueryInterfaceForm = () => {
  const [queryParams, setQueryParams] = useState({
    level: "",
    message: "",
    resourceId: "",
    timestamp: "",
    traceId: "",
    spanId: "",
    commit: "",
    metadata: "",
  });

  const [logData, setLogData] = useState([]);
  const [showTable, setShowTable] = useState(false); // New state to control table visibility

  const handleInputChange = (event) => {
    setQueryParams({
      ...queryParams,
      [event.target.name]: event.target.value,
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      let rParams = "";
      // Construct query parameters based on filled fields
      for (const param in queryParams) {
        if (queryParams[param].length > 0) {
          if (param === "metadata") {
            rParams += `&metadata.parentResourceId=${queryParams[param]}`;
          } else {
            rParams += `&${param}=${queryParams[param]}`;
          }
        }
      }

      const response = await axios.get("?" + rParams);
      if (response.data.length > 0) {
        setLogData(response.data);
        setShowTable(true); // Show the table after fetching data
      } else {
        setLogData([]);
        alert("No such logs exits!!");
        setShowTable(false);
      }
    } catch (error) {
      throw error;
    }
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Level",
        accessor: "level",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Message",
        accessor: "message",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Resource ID",
        accessor: "resourceId",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Timestamp",
        accessor: "timestamp",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Trace ID",
        accessor: "traceId",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Span ID",
        accessor: "spanId",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Commit",
        accessor: "commit",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "metadata",
        accessor: "metadata.parentResourceId",
        Filter: DefaultColumnFilter,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: logData });

  return (
    <form
      onSubmit={(e) => {
        handleSearch(e);
      }}
    >
      <input
        name="level"
        value={queryParams.level}
        onChange={handleInputChange}
        placeholder="Level"
      />
      <input
        name="message"
        value={queryParams.message}
        onChange={handleInputChange}
        placeholder="Message"
      />
      <input
        name="resourceId"
        value={queryParams.resourceId}
        onChange={handleInputChange}
        placeholder="Resource ID"
      />
      <input
        name="timestamp"
        value={queryParams.timestamp}
        onChange={handleInputChange}
        placeholder="Timestamp"
      />
      <input
        name="traceId"
        value={queryParams.traceId}
        onChange={handleInputChange}
        placeholder="Trace ID"
      />
      <input
        name="spanId"
        value={queryParams.spanId}
        onChange={handleInputChange}
        placeholder="Span ID"
      />
      <input
        name="commit"
        value={queryParams.commit}
        onChange={handleInputChange}
        placeholder="Commit"
      />
      <input
        name="metadata"
        value={queryParams.metadata}
        onChange={handleInputChange}
        placeholder="Parent Resource ID"
      />
      <button type="submit">Search</button>
      {showTable && (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </form>
  );
};

export default QueryInterfaceForm;
