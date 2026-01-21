export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-br from-white to-[#f3f4f6]">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-12 px-2 sm:px-8 bg-transparent sm:items-start">
        <div className="w-full mb-4">
          <div className="bg-[#18325a] text-white shadow p-4 text-center font-bold border-b-4 border-[#FFD100]">
            <span className="text-3xl font-bold text-white">Contact Us</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-[#1D428A] mb-4">Contact CAE</h1>
        <p className="mb-6 text-lg text-[#0A2342]">Reach out to Kent State College of Aeronautics & Engineering for questions, partnerships, or more information.</p>
        <div className="mb-6 text-[#0A2342]">
          Kent State University CAE<br />
          1400 Lefton Esplanade, Kent, OH 44242<br />
          Email: cae@kent.edu<br />
          Phone: (330) 672-2892
        </div>
        <a href="mailto:cae@kent.edu" className="bg-[#18325a] text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-[#FFD100] hover:text-[#18325a] border border-[#18325a]">Email Us</a>
      </main>
    </div>
  );
}
