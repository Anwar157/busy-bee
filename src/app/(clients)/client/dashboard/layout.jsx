import ClientSidebar from "@/components/clients-dashboard/sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <ClientSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
