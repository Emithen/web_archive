import { Routes, Route } from "react-router-dom";
import TabPage from "./pages/TabPage";
import ModalPage from "./pages/ModalPage";
import AccordionPage from "./pages/AccordionPage";
import ToastPage from "./pages/ToastPage";

function App() {
  return (
    <Routes>
      <Route path="/tab-page" element={<TabPage />} />
      <Route path="/modal-page" element={<ModalPage />} />
      <Route path="/accordion-page" element={<AccordionPage />} />
      <Route path="/toast-page" element={<ToastPage />} />
    </Routes>
  );
}

export default App;
