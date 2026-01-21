import news from "../../../content/pages/news.json";
import { FaCalendarAlt } from "react-icons/fa";
import NewsHub from "../../components/NewsHub";

export default function NewsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-br from-white to-[#f3f4f6]">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-12 px-2 sm:px-8 bg-transparent sm:items-start">
        <div className="w-full mb-4">
          <div className="bg-[#18325a] text-white shadow p-4 text-center font-bold border-b-4 border-[#FFD100]">
            <span className="text-3xl font-bold text-white">News & Events</span>
          </div>
        </div>
        <div className="bg-white shadow-lg p-8 border border-[#e5e7eb] mb-8 w-full">
          <h1 className="text-3xl font-bold text-[#1D428A] mb-4 flex items-center gap-2">
            <FaCalendarAlt /> {news.title}
          </h1>
          <p className="mb-8 text-lg text-[#0A2342]">{news.description}</p>

          <NewsHub data={{ news: news.news, events: news.events }} />

        </div>
        <div className="bg-[#f3f4f6] shadow-lg p-6 border border-[#e5e7eb] w-full">
          <h2 className="text-xl font-semibold text-[#1D428A] mb-2">Stay Connected</h2>
          <ul className="list-disc pl-6 text-[#0A2342]">
            <li>Follow us on social media for updates</li>
            <li>Subscribe to our newsletter</li>
            <li>Attend upcoming events and workshops</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
