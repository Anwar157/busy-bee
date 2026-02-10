import Sidebar from "@/components/worker-dashboard/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
