import { Routes, Route } from "react-router-dom";
import TabPage from "./pages/TabPage";
import ModalPage from "./pages/ModalPage";
import PasswordChangePage from "./pages/PasswordChangePage";

function App() {
  return (
    <Routes>
      <Route path="/tab-page" element={<TabPage />} />
      <Route path="/modal-page" element={<ModalPage />} />
      <Route path="/password-change" element={<PasswordChangePage />} />
    </Routes>
  );
}

export default App;
