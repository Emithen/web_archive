import { Routes, Route } from "react-router-dom";
import TabPage from "./pages/TabPage";
import ModalPage from "./pages/ModalPage";
import PasswordChange from "./components/Form/PasswordChange";

function App() {
  return (
    <Routes>
      <Route path="/tab-page" element={<TabPage />} />
      <Route path="/modal-page" element={<ModalPage />} />
      <Route path="/password-change" element={<PasswordChange />} />
    </Routes>
  );
}

export default App;
