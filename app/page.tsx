import Link from "next/link";

export default function GetStartedPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: "url('/images/BackgroundPage.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card – CENTERED */}
      <div className="relative z-10 bg-black/50 backdrop-blur-md p-8 rounded-xl text-center w-[320px] shadow-xl">
        {/* Logo */}
        <div className="mb-4">
          <div className="mx-auto w-14 h-14 rounded-full border border-orange-400 flex items-center justify-center text-orange-400 text-xl font-semibold">
            J
          </div>
          <p className="mt-2 text-orange-300 tracking-widest text-sm">
            JHASHA RESTAURANT
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-white te  xt-xl font-semibold mb-2">
          Get Started
        </h2>

        <p className="text-gray-300 text-sm mb-6">
          Enjoy all of Jhaska&apos;s services <br /> with one click
        </p>

        {/* Let's go → Customer */}
        <Link href="customer">
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium transition">
            Let’s go
          </button>
        </Link>

        {/* Admin link */}
        <div className="mt-4">
          <Link
            href="/admin"
            className="text-sm text-gray-300 hover:text-blue-500 transition font-medium"
          >
            Admin? Click here
          </Link>
        </div>
      </div>
    </div>
  );
}
