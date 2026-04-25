import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t-2 border-blue-900 bg-blue-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-yellow-400 sm:flex-row sm:justify-between">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold">BulldogEx Shop</h2>
          <p className="mt-1 text-sm text-yellow-200">
            Campus essentials, simple ordering.
          </p>
        </div>

        {/* NAV LINKS */}
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-[11px] uppercase tracking-[0.2em] text-yellow-300">
            Navigate
          </p>

          <Link to="/" className="hover:text-yellow-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-200">
            About 
          </Link>
          <Link to="/products" className="hover:text-yellow-200">
            Products
          </Link>
        </div>

        {/* EXTRA INFO */}
        <div className="text-sm text-yellow-300 sm:text-right">
          <p>Pickup available on campus</p>
          <p className="mt-1">
            © {new Date().getFullYear()} BulldogEx Official Store
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;