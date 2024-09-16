import React from "react";
import Headers from "./Headers";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Headers />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
