export default function RocketClubPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="bg-[#FFD100] text-[#0A2342] rounded-xl shadow p-4 text-center font-bold mb-6">
        This demo website was designed and created by Ethan Boicey for job application purposes. It is not affiliated with or endorsed by Kent State University. Only hiring staff should review this site.
      </div>
      <h1 className="text-3xl font-bold text-[#1D428A] mb-4">Rocket Club</h1>
      <p className="mb-6 text-lg text-[#0A2342]">Join the Kent State CAE Rocket Club! Participate in launches, workshops, and competitions. All students welcome.</p>
      <ul className="list-disc pl-6 mb-6 text-[#0A2342]">
        <li>Next Launch: Feb 10, 2026 at 12:00 PM</li>
        <li>Weekly Meetings: Thursdays at 5:00 PM</li>
        <li>Location: CAE Field</li>
      </ul>
      <a href="mailto:rocketclub@kent.edu" className="bg-[#FFD100] text-black font-bold py-2 px-4 rounded shadow">Contact Rocket Club</a>
    </div>
  );
}
