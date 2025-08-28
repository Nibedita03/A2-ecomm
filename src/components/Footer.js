import React from "react";

export default function Footer() {
  return (
    <footer className="bg-light mt-4 py-3">
      <div className="container text-center small">
        © {new Date().getFullYear()} MyCommerce • Built with React & Bootstrap
      </div>
    </footer>
  );
}
