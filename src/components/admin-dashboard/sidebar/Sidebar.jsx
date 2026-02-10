import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-base-100 border-r min-h-[calc(100vh-4rem)]">
      <ul className="menu p-4 text-base-content">
        {/* Core */}
        <li className="menu-title">Core</li>

        <li>
          <Link href="admin/dashboard">📊 Dashboard</Link>
        </li>

        <li>
          <Link href="/dashboard/analytics">📈 Analytics</Link>
        </li>

        <li>
          <Link href="/dashboard/employers">🧑‍💼 Employers</Link>
        </li>

        <li>
          <Link href="/dashboard/job-request">📥 Job Requests</Link>
        </li>

        <li>
          <Link href="/dashboard/jobs">💼 Jobs & Earnings</Link>
        </li>

        <div className="divider"></div>

        {/* Account */}
        <li className="menu-title">Account</li>

        <li>
          <Link href="/dashboard/payments">👤 Profile</Link>
        </li>

        <li>
          <Link href="/dashboard/reports">⭐ Membership</Link>
        </li>

        <li>
          <Link href="/dashboard/roles">🔔 Notifications</Link>
        </li>

        <div className="divider"></div>

        {/* Finance */}
        <li className="menu-title">Finance</li>

        <li>
          <Link href="/dashboard/users">💳 Withdraw</Link>
        </li>

        <li>
          <Link href="/dashboard/workers">📜 Withdraw History</Link>
        </li>

        <div className="divider"></div>

        {/* System */}
        <li className="menu-title">System</li>

        <li>
          <Link href="/dashboard/settings">⚙️ Settings</Link>
        </li>
      </ul>
    </aside>
  );
}
