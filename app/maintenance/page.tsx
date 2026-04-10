import { redirect } from "next/navigation";

const isMaintenanceMode = (process.env.NEXT_PUBLIC_IS_MAINTENANCE || "false").toLowerCase() === "true";

const Maintenance = () => {
  if (!isMaintenanceMode) {
    // Server-side redirect to home
    redirect("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0f1f] text-white px-6">
      <div className="text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold">🚧 Portfolio Under Maintenance</h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto">
          I'm currently updating my portfolio to make it better.
          Please check back soon.
        </p>
        <div className="text-xs text-gray-500">— Jenit Lal Shakya</div>
      </div>
    </main>
  );
};

export default Maintenance;
