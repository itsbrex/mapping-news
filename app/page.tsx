import Link from "@/components/shared/link";

export default function Home() {
  return (
    <div className="flex h-full min-h-[calc(100vh-6rem)] w-full flex-col items-center justify-center gap-8 pt-16">
      <span className="z-10">🚧 under construction... 🚧</span>
      <h3 className="z-10">linknyc</h3>
      <div className="z-10 flex w-full max-w-xl flex-row justify-center gap-8 px-5 text-center xl:px-0">
        <Link
          sameWindow
          href="/linknyc/mapbox"
          className="flex w-36 items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
        >
          <p className="text-gray-600">mapbox</p>
        </Link>
        <Link
          sameWindow
          href="/linknyc/openlayers"
          className="flex w-36 items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
        >
          <p className="text-gray-600">openlayers</p>
        </Link>
      </div>
    </div>
  );
}
