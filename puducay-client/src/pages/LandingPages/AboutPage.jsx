import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-8 bg-[#020617] pb-20">
      
      <section className="border-b-2 border-[#fbbf24]/20 bg-[#172554] px-6 py-12 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative border border-[#fbbf24]/30 bg-[#020617]/40 p-8 rounded-none">
            {/* The Logo Frame */}
            <div className="flex min-h-[22rem] items-center justify-center border border-[#fbbf24]/10 bg-[#172554]/50 rounded-none">
              <img 
                src={logo} 
                alt="BulldogEx" 
                className="h-64 w-64 border-2 border-[#fbbf24] bg-white object-contain p-2 shadow-2xl"
              />
            </div>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.5em] text-[#fbbf24]">
              Institutional Legacy
            </p>
            <h1 className="max-w-xl text-4xl font-black leading-tight text-white sm:text-5xl uppercase tracking-tighter">
              A campus shop focused on <span className="text-[#fbbf24]">Useful Excellence</span> and simple ordering.
            </h1>
            <p className="mt-6 max-w-xl text-sm font-medium leading-relaxed text-blue-100/60 uppercase tracking-wide">
               BulldogEx Shop maintains a high-fidelity campus store experience while presenting clear
               product categories, quick actions, and straightforward store information for the elite student body.
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
        </div>
      </section>

      <section className="px-6 py-8 lg:px-12">
        <div className="mb-8 border-l-4 border-[#fbbf24] pl-6">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#fbbf24]/60">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Simple Shopping Process</h2>
        </div>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 border border-[#fbbf24]/20">
          {[
            { label: 'Items', val: '08' },
            { label: 'Categories', val: '06' },
            { label: 'Pickup Slots', val: '03' },
            { label: 'Orders', val: '24' }
          ].map((stat, i) => (
            <div key={i} className="border border-[#fbbf24]/10 bg-[#172554]/30 p-10 transition-colors hover:bg-[#fbbf24]/5">
              <p className="text-4xl font-black text-[#fbbf24]">{stat.val}</p>
              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.4em] text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#fbbf24]/60">
                How It Works
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Easy Ordering Process</h2>

            <div className="mt-10 space-y-6">
              <article className="border border-[#fbbf24]/20 bg-[#172554]/20 p-8 transition-all hover:border-[#fbbf24]">
                <h3 className="text-lg font-black uppercase tracking-widest text-[#fbbf24]">Curated Catalog</h3>
                <p className="mt-3 text-xs leading-6 text-blue-100/60 uppercase tracking-wider">
                  Students can easily browse items organized by category for quick and simple shopping.
                </p>
              </article>

              <article className="border border-[#fbbf24]/20 bg-[#172554]/20 p-8 transition-all hover:border-[#fbbf24]">
                <h3 className="text-lg font-black uppercase tracking-widest text-[#fbbf24]">Simple Checkout</h3>
                <p className="mt-3 text-xs leading-6 text-blue-100/60 uppercase tracking-wider">
                  A fast and straightforward checkout process designed for student convenience.
                </p>
              </article>

              <article className="border border-[#fbbf24]/20 bg-[#172554]/20 p-8 transition-all hover:border-[#fbbf24]">
                <h3 className="text-lg font-black uppercase tracking-widest text-[#fbbf24]">Pickup Ready</h3>
                <p className="mt-3 text-xs leading-6 text-blue-100/60 uppercase tracking-wider">
                  Orders are prepared for quick campus pickup at designated release points.
                </p>
              </article>
            </div>
          </div>

          <div className="border border-[#fbbf24]/20 bg-[#172554]/10 p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#fbbf24]/60 mb-6">
              Visual Index
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/484106749_1056874999807970_6201709948459540640_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHlJ7pV1TdiYmzhYbk-XkQGJEk4CSuIVQ0kSTgJK4hVDQ3vE9wiqeLCYNQIbPV5bQ_B7lSYmYkbItcGVbB65t6f&_nc_ohc=yKcz_Bp6EOcQ7kNvwEBIkLr&_nc_oc=Adp3OTUESIL2WbPqHTy9PwwzgA8GyPAoP6ATn4qgHlE3wUgr36wczqjdiXsm_1z32s8&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=zq6exc1Xz_sVT6fzD7GU0w&oh=00_Af0bZiKBvIZDJ2mHeNw0u7GpVXV0tTTGc2buZA9pMITdMg&oe=69F0CEFB",
                "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/483927157_1056875116474625_7111344763451482499_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGV1uts8MoVJMjV4GxKgLr_l33OYF_IsAGXfc5gX8iwAQhdgGTCJ1tNoZZ8Zdl7mGqrcyYNLs8yFLhTiRIPqLGy&_nc_ohc=QKYXDQ_AaEwQ7kNvwEzGiGx&_nc_oc=AdqNLqkbgo74_J_Ol8u7msZescThjOLtUWiPocALp_T4k77v-es0KVZHd5LHNhMNEKw&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=ERGZKiC31q6N35aPGD22Kw&oh=00_Af0CnSm-AfmLslpmIF-MVX6wSc8xA2a4b4NjlD0ERyRLyQ&oe=69F0C2F5",
                "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/484112979_1056874953141308_8105617823548739922_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHuc8Fe1cmfgqOICLVHm2JQqkmSaPfiebWqSZJo9-J5tcRGcPuOIX3g_AIPJKcLXW9dxot5ZSTrfH8s3v6yWizb&_nc_ohc=7GI4eU2Izp8Q7kNvwEtJO9v&_nc_oc=Adp5k_55JiFS8cbs2h_s8bXMUx0GQN8GElHu_CpFMYQbZbN00w1gGj9p7NIgKQd8bTs&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=Zr8YIls5aGGBc-922-GjRA&oh=00_Af2LmjR1ojk57Nk6Pa5trZyhVRX1GmKHed4LURZZeayAZg&oe=69F0E56A",
                "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/484523776_1056874946474642_5540767453212807571_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHUzPpeWZ96bmdAqaRyPUalw7W_LtAe_bvDtb8u0B79u3P9YIlgZTkZbf3aMJEUzIT9aqzRmZ3YcDeAIY619-CE&_nc_ohc=jVx-LgoNJlQQ7kNvwEemjdN&_nc_oc=Adp2nqVXCuR0By0-b3R9py8xM-JMnN33StnRkFa_9RNSHxgH2rD0rVsdvNpjhUP839E&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=LQvL2zHRbMs7rHPveNPx-w&oh=00_Af3Q1Z8uthYUtqfns9RF102u-woOuMM8iDkqOJkk1Iww_g&oe=69F0C2D0"
              ].map((img, i) => (
                <div key={i} className="aspect-square border border-[#fbbf24]/10 transition-all duration-500 overflow-hidden">
                  <img src={img} alt="Product" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
              ))}
            </div>
            <Button to="/products" variant="secondary" className="mt-8 w-full">Shop Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;