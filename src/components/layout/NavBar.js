import React from "react";
import { Link as Direct } from "react-router-dom";
import MenuBarRedirect from "./MenuBarRedirect";
import MenuBarScroll from "./MenuBarScroll";
function NavBar() {
  return (
    <div className="flex items-center justify-between " id="home">
      <>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
            <Direct to={"/"}>
              <img alt="" src="/svg/Logo.svg"></img>
            </Direct>
          </div>
        </div>
        {document.location.href.search("/case-study/") > -1 ? (
          <MenuBarRedirect />
        ) : (
          <MenuBarScroll />
        )}
      </>
    </div>
  );
}

export default NavBar;
