import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-8 bg-[#020617] pb-20">
            {/* HERO SECTION: High-Contrast Heritage Look */}
            <section className="relative min-h-[32rem] overflow-hidden border-b-2 border-[#fbbf24]/30 bg-[#172554] px-6 py-12 lg:px-12">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale-[30%]"
                />
                {/* Gradient overlay to make text pop */}
                <div className="absolute inset-0 bg-gradient-to-l from-[#172554] via-[#172554]/60 to-transparent" />

                <div className="relative z-10 flex min-h-[24rem] items-center justify-end text-right">
                    <div className="max-w-xl">
                        <p className="mb-4 text-[10px] font-black uppercase tracking-[0.5em] text-[#fbbf24]">
                            Campus Student Store

                        </p>
                        <h1 className="text-4xl font-black leading-none text-white sm:text-6xl uppercase tracking-tighter">
                            Welcome to <br />
                            <span className="text-[#fbbf24]">BulldogEx</span> Shop
                        </h1>
                        <p className="mt-6 text-sm font-medium leading-relaxed text-blue-100/70 sm:text-lg">
                            A curated selection of campus essentials, student supplies, and school merchandise made for everyday student needs.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-end gap-4">
                            <Button to="/products" variant="secondary">
                                Shop Collection
                            </Button>
                            <Button to="/about" variant="primary">
                                Our Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW SECTION: Sharp Boxes & Gold Accents */}
            <section className="px-6 py-12 lg:px-12">
                <div className="mb-10 border-l-4 border-[#fbbf24] pl-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#fbbf24]/60">
                        Campus Store Stats
                    </p>
                    <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Store Overview</h2>
                </div>

                <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 border border-[#fbbf24]/20">
                    {[
                        { label: 'Products', val: '08' },
                        { label: 'Categories', val: '06' },
                        { label: 'Orders', val: '24' },
                        { label: 'Pickup Slots', val: '03' }
                    ].map((stat, i) => (
                        <div key={i} className="border border-[#fbbf24]/10 bg-[#172554]/30 p-8 transition-colors hover:bg-[#fbbf24]/5">
                            <p className="text-4xl font-black text-[#fbbf24]">{stat.val}</p>
                            <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SHOP SECTIONS: Frame-style Cards */}
            <section className="px-6 py-12 lg:px-12">
                <div className="mb-10 flex items-center justify-between border-b border-[#fbbf24]/20 pb-6">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#fbbf24]/60">
                            Shop Categoriess
                        </p>
                        <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Featured Categories</h2>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Card 1 */}
                    <article className="group relative border border-[#fbbf24]/20 bg-[#172554]/20 p-5 transition-all duration-500 hover:border-[#fbbf24]">
                        <div className="relative overflow-hidden aspect-4/3 border border-[#fbbf24]/10">
                            <img
                                src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/484091892_1056874949807975_2506812252417616339_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeElVQthpNBcCCY-DmdUGNnN9UgGhpyoh-v1SAaGnKiH6yjvKSuhr2RDm5pHUxBIxxBzsTlV1cg8d0FYciGHIcz-&_nc_ohc=lS6rg8A9fqQQ7kNvwGvD4kz&_nc_oc=AdrYLMg_sIKI-FwzNdd8AmLDD5sFA2Q1H5aKFKFdXkCsbBNG1b6jK5hpMEtHW7hYp7g&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=8yKWEo_aT58MtE0-UFNZhQ&_nc_ss=7a3a8&oh=00_Af2Nobd0YAvRHE75nqdj0Wos1TjLCEDCK6wtPfSHfuKyZw&oe=69E89AAB"
                                alt="Daily essentials"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="mt-6 text-xl font-black uppercase tracking-tight text-[#fbbf24]">Daily Essentials</h3>
                        <p className="mt-3 text-xs leading-relaxed text-blue-100/60 uppercase tracking-wider">
                            Curated lanyards, tumblers, and tools for the modern academic journey.
                        </p>
                        <Button to="/products" className="mt-6 w-full" variant="primary">Enter Store</Button>
                    </article>

                    {/* Card 2 */}
                    <article className="group relative border border-[#fbbf24]/20 bg-[#172554]/20 p-5 transition-all duration-500 hover:border-[#fbbf24]">
                        <div className="relative overflow-hidden aspect-4/3 border border-[#fbbf24]/10">
                            <img
                                src="https://www.bryantstratton.edu/wp-content/uploads/2024/03/school-supplies-pic.webp"
                                alt="Study Supplies"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="mt-6 text-xl font-black uppercase tracking-tight text-[#fbbf24]">Study Supplies</h3>
                        <p className="mt-3 text-xs leading-relaxed text-blue-100/60 uppercase tracking-wider">
                            Essential study tools and school supplies for everyday academic use.
                        </p>
                        <Button to="/products" className="mt-6 w-full" variant="primary">Shop Now</Button>
                    </article>

                    {/* Card 3 */}
                    <article className="group relative border border-[#fbbf24]/20 bg-[#172554]/20 p-5 transition-all duration-500 hover:border-[#fbbf24]">
                        <div className="relative overflow-hidden aspect-4/3 border border-[#fbbf24]/10">
                            <img
                                src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/486185645_1066452448850225_5037487296782387474_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHcImjPrIY6ysVz3PGuAShM17Ah6MPd7LDXsCHow93ssAKd4xMz9n_-DA_aQ9glDGYNGF4BzQm6U1kZGMORU3Mo&_nc_ohc=hSemJEeDv54Q7kNvwGLGP9K&_nc_oc=AdpgGiHcL0OWclkP8vY-6J6Dt0eu2_WguPziccwpaT_tjtn9VOqvGTKT3XN8vAn1JZU&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=25UsVImiZfUQ1pZW0NvdOA&_nc_ss=7a3a8&oh=00_Af0febhL-PlDx5UEMzUAGEjLOJZfyAC1bVLqvZGSx9Lv4g&oe=69E8A05F"
                                alt="Campus Apparel"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="mt-6 text-xl font-black uppercase tracking-tight text-[#fbbf24]">Campus Apparel</h3>
                        <p className="mt-3 text-xs leading-relaxed text-blue-100/60 uppercase tracking-wider">
                            Campus apparel and student merchandise for everyday wear and school spirit.
                        </p>
                        <Button to="/products" className="mt-6 w-full" variant="primary">Browse Apparel</Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;