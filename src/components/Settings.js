import React from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'; // Assuming BrowserRouter is your top-level router component
const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <Routes>
        <Route path="account" element={<Settings />} />
        <Route path="security" element={<Settings />} />
        <Route index element={<Navigate to="account" />} />
      </Routes>
    </div>
  );
};

export default Settings;
