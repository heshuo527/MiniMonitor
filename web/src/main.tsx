import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";   // 引入 App.tsx

import "antd/dist/reset.css"; // Antd 5 推荐样式引入

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
