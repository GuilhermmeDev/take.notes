import Link from "next/link";

export default function MenuUser() {
  return (
    <Link
      href="/about"
      className="flex px-2 py-1 rounded-lg bg-blue-500 items-center justify-center text-lg font-medium"
    >
      About
    </Link>
  );
}
