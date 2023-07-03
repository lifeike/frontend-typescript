import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

//clear chrome dev console on every source code change or HMR
if (import.meta.hot) import.meta.hot.on("vite:beforeUpdate", () => console.clear())
console.log(import.meta.env.MODE)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
