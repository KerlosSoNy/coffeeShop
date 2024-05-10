import { Outlet } from "react-router-dom";
import SideNav from "../../components/sidenav/SideNav";

export default function Dashboard() {
  return (
    <div className="w-[100%] h-[100vh] flex flex-row justify-start gap-2">
      <SideNav/>
      <Outlet/>
    </div>
  )
}
