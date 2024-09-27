import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <Image
        alt="skull"
        src={"/images/skull.png"}
        width={0}
        height={0}
        unoptimized
        priority
        className="h-[300px] w-auto"
      />
    </main>
  );
}
