import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;