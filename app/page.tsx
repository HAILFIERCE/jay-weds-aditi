import Countdown from "./countdown";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2E2E2E]">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#C8A45D]">
          Together With Our Families
        </p>

        <h1 className="mb-4 text-5xl font-bold md:text-8xl">
          Jay <span className="text-[#C8A45D]">&</span> Aditi
        </h1>

        <p className="max-w-xl text-lg">
          Request the pleasure of your company to celebrate their wedding.
        </p>

        <div className="mt-10 rounded-3xl border border-[#C8A45D] px-8 py-6 shadow-lg">
          <p className="text-2xl font-semibold">
            23 – 24 January
          </p>

          <p className="mt-2">
            Wedlock Greens, Dhanbad
          </p>
        </div>
<Countdown />
        <button className="mt-10 rounded-full bg-[#C8A45D] px-8 py-3 text-white transition hover:scale-105">
          Open Invitation
        </button>
      </section>
    </main>
  );
}
