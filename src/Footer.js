import React from "react";

const Footer = ({ color }) => {
  const backgroundColor = color || "#343a40";

  return (
    <footer
      style={{ backgroundColor, color: "white", padding: "1rem 0" }}
      className="mt-3"
    >
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
