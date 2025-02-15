import { Routes, Route } from "react-router-dom";
import Tab from "./Page/Tab";

function App() {
  return (
    <Routes>
      <Route path="/tab" element={<Tab />} />
    </Routes>
  );
}

export default App;
