import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,164,93,0.15),transparent_70%)]" />

      {/* Monogram */}
      <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border-2 border-[#C8A45D] text-4xl font-bold text-[#C8A45D]">
        JA
      </div>

      <p className="mb-4 text-xs uppercase tracking-[0.5em] text-[#C8A45D]">
        Together With Our Families
      </p>

      <h1 className="mb-3 text-6xl font-bold md:text-8xl">
        Jay <span className="text-[#C8A45D]">&</span> Aditi
      </h1>

      <p className="max-w-xl text-lg text-neutral-700">
        Request the pleasure of your company to celebrate
        their wedding festivities.
      </p>

      <div className="mt-10 rounded-3xl border border-[#C8A45D] bg-white/70 px-10 py-6 shadow-xl backdrop-blur">
        <p className="text-2xl font-semibold">
          23 – 24 January
        </p>

        <p className="mt-2">
          Wedlock Greens, Dhanbad
        </p>
      </div>

      <Countdown />

      <button className="mt-10 rounded-full border border-[#C8A45D] px-8 py-3 transition hover:bg-[#C8A45D] hover:text-white">
        Open Invitation
      </button>
    </section>
  );
}