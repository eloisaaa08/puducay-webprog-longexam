import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-none border border-[#fbbf24]/20 bg-[#172554]/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#fbbf24] focus:bg-[#172554]/50';

const actionButtonClassName =
  'w-full rounded-none py-4 text-[10px] font-black uppercase tracking-[0.3em]';

const SignUpPage = () => {
  return (
    <div className="flex flex-col bg-[#020617] p-8 lg:p-12 border border-[#fbbf24]/10">
      
      {/* HEADER */}
      <div className="mb-10">
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.5em] text-[#fbbf24]">
          Campus Store System
        </p>

        <h1 className="text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl">
          Create <span className="text-[#fbbf24]">Account</span>
        </h1>

        <div className="mt-4 h-px w-12 bg-[#fbbf24]/40" />

        <p className="mt-6 text-xs font-medium uppercase tracking-widest leading-6 text-blue-100/50">
          Register your account for order tracking, saved items, and updates.
        </p>
      </div>

      <form className="space-y-6">

        {/* NAME GRID */}
        <div className="grid gap-6 sm:grid-cols-2">

          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-[#fbbf24]">
              First Name
            </label>
            <input
              type="text"
              placeholder="GIVEN NAME"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>

          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-[#fbbf24]">
              Last Name
            </label>
            <input
              type="text"
              placeholder="SURNAME"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>

        </div>

        {/* EMAIL */}
        <div>
          <label className="text-[10px] font-black uppercase tracking-widest text-[#fbbf24]">
            Campus Email
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
          <label className="text-[10px] font-black uppercase tracking-widest text-[#fbbf24]">
            Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            className={inputClasses}
          />

          <p className="mt-3 text-[9px] font-medium uppercase tracking-widest text-white/30">
            Use a secure combination of letters and numbers.
          </p>
        </div>

        {/* CREATE BUTTON */}
        <Button
          type="submit"
          variant="primary"
          className={actionButtonClassName}
        >
          Create Account
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
          Already have an account?{' '}
          <Link
            to="/auth/signin"
            className="text-[#fbbf24] hover:underline underline-offset-4"
          >
            Sign In
          </Link>
        </p>
      </div>

    </div>
  );
};

export default SignUpPage;