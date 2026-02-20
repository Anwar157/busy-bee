import Link from "next/link";

export default function ClientSidebar() {
  return (
    <aside className="w-64 bg-base-100 border-r min-h-screen">
      <ul className="menu p-4 text-base-content space-y-1">
        {/* Overview */}
        <li className="menu-title">Overview</li>

        <li>
          <Link href="/client/dashboard">📊 Dashboard</Link>
        </li>

        <li>
          <Link href="/client/dashboard/analytics">📈 Analytics</Link>
        </li>

        <div className="divider my-2"></div>

        {/* Job Management */}
        <li className="menu-title">Job Management</li>

        <li>
          <Link href="/client/dashboard/job-post">📝 Post Job</Link>
        </li>

        <li>
          <Link href="/client/dashboard/my-jobs">💼 My Jobs</Link>
        </li>

        <li>
          <Link href="/client/dashboard/applicants">📂 Applications</Link>
        </li>

        <li>
          <Link href="/client/dashboard/contracts">📜 Contracts</Link>
        </li>

        <div className="divider my-2"></div>

        {/* Communication */}
        <li className="menu-title">Communication</li>

        <li>
          <Link href="/client/dashboard/messages">📥 Messages</Link>
        </li>

        <li>
          <Link href="/client/dashboard/notifications">🔔 Notifications</Link>
        </li>

        <div className="divider my-2"></div>

        {/* Finance */}
        <li className="menu-title">Finance</li>

        <li>
          <Link href="/client/dashboard/billing">💳 Billing</Link>
        </li>

        <li>
          <Link href="/client/dashboard/membership">⭐ Membership</Link>
        </li>
        <li>
          <Link href="/client/dashboard/payment">🧾 Payment</Link>
        </li>

        <li>
          <Link href="/client/dashboard/payment-history">
            🧾 Payment History
          </Link>
        </li>

        <div className="divider my-2"></div>

        {/* Account */}
        <li className="menu-title">Account</li>

        <li>
          <Link href="/client/dashboard/profile">👤 Profile</Link>
        </li>

        <li>
          <Link href="/client/dashboard/setting">⚙️ Settings</Link>
        </li>
      </ul>
    </aside>
  );
}
