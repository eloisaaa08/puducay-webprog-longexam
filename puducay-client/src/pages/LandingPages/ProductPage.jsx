import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';

function ProductPage() {
  const { name } = useParams();
  const product = products.find(product => product.name === name);

  if (!product) {
    return (
      <div className="flex min-h-screen w-full flex-col bg-[#020617]">
        <section className="border-b-2 border-[#fbbf24]/20 bg-[#172554] px-6 py-20 lg:px-12 text-center">
          <h1 className="text-3xl font-black uppercase tracking-tighter text-white">
            Record Not Found
          </h1>
          <p className="mt-4 text-blue-100/60 uppercase tracking-widest text-xs">
            The requested item is not available in the campus store catalog.
          </p>
          <div className="mt-8">
            <Button to="/products" variant="primary">
              Return to Catalog
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-8 bg-[#020617] pb-20">

      {/* HEADER */}
      <section className="border-b-2 border-[#fbbf24]/20 bg-[#172554] px-6 py-12 lg:px-12">
        <div className="mx-auto max-w-5xl">

          <div className="mb-8">
            <Button
              to="/products"
              variant="secondary"
              className="!px-4 !py-2 !text-[9px]"
            >
              ← Back to Catalog
            </Button>
          </div>

          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.5em] text-[#fbbf24]">
            Category: {product.category}
          </p>

          <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl uppercase tracking-tighter">
            {product.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">

            <div className="flex flex-col">
              <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">
                Unit Price
              </span>
              <span className="text-2xl font-black text-[#fbbf24]">
                {product.price}
              </span>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div className="flex flex-col">
              <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">
                Inventory Status
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-white">
                {product.stock}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* IMAGE */}
      <section className="px-6 py-4 lg:px-12">
        <div className="mx-auto max-w-5xl">

          <div className="group relative mb-12 flex aspect-video items-center justify-center border border-[#fbbf24]/30 bg-[#172554]/20 p-4 transition-all duration-500 hover:border-[#fbbf24]">

            <div className="relative h-full w-full overflow-hidden border border-[#fbbf24]/10 bg-[#020617]/40">

              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain"
              />

            </div>
          </div>

          {/* CONTENT + SIDEBAR */}
          <div className="grid gap-12 lg:grid-cols-[1fr_350px]">

            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#fbbf24]">
                Product Details
              </h2>

              {product.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-blue-100/70 whitespace-pre-wrap font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <aside className="h-fit border border-[#fbbf24]/20 bg-[#172554]/30 p-8">

              <h3 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-white">
                Order Information
              </h3>

              <p className="mb-8 text-xs leading-relaxed text-white/50 uppercase tracking-wider">
                This item is available for campus student pickup. Please bring your student ID when claiming your order.
              </p>

              <div className="space-y-3">
                <Button variant="primary" className="w-full !py-4">
                  Add to Cart
                </Button>

                <div className="text-center pt-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#fbbf24]/40">
                    Secure Campus Checkout
                  </span>
                </div>
              </div>

            </aside>

          </div>

        </div>
      </section>

    </div>
  );
}

export default ProductPage;