"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const router = useRouter(); // ✅ router added

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);

  const isMobileValid = /^[0-9]{10}$/.test(mobile);
  const passwordsMatch = password.length >= 6 && password === confirm;
  const canSubmit =
    fullName.trim().length >= 2 && isMobileValid && passwordsMatch;

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    // 🔐 Later: replace with real API signup
    console.log("SIGNUP", { fullName, mobile, password });

    // ✅ Redirect to login page after signup
    router.push("/login");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/BackgroundPage.png')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-500/25 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

      {/* card */}
      <div className="relative z-10 w-90 md:w-115 rounded-2xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 h-14 w-14 rounded-full border border-orange-400/80 bg-black/30 grid place-items-center shadow-[0_0_30px_rgba(251,146,60,0.25)]">
            <span className="text-orange-300 text-xl font-semibold">J</span>
          </div>
          <p className="text-orange-200/90 tracking-[0.35em] text-xs">
            JHASHA RESTAURANT
          </p>
          <h1 className="mt-3 text-white text-2xl font-semibold">
            Create Account
          </h1>
          <p className="mt-1 text-white/60 text-sm">
            Join us for quick ordering & services.
          </p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4">
          {/* full name */}
          <div>
            <label className="mb-1 block text-sm text-white/70">
              Full Name
            </label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-orange-400/60 focus:ring-2 focus:ring-orange-400/20"
            />
          </div>

          {/* mobile */}
          <div>
            <label className="mb-1 block text-sm text-white/70">
              Mobile Number
            </label>
            <input
              value={mobile}
              onChange={(e) =>
                setMobile(e.target.value.replace(/\D/g, ""))
              }
              inputMode="numeric"
              placeholder="e.g. 98XXXXXXXX"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-orange-400/60 focus:ring-2 focus:ring-orange-400/20"
            />
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

          {/* confirm password */}
          <div>
            <label className="mb-1 block text-sm text-white/70">
              Confirm Password
            </label>
            <input
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              type={showPass ? "text" : "password"}
              placeholder="Re-type password"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-orange-400/60 focus:ring-2 focus:ring-orange-400/20"
            />
            {confirm.length > 0 && !passwordsMatch && (
              <p className="mt-1 text-xs text-red-300">
                Passwords must match and be at least 6 characters.
              </p>
            )}
          </div>

          {/* signup button */}
          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(249,115,22,0.35)] transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-white/70">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-orange-200/90 hover:text-orange-200 underline underline-offset-4"
            >
              Login
            </Link>
          </p>

          <p className="pt-1 text-center text-xs text-white/40">
            We’ll use your mobile for login & verification.
          </p>
        </form>
      </div>
    </div>
  );
}
