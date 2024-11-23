import React from "react";
import { Copy, Check } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Logo from "./Logo";
import { Button } from "./Button";
import DartToggle from "./darkToggle";

const Header = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    const email = "balagopinaath@yahoo.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <header className="w-full bg-background-light dark:bg-dark-light border-b border-primary-light/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center gap-6">
            <Logo client:load />
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                size="small"
                onClick={() => handleCopy()}
                icon={
                  copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )
                }
              >
                {copied ? "Copied!" : "Copy Email"}
              </Button>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-6">
            <nav>
              <ul className="flex items-center gap-4">
                <li>
                  <a
                    href="https://linkedin.com/in/balagopinaath"
                    target="_blank"
                    className="p-2 rounded-lg hover:bg-primary-light/20 dark:hover:bg-dark-light/20 transition-colors duration-300 text-text-primary dark:text-text-light"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/balagopinaath"
                    target="_blank"
                    className="p-2 rounded-lg hover:bg-primary-light/20 dark:hover:bg-dark-light/20 transition-colors duration-300 text-text-primary dark:text-text-light"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/balagopinaath/profilecard"
                    target="_blank"
                    className="p-2 rounded-lg hover:bg-primary-light/20 dark:hover:bg-dark-light/20 transition-colors duration-300 text-text-primary dark:text-text-light"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </nav>
            <DartToggle client:load />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
