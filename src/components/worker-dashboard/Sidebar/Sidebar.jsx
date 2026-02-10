import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-base-100 border-r min-h-[calc(100vh-4rem)]">
      {/* Menu */}
      <ul className="menu p-4 text-base-content">
        {/* Core */}
        <li className="menu-title">Core</li>
        <li>
          <Link href="/worker/dashboard">📊 Dashboard</Link>
        </li>
        <li>
          <Link href="/worker/dashboard/my-task">📝 My Tasks</Link>
        </li>
        <li>
          <Link href="/worker/dashboard/submited-task">📤 Submitted Tasks</Link>
        </li>
        <li>
          <Link href="/worker/dashboard/approved">✅ Task Approval</Link>
        </li>
        <li>
          <Link href="/worker/dashboard/earning">💰 Earning</Link>
        </li>

        <div className="divider"></div>

        {/* Account */}
        <li className="menu-title">Account</li>
        <li>
          <Link href="/worker/dashboard/profile">👤 Profile</Link>
        </li>
        <li>
          <Link href="/worker/dashboard/membership">⭐ Membership</Link>
        </li>
        <li>
          <Link href="/worker/dashboard/notifications">🔔 Notifications</Link>
        </li>
        <li>
          <Link href="/worker/dashboard/support">🆘 Support</Link>
        </li>

        <div className="divider"></div>

        {/* Finance */}
        <li className="menu-title">Finance</li>
        <li>
          <Link href="/worker/dashboard/withdraw">🏧 Withdraw</Link>
        </li>
        <li>
          <Link href="/worker/dashboard/withdraw-history">
            📜 Withdraw History
          </Link>
        </li>

        <div className="divider"></div>

        {/* System */}
        <li className="menu-title">System</li>
        <li>
          <Link href="/worker/dashboard/setting">⚙️ Settings</Link>
        </li>
      </ul>
    </aside>
  );
}
