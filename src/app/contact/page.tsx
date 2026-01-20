export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="bg-[#FFD100] text-[#0A2342] rounded-xl shadow p-4 text-center font-bold mb-6">
        This demo website was designed and created by Ethan Boicey for job application purposes. It is not affiliated with or endorsed by Kent State University. Only hiring staff should review this site.
      </div>
      <h1 className="text-3xl font-bold text-[#1D428A] mb-4">Contact CAE</h1>
      <p className="mb-6 text-lg text-[#0A2342]">Reach out to Kent State College of Aeronautics & Engineering for questions, partnerships, or more information.</p>
      <div className="mb-6 text-[#0A2342]">
        Kent State University CAE<br />
        1400 Lefton Esplanade, Kent, OH 44242<br />
        Email: cae@kent.edu<br />
        Phone: (330) 672-2892
      </div>
      <a href="mailto:cae@kent.edu" className="bg-[#FFD100] text-black font-bold py-2 px-4 rounded shadow">Email Us</a>
    </div>
  );
}
