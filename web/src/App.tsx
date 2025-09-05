import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/Layout";
import Home from "./pages/Home";
import MonitorDashboard from "./pages/MonitorDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="monitor-dashboard" element={<MonitorDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
