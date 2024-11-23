export const Button = ({
  children,
  size = "medium",
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
  icon,
}) => {
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm min-w-[100px]",
    medium: "px-4 py-2 min-w-[120px]",
    large: "px-6 py-3 text-lg min-w-[140px]",
  };

  const variantClasses = {
    primary:
      "bg-primary-DEFAULT hover:bg-primary-dark text-text-light dark:bg-primary-light dark:hover:bg-primary-DEFAULT",
    secondary:
      "bg-background-dark hover:bg-background-light text-text-primary dark:bg-dark-light dark:hover:bg-dark-DEFAULT dark:text-text-light",
    accent:
      "bg-accent-DEFAULT hover:bg-accent-dark text-text-light dark:bg-accent-light dark:hover:bg-accent-DEFAULT",
    outline:
      "border-2 border-primary-DEFAULT text-primary-DEFAULT hover:bg-primary-DEFAULT hover:text-text-light dark:border-primary-light dark:text-primary-light dark:hover:bg-primary-light",
  };

  return (
    <button
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        rounded-lg font-body font-medium transition-all duration-300
        flex items-center justify-center gap-2
        group
      `}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {icon && (
        <span className="transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
      )}
      <span className="transition-all duration-300">{children}</span>
    </button>
  );
};
