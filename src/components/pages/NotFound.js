import React from "react";

export default function NotFound() {
  return (
    <div>
      <h1 className="display-4">
        {" "}
        <span className="text-danger">404</span> Page Not found
      </h1>
      <p className="lead"> Sorry, that page does not exits</p>
    </div>
  );
}
