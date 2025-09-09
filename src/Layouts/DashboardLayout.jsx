import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 ml-64 min-h-screen bg-gray-100">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>

      {/* Right Sidebar*/}
      <RightSidebar />
    </div>
  );
}
