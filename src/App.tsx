import { useEffect } from "react";
import CVTemplate from "./CVTemplate";
import documentSettings from "./documentSettings";
import data from "./data.json";

const App = () => {
  useEffect(() => {
    document.title = `${data.documentName}.pdf`;
  }, []);
  return (
    <div
      id="printableArea"
      className="mx-auto"
      style={{ width: documentSettings.width }}
    >
      <CVTemplate />
    </div>
  );
};

export default App;
