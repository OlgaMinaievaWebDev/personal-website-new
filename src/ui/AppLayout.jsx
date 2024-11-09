import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow p-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
