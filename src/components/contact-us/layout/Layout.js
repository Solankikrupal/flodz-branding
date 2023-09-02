import NavBar from "../../layout/NavBar";
import Footer from "../../layout/Footer";

function Layout({ children }) {
  return (
    <>
      <div className="pt-5 md:pt-10 px-5 md:px-10">
        <NavBar />
      </div>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
