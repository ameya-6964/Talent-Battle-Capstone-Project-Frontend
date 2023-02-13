//! Footer Components
import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter bgColor="dark" className="text-start text-white">
      <div
        className="text-start text-white p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy;&nbsp; Ameya Belvalkar {new Date().getFullYear()} &nbsp;&nbsp;
        <Link className="text-white" to="/">
          Shop City 🛍️
        </Link>
      </div>
    </MDBFooter>
  );
}
