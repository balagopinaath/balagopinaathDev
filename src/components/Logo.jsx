import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="h-10 w-10 rounded-lg bg-primary dark:bg-dark-dark flex items-center justify-center">
        <span className="text-white font-bold text-xl">BG</span>
      </div>

      <div className="flex flex-col items-start">
        <span className="font-semibold text-text-primary dark:text-text-light">
          Bala
        </span>
        <span className="text-sm text-text-secondary dark:text-text-muted">
          Gopinath
        </span>
      </div>
    </div>
  );
};

export default Logo;
