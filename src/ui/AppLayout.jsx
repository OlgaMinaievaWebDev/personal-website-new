import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-textPrimary">
      <Header className="h-16" /> {/* Fixed header height */}
      <main className="flex-grow flex items-center justify-center pt-16">
        {" "}
        {/* Hero fills the remaining space */}
        <Outlet />
      </main>
      <Footer className="h-16" /> {/* Fixed footer height */}
    </div>
  );
}

export default AppLayout;
