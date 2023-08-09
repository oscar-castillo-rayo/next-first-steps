import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <span className="text-5xl">Hola Mundo</span>

      <Link href={"/about"}>Abouth Page</Link>
    </main>
  );
}
