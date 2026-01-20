import news from "../../../content/pages/news.json";
import { FaCalendarAlt } from "react-icons/fa";

export default function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-[#FFD100] text-[#0A2342] rounded-xl shadow p-4 text-center font-bold mb-6">
        This demo website was designed and created by Ethan Boicey for job
        application purposes. It is not affiliated with or endorsed by Kent State
        University. Only hiring staff should review this site.
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#e5e7eb] mb-8">
        <h1 className="text-3xl font-bold text-[#1D428A] mb-4 flex items-center gap-2">
          <FaCalendarAlt /> {news.title}
        </h1>
        <p className="mb-8 text-lg text-[#0A2342]">{news.description}</p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D428A] mb-2">
            Latest News
          </h2>
          <ul className="space-y-2">
            {news.news.map((item: any) => (
              <li
                key={item.headline}
                className="bg-[#f3f4f6] rounded-xl p-3 shadow text-black border border-[#FFD100] flex justify-between items-center"
              >
                <span>{item.headline}</span>{" "}
                <span className="text-sm text-[#1D428A]">({item.date})</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#1D428A] mb-2">
            Upcoming Events
          </h2>
          <ul className="space-y-2">
            {news.events.map((event: any) => (
              <li
                key={event.name}
                className="bg-[#f3f4f6] rounded-xl p-3 shadow text-black border border-[#FFD100] flex justify-between items-center"
              >
                <span>{event.name}</span>{" "}
                <span className="text-sm text-[#1D428A]">({event.date})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-[#f3f4f6] rounded-2xl shadow-lg p-6 border border-[#e5e7eb]">
        <h2 className="text-xl font-semibold text-[#1D428A] mb-2">
          Stay Connected
        </h2>
        <ul className="list-disc pl-6 text-[#0A2342]">
          <li>Follow us on social media for updates</li>
          <li>Subscribe to our newsletter</li>
          <li>Attend upcoming events and workshops</li>
        </ul>
      </div>
    </div>
  );
}
