import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-6 text-center text-2xl">
        <a href="/page1">Pagina 1</a>
        <a href="/page2">Pagina 2</a>
        <a href="/page3">Pagina 3</a>
        <a href="/page4">Pagina 4</a>
      </div>
    </main>
  );
}