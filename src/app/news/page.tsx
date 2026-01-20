import news from "../../../content/pages/news.json";

export default function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[#1D428A] mb-4">{news.title}</h1>
      <p className="mb-8 text-lg text-zinc-700 dark:text-zinc-300">{news.description}</p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-[#1D428A] mb-2">Latest News</h2>
        <ul className="space-y-2">
          {news.news.map((item: any) => (
            <li key={item.headline} className="bg-white dark:bg-zinc-800 rounded p-3 shadow text-black dark:text-white">
              <span className="font-bold">{item.headline}</span> <span className="text-sm text-zinc-500">({item.date})</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-[#1D428A] mb-2">Upcoming Events</h2>
        <ul className="space-y-2">
          {news.events.map((event: any) => (
            <li key={event.name} className="bg-[#FFD100] rounded p-3 shadow text-black">
              <span className="font-bold">{event.name}</span> <span className="text-sm text-zinc-700">({event.date})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
