import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

/** * CLASSY GOLD-ON-BLUE LOGIC:
 * Default: Yellow text on Blue background.
 * Hover/Active: Full Yellow background with Blue text.
 * No rounding, extreme tracking for a "Classic" feel.
 */
const navLinkClassName = ({ isActive }) =>
  [
    'h-full flex items-center px-10 text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-300 rounded-none',
    isActive 
      ? 'bg-[#fbbf24] text-[#172554]' // Active: Yellow Box, Blue Text
      : 'text-[#fbbf24] hover:bg-[#fbbf24] hover:text-[#172554]', // Default: Yellow Text -> Hover: Yellow Box, Blue Text
  ].join(' ');

const NavBar = () => {
  return (
    // Background using your preferred deep blue-950
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-[#172554] border-b border-[#fbbf24]/20 shadow-xl">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12 h-20">
        
        {/* BRAND SECTION */}
        <NavLink to="/" className="flex items-center gap-5">
          <img 
            src={logo} 
            alt="BulldogEx" 
            className="h-10 w-10 object-contain p-1 border border-[#fbbf24]/30 bg-white" 
          />
          <div className="flex flex-col border-l border-white/10 pl-5">
            <span className="text-2xl font-black tracking-tighter text-white leading-none">
              BULLDOG<span className="text-[#fbbf24]">EX</span>
            </span>
            <span className="text-[7px] font-bold uppercase tracking-[0.7em] text-[#fbbf24]/40 mt-1.5">
              Official Store
            </span>
          </div>
        </NavLink>

        {/* NAVIGATION - Default Yellow Text, Hover Full Yellow Box */}
        <nav className="hidden h-full items-center md:flex self-stretch">
          {links.map((link) => (
            <NavLink 
              key={link.to} 
              to={link.to} 
              end={link.to === '/'} 
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* MEMBER LOGIN */}
        <div className="flex h-full items-center self-stretch">
  <NavLink
    to="/auth/signin"
    className={navLinkClassName}
  >
    Sign In
  </NavLink>

  <NavLink
    to="/auth/signup"
    className={navLinkClassName}
  >
    Sign Up
  </NavLink>
</div>

      </div>
    </header>
  );
};

export default NavBar;