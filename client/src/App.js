import React from "react";
import LogIngestionForm from "./components/LogIngestionForm.jsx";
import QueryInterfaceForm from "./components/QueryInterfaceForm.jsx";
import LogDisplay from "./components/LogDisplay.jsx";

function App() {
  return (
    <div>
      <h1>Log Ingestor</h1>

      <LogIngestionForm />
      <h1>Query Interface</h1>
      <QueryInterfaceForm />
      <h1>All the logs</h1>
      <LogDisplay />
    </div>
  );
}

export default App;
