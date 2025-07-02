import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow p-6 space-y-4">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Dashboard</h2>
        <NavLink
          to="/home"
          className="block py-2 px-3 rounded hover:bg-blue-100 text-gray-700 font-medium"
        >
          🏠 Home
        </NavLink>
        <NavLink
          to="/create"
          className="block py-2 px-3 rounded hover:bg-blue-100 text-gray-700 font-medium"
        >
          🍳 Add Recipe
        </NavLink>
        <NavLink
          to="/users"
          className="block py-2 px-3 rounded hover:bg-blue-100 text-gray-700 font-medium"
        >
          👥 Manage Users
        </NavLink>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-gray-100 shadow px-6 py-4">
          <h1 className="text-2xl font-bold">Recipe Admin</h1>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
