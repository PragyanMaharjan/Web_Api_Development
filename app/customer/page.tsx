"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

// Your structure: app/components/DishModal.tsx
// From app/customer/page.tsx -> ../components/DishModal ✅
import DishModal from "../components/DishModal";

type Dish = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  rating: number;
  image: string;
};

export default function CustomerPage() {
  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dishes data
  const dishes: Dish[] = useMemo(
    () => [
      {
        id: "special",
        title: "Today’s Special",
        subtitle: "BBQ Chicken Wings + Free Coke",
        description:
          "Tender BBQ wings glazed in rich smoky sauce, served with an ice-cold Coke for the perfect combo.",
        price: 200,
        rating: 4.6,
        image: "/images/FrontPage.jpg",
      },
      {
        id: "family-1",
        title: "Family Combo",
        subtitle: "Perfect for the whole family",
        description:
          "A delightful family meal packed with tasty items and sides—great for sharing.",
        price: 450,
        rating: 4.4,
        image: "/images/FrontPage.jpg",
      },
      {
        id: "family-2",
        title: "Family Combo",
        subtitle: "Perfect for the whole family",
        description:
          "A big combo meal designed for family gatherings—fresh, filling, and delicious.",
        price: 500,
        rating: 4.5,
        image: "/images/FrontPage.jpg",
      },
      {
        id: "family-3",
        title: "Family Combo",
        subtitle: "Perfect for the whole family",
        description:
          "Another hearty combo option with a balanced mix of main dishes and sides.",
        price: 520,
        rating: 4.3,
        image: "/images/FrontPage.jpg",
      },
    ],
    []
  );

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [quantity, setQuantity] = useState(1);

  function openDish(d: Dish) {
    setSelectedDish(d);
    setQuantity(1);
    setModalOpen(true);
  }

  function closeDish() {
    setModalOpen(false);
    setSelectedDish(null);
  }

  function addToCart() {
    alert(`Added ${quantity} x ${selectedDish?.title} to cart`);
    closeDish();
  }

  return (
    <div className="min-h-screen bg-neutral-900 p-0">
      <div className="w-full">
        <div className="w-full bg-white shadow-2xl overflow-hidden relative">
          {/* Backdrop for sidebar */}
          {sidebarOpen && (
            <button
              aria-label="Close sidebar"
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setSidebarOpen(false)}
            />
          )}

  

          {/* HEADER */}
{/* HEADER */}
<div className="relative h-50 sm:h-60 md:h-70 w-full">
  {/* Background image */}
  <Image
    src="/images/BackgroundPage.png"
    alt="Header background"
    fill
    className="object-cover"
    priority
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Content */}
  <div className="relative z-10 h-full px-4 sm:px-8 py-4 sm:py-6">
    <div className="grid grid-cols-3 items-start">
      {/* LEFT — Welcome */}
      <div className="text-white max-w-[520px]">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold">
          Welcome to jhasha
        </h1>
        <p className="mt-1 text-sm sm:text-base md:text-lg font-semibold">
          Scan, order, and enjoy fresh flavors.
        </p>
      </div>

      {/* CENTER — Logo */}
      <div className="flex justify-center text-center">
        <div>
          <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-orange-400 text-xl sm:text-2xl font-semibold text-orange-300">
            J
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] tracking-[0.35em] text-orange-200">
            JHASHA
          </p>
          <p className="text-[9px] sm:text-[10px] tracking-[0.45em] text-orange-200/90">
            RESTAURANT
          </p>
        </div>
      </div>


    </div>
  </div>
</div>

          {/* SEARCH */}
          <div className="flex items-center gap-3 px-4 sm:px-8 py-4 bg-white">
            <button
              onClick={() => setSidebarOpen(true)}
              className="h-11 w-11 rounded-md bg-neutral-800 text-white shadow hover:bg-neutral-700 transition grid place-items-center"
              aria-label="Open menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M21 21l-4.3-4.3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <input
                type="text"
                placeholder="Search"
                className="h-11 w-full rounded-md border border-gray-200 bg-white pl-10 pr-3 text-sm outline-none focus:border-orange-400 shadow-sm"
              />
            </div>
          </div>


<div className="px-4 sm:px-8 pb-4">
  <div className="flex items-center justify-between gap-3">
    {/* Left side: categories */}
    <div className="flex gap-3 overflow-x-auto">
      <Link
        href="/customer/starter"
        className="shrink-0 rounded-md border border-orange-500 px-6 py-2 text-xs font-bold text-orange-500 hover:bg-orange-500 hover:text-white transition"
      >
        STARTER
      </Link>

      <Link
        href="/customer/maincourse"
        className="shrink-0 rounded-md border border-orange-500 px-6 py-2 text-xs font-bold text-orange-500 hover:bg-orange-500 hover:text-white transition"
      >
        MAIN COURSE
      </Link>

      <Link
        href="/customer/drinks"
        className="shrink-0 rounded-md border border-orange-500 px-6 py-2 text-xs font-bold text-orange-500 hover:bg-orange-500 hover:text-white transition"
      >
        DRINKS
      </Link>

      <Link
        href="/customer/popular"
        className="shrink-0 rounded-md border border-orange-500 px-6 py-2 text-xs font-bold text-orange-500 hover:bg-orange-500 hover:text-white transition"
      >
        POPULAR
      </Link>

      <Link
        href="/customer/combo"
        className="shrink-0 rounded-md border border-orange-500 px-6 py-2 text-xs font-bold text-orange-500 hover:bg-orange-500 hover:text-white transition"
      >
        COMBO
      </Link>
    </div>
  </div>
</div>


          {/* DISH CARDS (clickable → modal) */}
          <div className="px-4 sm:px-8 pb-10 space-y-6">
            {dishes.map((dish) => (
              <button
                key={dish.id}
                onClick={() => openDish(dish)}
                className="w-full text-left"
              >
                <div className="flex flex-col md:flex-row bg-orange-500 rounded-lg overflow-hidden hover:brightness-[1.03] transition">
                  <div className="flex-1 p-6 text-white">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                      {dish.title}
                    </h2>
                    <p className="mt-2 font-semibold">{dish.subtitle}</p>
                  </div>

                  <div className="relative h-[160px] md:h-auto md:w-[320px]">
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <DishModal
        open={modalOpen}
        dish={selectedDish}
        quantity={quantity}
        setQuantity={setQuantity}
        onClose={closeDish}
        onAddToCart={addToCart}
      />
    </div>
  );
}
