import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col bg-[#020617] text-white">

      {/* HERO */}
      <section className="border-b border-[#fbbf24]/20 bg-[#172554] px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-4xl">

          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#fbbf24]/60">
            System Error
          </p>

          <h1 className="mt-4 text-7xl font-black uppercase tracking-tight text-white sm:text-8xl">
            404
          </h1>

          <p className="mt-6 max-w-xl text-sm font-medium uppercase tracking-wide text-blue-100/60">
            The requested page is not available in the system directory.
            Return to the main interface or proceed to product catalog.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/" variant="secondary">
              Return Home
            </Button>
            <Button to="/products" variant="primary">
              Open Catalog
            </Button>
          </div>

        </div>
      </section>

      {/* QUICK NAV */}
      <section className="px-6 py-12 lg:px-12">
        <div className="mx-auto max-w-4xl">

          <div className="mb-8 border-l-4 border-[#fbbf24] pl-6">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#fbbf24]/60">
              Navigation
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
              Redirect Options
            </h2>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 border border-[#fbbf24]/20">

            {/* HOME */}
            <div className="border border-[#fbbf24]/10 bg-[#172554]/30 p-8 transition-all hover:bg-[#fbbf24]/5">
              <h3 className="text-lg font-black uppercase tracking-widest text-[#fbbf24]">
                Home
              </h3>
              <p className="mt-3 text-xs uppercase tracking-wider text-blue-100/60">
                Return to the primary system interface
              </p>
              <Button to="/" className="mt-6 w-full" variant="secondary">
                Go Home
              </Button>
            </div>

            {/* PRODUCTS */}
            <div className="border border-[#fbbf24]/10 bg-[#172554]/30 p-8 transition-all hover:bg-[#fbbf24]/5">
              <h3 className="text-lg font-black uppercase tracking-widest text-[#fbbf24]">
                Products
              </h3>
              <p className="mt-3 text-xs uppercase tracking-wider text-blue-100/60">
                Browse available campus merchandise
              </p>
              <Button to="/products" className="mt-6 w-full" variant="primary">
                View Catalog
              </Button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default NotFoundPage;