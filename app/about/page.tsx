import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 60 }}>
      <h1>Hi, I’m Isabella 👋</h1>

      <nav style={{ marginTop: 20 }}>
        <Link href="/about">Go to About</Link>
      </nav>
    </main>
  );
}