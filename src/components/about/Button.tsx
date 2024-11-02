import Link from "next/link";

export default function Button() {
  return (
    <div className="w-full flex items-center justify-center -ml-4">
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full w-fit items-center text-center justify-center mb-24 mt-12 text-xl"
      >
        Getting Started
      </Link>
    </div>
  );
}
