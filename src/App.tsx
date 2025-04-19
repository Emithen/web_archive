import { Routes, Route } from "react-router-dom";
import TabPage from "./pages/TabPage";
import ModalPage from "./pages/ModalPage";
import AccordionPage from "./pages/AccordionPage";

function App() {
  return (
    <Routes>
      <Route path="/tab-page" element={<TabPage />} />
      <Route path="/modal-page" element={<ModalPage />} />
      <Route path="/accordion-page" element={<AccordionPage />} />
    </Routes>
  );
}

export default App;
