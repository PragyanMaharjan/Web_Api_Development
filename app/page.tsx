import Link from "next/link";

export default function GetStartedPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: "url('/images/Background2.jpeg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* soft glow accents */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-500/25 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

      {/* Card */}
      <div
        className="relative z-10 w-[320px] rounded-2xl border border-white/10 bg-cover bg-center p-8 shadow-2xl backdrop-blur-xl overflow-hidden"
        style={{ backgroundImage: "url('/images/Background2.jpeg')" }}
      >
        {/* card overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* content */}
        <div className="relative z-10 text-center">
          {/* Logo */}
          <div className="mb-4">
            <div className="mx-auto w-14 h-14 rounded-full border border-orange-400/80 bg-black/30 grid place-items-center shadow-[0_0_30px_rgba(251,146,60,0.25)]">
              <span className="text-orange-300 text-xl font-semibold">J</span>
            </div>
            <p className="mt-2 text-orange-300 tracking-widest text-sm">
              JHASHA RESTAURANT
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-white text-xl font-semibold mb-2">
            Get Started
          </h2>

          <p className="text-white/70 text-sm mb-6">
            Enjoy all of Jhaska&apos;s services <br /> with one click
          </p>

          {/* Button */}
          <Link href="/customer">
            <button className="w-full rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(249,115,22,0.35)] transition hover:bg-orange-400">
              Let’s go
            </button>
          </Link>

          {/* Admin link */}
          <div className="mt-4">
            <Link
              href="/admin/login"
              className="text-sm text-white/70 hover:text-orange-300 transition font-medium underline underline-offset-4"
            >
              Admin? Click here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
