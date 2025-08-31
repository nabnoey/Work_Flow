import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex flex-col md:flex-row justify-between items-center bg-neutral text-neutral-content p-4">
      {/* Left side */}
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        {/* Example Logo SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
        </svg>
        <p>© {new Date().getFullYear()} โอ๋กระจู๋ | All rights reserved.</p>
      </div>

      {/* Right side */}
      <nav className="flex gap-4">
        {/* Facebook */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.891h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.891h-2.33V21.878C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </a>

        {/* Twitter */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.14 9.14 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.5 0c-2.5 0-4.5 2-4.5 4.5 0 .35.04.7.1 1.03A12.9 12.9 0 0 1 1.64.89 4.48 4.48 0 0 0 3.09 6.13a4.48 4.48 0 0 1-2.04-.56v.06c0 2.2 1.57 4.03 3.64 4.45a4.52 4.52 0 0 1-2.03.08 4.5 4.5 0 0 0 4.21 3.12A9.04 9.04 0 0 1 0 19.54a12.76 12.76 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.02-.58A9.18 9.18 0 0 0 23 3z" />
          </svg>
        </a>

        {/* YouTube */}
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C3.563 3.326 3 4.36 3 5.97v12.06c0 1.61.563 2.644 1.385 2.786 3.604.246 11.631.245 15.23 0C20.437 20.674 21 19.64 21 18.03V5.97c0-1.61-.563-2.644-1.385-2.786zM10 16V8l6 4-6 4z" />
          </svg>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
