import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./modules/HomePage.tsx"
import Overview from "./modules/Overview.tsx"
import QuantumCircuitry from "./modules/QuantumCircuitry.tsx"
import VariationalMethods from "./modules/VariationalMethods.tsx"
import AllTogether from "./modules/AllTogether.tsx"
import FoldingProblem from "./modules/FoldingProblem.tsx"

const router = createBrowserRouter([
  { path: "/all-together", element: <AllTogether /> },
  { path: "/folding-problem", element: <FoldingProblem /> },
  { path: "/", element: <HomePage /> },
  { path: "/overview", element: <Overview /> },
  { path: "/quantum-circuitry", element: <QuantumCircuitry /> },
  { path: "/variational-methods", element: <VariationalMethods /> },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
