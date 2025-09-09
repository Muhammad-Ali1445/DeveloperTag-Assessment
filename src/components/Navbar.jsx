import { Search, BellDot } from "lucide-react";

export default function Navbar() {
  return (
   <header className="h-16 bg-white shadow flex items-center justify-between px-6">
  <h1 className="text-lg font-semibold">Dashboard</h1>
  <div className="flex items-center space-x-4">

    {/* ----- Bell icon ---- */}
    <div className="p-2 border rounded-md hover:bg-gray-100 cursor-pointer">
      <BellDot className="w-5 h-5 text-gray-600" />
    </div>

    {/* ----- Search icon ----*/}
    <div className="p-2 border rounded-md hover:bg-gray-100 cursor-pointer">
      <Search className="w-5 h-5 text-gray-600" />
    </div>
  </div>
</header>

  );
}
