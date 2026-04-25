import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col gap-8 bg-[#020617] pb-20">
      
        <section className="border-b-2 border-[#fbbf24]/20 bg-[#172554] px-6 py-12 lg:px-12">
        <div className="max-w-4xl">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.5em] text-[#fbbf24]">
            Campus Store
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl uppercase tracking-tighter">
            Shop campus <span className="text-[#fbbf24]">Essentials</span>
            from our curated collection.
          </h1>
          <p className="mt-6 max-w-xl text-sm font-medium leading-relaxed text-blue-100/60 uppercase tracking-wide">
            Browse campus apparel, school supplies, and student essentials designed to support your academic needs through a simple and organized shopping experience.
          </p>
          <div className="mt-10">
            <Button to="/" variant="secondary">
              Return Home
            </Button>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID SECTION: Sharp & Professional */}
      <section className="px-6 py-12 lg:px-12">
        <div className="mb-10 flex items-end justify-between border-b border-[#fbbf24]/20 pb-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#fbbf24]/60">
              Available Items
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
              Featured Products
            </h2>
          </div>
          
          <div className="hidden sm:block">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#fbbf24]">
              Total Items: {products.length}
            </span>
          </div>
        </div>

        {/* Ensure your ProductList component matches the campus store styling (gold accents, clean borders, consistent UI). 
        */}
        <div className="relative border border-[#fbbf24]/10 bg-[#172554]/10 p-2 lg:p-8">
            <ProductList products={products} />
        </div>
      </section>

    </div>
  );
}

export default ProductListPage;