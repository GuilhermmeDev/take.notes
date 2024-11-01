import Logo from "@/components/template/Logo";
import Text from "@/components/about/Text";
import Branding from "@/components/about/Branding";
import Link from "next/link";
export default function About() {
  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col">
        <div className="flex flex-col bg-zinc-900 p-12 gap-4 rounded-full items-center">
          <Logo />
          <p className=" font-medium">A new way to organize your day.</p>
          <a
            href="#text"
            type="button"
            className="flex items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-neutral-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Take A Look
          </a>
        </div>
      </div>
      <Text />
      <Branding />
    </>
  );
}
