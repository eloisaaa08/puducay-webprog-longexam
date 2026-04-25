import { Link } from 'react-router-dom';

const variantClasses = {
  // Deep Sapphire with a "Shimmer" effect
  primary: `
    relative overflow-hidden
    bg-gradient-to-br from-[#1e3a8a] via-[#172554] to-[#1e3a8a]
    text-[#facc15] border-[#fbbf24]/30
    shadow-[0_4px_15px_rgba(0,0,0,0.3)]
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700
    hover:shadow-[#fbbf24]/20 hover:border-[#fbbf24]/60
  `,
  
  // Liquid Gold with Navy text
  secondary: `
    bg-gradient-to-b from-[#fde68a] via-[#fbbf24] to-[#d97706]
    text-[#1e3a8a] border-[#b45309]/20
    shadow-[0_4px_10px_rgba(180,83,9,0.2)]
    hover:from-[#fef3c7] hover:via-[#fbbf24] hover:to-[#f59e0b]
    hover:shadow-[0_6px_20px_rgba(180,83,9,0.3)]
  `
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'primary',
  className = '',
}) => {
  const baseClasses = [
    'inline-flex items-center justify-center',
    'rounded-full border px-8 py-3.5', // Rounded pills are more modern
    'text-[11px] font-bold uppercase tracking-[0.25em]',
    'transition-all duration-500 ease-out',
    'hover:-translate-y-0.5 active:translate-y-0 active:scale-95',
    variantClasses[variant] ?? variantClasses.primary,
    className,
  ].join(' ').trim();

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClasses}>
      {content}
    </button>
  );
};

export default Button;