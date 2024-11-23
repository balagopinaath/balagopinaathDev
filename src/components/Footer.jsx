import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/balagopinaath"
    },
    {
      name: "GitHub",
      url: "https://github.com/balagopinaath"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/balagopinaath/profilecard"
    }
  ];

  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright section */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>

          {/* Social links */}
          <nav>
            <ul className="flex flex-wrap items-center gap-2 text-sm">
              {socialLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <li>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300"
                      aria-label={link.name}
                    >
                      {link.name}
                    </a>
                  </li>
                  {index < socialLinks.length - 1 && (
                    <span className="text-gray-300 dark:text-gray-700">/</span>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
