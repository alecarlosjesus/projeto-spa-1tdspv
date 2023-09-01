import Navbar from "./components/Navbar";
import { Outlet, useRoutes } from "react-router-dom";

export default function App() {
  


  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}
