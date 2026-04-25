import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen w-full bg-[#020617] text-white overflow-hidden">
      <div className="grid h-full w-full lg:grid-cols-[1fr_0.95fr]">

        {/* LEFT PANEL */}
        <div className="relative hidden lg:flex h-full items-center justify-center bg-[#172554] p-16 border-r-2 border-[#fbbf24]/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#172554] via-[#1e3a8a] to-[#020617] opacity-90" />
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-md">
            
            <div className="relative flex items-center justify-center w-64 h-64 border-2 border-[#fbbf24]/40 bg-[#020617]/40 overflow-hidden group">
              <img
                src={logo}
                alt="BulldogEx"
                className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#fbbf24]" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#fbbf24]" />
            </div>

            <h1 className="mt-10 text-3xl font-black uppercase tracking-tight">
              Bulldog<span className="text-[#fbbf24]">EX</span>
            </h1>

            <p className="mt-3 text-[10px] uppercase tracking-[0.5em] text-white/50">
              Student Essentials Shop
            </p>

            <div className="mt-6 h-1 w-16 bg-[#fbbf24]" />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <main className="h-full overflow-y-auto bg-[#020617] px-8 py-12 lg:px-16 flex flex-col">
          
          <div className="mx-auto w-full max-w-md flex flex-col">

            {/* HEADER */}
            <div className="mb-10 border-l-4 border-[#fbbf24] pl-5">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#fbbf24]">
                Campus Store System
              </p>
              <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
                Account <span className="text-[#fbbf24]">Access</span>
              </h2>
            </div>

            {/* AUTH CONTENT */}
            <div className="relative">
              <Outlet />
            </div>

            {/* FOOTER */}
            <div className="mt-12 pb-12"> 
              <div className="h-px w-full bg-[#fbbf24]/10 mb-8" />
              
              <div className="flex flex-col items-center gap-6">
                <p className="text-[8px] uppercase tracking-[0.3em] text-[#fbbf24]/40 font-medium">
                  © 2026 BulldogEx Official Store
                </p>
              </div>
            </div>

          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;