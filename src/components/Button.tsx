interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2";

  const variants = {
    primary:
      "bg-cyan-500 text-slate-950 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50",
    secondary:
      "bg-slate-700 text-cyan-400 hover:bg-slate-600 hover:text-cyan-300",
    outline:
      "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
