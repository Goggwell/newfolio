export const runtime = "edge";

export default function Home() {
  return (
    <main className="w-screen h-screen block overflow-hidden">
      <section
        className="relative w-screen h-screen block bg-background bg-[length:20px_20px] overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(hsla(var(--dot), 0.1) 1px, transparent 0)",
        }}
      ></section>
    </main>
  );
}
