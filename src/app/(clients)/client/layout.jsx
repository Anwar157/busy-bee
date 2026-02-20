import Topbar from "@/components/topnav/Topbar";

export default function WorkerLayout({ children }) {
  return (
    <>
      <div className="w-full">
        <Topbar />
      </div>
      {children}
    </>
  );
}
