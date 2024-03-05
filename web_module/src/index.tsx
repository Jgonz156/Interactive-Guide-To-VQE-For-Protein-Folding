import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./modules/HomePage.tsx"
import Overview from "./modules/Overview.tsx"
//import Lobby from "./pages/Lobby.tsx"

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/overview", element: <Overview /> },
  //{ path: "/lobby", element: <Lobby /> },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
