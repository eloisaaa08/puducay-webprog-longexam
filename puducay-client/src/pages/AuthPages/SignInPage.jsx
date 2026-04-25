import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-none border border-[#fbbf24]/20 bg-[#172554]/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#fbbf24] focus:bg-[#172554]/50';

const actionButtonClassName =
  'w-full rounded-none py-4 text-[10px] font-black uppercase tracking-[0.3em]';

const SignInPage = () => {
  return (
    <div className="flex flex-col bg-[#020617] p-8 lg:p-12 border border-[#fbbf24]/10">
      
      {/* HEADER */}
      <div className="mb-10">
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.5em] text-[#fbbf24]">
          Campus Store System
        </p>

        <h1 className="text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl">
          Account <span className="text-[#fbbf24]">Login</span>
        </h1>

        <div className="mt-4 h-px w-12 bg-[#fbbf24]/40" />

        <p className="mt-6 text-xs font-medium uppercase tracking-widest leading-6 text-blue-100/50">
          Access your campus store account to view orders, <br />
          saved items, and pickup schedules.
        </p>
      </div>

      <form className="space-y-6">

        {/* EMAIL */}
        <div>
          <label className="text-[10px] font-black uppercase tracking-widest text-[#fbbf24]">
            Official Email Address
          </label>
          <input
            type="email"
            placeholder="STUDENT@CAMPUS.EDU"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        {/* PASSWORD */}
        <div>
          <div className="flex justify-between items-end">
            <label className="text-[10px] font-black uppercase tracking-widest text-[#fbbf24]">
              Password
            </label>
            <button
              type="button"
              className="text-[9px] font-bold uppercase tracking-widest text-white/40 hover:text-[#fbbf24] transition"
            >
              Reset Password?
            </button>
          </div>

          <input
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            className={inputClasses}
          />

          <p className="mt-3 text-[9px] font-medium uppercase tracking-widest text-white/30">
            Min. 8 alphanumeric characters required.
          </p>
        </div>

        {/* REMEMBER */}
        <div className="flex items-center gap-3 py-2">
          <input
            type="checkbox"
            className="h-4 w-4 rounded-none border-[#fbbf24]/30 bg-[#020617] accent-[#fbbf24]"
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
            Keep me signed in
          </span>
        </div>

        {/* BUTTON */}
        <Button
          type="submit"
          variant="primary"
          className={actionButtonClassName}
        >
          Sign In
        </Button>

        {/* DIVIDER */}
        <div className="relative flex items-center py-4">
          <div className="grow border-t border-[#fbbf24]/10"></div>
          <span className="mx-4 text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
            OR
          </span>
          <div className="grow border-t border-[#fbbf24]/10"></div>
        </div>

        {/* SOCIAL */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName + " !bg-transparent !border-white/10 hover:!border-[#fbbf24]/50"}
          >
            Google 
          </Button>

          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName + " !bg-transparent !border-white/10 hover:!border-[#fbbf24]/50"}
          >
            Apple
          </Button>
        </div>

      </form>

      {/* FOOTER */}
      <div className="mt-12 border-t border-[#fbbf24]/10 pt-8 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          New here?{' '}
          <Link
            to="/auth/signup"
            className="text-[#fbbf24] hover:underline underline-offset-4"
          >
            Create account
          </Link>
        </p>
      </div>

    </div>
  );
};

export default SignInPage;