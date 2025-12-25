"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter(); // ✅ router added

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const isMobileValid = /^[0-9]{10}$/.test(mobile);
  const canSubmit = isMobileValid && password.length >= 6;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!canSubmit) return;

    // 🔐 Later: replace with real API login
    console.log("LOGIN", { mobile, password });

    // ✅ Redirect to customer page
    router.push("/customer");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/BackgroundPage.png')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* glow accents */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-500/25 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

      {/* card */}
      <div className="relative z-10 w-90 md:w-105 rounded-2xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-xl">
        {/* header */}
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 h-14 w-14 rounded-full border border-orange-400/80 bg-black/30 grid place-items-center shadow-[0_0_30px_rgba(251,146,60,0.25)]">
            <span className="text-orange-300 text-xl font-semibold">J</span>
          </div>
          <p className="text-orange-200/90 tracking-[0.35em] text-xs">
            JHASHA RESTAURANT
          </p>
          <h1 className="mt-3 text-white text-2xl font-semibold">Login</h1>
          <p className="mt-1 text-white/60 text-sm">
            Welcome back — continue in one click.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* mobile */}
          <div>
            <label className="mb-1 block text-sm text-white/70">
              Mobile Number
            </label>
            <div className="relative">
              <input
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/\D/g, ""))
                }
                inputMode="numeric"
                placeholder="e.g. 98XXXXXXXX"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-orange-400/60 focus:ring-2 focus:ring-orange-400/20"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/35">
                digits only
              </span>
            </div>
            {!isMobileValid && mobile.length > 0 && (
              <p className="mt-1 text-xs text-red-300">
                Enter a valid mobile number (10 digits).
              </p>
            )}
          </div>

          {/* password */}
          <div>
            <label className="mb-1 block text-sm text-white/70">
              Password
            </label>
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPass ? "text" : "password"}
                placeholder="Minimum 6 characters"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 pr-12 text-white placeholder:text-white/30 outline-none focus:border-orange-400/60 focus:ring-2 focus:ring-orange-400/20"
              />
              <button
                type="button"
                onClick={() => setShowPass((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs text-white/60 hover:text-white"
              >
                {showPass ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* login button */}
          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(249,115,22,0.35)] transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Login
          </button>

          <div className="flex items-center justify-between text-sm">
            <Link
              href="/register"
              className="text-orange-200/90 hover:text-orange-200 underline underline-offset-4"
            >
              Don’t have an account? Sign up
            </Link>

            <button
              type="button"
              className="text-white/60 hover:text-white underline underline-offset-4"
              onClick={() => alert("Add your forgot password flow")}
            >
              Forgot?
            </button>
          </div>

          <p className="pt-2 text-center text-xs text-white/40">
            By continuing, you agree to our Terms & Privacy.
          </p>
        </form>
      </div>
    </div>
  );
}
