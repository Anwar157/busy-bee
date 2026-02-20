"use client";

import Link from "next/link";
import {
  FaTachometerAlt,
  FaChartLine,
  FaUsers,
  FaUserTie,
  FaBriefcase,
  FaMoneyBillWave,
  FaFileAlt,
  FaUserShield,
  FaCog,
  FaHeadset,
  FaBell,
  FaList,
  FaCheckCircle,
  FaPercentage,
  FaHistory,
  FaShieldAlt,
  FaRedo,
  FaServer,
} from "react-icons/fa";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-base-100 border-r min-h-screen">
      <ul className="menu p-4 text-base-content space-y-1">
        {/* ================= Overview ================= */}
        <li className="menu-title">Overview</li>

        <li>
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/analytics"
            className="flex items-center gap-2">
            <FaChartLine /> Analytics
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/reports"
            className="flex items-center gap-2">
            <FaFileAlt /> Reports
          </Link>
        </li>

        <div className="divider my-2"></div>

        {/* ================= User Management ================= */}
        <li className="menu-title">User Management</li>

        <li>
          <Link
            href="/admin/dashboard/user"
            className="flex items-center gap-2">
            <FaUsers /> All Users
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/workers"
            className="flex items-center gap-2">
            <FaUserTie /> Workers
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/employers"
            className="flex items-center gap-2">
            <FaUserShield /> Employers
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/role"
            className="flex items-center gap-2">
            <FaUserShield /> Role Management
          </Link>
        </li>

        <div className="divider my-2"></div>

        {/* ================= Task Management ================= */}
        <li className="menu-title">Task Management</li>

        <li>
          <Link
            href="/admin/dashboard/jobs"
            className="flex items-center gap-2">
            <FaBriefcase /> All Tasks
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/job-request"
            className="flex items-center gap-2">
            <FaFileAlt /> Task Requests
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/task-categories"
            className="flex items-center gap-2">
            <FaList /> Task Categories
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/task-approval"
            className="flex items-center gap-2">
            <FaCheckCircle /> Approval Queue
          </Link>
        </li>

        <div className="divider my-2"></div>

        {/* ================= Finance ================= */}
        <li className="menu-title">Finance</li>

        <li>
          <Link
            href="/admin/dashboard/payments"
            className="flex items-center gap-2">
            <FaMoneyBillWave /> Payments
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/withdraw-requests"
            className="flex items-center gap-2">
            <FaMoneyBillWave /> Withdraw Requests
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/earnings"
            className="flex items-center gap-2">
            <FaMoneyBillWave /> Platform Earnings
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/refunds"
            className="flex items-center gap-2">
            <FaRedo /> Refund Management
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/commission-settings"
            className="flex items-center gap-2">
            <FaPercentage /> Commission Settings
          </Link>
        </li>

        <div className="divider my-2"></div>

        {/* ================= Support ================= */}
        <li className="menu-title">Support</li>

        <li>
          <Link
            href="/admin/dashboard/support"
            className="flex items-center gap-2">
            <FaHeadset /> Support Tickets
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/notifications"
            className="flex items-center gap-2">
            <FaBell /> Notifications
          </Link>
        </li>

        <div className="divider my-2"></div>

        {/* ================= Security & Logs ================= */}
        <li className="menu-title">Security</li>

        <li>
          <Link
            href="/admin/dashboard/activity-logs"
            className="flex items-center gap-2">
            <FaHistory /> Activity Logs
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/login-logs"
            className="flex items-center gap-2">
            <FaShieldAlt /> Login Logs
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/ip-monitor"
            className="flex items-center gap-2">
            <FaShieldAlt /> IP Monitoring
          </Link>
        </li>

        <div className="divider my-2"></div>

        {/* ================= System ================= */}
        <li className="menu-title">System</li>

        <li>
          <Link
            href="/admin/dashboard/setting"
            className="flex items-center gap-2">
            <FaCog /> General Settings
          </Link>
        </li>

        <li>
          <Link
            href="/admin/dashboard/system-monitor"
            className="flex items-center gap-2">
            <FaServer /> System Monitor
          </Link>
        </li>
      </ul>
    </aside>
  );
}
