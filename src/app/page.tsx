import Navigation from "../components/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          {/* Replace Next.js logo with Kent State CAE hero image */}
          <img
            src="/content/images/hero.jpg"
            alt="Kent State CAE Hero"
            className="mb-8 rounded shadow-lg w-full h-40 object-cover"
          />
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Welcome to Kent State College of Aeronautics & Engineering
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Explore our programs, research, faculty, labs, and events. Navigate
              using the menu above.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
