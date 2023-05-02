import React from "react";
import Breadcrumb from "./Breadcrumb";

function NotFound() {
  return (
    <div className="NotFound">
      <Breadcrumb currentPage="Not Found" />
      <h1>Not Found</h1>
    </div>
  );
}

export default NotFound;
